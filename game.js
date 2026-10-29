
const startButton = document.querySelector("button");

startButton.addEventListener("click", function () {
  document.querySelector("h1").textContent = "LEVEL 01";
  document.querySelector("p").textContent =
    "Release the paths without collisions.";

  startButton.style.display = "none";

  // ==========================================
  // 1. LEVEL DATA
  // ==========================================

  const paths = [
    {
      id: "A",
      cells: [[1, 2], [2, 2]],
      arrow: [2, 2],
      symbol: "→",
      color: "#D5FF5A"
    },
    {
      id: "B",
      cells: [[3, 1], [3, 2]],
      arrow: [3, 1],
      symbol: "↑",
      color: "#60FFE5"
    },
    {
      id: "C",
      cells: [[3, 0], [4, 0]],
      arrow: [3, 0],
      symbol: "←",
      color: "#FC70AF"
    }
  ];

  // ==========================================
  // 2. CREATE GAME BOARD
  // ==========================================

  const board = document.createElement("div");

  board.style.cssText = `
    display: grid;
    grid-template-columns: repeat(5, 52px);
    gap: 8px;
    justify-content: center;
    margin: 50px auto;
  `;

  for (let y = 0; y < 5; y++) {
    for (let x = 0; x < 5; x++) {
      const cell = document.createElement("div");

      const path = paths.find(p =>
        p.cells.some(([px, py]) => px === x && py === y)
      );

      cell.style.cssText = `
        width: 52px;
        height: 52px;
        border-radius: 12px;
        background: #19232B;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 30px;
        font-weight: bold;
      `;

      if (path) {
        cell.style.background = path.color;
        cell.style.color = "#000000";

        if (
          path.arrow[0] === x &&
          path.arrow[1] === y
        ) {
          cell.textContent = path.symbol;
        }
      }

      board.appendChild(cell);
    }
  }

  document.body.appendChild(board);

  // ==========================================
  // 3. GAME STATE AND DIRECTIONS
  // ==========================================

  const remaining = new Set(paths.map(p => p.id));

  const directions = {
    "→": [1, 0],
    "←": [-1, 0],
    "↑": [0, -1],
    "↓": [0, 1]
  };

  // ==========================================
  // 4. MUSICAL FEEDBACK
  // ==========================================

  let audioContext = null;
  let soundEnabled = true;

  const pathNotes = {
    A: 523.25,       // C5
    B: 392.00,       // G4
    C: 329.63,       // E4
    BLOCKED: 466.16  // Bb4: temporary blocked tone
  };

  function playPathNote(noteId) {
    if (!soundEnabled) return;

    const AudioContextClass =
      window.AudioContext || window.webkitAudioContext;

    if (!AudioContextClass) return;

    if (!audioContext) {
      audioContext = new AudioContextClass();
    }

    if (audioContext.state === "suspended") {
      audioContext.resume().catch(error => {
        console.error("Audio error:", error);
      });
    }

    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const volume = audioContext.createGain();

    oscillator.type = "sine";

    oscillator.frequency.setValueAtTime(
      pathNotes[noteId],
      now
    );

    volume.gain.setValueAtTime(0.001, now);

    volume.gain.exponentialRampToValueAtTime(
      0.12,
      now + 0.025
    );

    volume.gain.exponentialRampToValueAtTime(
      0.001,
      now + 0.4
    );

    oscillator.connect(volume);
    volume.connect(audioContext.destination);

    oscillator.start(now);
    oscillator.stop(now + 0.42);
  }

  // ==========================================
  // 5. BLOCKED PATH SOUND
  // ==========================================

  // Reuse the working sound engine for blocked feedback
  function playBlockedSound() {
    playPathNote("BLOCKED");
  }

  // ==========================================
  // 6. COLLISION DETECTION
  // ==========================================

  function findBlocker(path) {
    const [dx, dy] = directions[path.symbol];

    for (const [x, y] of path.cells) {
      let nx = x + dx;
      let ny = y + dy;

      while (
        nx >= 0 &&
        nx < 5 &&
        ny >= 0 &&
        ny < 5
      ) {
        const blocker = paths.find(other =>
          remaining.has(other.id) &&
          other.id !== path.id &&
          other.cells.some(([px, py]) =>
            px === nx && py === ny
          )
        );

        if (blocker) {
          return blocker.id;
        }

        nx += dx;
        ny += dy;
      }
    }

    return null;
  }

  // ==========================================
  // 7. PATH INTERACTION
  // ==========================================

  paths.forEach(path => {
    path.cells.forEach(([x, y]) => {
      const cell = board.children[y * 5 + x];

      cell.style.cursor = "pointer";

      cell.addEventListener("click", () => {
        if (!remaining.has(path.id)) {
          return;
        }

        const blocker = findBlocker(path);

        // Path is blocked
        if (blocker) {
          playBlockedSound();

          document.querySelector("p").textContent =
            `Path ${path.id} is blocked by ${blocker}!`;

          return;
        }

        // Path can be released
        remaining.delete(path.id);

        playPathNote(path.id);

        // ==================================
        // 8. PATH RELEASE ANIMATION
        // ==================================

        const [dx, dy] = directions[path.symbol];

        path.cells.forEach(([x, y]) => {
          const tile = board.children[y * 5 + x];
          const rect = tile.getBoundingClientRect();

          const flyingTile = tile.cloneNode(true);

          flyingTile.style.position = "fixed";
          flyingTile.style.left = `${rect.left}px`;
          flyingTile.style.top = `${rect.top}px`;
          flyingTile.style.margin = "0";
          flyingTile.style.zIndex = "100";
          flyingTile.style.pointerEvents = "none";

          flyingTile.style.boxShadow =
            `0 0 18px ${path.color}, 0 0 35px ${path.color}`;

          document.body.appendChild(flyingTile);

          const animation = flyingTile.animate(
            [
              {
                transform: "translate(0px, 0px)",
                opacity: 1
              },
              {
                transform:
                  `translate(${dx * 360}px, ${dy * 360}px)`,
                opacity: 0
              }
            ],
            {
              duration: 600,
              easing: "cubic-bezier(0.18, 0.8, 0.2, 1)",
              fill: "forwards"
            }
          );

          animation.onfinish = () => {
            flyingTile.remove();
          };
        });

        // Remove released path from the board
        path.cells.forEach(([px, py]) => {
          const tile = board.children[py * 5 + px];

          tile.style.background = "#19232B";
          tile.style.cursor = "default";
          tile.textContent = "";
        });

        document.querySelector("p").textContent =
          `Path ${path.id} released!`;

        // Check for level completion
        if (remaining.size === 0) {
          document.querySelector("h1").textContent =
            "LEVEL COMPLETE!";

          document.querySelector("p").textContent =
            "You released all the light paths!";
        }
      });
    });
  });

  // ==========================================
  // 9. RESTART FUNCTIONALITY
  // ==========================================

  const restartButton = document.createElement("button");

  restartButton.type = "button";
  restartButton.textContent = "↻ RESTART";

  restartButton.setAttribute(
    "aria-label",
    "Restart level 1"
  );

  restartButton.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10;
    background: #000000;
    color: #D5FF5A;
    border: 2px solid #D5FF5A;
    border-radius: 12px;
    padding: 12px 16px;
    min-height: 44px;
    cursor: pointer;
    font-weight: bold;
  `;

  restartButton.addEventListener("click", () => {
    // Restore the logical game state
    remaining.clear();

    paths.forEach(path => {
      remaining.add(path.id);

      path.cells.forEach(([x, y]) => {
        const tile = board.children[y * 5 + x];

        tile.style.background = path.color;
        tile.style.color = "#000000";
        tile.style.cursor = "pointer";

        tile.textContent =
          path.arrow[0] === x && path.arrow[1] === y
            ? path.symbol
            : "";
      });
    });

    document.querySelector("h1").textContent =
      "LEVEL 01";

    document.querySelector("p").textContent =
      "Level restarted. Release the paths without collisions.";
  });

 
  document.body.appendChild(restartButton);

  // ==========================================
  // 10. SOUND ON / OFF CONTROL
  // ==========================================

  const soundButton = document.createElement("button");

  soundButton.type = "button";
  soundButton.textContent = "♫ SOUND ON";
  soundButton.setAttribute("aria-label", "Toggle game sound");
  soundButton.setAttribute("aria-pressed", "false");

  soundButton.style.cssText = `
    position: fixed;
    top: 80px;
    right: 20px;
    z-index: 10;
    background: #000000;
    color: #60FFE5;
    border: 2px solid #60FFE5;
    border-radius: 12px;
    padding: 12px 16px;
    min-height: 44px;
    cursor: pointer;
    font-weight: bold;
  `;

  soundButton.addEventListener("click", () => {
    soundEnabled = !soundEnabled;

    soundButton.textContent = soundEnabled
      ? "♫ SOUND ON"
      : "♫ SOUND OFF";

    soundButton.setAttribute(
      "aria-pressed",
      String(!soundEnabled)
    );
  });

  document.body.appendChild(soundButton);

});


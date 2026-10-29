
const startButton = document.querySelector("button");

startButton.addEventListener("click", function () {
  document.querySelector("h1").textContent = "LEVEL 01";
  document.querySelector("p").textContent =
    "Release the paths without collisions.";

  startButton.style.display = "none";

  // Three light paths in Level 1
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

  // Create a 5x5 board
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

        if (path.arrow[0] === x && path.arrow[1] === y) {
          cell.textContent = path.symbol;
        }
      }

      board.appendChild(cell);
    }
  }

  document.body.appendChild(board);
});

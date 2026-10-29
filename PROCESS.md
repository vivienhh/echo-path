# ECHO PATH — Development Process

## 1. Initial Concept

ECHO PATH is a musical light-path puzzle game.

Players click directional light paths to release them from a grid. A path can only leave when no other path blocks its movement.

Each successful release is intended to produce visual and musical feedback.

### Intended Users

People who enjoy short, visually engaging logic puzzles.

### Design Goal

Create an intuitive puzzle experience that combines spatial reasoning, colourful visuals, and musical feedback.

## 2. Design Decisions

### Visual Style

I selected a five-colour palette:

- Black: #000000
- Light Blue: #C4E6F9
- Mint Cyan: #60FFE5
- Pink: #FC70AF
- Lime Green: #D5FF5A

The colours aim to make the experience playful and help distinguish different game elements.

### Interaction Design

I decided to use grid-based collision detection instead of a predefined click sequence.

Each path occupies specific grid cells and has a movement direction. When the player clicks a path, the program checks whether another active path blocks its exit.

This approach allows the same interaction logic to support different puzzle layouts without manually defining the correct removal order for every level.

## 3. Development Log

### 29 October 2026 — Initial Setup

**Completed:**
- Created the local project folder.
- Built the initial HTML welcome screen.
- Selected and applied the visual palette.
- Implemented a basic Start Game interaction.
- Tested the welcome screen and page transition.
- Initialised the local Git repository.
- Created a public GitHub repository and pushed the initial commit.

### 29 October 2026 — Core Interaction Prototype

**Completed:**
- Created a 5×5 puzzle board with three directional light paths.
- Implemented collision detection based on occupied grid cells and movement directions.
- Added click interactions to release unblocked paths.
- Added text feedback for blocked and successfully released paths.
- Implemented a Level Complete message when all paths are removed.

**Developer Testing:**
- Clicking Path A while Path B is present: correctly blocked.
- Clicking Path B while Path C is present: correctly blocked.
- Clicking Path C: successfully released.
- Releasing C, B, and A in sequence: successfully completes the level.

**Current Limitations:**
- Paths disappear immediately without movement animations.
- Musical feedback has not yet been implemented.
- A Reset button is not yet available.

**Next Steps:**
- Implement Reset functionality and improve error feedback.
- Add path movement animations and musical responses.
- Develop additional puzzle layouts.
- Conduct an external user trial.
- Continue documenting development through Git commits.


### 30 October 2026 — Restart Functionality

**Completed:**
- Added a Restart Level button.
- Implemented game-state reset without reloading the page.
- Restored all released paths to their original positions.
- Restored the level title and instructions.

**Design Decision:**
I added an in-game restart option so players can recover
from mistakes or replay the puzzle without refreshing the
browser. The reset restores both the logical game state
and the visual appearance of the paths.

**Developer Testing:**
- Restarting after releasing one path restores all paths.
- Collision detection still works after restarting.
- Restarting after completing the level allows the
  puzzle to be played again.

**Next Steps:**
- Improve the visual feedback for blocked paths.
- Add animated movement for successful releases.
- Integrate musical feedback.


## 4. User Testing

Not conducted yet.

A user unfamiliar with the project will be invited to try the game without instructions. Observations and subsequent design changes will be documented here.

## 5. AI Tool Use

ChatGPT was used to discuss the game concept, plan the development process, and provide initial HTML and JavaScript code examples.

**Suggestion retained:** I adopted the suggestion to implement reusable grid-based collision detection rather than hardcoding a fixed release order. The interaction was tested using the first puzzle layout.

**Suggestion modified:** I changed the initially proposed dark-blue visual direction to a custom five-colour palette based on my selected visual references.

Easel Studio is planned for visual and audio development but has not yet been used to produce assets for the project.

Further AI suggestions accepted, modified, or rejected will be documented as development continues.

## 6. Credits and Limitations

**Credits:**
- Game concept, visual direction, and design decisions: project author.
- Initial code examples and development assistance: ChatGPT.
- Visual reference images were used for inspiration, not directly incorporated into the current game.

**Current Limitations:**
- The prototype contains only one puzzle layout.
- Animation and musical feedback are not yet implemented.
- External user testing has not yet been conducted.

This section will be updated as the project develops.
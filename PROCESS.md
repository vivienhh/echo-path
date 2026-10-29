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


### Musical Feedback

I designed different audio responses for successful and blocked actions.

Successful path releases produce musical notes, linking the player's actions to a short melodic sequence. Blocked actions produce a separate tone to indicate that the selected path cannot leave the board.

I also included a Sound ON/OFF control to make audio optional. Important information remains available through text and visual feedback.


### Visual Refinement and Direct Interaction

I explored a neon geometric visual style inspired by glowing pathways, Cyberpop graphics, and music visualisation.

I selected a design with continuous luminous paths rather than separate flat squares, making the paths feel more connected and expressive.

During visual prototyping, I also changed the interaction from a two-step selection and confirmation process to direct clicking.

This decision was intended to reduce unnecessary actions and make the connection between input, response, and feedback more immediate.



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


### 30 October 2026 — Path Release Animation

**Completed:**
- Added directional movement animations for successfully released paths.
- Used the Web Animations API to move light-path tiles in their assigned directions.
- Added glowing effects and gradual fading during release.
- Kept the existing collision detection and restart functionality.

**Design Decision:**
In the previous prototype, a successful click caused the path to disappear immediately. I added directional animations to make the connection between the player's action and the path's movement clearer.

The animation uses temporary visual copies of the tiles, allowing the puzzle's logical state to update while the release effect is displayed.

**Developer Testing:**
- Blocked paths do not trigger release animations.
- Successfully released paths move in their assigned directions.
- Paths disappear after being released.
- Restart restores the original puzzle layout.

**Current Limitations:**
- The animations are still a basic prototype.
- Rapid repeated clicks and restarting during an animation require further testing.
- Musical feedback has not yet been implemented.

**Next Steps:**
- Test and improve animation interruption handling.
- Add sound feedback for successful and blocked actions.
- Refine the visual style of the light paths.


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


### 30 October 2026 — Musical Feedback and Audio Debugging

**Completed:**
- Added musical notes for successful path releases using the Web Audio API.
- Assigned different notes to the three light paths: C (E4), B (G4), and A (C5).
- Added audio feedback for blocked paths.
- Implemented a Sound ON/OFF button.
- Confirmed that the game remains playable when sound is disabled.

**Problem Encountered:**
The initial blocked-path sound did not play audibly, although the text feedback appeared correctly. Increasing the frequency, volume, and duration did not resolve the issue.

**Debugging and Revision:**
- Temporarily replaced the blocked-path sound with the existing successful-release sound.
- Confirmed that both blocked paths could trigger the existing sound.
- This suggested that the click and collision logic were working, while the issue was related to the original blocked-sound implementation.
- Replaced the separate blocked-sound function with a call to the existing working audio function.
- Assigned a distinct frequency (466.16 Hz) to blocked-path feedback.
- Retested the interaction and confirmed that the blocked-path sound was audible.

The exact cause of the original sound failure was not conclusively identified.

**Additional Testing:**
- Tested restarting the level during a release animation and observed no visible animation artifacts.
- Confirmed that successful and blocked interactions produce different sounds.
- Confirmed that turning sound off prevents new sound effects without interrupting the puzzle interaction.
- Confirmed that sound can be turned on again.

**Design Decision:**
I reused the working audio function for both successful and blocked interactions to reduce duplicated code and simplify sound management.

I also added a sound toggle so players can choose whether to hear audio feedback while still receiving visual and text feedback.

**Current Limitations:**
- The blocked-path sound is currently distinguished mainly by pitch rather than a fully developed sound design.
- Sounds already playing may continue briefly after sound is turned off.
- External user testing has not yet been conducted.

**Next Steps:**
- Refine the game's visual appearance and animations.
- Explore additional visual and audio materials using Easel Studio.
- Conduct an external user trial and improve the experience based on observations.


### 30 October 2026 — Visual Prototyping with Easel Studio

**Completed:**
- Created a separate Easel Studio project for visual and audio exploration.
- Developed a Canvas 2D visual prototype using four selected visual references.
- Explored glowing geometric paths, neon lighting, grid details, and experimental typography.
- Preserved the original 5×5 puzzle layout and three directional paths.
- Iteratively improved the path release animation and interaction.

**Problems and Revisions:**
- The first prototype only produced flashing and particle effects when releasing a path. The path did not actually move or disappear.
- I requested a revision so the entire path moves in its assigned direction and exits the board.
- The initial interaction required selecting a path and then pressing a separate SEND PULSE button.
- I changed this to direct-click interaction to make the game more intuitive and consistent with the existing JavaScript prototype.

**Design Decision:**
I chose to keep the neon geometric visual direction while simplifying the interaction.

Directly clicking a path creates a clearer relationship between the player's input and the program's response.

I also decided to keep the functional game implementation in VS Code and use Easel Studio as a visual prototyping environment.

**Testing:**
- Confirmed that the revised prototype supports direct path interaction.
- Confirmed that a released path can visibly move in its assigned direction.
- Reviewed the visual clarity of the board, arrows, and interface elements.

**Current Limitations:**
- The Easel visual prototype has not yet been integrated into the main VS Code project.
- The existing musical feedback has not yet been combined with the new visual design.
- External user testing has not yet been conducted.

**Next Steps:**
- Inspect the generated visual prototype source files.
- Integrate reusable visual elements into the main project.
- Test the combined visual and gameplay system.


### 30 October 2026 — Easel Prototype Export and Local Testing

**Completed:**
- Exported the visual prototype from Easel Studio.
- Imported the exported files into a separate `visual-prototype` folder within the existing GitHub project.
- Preserved the original `index.html` and `game.js` to avoid overwriting the working game.
- Opened the exported HTML prototype in a local browser.
- Confirmed that the neon interface and puzzle board rendered correctly.

**Design and Technical Decision:**
I decided to test the Easel-generated visual prototype independently before integrating it into the main game.

This allows me to evaluate the new visual system while preserving the previously tested gameplay and audio functions.

**Testing and Limitations:**
- The exported visual prototype opens successfully in the browser.
- The visual layout and light paths display correctly.
- The Easel prototype does not yet produce real musical feedback.
- The original JavaScript game contains working audio functions that still need to be integrated with the new visual system.

**Next Steps:**
- Integrate the existing musical feedback with the Canvas-based visual prototype.
- Test successful releases, blocked actions, restart, and sound controls.
- Develop the planned timed challenge and local multiplayer leaderboard.
- Conduct an external user trial and document improvements.


## 4. User Testing

Not conducted yet.

A user unfamiliar with the project will be invited to try the game without instructions. Observations and subsequent design changes will be documented here.

## 5. AI Tool Use

ChatGPT was used to discuss the game concept, plan the development process, and provide initial HTML and JavaScript code examples.

**Suggestion retained:** I adopted the suggestion to implement reusable grid-based collision detection rather than hardcoding a fixed release order. The interaction was tested using the first puzzle layout.

**Suggestion modified:** I changed the initially proposed dark-blue visual direction to a custom five-colour palette based on my selected visual references.

Easel Studio is planned for visual and audio development but has not yet been used to produce assets for the project.

Further AI suggestions accepted, modified, or rejected will be documented as development continues.


**AI-assisted debugging and revision:**

ChatGPT provided examples for musical feedback using the Web Audio API. The initial suggestion for a separate blocked-path sound did not work audibly during testing.

After testing an alternative suggested by ChatGPT, I replaced the separate sound-generation function with the existing working audio function and assigned a different note to blocked interactions.

This was a modification of the initial AI-generated solution based on the actual test results.

ChatGPT also assisted with the implementation of the sound toggle. The functions were tested in the browser after integration.


**Easel Studio:**

Easel Studio was used to generate and iterate on a Canvas 2D visual prototype based on my selected visual references and design requirements.

I retained the proposed neon geometric art direction but requested changes to the initial interaction design.

The first prototype used a separate SEND PULSE confirmation button and did not move paths out of the board. I requested actual directional movement and replaced the two-step interaction with direct clicking.

These revisions were based on my evaluation of the prototype against the intended user experience.

The Easel-generated code has not yet been integrated into the main project.


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
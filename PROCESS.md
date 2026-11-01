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


### From Free Play to Time Attack

The initial concept focused on spatial reasoning, light-path movement, and musical feedback.

I later introduced an optional competitive motivation through time-based performance and personal records.

The purpose was to encourage replayability by allowing players to compare their completion times with previous attempts and other players using the same browser.

I initially selected a five-second introductory limit as a design hypothesis. After an informal external playtest on 30 October, I decided that ten seconds would be a more appropriate target for new players. This change still requires successful deployment and follow-up verification.


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


### 30 October 2026 — Time Attack and Leaderboard Implementation

**Completed:**
- Extended ECHO PATH from a free-play musical light puzzle into a timed challenge.
- Added a welcome dialog requiring players to enter a nickname before starting.
- Implemented a five-second countdown for Level 01.
- Connected the timer to the actual gameplay and level completion logic.
- Added automatic time calculation when all three paths successfully leave the board.
- Added a TIME UP state for unsuccessful attempts.
- Created a result screen displaying the player's completion time, best recorded time, and ranking.
- Implemented a local leaderboard that stores each player's best result using browser localStorage.
- Added Play Again and New Player options.
- Preserved directional movement, collision detection, neon path visuals, and restart functionality.
- Integrated basic musical feedback using Web Audio.

**Design Problems and Decisions:**

The earlier game allowed players to interact with the puzzle immediately after opening the page. This could cause players to solve the puzzle before entering their names or starting the timer.

I introduced a welcome dialog so that each attempt begins with a clear player identity and a defined starting point.

I initially considered a longer time limit but changed Level 01 to five seconds because the introductory puzzle contains only three light paths.

I also connected the timer to the actual completion of the final release animation. This ensures that the completion time reflects the full interaction rather than stopping after the last click.

**Initial Testing:**
- Tested the updated game in a local browser.
- Confirmed the new challenge interface and gameplay flow worked during initial testing.
- Reviewed the completion screen and time-attack experience.

**Current Limitations:**
- The five-second difficulty has not yet been evaluated through an independent user trial.
- The leaderboard is stored locally and is not shared between devices.
- Only Level 01 has been implemented.
- Further testing is required for edge cases, browser compatibility, and score persistence.

**Next Steps:**
- Test the game with at least one person who has not received instructions.
- Observe whether the rules and five-second limit are understandable.
- Improve the design based on the user trial.
- Complete README documentation, screenshots, credits, and final submission checks.


### 30 October 2026 — Audio Implementation and Sound Design Iteration

**Development Progress**

- Implemented a browser-based audio system using the Web Audio API.
- Added an electronic background soundtrack that starts when the player begins a challenge.
- Connected the soundtrack to the game state so that it stops when the player completes the level or runs out of time.
- Preserved three distinct interaction notes for the light paths: E4 (Path C), G4 (Path B), and C5 (Path A).
- Retained a separate sound response for blocked actions.
- Tested the game through a localhost server after experiencing silent playback when opening the HTML file directly.
- Fixed an implementation error that incorrectly stopped background audio whenever the player clicked the game board.

**Sound Design Iteration**

The initial background soundtrack consisted of a repeating sequence of electronic notes. During testing, I noticed that this melody competed with the sounds triggered by player interactions.

To address this issue, I replaced the more active background sequence with a quieter, lower-pitched ambient harmony.

The intention was to make the player's actions more musically prominent while retaining an atmospheric sound environment.

**Evaluation**

The updated sound system is functional, but I am not yet satisfied with the overall listening experience. The balance between background ambience and interaction sounds still needs refinement.

This iteration should therefore be considered a working prototype rather than the final sound design.

**Next Steps**

- Refine the background ambience and interaction sound balance.
- Synchronize each path's musical note with the completion of its release animation.
- Add a distinct musical response for successful level completion.
- Test the final audio experience before conducting independent user testing.


### 30 October 2026 — Restoring Visual Feedback

**Problem Identified**

After integrating the Easel Studio visual prototype into the time-attack game, I noticed that two important visual feedback effects had changed.

First, particles were generated near the light paths' original positions instead of following the paths as they moved out of the grid.

Second, the completion fireworks were obscured because the result dialog appeared immediately after the final path was released.

**Design and Implementation Changes**

- Revisited the original Easel Studio particle animation logic.
- Updated the particle emitter to follow each moving path.
- Restored coloured particle trails that gradually fade as the paths exit the board.
- Restored a multi-coloured particle burst and expanding ring on successful completion.
- Delayed the result dialog by approximately 1.1 seconds so that players can see the celebration.
- Kept the timer and score calculation immediate to preserve fair completion times.

**Testing and Reflection**

I tested the updated Level 01 in the browser and confirmed that the moving particle trails and completion celebration were visible.

This revision helped reconnect visual feedback with player actions without changing the puzzle mechanics or leaderboard.

**Next Step**

Develop Levels 02 and 03 using the existing visual and interaction system, followed by further audio refinement and independent user testing.


### 30 October 2026 — Three-Level Expansion and Visual Refinement

**Development Progress**

Expanded ECHO PATH from a single-level prototype into a three-level time-attack experience:

- Level 01: 3 light paths, 5×5 grid, 5-second time limit.
- Level 02: 10 light paths, 7×7 grid, 25-second time limit.
- Level 03: 20 light paths, 9×9 grid, 50-second time limit.

The new levels introduce more paths and more complex blocking relationships, requiring players to identify valid release sequences under increasing time pressure.

I also extended the scoring system to support individual level records and a total challenge record. The total time represents one continuous three-level attempt rather than a combination of unrelated personal bests.

**Visual Design Refinement**

After integrating the three-level system, I compared the current browser game with my earlier Easel Studio visual prototype.

I noticed that the decorative elements on both sides of the game board no longer matched the original design. The intersecting orbital lines and pink accent dots had been lost, leaving only the central neon symbols.

To restore visual consistency, I:

- Reintroduced the intersecting mint and pink orbital decorations.
- Restored the small glowing pink dots.
- Retained the neon green symbols at the centre.
- Refined the side-panel typography and visual hierarchy.
- Rewrote the gameplay instructions to make them more concise and player-oriented.

In particular, I replaced the previous right-side description with "CLEAR THE WAY", explaining that players must release unblocked paths before others can move.

**Testing and Reflection**

I manually reviewed the updated game in the browser and was satisfied with the restored side decorations and revised interface text.

This iteration reinforced the importance of maintaining visual consistency when transferring an interactive prototype into a functional game.

It also highlighted the difference between explanatory design language and instructions intended for players.

**Next Steps**

- Evaluate the difficulty and time limits of Levels 02 and 03.
- Refine background music and interaction sound effects.
- Conduct an independent user test.
- Improve the game based on feedback and prepare the final submission.


### 30 October 2026 — Milestone 11: Difficulty Balancing and Continuous Challenge

**Development Progress**

I refined ECHO PATH's three-level structure to create a more challenging and continuous gameplay experience.

Updated level configurations:

- Level 01: 3 paths, 5×5 grid, 5-second limit.
- Level 02: 10 paths, 7×7 grid, 20-second limit.
- Level 03: 20 paths, 9×9 grid, 30-second limit.

I increased the complexity of blocking relationships in Levels 02 and 03. Players must now identify valid release sequences under greater time pressure.

**Interaction and Gameplay Flow**

I redesigned the experience as a continuous three-level challenge.

- Completing a level automatically starts the next level after the celebration animation.
- Individual result dialogs no longer interrupt the challenge.
- A consolidated results screen appears after all three levels are completed.
- A Pause menu allows players to resume, restart the entire challenge, or exit to the start menu.
- Pausing freezes the countdown and path animations.
- Restarting or exiting abandons the current attempt without deleting saved records.

**Scoring and Leaderboard**

I expanded the scoring system to display:

- The current attempt's completion time for each level.
- Personal best times for Levels 01, 02, and 03.
- Historical records and rankings.
- The total completion time for one continuous three-level run.

The total completion time is calculated using the actual times from the same attempt, rather than combining personal bests from different attempts.

**Self-Evaluation and Reflection**

I played the revised game and found the continuous challenge more enjoyable and engaging.

The increased number of paths creates a stronger feeling of progression. Automatic level transitions maintain the rhythm of gameplay, while the Pause menu provides more control.

However, this evaluation reflects my own experience. Independent user testing is still needed to determine whether the time limits and difficulty progression are appropriate for new players.

**Next Steps**

- Refine the background music and interaction sounds.
- Conduct independent user testing.
- Iterate based on player feedback.
- Complete the README and final submission checks.

### 2026-10-31 — Audio Integration and Sound Balance

**Design Goal**

Create a relaxing, mysterious cosmic atmosphere while keeping player actions clearly audible. The background music should support the puzzle experience rather than compete with interaction feedback.

**Development and Iteration**

- Explored audio directions in Easel Studio and selected a light fantasy-space atmosphere inspired by the general feeling of magical adventure games.
- Integrated the selected path-release, blocked-path, and completion sound effects into the three-level game.
- Found that the original background music was inaudible in the integrated version.
- Tried adjusting the audio levels, but this did not solve the problem.
- Implemented an independent background-music loop using the Web Audio API.
- Created three distinct musical variations:
  - Level 01 — Stargazer: quiet and atmospheric.
  - Level 02 — Orbit Drift: playful and gently rhythmic.
  - Level 03 — Nebula Rush: slightly faster and more energetic.
- Reduced the BGM master level from 0.55 to 0.35.
- Increased the prominence of path-release and level-completion sounds.
- Added temporary background-volume reduction during player interactions.

**Self-Testing and Feedback**

Tested the integrated audio in the local browser preview. The background music became audible after the independent loop was implemented. Further listening identified that the music was too prominent, leading to a final volume adjustment. The revised balance was considered satisfactory during self-testing.

An informal external playtest is documented in Section 4.

**AI Tool Use**

Easel Studio was used to explore and prototype the audio direction. ChatGPT assisted with examining the generated audio code, integrating effects into the existing game, debugging background playback, implementing the three-level music system, and adjusting the audio mix. The final sound direction and acceptance decisions were made through manual listening and iteration.

**Current Status**

Audio balance accepted during self-testing. External playtest feedback and the pending introductory timing revision are documented in Section 4.

### 31 October 2026 — External Playtest and Timing Iteration

**Design Context**

The introductory level originally had a five-second time limit. I chose this to make the opening challenge fast and exciting, but the setting was based on my own familiarity with the puzzle rather than external testing.

**External Feedback**

On 30 October, a friend tried ECHO PATH and shared feedback through a text conversation. The participant liked the visual design, interactive puzzle mechanics, and click sound effects.

However, the participant reported that the first round ended while they were still reading the interface and trying to understand what to do. The participant suggested adding approximately five seconds to the first level.

**Design Decision**

I decided to extend the intended Level 01 limit from five to ten seconds, allowing first-time players more time to orient themselves.

The other levels remain designed around 20-second and 40-second limits.

**Implementation and Verification Status**

I attempted to revise the Level 01 timer and on-screen instructions. However, the public GitHub Pages version still displayed a five-second countdown during the latest check.

Therefore, the ten-second timing revision is recorded as an attempted implementation that still requires successful publication and verification, rather than a confirmed deployed change.

**Reflection**

This revealed a difference between how I experience the game as its designer and how a first-time player encounters it. A short timer may increase excitement for experienced players, but can interfere with understanding the interaction during the introductory level.

The playtest helped me reconsider the balance between immediate challenge and accessible onboarding.

**Next Step**

Verify that the intended ten-second countdown is working in the final published version, then conduct a follow-up playtest.

### 1 November 2026 — User-Centred Gameplay Refinement

**Context**

After receiving feedback from the first external participant, I invited three additional friends to try ECHO PATH on 31 October.

The new feedback revealed two recurring usability concerns: unclear visual cues on the paths and insufficient orientation time in the introductory level.

**Design Decisions**

1. Simplify the visual language of the paths by removing their visible letter labels while preserving their directional arrows.
2. Use a ten-second time limit for Level 01 instead of five seconds.
3. Retain the overall colour palette, interactive mechanics, sound effects, and difficulty progression because participants responded positively to these elements.

**Rationale**

The letters are internal path identifiers, but new players may interpret them as part of the puzzle rules. Removing them should reduce unnecessary visual information and make directional arrows more prominent.

The introductory countdown should give first-time players enough time to understand the rules and act before requiring faster decisions.

**Implementation Status**

These are the decisions arising from the second external playtest. The removal of visible path letters and final verification of the ten-second countdown are the next implementation tasks.

The final public version will be tested after these changes. No unverified implementation is claimed as complete.

**AI Assistance**

ChatGPT assisted with organising the feedback, distinguishing usability observations from design decisions, and documenting the planned iteration. The design direction was selected based on participant feedback.

### 1 November 2026 — Visual Direction Cue Simplification

**Problem Identified**

During the second external playtest, a participant found the combination of letters and directional arrows on the paths confusing.

**Design Decision**

Remove the visible letter labels and retain the arrows as the primary indicators of movement direction.

**Implementation**

- Removed the rendering of path letters from the game board.
- Preserved the internal path identifiers used by the program.
- Kept the existing directional arrows and path colours.
- Applied the change to the main game and GitHub Pages entry file.

**Local Verification**

The revised visual presentation was checked in the local game preview and accepted. The removal of visible letters was confirmed. Final verification on the public website is still required.

**Reflection**

The letters were useful as internal program identifiers but were not necessary for players to understand the puzzle. Removing them simplifies the interface and reduces potential confusion without changing the central interaction.

**AI Assistance**

ChatGPT assisted with locating and modifying the path-label rendering code and preparing this documentation. The change was based on feedback from an external participant.

## 4. User Testing

### External Playtest 01 — 30 October 2026

**Method:** One friend played ECHO PATH and provided informal feedback through a text conversation. The participant had played games with similar mechanics before.

**Positive feedback:** The participant liked the visual presentation, puzzle mechanics, and click sound effects.

**Usability issue:** While reading the interface instructions, the participant ran out of time in Level 01 before fully understanding the challenge.

**Participant suggestion:** Increase the first level's time limit by approximately five seconds.

**Design decision — 31 October 2026:** Selected a ten-second introductory limit and attempted to update the implementation. Final published gameplay verification is required. Levels 02 and 03 retain their 20- and 40-second limits.

**Reflection:** My familiarity with the puzzle may have led me to underestimate the time first-time players need to orient themselves.

**AI assistance:** ChatGPT helped interpret the feedback, prepare the code changes, and document the iteration.

**Limitation:** This was one informal external playtest. The new 10-second limit still requires follow-up validation.

**Published-Version Verification:** A ten-second opening limit was selected and implementation was attempted, but the public website still showed five seconds during the latest check. Deployment remains unverified.

### External Playtest 02 — 31 October 2026

**Participants**

Three additional friends tried ECHO PATH and provided informal feedback. Together with the earlier playtest on 30 October, four external participants have now provided feedback.

**Method**

Informal gameplay sessions followed by participant comments about the interface, controls, time limits, and overall experience.

**Observation 1 — Directional Clarity**

One participant did not initially understand the game rules and found the combination of letters and arrows on the light paths confusing.

The participant's difficulty suggested that the letters were not communicating useful information and might compete with the directional arrows.

**Design Response**

Remove the visible letter labels from the light paths and retain the arrows as the primary movement-direction cues.

Internal path identifiers can remain in the program to support collision detection, sound, and game-state management.

**Observation 2 — Introductory Time Limit**

Two other participants reported that the first-level countdown was too short. They felt that the level could end before they had enough time to understand the interaction.

This feedback was consistent with the earlier external playtest, which also identified the five-second introductory countdown as a usability problem.

**Design Response**

Set the intended Level 01 limit to ten seconds. Keep Levels 02 and 03 at 20 and 40 seconds to retain progression in difficulty.

The final timer must be checked in the published game.

**Positive Feedback**

Participants expressed positive opinions about the overall colour design, interaction mechanics, difficulty, and enjoyment of the game.

These aspects will be retained rather than redesigned unnecessarily.

**Reflection**

The external testing showed that first-time users may interpret visual elements differently from the designer.

In particular, letters that are meaningful inside the program do not necessarily help players understand the interaction.

The repeated feedback about the first-level timer also demonstrated that the introductory experience needs to prioritise comprehension before speed.

I therefore chose to simplify the visible controls and extend the opening time allowance while preserving the game's core mechanics.

**Limitations and Next Steps**

These were informal qualitative playtests, not controlled usability experiments. No numerical usability or satisfaction scores were collected.

The changes need to be implemented and verified in the published game. A further short playtest would help determine whether the revised interface is easier for new players.

## 5. AI Tool Use

ChatGPT was used to discuss the game concept, plan the development process, and provide initial HTML and JavaScript code examples.

**Suggestion retained:** I adopted the suggestion to implement reusable grid-based collision detection rather than hardcoding a fixed release order. The interaction was tested using the first puzzle layout.

**Suggestion modified:** I changed the initially proposed dark-blue visual direction to a custom five-colour palette based on my selected visual references.

Easel Studio was used for visual and audio prototyping. Selected elements were adapted and integrated into the browser game.

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

Selected Easel Studio visual and audio code was adapted and integrated into the main project.


### AI Assistance for the Time Attack System

ChatGPT assisted with planning and generating JavaScript and HTML code for the countdown timer, player entry dialog, completion detection, result screen, and local leaderboard.

I reviewed the suggested interaction flow and requested several changes based on my design goals.

For example, I changed the proposed longer countdown to five seconds for Level 01 and required the timer to stop only when the final path had fully exited the board.

I also requested a complete integrated code version instead of applying multiple isolated patches, to reduce integration errors.

The final implementation combines the visual direction explored through Easel Studio with subsequent JavaScript gameplay and time-attack functionality developed with ChatGPT assistance.

The code still requires independent user testing and final verification.


### AI Assistance — Audio Development

ChatGPT assisted with generating and debugging the Web Audio implementation, including the background soundtrack, interaction sounds, and audio playback controls.

I identified that the first generated background melody competed with the interaction sounds and requested a revision.

The revised approach uses a softer, lower-pitched ambient harmony to leave more space for player-generated notes.

I also tested and debugged audio playback with ChatGPT's guidance, including fixing an incorrect audio-stop call and testing through a local HTTP server.

Although the revised audio is functional, I have not accepted it as the final sound design. Further refinement is planned based on my own listening evaluation.

### AI Assistance — Particle Animation Restoration

ChatGPT assisted in comparing the earlier Easel Studio particle logic with the integrated browser game and generating changes to restore the visual effects.

I identified the differences during gameplay and requested that particle trails follow moving paths and that the completion fireworks remain visible before the result dialog appears.

The resulting changes were tested in the browser before being accepted into the project.


### AI Assistance — Level Expansion and Interface Refinement

ChatGPT assisted in generating and integrating the three-level game system, including additional path configurations, level transitions, timing logic, and leaderboard functionality.

I specified the intended difficulty progression, including 10 paths for Level 02 and 20 paths for Level 03.

After reviewing the integrated interface, I identified differences between the new version and my original Easel Studio visual design.

ChatGPT helped restore the earlier orbital decorations and implement revised gameplay instructions.

I reviewed the updated interface in the browser and accepted the visual changes after evaluating the result.

Further gameplay testing, audio refinement, and independent user evaluation are still planned.


### AI Assistance — Milestone 11: Difficulty and Challenge Flow

ChatGPT assisted with implementing the revised difficulty settings, path configurations, continuous level transitions, Pause menu, and consolidated results system.

I specified the main design decisions, including increasing the difficulty of Levels 02 and 03, reducing their time limits to 20 and 30 seconds, and removing intermediate result dialogs.

ChatGPT helped generate and revise the JavaScript implementation while preserving the existing visual effects, audio functionality, and leaderboard system.

I tested the updated game in the browser and evaluated the changes from the player's perspective. I found the revised gameplay more engaging and accepted it as the current working version.

Further audio refinement and independent user testing are still planned.

### AI Assistance — External Playtest and Timing Revision

ChatGPT assisted with interpreting the participant's feedback, documenting the usability issue, and preparing changes to the first-level timer. The decision to target a ten-second introductory limit was based on the participant's feedback and my own design judgment.

The proposed timing change has not yet been verified in the published version. This limitation is documented rather than presenting the attempted change as a confirmed improvement.

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

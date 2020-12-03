# Nathan's-DnD5e-Foundry-Modules
A list of modules that I personally use for my Foundry D&D 5th Edition games as a dungeon master, along with my preferred settings for each. I did my best to 
double-check any significant performance improvements beforehand, however, there's always a chance of something slipping through or changing in subsequent 
updates. Hope these help!

Inspired by [Bryan's Preferred Modules for Foundry VTT](https://github.com/bryancasler/Bryans-Preferred-Modules-for-FoundryVTT).

## Versions
If you want to view my preferred modules for a specific version of Foundry, you can use the commit history to view past versions of this page. Each commit
 should have the corresponding Foundry version in the commit message.

## Foundry VTT Core Settings
### Core Settings
- Enable Chat Bubbles: T
- Pan to Token Speaker: F
- Left-Click to Release Objects: T
- Token Drag Vision: F
- Enable Soft Shadows: T
- Token Vision Animation: T
- Light Source Animation: T
- Zoomed Texture Antialiasing: T
- Animate Roll Tables: F
- Cone Template Type: Round

### System Settings
- Rest Variant: PHB
- Diagonal Movement Rule: PHB
- Initiative Dexterity Tiebreaker: T
- Apply Currency Weight: T
- Disable Experience Tracking: T
- Collapse Item Cards In Chat: F
- Allow Polymorphing: T

## Foundry VTT Modules
- [About Time](https://foundryvtt.com/packages/about-time/) - Tracks in-game time and required for the 
  [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) module. 

  NOTE: This module may be potentially going away with the future core API time updates.
    - Game Time update multiplier: 1
    - Real time interval: 1
    - Game Seconds per round: 6
    - Timeout before assuming master clock: 5
    - Active calendar: Harptos
    - Debug output: F
- [Autocomplete Whisper](https://foundryvtt.com/packages/autocomplete-whisper/) - Overhauls the whisper functionality to provide an easy-to-use pop-up to
  select your whisper targets.
    - Include GM Usernames List: F
- [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) - Tracks time/calendar/weather with a widget. Can be used to automatically generate a
  weather description based on the current time of year and environment. Requires the [About Time](https://foundryvtt.com/packages/about-time/) module.
    - Calendar display for non-GM: F (Could enable, but in some situations the party may be unaware of time, aka long Underdark scenarios)
    - Output weather to chat: T
    - Output moon changes to chat: T
    - Display time as 24hr: F
    - Disable global illumination at night: F (Could enable, however, I prefer to modify this via Perfect Vision instead)
    - Use Celsius: F
    - Can players see the weather: F
- [Cautious Gamemaster](https://foundryvtt.com/packages/CautiousGamemastersPack/) - Disable GM from speaking as PCs, hidden tokens automatically roll blind,
  small chat QoL with up/down arrows, and typing notifications. Automatically hides private rolls from chat.
    - Disable GM speaking as PC tokens: T
    - Blind chats made by hidden tokens: T
    - Disable chat recalls: F
    - Notify typings: T
- [Chat Damage Buttons - Beyond20 Edition](https://foundryvtt.com/packages/chatdamagebuttons-beyond20/) - Adds "Apply Damage" buttons to Beyond20 chat rolls.
- [Chat Portrait](https://foundryvtt.com/packages/chat-portrait/) - Adds an image of the corresponding image/token to player and GM chat messages.
    - Use token image: F
    - Portrait size: 36
    - Use player color for portrait border: T
    - Portrait border color: #000000
    - Portrait border width: 2
    - Change color of message border: F
    - Display chat flavor text next to portrait: F
    - Force name search: F
- [Combat Enhancements](https://foundryvtt.com/packages/combat-enhancements/) - Health tracking via a radial bar and HP field in the Combat Tracker, as well
  as drag and drop initiative reordering
    - Show HP for actor type: None
    - Enable HP field: T
    - Enable HP radial bar: T
- [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/) - One of the most important and impactful combat modules out there. There's too
  many functions to list, and if you want to automate your combat, this is absolutely necessary. It works extremely well when combinedwith the 
  [Midi QoL](https://foundryvtt.com/packages/midi-qol/) module.
    - Core settings
        - Enable concentrator: T
        - Enable enhanced conditions: T
        - Enable award XP: F
        - Enable hide actor names: T
        - Enable pan to token: T
        - Enable select token: F
        - Enable reroll initiative: F
        - Enable temporary combatants: T
        - Token effect icon size: Small
        - Enable mighty summoner: T
    - CUBPuter settings
        - Award XP: Default
        - Concentrator
            - Enable concentrator: T
            - Concentration condition name: Concentrating
            - Concentration attribute: con
            - Health attribute: attributes.hp
            - Notify chat: T
            - Prompt player: T
            - Automatically set concentrating status: T
            - Notify on double concentration: GM only
        - Enhanced Conditions
            - Enable enhanced conditions: T
            - Output to chat: T
            - Output during combat: T
            - Remove default status effects: F
            - Suppress preventative save reminder: T (After updating to Foundry version 0.7.x. I would recommend NOT modifying this option manually)
        - Hide Names
            - Enabled hide actor names: T
            - Hide all name parts: F
            - Hide hostile names: T
            - Hide neutral names: T
            - Hide friendly names: F
            - Hostile replacement name: \*blank\*
            - Neutral replacement name: \*blank\*
            - Friendly replacement name: Unknown Creature (This is unused)
            - Hide chat card footer: T
        - Pan/Select
            - Enable pan to token: T
            - Pan GM: All
            - Pan players: None
            - Enable select token: F
            - Select GM: All (This is unused)
            - Select players: F
            - Deselect tokens: F
        - Reroll Initiative
            - Enable reroll initiative: F
            - Reroll temporary combatants: F
        - Temporary Combatants
            - Enable temporary combatants: T
        - Misc Token
            - Enable auto roll hostile token HP: F
            - Hide automatic HP roll: T 
            - Token effect icon size: Small
            - Enable mighty summoner: T
            - Mighty summoner feat name: Mighty Summoner
    - Triggler
        - attributes.hp.value = 0 value for PCs only
        - attributes.hp.value = 0 value for NPCs only
        - attributes.hp.value > 0 value for PCs only
        - attributes.hp.value > 0 value for NPCs only
    - Condition Lab
        - Keep default conditions and add journal entries for custom conditions in a custom compendium. *On all conditions, set Output to Chat: T*
        - Unconscious
            - Icon: icons/svg/unconscious.svg
            - Add when attributes.hp.value = 0 value for PCs only
            - Remove when attributes.hp.value > 0 value for PCs only
            - Overlay: T
        - Dead
            - Icon: icons/svg/skull.svg
            - Add when attributes.hp.value = 0 value for NPCs only
            - Remove when attributes.hp.value > 0 value for NPCs only
            - Overlay: T
            - Mark defeated: T
        - Fury of the Small
            - Icon: systems/dnd5e/icons/skills/yellow_20.jpg
            - Journal: Journal (C) --> Custom Conditions --> Fury of the Small
        - Hexblade's Curse
            - Icon: systems/dnd5e/icons/skills/affliction_08.jpg
            - Journal: Journal (C) --> Custom Conditions --> Hexblade's Curse
        - Spirit Totem
            - Icon: systems/dnd5e/icons/skills/green_20.jpg
            - Journal: Journal (C) --> Custom Conditions --> Spirit Totem
        - Flames of Phlegethos
            - Icon: systems/dnd5e/icons/skills/fire_11.jpg
            - Journal: Journal (C) --> Custom Conditions --> Flames of Phlegethos
        - Wild Shape
            - Icon: systems/dnd5e/icons/skills/green_13.jpg
            - Journal: Journal (C) --> Custom Conditions --> Wild Shape
        - Hunter's Mark
            - Icon: systems/dnd5e/icons/spells/evil-eye-red-1.jpg
            - Journal: Journal (C) --> Custom Conditions --> Hunter's Mark
        - Add more conditions as needed!
- [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/) - Adds the ability to create folders for compendiums. A must-have if you prefer a 
  high amount of organization in your world.

  NOTE: If while using this module you 1) add a compendium to a folder, then 2) remove the compendium from the folder, that compendium will no longer appear in
  your Default folder. Re-enable the compendium in a folder to show it again.
- [Conditional Visibility](https://foundryvtt.com/packages/conditional-visibility/) - Adds certain conditions that hides tokens for players based on certain
  sight conditions such as Invisibility, being shrouded in the Darkness spell, etc. A borderline must-have if one of your players is a Shadow Sorcerer.
    - Auto hide on stealth rolls: F
- [Compact DnDBeyond 5e Character Sheet](https://foundryvtt.com/packages/compact-beyond-5e-sheet/) - Adds a compact DnDBeyond-style character sheet for PCs.
    - Limit actions to cantrips: F
    - Use expanded sheet as limited: F
    - Include minute-long spells as actions: T
    - Show passive perception: T
    - Show passive insight: T
    - Show passive investigation: T
    - Show passive stealth: T
- [Crash's 5e Downtime Tracking](https://foundryvtt.com/packages/5e-training/) - Adds another tab on supported character sheets to allow for tracking of
  activities. Uses could include training, keeping track of "worship score"/piety, Xanathar's downtime rules, etc.
    - Show downtime tab (PCs): T
    - Show downtime tab (NPCs): T
    - Downtime tab name: Activities
    - Default attribute/skill for check-based progression: Intelligence
    - Default activity completion target (ability/skill/tool checks): 300
    - Default activity completion target (simple): 10
    - Default check difficulty (checks with DCs): 10
    - Default activity completion target (checks with DCs): 5
    - Announce activity completion for: PCs only
- [CritterDB Import](https://foundryvtt.com/packages/critterdb-import/) - Allows for importing homebrew monsters from [CritterDB](https://critterdb.com/). A
  button will appear at the bottom of the Compendiums tab and import them to the compendium CritterDB - MyCritters.
  
  NOTE: I usually keep this disabled until I need to import something.
- [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/) - Creates a second configurable hotbar that can be moved and styled according to your own
  specifications. This works extremely well when combined with the [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) module. 
  
  NOTE: I personally specify the default custom hotbar that works best for me. That way, I don't have to configure it in multiple areas. If other users want a
   different one, they can override it :)
    - Default Custom Hotbar Settings
        - Custom hotbar color: #192a3080
        - Custom hotbar border color: #7db7f0ff
        - Custom hotbar horizontal position: 800
        - Custom hotbar vertical position: 10
        - Custom hotbar highlight color: #ff6400ff
        - Custom hotbar highlight color (empty): #808080ff
    - Default Global Core Hotbar Settings
        - Custom hotbar color: #00000080
        - Custom hotbar border color: #000000ff
        - Custom hotbar horizontal position: 220
        - Custom hotbar vertical position: 10
        - Custom hotbar highlight color: #ff6400ff
        - Custom hotbar highlight color (empty): #939799ff
- [Custom Journal](https://foundryvtt.com/packages/custom-journal/) - Adds a couple more journal sheets and some custom styling options.
- [Custom Shared Compendiums](https://www.reddit.com/r/FoundryVTT/comments/fvw3c7/how_to_create_a_tiny_module_for_shared_content/) - Although this isn't a
  standard module, I highly recommend creating one of these for your own use.
- [D&D Beyond Importer](https://foundryvtt.com/packages/ddb-importer/) - A fork of the 
[VTTA D&DBeyond Integration](https://foundryvtt.com/packages/vtta-dndbeyond/) module that allows you to automatically import spells, items, and character sheets
  from D&DBeyond into Foundry. Although it's currently in development and missing some functionality, it is still definitely an extremely useful module if you
  either a) own a lot of content on D&DBeyond (guilty), or b) have players that prefer to create their character sheets in D&DBeyond. To get the most out of 
  this module, it should be paired with both [Dynamic Active Effects](https://foundryvtt.com/packages/dae/) and 
 [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/).
    - Image upload directory: assets/ddb-imported-images
    - Item compendium: DDB Items
    - Features compendium: DDB Features
    - Spell compendium: DDB Spells
    - Monster compendium: DDB Monsters
    - Log level: Info
    - Patreon supporter beta key: \*your beta key, if you have one\*
    - DDB Cobalt Cookie: \*your cookie\*
    - DDB campaign URL or ID: \*your campaign URL/ID, if you have one\*
- [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice/) - One of my favorites, this module allows you to roll 3D dice on your screen. For those used to
  playing in-person, it's a must-have.
    - Core Settings
        - Max number of dice: 20
        - Global animation speed: Player's choice
        - Simultaneous rolls are merged: T
        - Dice can be flipped: T
        - Disabled during combat: F
        - Display chat message immediately: F
        - Enable 3D dice on roll tables: F
        - Enable 3D dice on inline rolls: T
        - Disable 3D dice on NPC rolls: F 
    - 3D Dice Settings
        - Dice presets (faces): Standard
        - Theme: Custom
        - Texture: Metal
        - Material: Glass
        - Font: Auto
        - Label color: #000000
        - Dice color: #28c9cc
        - Outline color: #547fcf
        - Edge color: #0e7f81
        - Automatically hide: T
        - Millisecs before hiding: 500
        - Hide FX: FadeOut
        - Sound effects: Enabled
        - Sound volume: .5
        - Table surface for sounds: Wood tray
        - Auto scale: T
        - Manual scale: 75
        - Animation speed: Normal
        - 3D layer position: Over sheets
        - Throwing force: Medium
        - Shadows quality: High
        - Advanced lighting: T
        - Enable "high density" screen support: T
- [Dice Tray](https://foundryvtt.com/packages/dice-calculator/) - Adds a small widget at the bottom of the chat to easily calculate custom rolls. 
- [DnDBeyond Character Sheet for 5E](https://foundryvtt.com/packages/dndbeyond-character-sheet/) - Adds a character sheet that mimics the style of 
  D&DBeyond. I personally prefer the look and feel of [Compact DnDBeyond 5e Character Sheet](https://foundryvtt.com/packages/compact-beyond-5e-sheet/), but
  they are both very similar.
- [Dungeondraft Importer](https://foundryvtt.com/packages/dd-import/) - Adds a button at the bottom of the Scenes tab that allows you to import .dd2vtt files
  as scenes. If you make your maps with [DungeonDraft](https://dungeondraft.net/) (which I highly recommend, especially with the 
  [Forgotten Adventures](https://www.patreon.com/forgottenadventures) assets), this module will save you hours of prep work.
  
  NOTE: I usually keep this disabled until I need to import something.
    - Openable windows: F
- [Dynamic Active Effects](https://foundryvtt.com/packages/dae/) - The successor to the old Dynamic Effects module, this module acts as a bridge between the
  new Active Effects system implemented in Foundry 0.7.x and the DnD5e system. This will allow you to do multiple things, including calculating
  AC, adding bonuses to attacks, applying certain spells and effects, implementing non-SRD features and abilities... One of the most impactful modules out
  there. [Kandashi](https://github.com/kandashi) has an excellent guide regarding the Active Effects system and this module that can be found
  [here](https://docs.google.com/document/d/1hgCJ4evPXo1gabJ_1z8AZLnsAtNdETlRgqWyZL28nMs/edit).
  
  NOTE: This module will create a "DAE" button along the top ribbon of every actor and item. Clicking on this will bring you to a menu to apply Active Effects
  for that particular item. Additionally, if you are converting from the old Dynamic Effects system, run the following two methods to convert all existing
  info over into the new system:
  
  ```
  DAE.convertAllItems();
  DAE.migrateAllActors();
  ```
    - Non-transfer effects require item targets (dnd5e): T
    - Use the DAE active effect config sheet: T
    - Allow players to see details of effects: Edit
    - Use ability save field when rolling ability saves: T
    - Auto calculate armor class: T
    - Auto calc base AC: T
    - Confirm effect deletions: T
    - dae.enhanceStatusEffects.Name: F
    - Amount of debug to show: None
- [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/) - Adds a compendium of items, spells, and macros that are automated by the 
  Active Effects system.
  
  NOTE: In order to use, first import the macro compendium to your game. Then, you can cast the SRD spells as normal, and it should automatically work.
- [Easy Target](https://foundryvtt.com/packages/easy-target/) - Allows for targeting tokens by holding the Alt key and clicking. Extremely useful for GMs.
    - Release behaviour: Sticky
- [Find the Culprit!](https://foundryvtt.com/packages/find-the-culprit/) - A module for debugging compatibility issues between other modules. Extremely
  helpful for when something isn't working the way you want it to and you don't know why.
  
  NOTE: I usually keep this disabled until I need to debug module issues.
- [Forien's Copy Environment](https://foundryvtt.com/packages/forien-copy-environment/) - By right-clicking within the General Information section of the
  Settings tab, this module allows you to import/export your world's current system version as well as your modules and their settings. Very useful for
  copying the same modules and their settings over to another world.
  
  NOTE: I usually keep this disabled until I need to import or export my world and module settings.
- [Forien's Unidentified Items](https://github.com/League-of-Foundry-Developers/foundryvtt-forien-unidentified-items) - As a GM who frequently uses
  mysterious/items with abilities that aren't immediately obvious, this module is great in that it gives the GM the ability to "mystify" an item and revert
  it back to its true form. 
  
  NOTE: With the recent update to Foundry version 0.7.x and other module changes to Better Rolls/Magic Items/Better Curses, there is an extremely serious bug
  that can prevent your world from loading if you have previous versions of this module installed. If you have Forien's Unidentified Items version 0.2.3 or
  below, you MUST upgrade to version 0.2.4 or above or risk losing everything in that world.
    - Core Settings
        - Keep original icon: T
        - Allow tiering (nesting): F
    - Icon Manager
        - Keep defaults
    - Property Manager
        - Equipped, Quantity, Weapon Type, and Weight: T
        - Everything else: F
- [Foundry Community Macros](https://foundryvtt.com/packages/foundry_community_macros/) - Various macros created by the community. You'll find them in the 
  corresponding compendiums.
  
  NOTE: I usually keep this disabled until I need a specific macro from this module.
- [Foundry Community Tables](https://foundryvtt.com/packages/foundry_community_tables/) - Same as 
  [Foundry Community Macros](https://foundryvtt.com/packages/foundry_community_macros/), but with tables!

  NOTE: I usually keep this disabled until I need a specific table from this module.
- [FPS Meter](https://foundryvtt.com/packages/fpsmeter/) - This module adds a small FPS counter in the top right corner. Useful for gauging performance at a 
  glance, especially when adding new modules. 
    - Show FPS: T
- [GM Notes](https://foundryvtt.com/packages/gm-notes/) - Adds a "GM Notes" button along the top ribbon of every actor and item. Clicking on the button will
  provide the GM with a place to store notes, information, curses, etc. without having to put them in a separate journal. As far as simplicity and flexibility
  goes, this is one of my staple modules that I use often.
    - Show full GM note label: T
- [Health Estimate](https://foundryvtt.com/packages/healthEstimate/) - A fun little module that allows you to set "health tiers" for tokens. By hovering over a 
  token, a customizable health phrase will pop up over the token, like "Uninjured", "Barely Injured", "Badly Injured" "Near Death", etc. depending on how much 
  HP they have left.
    - Core Settings
        - GM Only: F
        - Players only: F
        - NPCs only: F
        - PCs only: F
        - Stages: Unconscious, Near Death, Badly Injured, Injured, Barely Injured, Fresh
        - Death state name: Dead
        - NPCs die immediately: T
        - Perfectionism: T
        - Death state on condition: T
        - Death marker: icons/svg/skull.svg
        - Add temporary health: F
        - Hide on tokens with 0 max HP: T
        - Use vehicle threshold: F
        - Threshold stages: Wrecked, Broken, Fully Functional
        - Vehicle stages: Wrecked, Broken, Battered, Scratched, Pristine
    - Style Settings
        - Use color: T
        - Smooth gradient: T
        - One slider all the way to the left, one all the way to the right. HSL
        - Color of dead tokens: Dark red
        - Outline: Darken x 3
        - Font size: x-large
        - Position: Top x -1
- [Illandril's Hotbar Uses](https://foundryvtt.com/packages/illandril-hotbar-uses/) - Adds a "uses" counter to item macros in hotbars. A good quality of life
  improvement for players especially.
    - Show maximum values: T
- [Input Expressions](https://foundryvtt.com/packages/input-expressions/) - Allows for mathematical expressions and attribute/ability references to be entered 
  into numeric inputs. For example, you can set a zombie's HP to "3d8 + 9", and it will automatically calculate it for you. 
- [Item Containers](https://foundryvtt.com/packages/itemcollection/) - Allows for grouping items into containers (aka, bag of holdings) via two new backpack
  sheets: ItemSheetShop and ItemSheetWithBags. Good for organizing character sheets, providing a merchant with inventory, etc.
    - Gold conversion: F
    - Gold conversion percentage: 50
    - Sort bag contents: T
- [Kobold Press OGL Compendium](https://foundryvtt.com/packages/koboldpressogl/) - Adds a Kobold Press OGL monsters compendium. Although the monsters do not 
  import with tokens automatically, creating new tokens for them is usually pretty easy. A great way to import new monsters with stat blocks already created.
  
  NOTE: I usually keep this disabled until I need to import a monster.
- [Less Fog](https://foundryvtt.com/packages/lessfog/) - Slightly tweaks the default Foundry lighting and provides options to customize it. The main benefit I
  see while using it is increased visibility for GMs when controlling tokens while still retaining token sight.
    - Darkness - Dimming: 0.5
    - Darkness - Explored: 0.65
    - Darkness - Unexplored (GM only): 0.85
    - Reveal tokens: T
- [Let Me Roll That For You](https://foundryvtt.com/packages/lmrtfy/) - A module that allows a GM to request rolls from the players. While I don't use the base
  functionality hardly ever, it is extremely useful when paired with the [Midi QoL](https://foundryvtt.com/packages/midi-qol/) module.
    - Enable parchment theme: T
- [Lib - Color Settings](https://foundryvtt.com/packages/colorsettings/) - A dependency used by many other modules. Adds an easy-to-use color picker that some 
  other modules rely on. If you don't have a module that depends on this, I'd recommend not installing it.
    - Show Error: T
- [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/) - A dependency used by many other modules. Provides module developers with a simple way to modify
  core Foundry code while reducing the likelihood of conflict with other modules. Again, if you don't have a module that depends on this, I'd recommend not 
  installing it, unless you're a module developer.
    - Core Settings
        - Collect runtime information: T
    - LibWrapper Settings Menu
        - Keep as defaults
- [Loot Sheet NPC 5e](https://foundryvtt.com/packages/lootsheetnpc5e/) - Adds an NPC loot sheet. This information is stored separately from the token's main 
  sheet, so you can place items in the inventory and give your players permission to view it upon the NPC's death. I personally use it for merchants and
  lootable enemies.
    - Convert currency after purchases: T
    - Change icon for spell scrolls: T 
    - Display chat message for purchases: T
    - Clear inventory: F
    - Loot currency: T
    - Loot all: T
- [Macrro Folders](https://foundryvtt.com/packages/macro-folders/) - Made by the same developer as 
  [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/), this module adds folders for your macros. It also allows the ability to have 
  each player have their own default folder, thereby keeping your macro folder a little cleaner. A must-have if you prefer a high amount of organization in
  your world.
- [Magic Items](https://foundryvtt.com/packages/magicitems/) - Allows for the creation of items with specific charges, spells, etc. Accessed via a separate
  tab on an item's sheet. When equipped and attuned to, the item's spells or magical feats will be available via the Spellcasting tab in the character's sheet.
    - Only identified: T
    - Hide settings tab from players: F
- [Math.js](https://foundryvtt.com/packages/_mathjs/) - A dependency used by many other modules. Provides module developers with a way to access the Math.js 
  library within Foundry. If you don't have a module that depends on this, I'd recommend not installing it.
- [Midi QoL](https://foundryvtt.com/packages/midi-qol/) - One of the best combat automation modules, period. This module allows for automatic damage
  calculation and application, immediate AC hit/miss check, NPC saving throws, auto-prompt PCs to roll saves (in combination with 
  [Let Me Roll That For You](https://foundryvtt.com/packages/lmrtfy/)), apply Active Effects to targets (including conditions), and more. This module, along
  with [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/), [Dynamic Active Effects](https://foundryvtt.com/packages/dae/), and
  [About Time](https://foundryvtt.com/packages/about-time/) do a wonderful job of making GMing simpler. You can enable or disable as much functionality as you
  want.
  
  NOTE: There are other very great combat automation tools such as [MESS](https://foundryvtt.com/packages/mess/) and 
  [Better Rolls](https://foundryvtt.com/packages/betterrolls5e/), and they may be worth investigating. However, these settings assume that neither of those two
  modules are installed, as there is potential for compatibility issues between them.
    - Core Settings
        - Enable roll automation support: T
        - Add attack/damage buttons to item inventory list: T
        - Item delete check: T
        - Add damage buttons to chat message: T
        - GM sees all whispered messages: T
        - Really hide private/blind/self rolls: T
        - Fast forward ability rolls: F
        - Choose how to roll critical damage: DnD5e default
        - Drag and drop targeting: F
        - Experimental - Apply checks before doing speed/macro roll: F
        - Colored border messages: Borders only
        - Untarget at end of turn: Untarget dead after roll
        - Players control owned hidden tokens: F
        - Enable debug: None
    - Workflow Settings
        - GM auto roll attack/damage: F
        - Enable speed item rolls: T
        - Enable speed ability (save/check/skill) rolls: F
        - Advantage: Alt
        - Disadvantage: Ctrl|Cmd
        - Critical: Alt
        - Versatile: Shift
        - Show item details in chat card: Card + Details - PC Only
        - Merge rolls to one card: T
        - Condense attack/damage rolls: F
        - Hide token names: \*blank\*
        - Chat cards use token name: F
        - Auto target on template draw: Walls Block
        - Auto target for ranged target spells/attacks: F
        - When item is rolled, automatically roll the attack if there is one: T
        - Hide roll details: None
        - Auto fast forward rolls: Attack and Damage
        - Require targets to be selected before rolling: T
        - Auto check if attack hits target: Check - only GM sees
        - Auto roll damage: Never
        - Auto check saves: Save - only GM sees
        - Display saving throw DC: F
        - Search spell description: T
        - Prompt players to roll saves: LMRTFY + Query (Set to Chat Message if Let Me Roll That For You is not installed)
        - Delay before rolling for players: 30
        - Auto apply damage to target: No + damage card
        - Apply damage immunities: Apply immmunities + physical
        - Auto apply item effects to targets: T
        - Enable midi-qol custom sounds: F
        - Add macro to call on use: F
- [Multilevel Tokens](https://foundryvtt.com/packages/multilevel-tokens/) - An incredibly versatile module that allows the GM to set triggers whenever a token
  enters a certain region laid out by the Foundry built-in drawing tools. Uses include teleporting an actor to a basement scene when they "walk down" a set of
  steps, creating portals that hop to different areas on the same map (or others), adjusting token properties based on its position, etc. I use this most
  often in conjunction with the [Wall Height](https://foundryvtt.com/packages/wall-height/) module to trigger a macro that automatically adjusts a token's
  height by passing in the "elevation" of the current terrain. If you want a trigger to activate whenever a player lands on a spot, this is the module for you.
  
  Example: To adjust height of a token automatically, draw on a region that has a different elevation than the surrounding area. Then, in the Multilevel tab of 
  the drawing, enable the "Trigger on enter" field, set the macro name to \*your macro name for adjusting elevation\*, and for additional arguments, set the 
  elevation of the region. Then, create a macro with the name of \*your macro name for adjusting elevation\*, set the type to script, and paste the following 
  code:
  ```
  token.update({"elevation": args[0]});
  ```
    - Auto-sync player targets: T
    - Auto-sync chat bubbles: T
    - Clone token flags set by other modules: T
- [Multiple Wall Point Mover (MWPM)](https://foundryvtt.com/packages/mwpm/) - By default, Foundry wall points that share the same space will not move
  together. This module enables that behaviour by allowing the GM to drag a single point and move all wall points that meet at that location. One of those
  modules that is extremely intuitive and should be an option in the core system.
    - Reverse behaviour: T
    - Key code: 18
    - Pixel offset: 0
    - Drag resistance: 0
    - Delete small walls: F
- [Navbar Tweaks](https://foundryvtt.com/packages/navbar-tweaks/) - Always shows the navigation bar for GM users. Allows for hiding the "actual" name of the 
  scene from players while showing the real name for the GM in the navigation. It's a small change, but quite useful.
    - Navigation bar minimum role: Always show Navbar
    - "Navigation name" maximum role: Show the "Navigation Name" to TRUSTED or lower
- [Not Enough NPCs - A 5E NPC Generator](https://foundryvtt.com/packages/npcgen/) - Adds a nifty NPC generator on the fly via a button at the bottom of the 
  Actor tab.
  
  NOTE: I usually keep this disabled until I need to create NPCs, as I usually make batches of them before the game to iron out any kinks.
    - Core Settings
        - Save NPCs as characters: T
    - Custom Generator Entries
        - Keep defaults
- [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) - Replicates the darkvision rules of DnD5e, including seeing dim as bright light, 
  grayscale for seeing in darkness, options for global illumination light scale, etc. Extremely useful for adding a pinch of flavor for those 
  characters that can see in the dark.
    - Global illumination light: Bright light
    - Improved GM vision: T
    - Vision rules: Dungeons & Dragons 5e
    - Dim vision in darkness: Dim Light (monochrome)
    - Dim vision in dim light: Bright Light
    - Bright vision in darkness: Bright Light
    - Bright vision in dim light: Bright light
    - Monochrome vision color: #ffffff
    - Monochrome token icons: T
    - Monochrome special effects: F
- [Permission Viewer](https://foundryvtt.com/packages/permission_viewer/) - Adds an easy way to view and customize permissions for players by adding UI
  elements along the side of actors, items, journals, etc. The UI is a little weird to get used to at first, but it's a nice quality of life change.
- [Pick-Up-Stix](https://foundryvtt.com/packages/pick-up-stix/) - Allows players and GMs to drag and drop items onto the actual scene grid to share/collect 
  loot. Useful for when players drop weapons during combat, finding treasure chests, and more.
  
  NOTE: This module has some compatibility issues with 
  [Forien's Unidentified Items](https://github.com/League-of-Foundry-Developers/foundryvtt-forien-unidentified-items). It shouldn't break anything, but placing 
  a mystified item on the scene grid will remove the identified version.
    - Default container opened image: modules/pick-up-stix/assets/chest-opened.png
    - Default container closed image: modules/pick-up-stix/assets/chest-closed.png
    - Disable currency loot: F
    - Default container open sound: \*blank\*
    - Default container close sound: \*blank\*
- [Pin Cushion](https://foundryvtt.com/packages/pin-cushion/) - When in journal mode, allows the GM to double-click on the map for quick creation of journal
  entries. These entries can be hovered over to view their title at a glance, making them extremely useful for dungeon notes.
    - Show journal preview: F (Was enabled, however, a core change to Foundry now implements it)
    - Journal preview type: HTML
    - Preview maximum length: 500
    - Preview delay: 500
- [Pings](https://foundryvtt.com/packages/pings/) - Allows players and GMs to ping on the screen to highlight important areas.
    - Minimum move permission: Player
    - Mouse button to press for a ping: LeftClick
    - Mouse button for a screen-moving ping: Shift + LeftClick
    - Mouse button press duration: 350
    - Key to press for a ping: \*blank\*
    - Key for a screen-moving ping: \*blank\*
    - Show player name: T
    - Ping image: \*blank\*
    - Scale: 1
    - Duration: 1
    - Rotation: T
    - Rotation speed: 6
    - Size change: T
    - Size change amount: 0.125
    - Size change speed: 1
- [Playlist Importer](https://foundryvtt.com/packages/playlist_import/) - Allows for bulk importing of playlists via a button at the bottom of the Playlist tab.
  The playlists need to be ordered in a specific way to work nicely with the Foundry playlist system, however, once your folder structure is set up correctly,
  this module makes adding new music a breeze. I highly recommend it for those with lots of different music tracks for different scenarios.
    - Base music directory: music
    - Select source: data
    - S3 bucket: \*blank\*
    - Set repeat for tracks: F
    - Set stream for tracks: T
    - Set default volume: 0.5
    - Song duplicate checker: T (Disable if you are importing for the first time/starting over from scratch)
- [Polyglot](https://foundryvtt.com/packages/polyglot/) - Allows players and GM-selected tokens to speak in their selected languages that are only readable by 
  others that speak the same language. For others that do not speak that language, the text appears as gibberish symbols.
  
  NOTE: If the text is legible, there is an icon in the chat window that, when clicked, will reveal what language the text was spoken in.
  
- [PopOut!](https://foundryvtt.com/packages/popout/) - Allows players and GMs to pop actors out into their own separate window. One of my most-used quality of 
  life modules, and it's especially useful for those with multiple monitors.
    - Pop sheets out into windows: T
- [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/) - Another amazing quality of life module, Quick Insert adds a hotkey to search
  through your world's scenes, actors, journals, items, and even compendiums. I almost never actually use the navigation tabs anymore to look up entities 
  because of how often I use this module.
    - Core Settings
        - GMs only: F
        - Character sheet integration: T
        - Experimental - Index guard: F
        - Delay before indexing: 1 second
        - Keybind - Open quick insert: Ctrl + \*spacebar\*
        - Enable global browse mode: T
        - Click result to submit: T
    - Indexing Settings
        - Set to your own preferences. Personally, I disable player searching for macros, rollable tables, and scenes while leaving everything else enabled.
    - Customise Filters
        - Set to your own preferences, but I keep the defaults.
    - Character Sheet Filters
        - Set to your own preferences, but I keep the defaults.
- [Roofs and Overhead Tiles](https://foundryvtt.com/packages/roofs/) - One of my newer additions, and I haven't had the opportunity to use it much, yet. Allows
  for placing of tiles with a separate "layer" above normal tiles. Whenever a player goes underneath these tiles, the tiles will become transparent.
    - Default closed roof opacity: 1
    - Default open roof opacity: 0.2
    - Enable token autohide: T
    - Enable GM quick peek: T
- [Show Drag Distance](https://foundryvtt.com/packages/ShowDragDistance/) - Another quality of life improvement that, as the title says, shows the drag distance
  when dragging a token. Has support for [Terrain Layer](https://foundryvtt.com/packages/TerrainLayer/). Good for in-combat use.
    - Enable showing distance on drag: T
    - Enable rangefinder: T
    - Base speed attribute: actor.data.data.attributes.speed.value
    - Bonus speed attribute: actor.data.data.attributes.speed.special
    - Enable max speed color change: T
    - Max speed color: #FF0000
    - Enable dash color change: T
    - Dash multiplier: 1
    - Dash speed color: #00FF00
- [Simple Dice Roller](https://foundryvtt.com/packages/simple-dice-roller/) - Adds a menu in the top left to easily roll dice, similar to Roll20's interface.
    - Maximum dices in a roll: 10
- [The Furnace](https://foundryvtt.com/packages/furnace/) - Adds drawing tools, async macros (that are relied on by other modules and macros), enabling and 
  disabling GM token vision, valuable playlist enhancements, modifying initiative value within the Combat Tracker, etc. Small, random quality of life
  improvements. I mainly get value from the playlist changes.
    - Advanced macros: T
    - Advanced drawing tools: T
    - Freehand sample rate: 50ms
    - Enable hooks debugging: F
    - Improve the playlists UI: T
    - Volume slider linear to logarithmic exponential approximation: 3
- [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) - Arguably the best character/NPC sheet out there (and my personal favorite). Keeps things 
  compact and well-organized, and it plays well with most other modules. It also has tons of configurable options if you want to tweak it for your liking. 
  Highly recommend.
    - Use alternate dark mode: F
    - Primary accent color: \*blank\*
    - Secondary accent color: \*blank\*
    - Accent color for always prepared spells: \*blank\*
    - Expanded view for the limited sheet: F
    - Sheets use round portraits: F
    - Border width for the hit point overlay: 0
    - Disable the hit point overlay: T
    - Hide character class list: F
    - Disable inspiration tracker: F
    - Disable exhaustion tracker: F
    - No inspiration indicator animation: F
    - Hide exhaustion and inspiration when not available: F
    - Show exhaustion tracker only on hover: F
    - Show inspiration indicator only on hover: F
    - Show rest button on hover: F
    - Move traits below resources: F
    - Show toggle button for character traits: F
    - NPC sheets use round portraits: F
    - NPC sheets border width for the hit point overlay: 0
    - NPC sheets disable the hit point overlay: T
    - NPC sheets always show traits: T
    - NPC sheets always show skills: T
    - NPC sheets highlight sheet when linked to actor: T
    - NPC sheets highlight sheet when not linked to actor: F
- [Tidy UI - Game Settings](https://foundryvtt.com/packages/tidy-ui_game-settings/) - Makes the module manager and configuration settings UI cleaner and 
  easier to navigate. Very useful when setting up modules and fine-tuning your world.
    - Always activate the module Settings tab: T
    - Hide "disable all modules" button: F
- [Token Action HUD](https://foundryvtt.com/packages/token-action-hud/) - Adds a HUD to the top of the screen to easily perform token actions like access
  inventory, skill checks and saves, cast spells, etc. Very useful if you have lots of different monsters and you don't want to open the stat blocks for each
  one.
    - HUD roll handler: Core D&D5e (supports Midi QOL)
    - Enable HUD for current user: T
    - Always display HUD: T
    - Show HUD title: T
    - Show action icons: T
    - Always show custom categories: T
    - Enable hovering: F
    - Click to open categories: F
    - Ignore passive feats: F
    - Display spell information: T
    - Show all non-preparable spells: T
    - Hide actions with an activation longer than 1 round: F
    - Abbreviate skill and ability names: F
    - Show separate ability check and save categories: T
    - Show all NPC items: T
    - Show empty items (includes items and spells): F
    - Enable HUD for players: T
    - Show item sheet on right click: T
    - Enable debugging: F
- [Token Auras](https://foundryvtt.com/packages/token-auras/) - Adds an option for creating auras in the Image tab of a token, similar to Roll20.
- [Token Health](https://foundryvtt.com/packages/token-health/) - Small module that adds a hotkey to easily apply damage or healing to a given token. For me,
  I configured it to the Enter key.
    - Damage selected tokens: Enter
    - Heal selected tokens: Shift + Enter
    - Damage targeted tokens: Alt + Enter
    - Heal targeted tokens: Alt + Shift + Enter
    - Current hit points source: attributes.hp.value
    - Max hit points source: attributes.hp.max
    - Temporary hit points source: attributes.hp.temp
    - Allow negative hit points: F
- [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) - Allows a player or GM to assign a given page on the hotbar to remember different 
  macros for different tokens, sort of like "profiles". This module is extremely useful for GMs especially, as it gives you a quick way to remember the most 
  commonly-used actions on a monster-by-monster basis. Works well when combined with [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/).
    - Use custom hotbar: T
    - Link to linked actor: T
    - Always link to actor: T
    - Shared token hotbar: F
    - Lock shared hotbar: F
    - Debug mode: F
- [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/) - Adds small speed, AC, and passive perception markers when right-clicking on a token.
    - GM only: F
    - Token position: left
- [Token Mold](https://foundryvtt.com/packages/token-mold/) - Overwrites token options when placing new tokens. In order to configure these overrides, click
  the Token Mold settings icon at the top of the Actors tab. Very useful when you have to place a lot of monsters and want to override the configuration for
  each one, especially if you want to roll for HP.
    - Name, Config, and Overlay enabled
    - Name
        - Add counting numbers to name as suffix: T
        - Number style: arabic numerals
        - Increase index by up to: 1
        - Add random adjective from dictionary: F
        - Choose adjectives from following rollable table: English - over 4700 random adjectives
        - Adjective placement: Front
        - Base name: Do nothing
    - System Specific
        - Send result to chat: T
        - Set token size to creature size and scaled to map scale: T
    - Modify Default Config
        - Display Bars
            - Overwrite: T
            - OWNER
        - Bar 1 Attribute
            - Overwrite: T
            - attributes.hp \[character, npc, vehicle\]
        - Bar 2 Attribute
            - Overwrite: F
            - None
        - Display Name
            - Overwrite: T
            - OWNER
        - Disposition
            - Overwrite: F
            - NEUTRAL
        - Vision
            - Overwrite: F
            - Has vision: T
        - Random Scale Multiplier
            - Active: F
            - Min: 0.8
            - Max: 1.2
        - Random Rotation Range
            - Min angle: 0
            - Max angle: 360
        - Random mirroring
            - Horizontal: F
            - Vertical: F
    - Stat Overlay
        - Icon: Eye
        - Attribute: None
- [Tokenizer - v0.7.5 Edition](https://foundryvtt.com/packages/vtta-tokenizer/) - Adds a mini token editor in-game that is extremely easy to use.
  Good for when you have a monster that doesn't have its own token associated with it.
  
  NOTE: This is an update from the previous version - [Virtual Tabletop Assets - Tokenizer](https://www.vttassets.com/assets/vtta-tokenizer). In the old
  version, there is a bug that causes the the configuration window to hang, effectively limiting GMs from making modifications to their settings. If you are
  on the old version and unable to update your settings, please switch to the updated module or follow the instructions
  [here](https://www.reddit.com/r/FoundryVTT/comments/jfoadt/foundry_vtt_075_release/g9mca2k?utm_source=share&utm_medium=web2x&context=3) to fix.
    - Default character frame: /modules/vtta-tokenizer/img/default-frame-pc.png
    - Default NPC frame: /modules/vtta-tokenizer/img/default-frame-npc.png
    - Avatar/token upload directory: assets/tokens
    - Token size: 400
- [Turn Alert](https://foundryvtt.com/packages/turnAlert/) - Adds the ability to create chat alerts in the combat tracker via a bell icon at the top of the
  Combat Tracker while combat is active. Clicking on that bell will show the current turn alerts and allow the GM to modify them.
- [Turn Marker](https://foundryvtt.com/packages/turnmarker/) - Adds an animated icon beneath whoever's turn it is. 
    - Core Settings
        - Animate marker: T
        - Animation speed: 100
    - Turn Marker Global Settings
        - Enable turn marker: T
        - Marker image: Runes of the Mad Mage by Rin
        - Custom image path: \*blank\*
        - Image ratio: 1.5
        - Announce turns: T
        - Include token image: T
        - Enable start marker: F
        - Custom image path: \*blank\*
- [Tweak Playlist](https://foundryvtt.com/packages/tweakplaylist/) - Allows for hiding of tracks and playlists from players. Also adds the ability to
  randomize volume/delays. Most importantly, adds CSS to turn the stop/start buttons red/green respectively.
    - Hide tracks: T
    - Allow random: F
- [Vance's Sidebar Resizer](https://foundryvtt.com/packages/vance-sidebar-resizer/) - Allows for resizing of the sidebar.
- [Virtual Tabletop Assets - Iconizer](https://foundryvtt.com/packages/vtta-iconizer/) - When new items are created that match an already-existing item icon,
  this module replaces the stock image with the existing icon. 
    - Icon replacement policy: Replace all icons
    - Icon database policy: Use the predefined database and my custom one
    - Base dictionary: Foundry Icons
    - Icon prefix: iconizer
- [Virtual Tabletop Assets - Party Overview](https://foundryvtt.com/packages/vtta-party/) - Adds an info icon in the Actors tab that allows an overview of the 
  current party of PCs. HP, AC, languages, wealth, etc. are all available. I use it mainly for the Languages tab since the other info is pretty easy to see,
  but it's useful information to have in one place.
    - Grant players access to the overview: F
    - Enable tooltips: F (conflicts with [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/), and is buggy)
    - Enable tooltips for players: F
    - Set the font size for tooltips in pixels: 14
- [Wall Cutter](https://foundryvtt.com/packages/WallCutter/) - Adds the ability to create a breakpoint at the halfway point in a wall segment. Pretty useful for
  fixing mistakes when creating walls for scenes.
- [Wall Height](https://foundryvtt.com/packages/wall-height/) - Adds two fields to the wall menu - Wall Height (Top) and Wall Height (Bottom). When set up,
  tokens with an elevation higher than the Top can see over the wall, while tokens with an elevation lower can see under the Bottom. Extremely useful when 
  combined with [Multilevel Tokens](https://foundryvtt.com/packages/multilevel-tokens/) to automatically adjust token elevation.1
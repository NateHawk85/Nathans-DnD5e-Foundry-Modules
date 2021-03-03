# Nathan's DnD5e/FoundryVTT Modules and Notes
A list of modules and resources that I personally use for my FoundryVTT D&D 5th Edition games, along with my preferred settings. I did my best to 
double-check any significant issues beforehand, however, there's always a chance of something slipping through or changing in subsequent updates. There are
also copies of my environment settings within this repository if you want to try the settings that I personally use. Hope these help!

Inspired by [Bryan's Preferred Modules for Foundry VTT](https://github.com/bryancasler/Bryans-Preferred-Modules-for-FoundryVTT), as a lot of the modules I use
now were found on his page. I 100% recommend checking his stuff out for even more useful stuff.

If there's a module or resource that you think should be on this page, create an issue and I'll check it out!

## Versions
### Current Foundry Version - 0.7.9
If you want to view my preferred modules for a specific version of Foundry, you can use the 
[commit history](https://github.com/NateHawk85/Nathans-DnD5e-Foundry-Modules/commits/main) to view past versions of this page. Each commit should have the
corresponding Foundry version in the commit message, and if it doesn't, I messed up somewhere :)

## Table of Contents
- Modules and Settings
    - [Foundry VTT Settings](#foundry-settings)
        - [Core Settings](#core-settings)
        - [System Settings](#system-settings)
    - [Must-Have Modules](#must-have-modules)
    - [List of Currently-Installed Modules, Descriptions, and Settings](#all-installed-modules)
    - [Awesome Media Modules](#awesome-media-modules)
    - [Awesome Media Modules (that I've already organized)](#awesome-organized-media-modules)
        - [Music](#music-modules)
        - [Map Packs](#map-pack-modules)
    - [Modules on the Chopping Block](#modules-to-chop)
    - [Modules to Review](#modules-to-review)
    - [Modules to Review at a Later Date](#modules-to-review-later)
    - [Other Cool Modules](#other-cool-modules)
    - [Modules with Possible Performance Issues](#modules-with-performance-issues)
    - [Modules Reviewed and Retired](#modules-reviewed-and-retired)
- Notes and Resources
    - [Macro Notes](#macro-notes)
    - [Performance Improvements](#performance-improvements)
    - [Other Useful Resources](#useful-resources)
    - [Other Media and Software](#other-media)
        - [Software](#software)
        - [Maps and Tokens](#maps-and-tokens)
        - [Sounds and Music](#sounds-and-music)
        - [Other D&D Materials](#other-dnd-materials)

<a name="foundry-settings"></a>
## Foundry VTT Settings
<a name="core-settings"></a>
### Core Settings
Setting                             | Default   | Recommended   | Comments
---                                 | ---       | ---           | ---    
Enable Chat Bubbles                 | Enabled   | ---           | ---    
Pan to Token Speaker                | Enabled   | Disabled      | ---    
Disable Pixel Resolution Scaling    | Disabled  | ---           | ---    
Left-Click to Release Objects       | Disabled  | Enabled       | ---    
Maximum Framerate                   | 60        | ---           | ---    
Token Drag Vision                   | Disabled  | ---           | ---    
Enable Soft Shadows                 | Enabled   | ---           | ---    
Token Vision Animation              | Enabled   | ---           | ---    
Light Source Animation              | Enabled   | ---           | ---    
Zoomed Texture Antialiasing         | Enabled   | ---           | ---    
Animate Roll Tables?                | Enabled   | Disabled      | ---    
Cone Template Type                  | Round     | ---           | ---    

<a name="system-settings"></a>
### System Settings
Setting                             | Default   | Recommended   | Comments
---                                 | ---       | ---           | ---    
Rest Variant                        | PHB       | ---           | ---    
Diagonal Movement Rule              | PHB       | ---           | ---    
Initiative Dexterity Tiebreaker     | Disabled  | Enabled       | ---    
Apply Currency Weight               | Enabled   | ---           | ---    
Disable Experience Tracking         | Disabled  | Enabled       | ---    
Collapse Item Cards In Chat         | Disabled  | ---           | ---    
Allow Polymorphing                  | Disabled  | Enabled       | ---    

<a name="must-have-modules"></a>
## Must-Have Modules
If I had to run Foundry with a limited amount of modules, these are the ones I'd definitively pick up first. Here's my short(ish) list of the modules (and
module combinations) that have the biggest impact on the games I run. More in-depth descriptions of each module can be found in the sections below this one.
- [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) for time tracking. (Requires [About Time](https://foundryvtt.com/packages/about-time/).)
- [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/) combined with [Midi QoL](https://foundryvtt.com/packages/midi-qol/), 
  [Let Me Roll That For You](https://foundryvtt.com/packages/lmrtfy/), [Dynamic Active Effects](https://foundryvtt.com/packages/dae/),
  and [About Time](https://foundryvtt.com/packages/about-time/) for tons of combat enhancements.
- [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/) and [Macro Folders](https://foundryvtt.com/packages/macro-folders/) for folder 
  organization.
- My personal [Custom Shared Compendium](https://www.reddit.com/r/FoundryVTT/comments/fvw3c7/how_to_create_a_tiny_module_for_shared_content/) for sharing
  scenes, items, actors, rules, etc. between worlds.
- [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice/) for dice rolling!
- [Drag Ruler](https://foundryvtt.com/packages/drag-ruler/) for automatically calculating movement distances during combat.
- [Easy Target](https://foundryvtt.com/packages/easy-target/) to speed up targeting as a GM.
- [Forien's Copy Environment](https://foundryvtt.com/packages/forien-copy-environment/) for sharing the same settings between worlds.
- [GM Notes](https://foundryvtt.com/packages/gm-notes/) to store private notes on things.
- [Multilevel Tokens](https://foundryvtt.com/packages/multilevel-tokens/) for various grid enhancements.
- [Playlist Importer](https://foundryvtt.com/packages/playlist_import/) for setting up playlists and music with almost zero hassle.
- [PopOut!](https://foundryvtt.com/packages/popout/) for utilizing multiple monitors (and that sweet, sweet Alt + Tab).
- [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/) for access to any virtually any entity at a moment's notice.
- [The Furnace](https://foundryvtt.com/packages/furnace/) for the playlist improvements and advanced macros.
- [Tidy UI - Game Settings](https://foundryvtt.com/packages/tidy-ui_game-settings/) and [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) for a 
  cleaner overall UI.
- [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) and [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/) to store the 
  most-used actions for monsters.
- [Token Mold](https://foundryvtt.com/packages/token-mold/) for creating monsters without fiddling with settings over and over again.
- [Universal Battlemap Importer](https://foundryvtt.com/packages/dd-import/) for importing my custom maps and other mapmakers' creations.

<a name="all-installed-modules"></a>
## List of Currently-Installed Modules, Descriptions, and Settings
- [About Time](https://foundryvtt.com/packages/about-time/) - Tracks in-game time and required for the 
  [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) module. 

  NOTE: This module may be potentially going away with the future core API time updates.
  
  Setting                               | Default       | Recommended   | Comments
  ---                                   | ---           | ---           | ---    
  Game time update multiplier           | 1             | ---           | ---    
  Real time interval                    | 30            | 1             | ---    
  Game Seconds per round                | 6             | ---           | ---    
  Timeout before assuming master clock  | 5             | ---           | ---    
  Active calendar                       | UserCreated   | ---           | ---    
  Debug output                          | Disabled      | ---           | ---    
  
- [Autocomplete Inline Properties](https://foundryvtt.com/packages/autocomplete-inline-properties/) - A nice quality of life fix that autocompletes...
  inline... properties... Yeah, I probably didn't need to explain this one. Great quality of life fix that lets us forgetful folk remember the correct 
  entity fields.
- [Autocomplete Whisper](https://foundryvtt.com/packages/autocomplete-whisper/) - Overhauls the whisper functionality to provide an easy-to-use pop-up to
  select whisper targets.
  
  Setting                   | Default   | Recommended   | Comments
  ---                       | ---       | ---           | ---    
  Include GM Usernames List | Disabled  | Enabled       | ---    
  
- [Automatic Journal Icon Numbers](https://foundryvtt1.com/packages/journal-icon-numbers/) - Applies numbered pins to journal entries. Requires 
  [Lib - Color Settings](https://foundryvtt.com/packages/colorsettings/). Nice to differentiate journal icons, especially if you have a lot of them.
  
  Setting               | Default                       | Recommended   | Comments
  ---                   | ---                           | ---           | ---    
  Foreground colors     | 000000ff                      | ---           | ---    
  Background colors     | ffffff6f                      | ---           | ---    
  Font family           | \*blank\*                     | ---           | ---    
  Icon style            | Circle                        | ---           | ---    
  Upload path           | upload/journal-icon-numbers   | ---           | ---    
  Icon scale            | 0.75                          | ---           | ---    
  Icons from folders    | Enabled                       | ---           | ---    
  Rebuild all icons     | No rebuild                    | ---           | ---    
  
- [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) - Tracks time/calendar/weather with a widget. Can be used to automatically generate a
  weather description based on the current time of year and environment. Requires the [About Time](https://foundryvtt.com/packages/about-time/) module.
  
  Setting                               | Default   | Recommended   | Comments
  ---                                   | ---       | ---           | ---
  Calendar display for non-GM           | Enabled   | Disabled      | Could enable, but in some situations the party may be unaware of time, aka long Underdark scenarios    
  Output weather to chat                | Enabled   | ---           | ---    
  Output moon changes to chat           | Enabled   | ---           | ---    
  Display time as 24hr                  | Disabled  | ---           | ---    
  Disable global illumination at night  | Enabled   | Disabled      | Could enable, however, I prefer to modify this via [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) instead    
  Use celsius                           | Disabled  | ---           | ---    
  Can players see the weather           | Disabled  | ---           | ---    
  Use Lunar Sanctions                   | Disabled  | ---           | ---    
  
- [Cautious Gamemaster](https://foundryvtt.com/packages/CautiousGamemastersPack/) - Disables GM from speaking as PCs, hidden tokens automatically roll blind,
  small chat QoL with up/down arrows, and typing notifications. Automatically hides private rolls from chat, too, which is not configurable.
    - Disable GM speaking as PC tokens --> Enabled
    - Blind chats made by hidden tokens --> Enabled
    - Disable chat recalls --> Disabled
    - Notify typings --> Enabled
- [Character Actions list DnD5e](https://foundryvtt.com/packages/character-actions-list-5e/) - Adds a reusable component that details different actions a 
  player can take, including actions and bonus actions. It is required for [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/), otherwise, I probably 
  wouldn't use it.
    - Limit actions to cantrips --> Disabled
    - Include minute-long spells as actions --> Disabled
- [Chat Images](https://foundryvtt.com/packages/chat-images/) - Allows you to put images in chat via uploading, screenshots, etc. I find it very useful for 
  sharing certain bits of the map with only certain players, or showing them, "Look, I swear. Boblin really did crit 3 times in a row."
  
  NOTE: This has the possibility of considerably bloating your server. Make a note to do a routine check to remove unnecessary images in order to keep your 
  Data folder's footprint down.
    - Warning on drop --> Enabled
    - Warning on paste --> Disabled
    - Uploaded files quality --> .5
    - Embedded files quality --> .5
    - Files save location --> Data folder (NOTE: Make sure to ignore this folder from your players' sight via the file picker, if you care about that stuff.)
    - Embed if upload is not possible --> Disable (NOTE: Enable if you want your players to be able to use the module, but don't want to give upload 
      permissions.)
- [Chat Portrait](https://foundryvtt.com/packages/chat-portrait/) - Adds an image of the corresponding image/token to player and GM chat messages.
    - Use token image --> Disabled
    - Portrait size --> 36
      Portrait border shape --> Square
    - Use player color for portrait border --> Enabled
    - Portrait border color --> #000000
    - Portrait border width --> 2
    - Change color of message border --> Disabled
    - Display chat flavor text next to portrait --> Disabled
    - Force name search --> Disabled
- [Combat Enhancements](https://foundryvtt.com/packages/combat-enhancements/) - Adds health tracking via a radial bar and HP field in the Combat Tracker, as
  well as drag and drop initiative reordering.
    - Show HP for actor type --> None
    - Enable initiative reflow --> Disabled
    - Enable HP field --> Enabled
    - Enable HP radial bar --> Enabled
    - Enable target removal every turn --> Disabled (Could enable, however, this is already taken care of by 
    [Midi QoL](https://foundryvtt.com/packages/midi-qol/))
- [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/) - One of the most important and impactful combat modules out there. There's too
  many functions to list, and if you want to automate your combat, this is absolutely necessary. It works extremely well when combined with the 
  [Midi QoL](https://foundryvtt.com/packages/midi-qol/) module.
    - Core settings
        - Enable concentrator --> Enabled
        - Enable enhanced conditions --> Enabled
        - Enable award XP --> Disabled
        - Enable hide actor names --> Enabled
        - Enable pan to token --> Enabled
        - Enable select token --> Disabled
        - Enable reroll initiative --> Disabled
        - Enable temporary combatants --> Enabled
        - Token effect icon size --> Small
        - Enable mighty summoner --> Enabled
    - CUBPuter settings
        - Award XP --> Default
        - Concentrator
            - Enable concentrator --> Enabled
            - Concentration condition name --> Concentrating
            - Concentration attribute --> con
            - Health attribute --> attributes.hp
            - Notify chat --> Enabled
            - Prompt player --> Enabled
            - Automatically set concentrating status --> Enabled
            - Notify on double concentration --> GM only
        - Enhanced Conditions
            - Enable enhanced conditions --> Enabled
            - Output to chat --> Enabled
            - Output during combat --> Enabled
            - Remove default status effects --> Disabled
            - Suppress preventative save reminder --> Enabled (After updating to Foundry version 0.7.x. I would recommend NOT modifying this option manually)
        - Hide Names
            - Enabled hide actor names --> Enabled
            - Hide all name parts --> Enabled
            - Hide hostile names --> Enabled
            - Hide neutral names --> Enabled
            - Hide friendly names --> Disabled
            - Hostile replacement name --> \*blank\*
            - Neutral replacement name --> \*blank\*
            - Friendly replacement name --> Unknown Creature (This is unused)
            - Hide chat card footer --> Enabled
        - Pan/Select
            - Enable pan to token --> Enabled
            - Pan GM --> All
            - Pan players --> None
            - Enable select token --> Disabled
            - Select GM --> All (This is unused)
            - Select players --> Disabled
            - Deselect tokens --> Disabled
        - Reroll Initiative
            - Enable reroll initiative --> Disabled
            - Reroll temporary combatants --> Disabled
        - Temporary Combatants
            - Enable temporary combatants --> Enabled
        - Misc Token
            - Enable auto roll hostile token HP --> Disabled
            - Hide automatic HP roll --> Enabled 
            - Token effect icon size --> Small
            - Enable mighty summoner --> Enabled
            - Mighty summoner feat name --> Mighty Summoner
    - Triggler
        - attributes.hp.value = 0 value for PCs only
        - attributes.hp.value = 0 value for NPCs only
        - attributes.hp.value > 0 value for PCs only
        - attributes.hp.value > 0 value for NPCs only
    - Condition Lab
        - Keep default conditions and add journal entries for custom conditions in a custom compendium. *On all conditions, set Output to Chat --> Enabled*
        - Unconscious
            - Icon --> icons/svg/unconscious.svg
            - Add when attributes.hp.value = 0 value for PCs only
            - Remove when attributes.hp.value > 0 value for PCs only
            - Overlay --> Enabled
        - Dead
            - Icon --> icons/svg/skull.svg
            - Add when attributes.hp.value = 0 value for NPCs only
            - Remove when attributes.hp.value > 0 value for NPCs only
            - Overlay --> Enabled
            - Mark defeated --> Enabled
        - Fury of the Small
            - Icon --> systems/dnd5e/icons/skills/yellow_20.jpg
            - Journal --> Journal (C) --> Custom Conditions --> Fury of the Small
        - Hexblade's Curse
            - Icon --> systems/dnd5e/icons/skills/affliction_08.jpg
            - Journal --> Journal (C) --> Custom Conditions --> Hexblade's Curse
        - Spirit Totem
            - Icon --> systems/dnd5e/icons/skills/green_20.jpg
            - Journal --> Journal (C) --> Custom Conditions --> Spirit Totem
        - Flames of Phlegethos
            - Icon --> systems/dnd5e/icons/skills/fire_11.jpg
            - Journal --> Journal (C) --> Custom Conditions --> Flames of Phlegethos
        - Wild Shape
            - Icon --> systems/dnd5e/icons/skills/green_13.jpg
            - Journal --> Journal (C) --> Custom Conditions --> Wild Shape
        - Hunter's Mark
            - Icon --> systems/dnd5e/icons/spells/evil-eye-red-1.jpg
            - Journal --> Journal (C) --> Custom Conditions --> Hunter's Mark
        - Bladesong
        -   Icon --> systems/dnd5e/icons/skills/weapon_01.jpg
        -   Journal --> Journal (C) --> Custom Conditions --> Bladesong
        - Add more conditions as needed!
- [Compact DnDBeyond 5e Character Sheet](https://foundryvtt.com/packages/compact-beyond-5e-sheet/) - Adds a compact DnDBeyond-style character sheet for PCs.
    - Use expanded sheet as limited --> Disabled
    - Include minute-long spells as actions --> Enabled
    - Show passive perception --> Enabled
    - Show passive insight --> Enabled
    - Show passive investigation --> Enabled
    - Show passive stealth --> Enabled
- [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/) - Adds the ability to create folders for compendiums. A must-have if you prefer a
  high amount of organization in your world.

  NOTE: If while using this module you 1) add a compendium to a folder, then 2) remove the compendium from the folder, that compendium will no longer appear in
  your Default folder. Re-enable the compendium in a folder to show it again.
- [Compendium Scene Viewer](https://foundryvtt.com/packages/scene-viewer/) - Allows for viewing compendium scenes from within the compendium, not requiring
  you to import them. This used to be an extremely big pain point, especially for someone with a large amount of scenes stored in their compendiums. Very 
  nice quality of life fix.
  
  NOTE: This module can make empty compendiums unusable and unable to open.
    - Context menu option --> Enabled
- [Condition Automation](https://foundryvtt.com/packages/condition-automation/) - Automatically generates shadows based on elevation when combined with
  [Token Magic FX](https://foundryvtt.com/packages/tokenmagic/), removes vision automatically when a token is blinded, and freezes a token when it is
  paralyzed. It has multiple other status effects that automatically affect a token if its status changes.
    - Blinding setting --> Perfect vision limit sight
    - Blind status name --> Blinded
    - Enable unlinked token vision settings --> Disabled
    - Shadow Settings --> Disabled (Would enable if I had Token Magic FX enabled)
- [Conditional Visibility](https://foundryvtt.com/packages/conditional-visibility/) - Adds certain conditions that hides tokens for players based on certain
  sight conditions such as Invisibility, being shrouded in the Darkness spell, etc. A borderline must-have if one of your players is a Shadow Sorcerer.
    - Auto hide on stealth rolls --> Disabled
- [Crash's 5e Downtime Tracking](https://foundryvtt.com/packages/5e-training/) - Adds another tab on supported character sheets to allow for tracking of
  activities. Uses could include training, keeping track of "worship score"/piety, Xanathar's downtime rules, etc.
    - Enable GM only mode --> Disabled
    - Show downtime tab (PCs) --> Enabled
    - Show downtime tab (NPCs) --> Enabled
    - Downtime tab name --> Activities
    - Character sheet width adjustment --> 50
    - Default attribute/skill for check-based progression --> Intelligence
    - Default activity completion target (ability/skill/tool checks) --> 300
    - Default activity completion target (simple) --> 10
    - Default check difficulty (checks with DCs) --> 10
    - Default activity completion target (checks with DCs) --> 5
    - Announce activity completion for --> PCs only
- [CritterDB Import](https://foundryvtt.com/packages/critterdb-import/) - Allows for importing homebrew monsters from [CritterDB](https://critterdb.com/). A
  button will appear at the bottom of the Compendiums tab and import them to the compendium CritterDB - MyCritters.
  
  NOTE: I usually keep this disabled until I need to import something.
- [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/) - Creates a second configurable hotbar that can be moved and styled according to your own
  specifications. This works extremely well when combined with the [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) module. 
  
  NOTE: I personally specify the default custom hotbar that works best for me. That way, I don't have to configure it in multiple areas. If other users want a
   different one, they can override it :)
    - Default Custom Hotbar Settings
        - Custom hotbar color --> #192a3080
        - Custom hotbar border color --> #7db7f0ff
        - Custom hotbar horizontal position --> 800
        - Custom hotbar vertical position --> 10
        - Custom hotbar highlight color --> #ff6400ff
        - Custom hotbar highlight color (empty) --> #808080ff
    - Default Global Core Hotbar Settings
        - Custom hotbar color --> #00000080
        - Custom hotbar border color --> #000000ff
        - Custom hotbar horizontal position --> 220
        - Custom hotbar vertical position --> 10
        - Custom hotbar highlight color --> #ff6400ff
        - Custom hotbar highlight color (empty) --> #939799ff
- [Custom Journal](https://foundryvtt.com/packages/custom-journal/) - Adds a couple more journal sheets and some custom styling options.
- [Custom Shared Compendiums](https://www.reddit.com/r/FoundryVTT/comments/fvw3c7/how_to_create_a_tiny_module_for_shared_content/) - Although this isn't a
  standard module, I highly recommend creating one of these for your own use.
- [D&D Beyond Importer](https://foundryvtt.com/packages/ddb-importer/) - A fork of the 
  [VTTA D&DBeyond Integration](https://foundryvtt.com/packages/vtta-dndbeyond/) module that allows you to automatically import spells, items, and character
  sheets from D&DBeyond into Foundry. Although it's currently in development and missing some functionality, it is still definitely an extremely useful
  module if you either a) own a lot of content on D&DBeyond (guilty), or b) have players that prefer to create their character sheets in D&DBeyond. To get
  the most out of this module, it should be paired with both [Dynamic Active Effects](https://foundryvtt.com/packages/dae/) and 
  [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/).
    - Core Settings
        - Use full source book name --> Enabled
        - Should imported monster have vision set --> Enabled
        - Restrict to trusted users --> Disabled
        - Allow all users to sync to DDB --> Enabled
        - Monster D&D beyond link in title bar --> Enabled
        - Character DDB-importer button in title bar --> Disabled
        - Make title bar icon white --> Disabled
        - Log level --> Info
    - Core Setup
        - A location for image uploads --> assets/ddb-imported-images
        - A cobolt cookie --> \*your cobolt cookie here\*
        - Campaign URL/ID --> \*your campaign URL/ID here, if you have one\*
        - Patreon key --> \*your patreon key here, if you have one\*
    - Compendiums
        - Spells --> DDB Spells
        - Items --> DDB Items
        - Classes --> DDB Classes
        - Class features --> DDB Features
        - Races --> DDB Races
        - Feats --> DDB Feats
        - Racial traits --> DDB Racial Traits
        - Monsters --> DDB Monsters
        - Create default compendiums if missing --> Enabled
- [DF Curvy Walls](https://foundryvtt.com/packages/df-curvy-walls) - Adding circles to the standard Foundry wall-creation tools is something I didn't even 
  know I needed. Very useful, especially for putting a terrain circle around your 1000th tree and your carefully-copied wall segments just don't want to paste 
  correctly.
- [DF Settings Clarity](https://foundryvtt.com/packages/df-settings-clarity/) - Adds icons next to individual settings to distinguish global settings from 
  player ones. Extremely useful for people like me who spend quite a bit of time playing around with module settings :)
- [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice/) - How can you play D&D without any dice!? Allows you to roll 3D dice on your screen. It is
  absolutely necessary for the clickity clackities.
    - Core Settings
        - Max number of dice --> 20
        - Global animation speed --> Player's choice
        - Simultaneous rolls are merged --> Enabled
        - Dice can be flipped --> Enabled
        - Disabled during combat --> Disabled
        - Display chat message immediately --> Disabled
        - Enable 3D dice on roll tables --> Disabled
        - Enable 3D dice on inline rolls --> Enabled
        - Disable 3D dice on NPC rolls --> Disabled
        - Allow interaction with rolled dice --> Enabled
    - 3D Dice Settings
        - Dice presets (faces) --> Standard
        - Theme --> Custom
        - Texture --> Metal
        - Material --> Glass
        - Font --> Auto
        - Label color --> #000000
        - Dice color --> #28c9cc
        - Outline color --> #547fcf
        - Edge color --> #0e7f81
        - Automatically hide --> Enabled
        - Millisecs before hiding --> 500
        - Hide FX --> FadeOut
        - Sound effects --> Enabled
        - Sound volume --> .5
        - Table surface for sounds --> Wood tray
        - Auto scale --> Enabled
        - Manual scale --> 75
        - Animation speed --> Normal
        - 3D layer position --> Over sheets
        - Throwing force --> Medium
        - Shadows quality --> High
        - Advanced lighting --> Enabled
        - Enable "high density" screen support --> Enabled
- [Dice Tooltip](https://foundryvtt.com/packages/dice-tooltip/) - Shows hit bonuses and damage calculations when hovering over items in a PC/NPC's inventory.
  Pretty nice quality of life fix.
- [DnD5e Helpers](https://foundryvtt.com/packages/dnd5e-helpers/) - Some helpful automation to remind GMs of legendary actions, regeneration, undead fortitude 
  checks, wild magic surges, auto proficiencies, and more. Also provides additional homebrew rules like open wounds, great wounds, and measured template
  adjustments.
  
  NOTE: At the time of writing this, I've had issues with setting undead fortitude to 'Quick Saves'. Hoping that will be fixed in upcoming versions.
    - Auto adjust templates to 5e grids --> No Template Scaling
    - Compute cover on target --> Center Point Vision (Foundry Vision)
    - Consider intervening tokens as half cover --> Disabled
    - Hide GM info from cover report --> Enabled
    - Wild magic auto-detect --> Enabled
    - Wild magic feature name --> Wild Magic Surge
    - Wild magic surge table name --> Wild Magic Surges
    - Tides of chaos feature name --> Tides of Chaos
    - Hide wild magic from players --> Enabled
    - Reaction status automation --> Apply and Remove
    - Reaction status name --> Reactionless (NOTE: You must enable [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/) and create a 
      custom status in the Condition Lab with the same name in order to use this feature.)
    - Start of turn legendary action reset --> Enabled
    - Automatically roll any uncharged abilities with a d6 recharge --> Enabled
    - Auto proficiency --> Enabled
    - Automatic regeneration --> Enabled
    - Undead fortitude --> Advanced Saves (NOTE: Will change to 'Quick Saves' once fixed)
    - Great wound --> Disabled
    - Great wound name replacement --> Great Wound
    - Great wound table --> \*empty\*
    - Open wound feature name --> Open Wound
    - Open wound - death saves --> Disabled
    - Open wound - crits --> 0
    - Open wound - HP at 0 --> Disabled
    - Open wound - HP at 0 from a great wound --> Disabled
    - Open wound table --> \*empty\*
    - Debugging --> Disabled
- [DnDBeyond Character Sheet for 5e](https://foundryvtt.com/packages/dndbeyond-character-sheet/) - Adds a character sheet that mimics the style of 
  D&DBeyond. I personally prefer the look and feel of [Compact DnDBeyond 5e Character Sheet](https://foundryvtt.com/packages/compact-beyond-5e-sheet/), but
  they are both very similar.
- [Drag Ruler](https://foundryvtt.com/packages/drag-ruler/) - An updated version of [Show Drag Distance](https://foundryvtt.com/packages/ShowDragDistance/).
  As the title says, it's a quality of life improvement that shows the drag distance via colors when dragging a token. Good for in-combat use.
    - Core Settings
        - Swap spacebar and right click --> Enabled
        - Show PC speed to everyone --> Enabled
    - Speed Provider Settings
        - Speed settings provider --> Generic
        - Speed attribute --> actor.data.data.attributes.movement.walk
        - Dash multiplier --> 2
        - Color for walk --> 0, 255, 255 (NOTE: Default colors may be difficult for colorblind players.)
        - Color for dash --> 255, 100, 0
        - Color for unreachable --> 255, 0, 0
- [Dynamic Active Effects](https://foundryvtt.com/packages/dae/) - The successor to the old 
  [Dynamic Effects](https://foundryvtt.com/packages/dynamiceffects/) module, this acts as a bridge between the new Active Effects system implemented in
  Foundry 0.7.x and the DnD5e system. This will allow you to do multiple things, including calculating AC, adding bonuses to attacks, applying certain spells
  and effects, implementing non-SRD features and abilities... One of the most impactful modules out there. [Kandashi](https://github.com/kandashi) has an
  excellent guide regarding the Active Effects system and this module that can be found
  [here](https://docs.google.com/document/d/1hgCJ4evPXo1gabJ_1z8AZLnsAtNdETlRgqWyZL28nMs/edit).
  
  NOTE: This module will create a "DAE" button along the top ribbon of every actor and item. Clicking on this will bring you to a menu to apply Active Effects
  for that particular entity. Additionally, if you are converting from the old Dynamic Effects system, run the following two methods to convert all existing
  info over into the new system:
  
  ```
  DAE.convertAllItems();
  DAE.migrateAllActors();
  ```
    - Non-transfer effects require item targets (dnd5e) --> Enabled
    - Use the DAE active effect config sheet --> Enabled
    - Expire timed effects in real time --> Disabled ([About Time](https://foundryvtt.com/packages/about-time/) is installed, so this field isn't used)
    - Include active effects in special traits display --> Disabled
    - Allow players to see details of effects --> Edit
    - Use ability save field when rolling ability saves --> Enabled
    - Auto calculate armor class --> Enabled
    - Auto calc base AC --> Enabled
    - Confirm effect deletions --> Enabled
    - dae.enhanceStatusEffects.Name --> Disabled
    - Amount of debug to show --> None
- [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/) - Adds a compendium of items, spells, and macros that are automated by the 
  Active Effects system. Requires [Dynamic Active Effects](https://foundryvtt.com/packages/dae/).
  
  NOTE: In order to use, first import the macro compendium to your game. Then, you can cast the SRD spells included module as normal, and it should
  automatically work. Casting spells from the DnD5e SRD will NOT work, they need to be the DAE SRD spells.
- [Easy Target](https://foundryvtt.com/packages/easy-target/) - Allows for targeting tokens by holding the Alt key and clicking. Extremely useful for GMs.
    - Release behaviour --> Standard
- [Find the Culprit!](https://foundryvtt.com/packages/find-the-culprit/) - A module for debugging compatibility issues between other modules. Extremely
  helpful for when something isn't working the way you want it to and you don't know why.
  
  NOTE: I usually keep this disabled until I need to debug module issues.
- [Forien's Copy Environment](https://foundryvtt.com/packages/forien-copy-environment/) - By right-clicking within the General Information section of the
  Settings tab, this module allows you to import/export your world's current system version as well as your modules and their settings. Very useful for
  copying the same modules and their settings over to another world.
  
  NOTE: I usually keep this disabled until I need to import or export my world and module settings.
- [Forien's Custom Fonts](https://foundryvtt.com/packages/forien-custom-fonts/) - Adds Google fonts option to drawings and writings. Useful for when players
  want to be able to draw on things.
    - Font families --> Berkshire Swash,Marck Script,MedievalSharp,Milonga,Pirata One
- [Forien's Unidentified Items](https://github.com/League-of-Foundry-Developers/foundryvtt-forien-unidentified-items) - As a GM who frequently uses
  mysterious/items with abilities that aren't immediately obvious, this module is great in that it gives the GM the ability to "mystify" an item and revert
  it back to its true form. 
  
  NOTE: With the recent update to Foundry version 0.7.x and other module changes to Better Rolls/Magic Items/Better Curses, there is an extremely serious bug
  that can prevent your world from loading if you have previous versions of this module installed. If you have Forien's Unidentified Items version 0.2.3 or
  below, you MUST upgrade to version 0.2.4 or above or risk losing everything in your world.
    - Core Settings
        - Keep original icon --> Enabled
        - Allow tiering (nesting) --> Disabled
    - Icon Manager
        - Keep defaults
    - Property Manager
        - Equipped, Quantity, Weapon Type, and Weight --> Enabled
        - Everything else --> Disabled
- [Foundry Community Macros](https://foundryvtt.com/packages/foundry_community_macros/) - Various macros created by the community. You'll find them in the 
  corresponding compendiums.
  
  NOTE: I usually keep this disabled until I need a specific macro from this module.
- [Foundry Community Tables](https://foundryvtt.com/packages/foundry_community_tables/) - Same as 
  [Foundry Community Macros](https://foundryvtt.com/packages/foundry_community_macros/), but with tables!

  NOTE: I usually keep this disabled until I need a specific table from this module.
- [FPS Meter](https://foundryvtt.com/packages/fpsmeter/) - This module adds a small FPS counter in the top right corner. Useful for gauging performance at a 
  glance, especially when adding new modules. 
    - Show FPS --> Enabled
- [GM Notes](https://foundryvtt.com/packages/gm-notes/) - Adds a "GM Notes" button along the top ribbon of every actor and item. Clicking on the button will
  provide the GM with a place to store notes, information, curses, etc. without having to put them in a separate journal. As far as simplicity and flexibility
  goes, this is one of my staple modules that I use often.
    - Show full GM note label --> Enabled
- [Health Estimate](https://foundryvtt.com/packages/healthEstimate/) - A fun little module that allows you to set "health tiers" for tokens. By hovering over a 
  token, a customizable health phrase will pop up over the token, like "Uninjured", "Barely Injured", "Badly Injured" "Near Death", etc. depending on how much 
  HP they have left.
  
  NOTE: Although my players and I love this module, there's a very good chance that it will fall out of maintenance. It looks as though the last release (at 
  the time of writing this) was three months ago. 
    - Core Settings
        - GM Only --> Disabled
        - Players only --> Disabled
        - NPCs only --> Disabled
        - PCs only --> Disabled
        - Stages --> Unconscious, Near Death, Badly Injured, Injured, Barely Injured, Fresh
        - Death state name --> Dead
        - NPCs die immediately --> Enabled
        - Perfectionism --> Enabled
        - Death state on condition --> Enabled
        - Death marker --> icons/svg/skull.svg
        - Add temporary health --> Disabled
        - Hide on tokens with 0 max HP --> Enabled
        - Use vehicle threshold --> Disabled
        - Threshold stages --> Wrecked, Broken, Fully Functional
        - Vehicle stages --> Wrecked, Broken, Battered, Scratched, Pristine
    - Style Settings
        - Use color --> Enabled
        - Smooth gradient --> Enabled
        - One slider all the way to the left, one all the way to the right. HSL
        - Color of dead tokens --> Dark red
        - Outline --> Darken x 3
        - Font size --> x-large
        - Position --> Enabledop x -1
- [Illandril's Hotbar Uses](https://foundryvtt.com/packages/illandril-hotbar-uses/) - Adds a "uses" counter to item macros in hotbars. A good quality of life
  improvement, especially for players.
    - Show maximum values --> Enabled
- [Input Expressions](https://foundryvtt.com/packages/input-expressions/) - Allows for mathematical expressions and attribute/ability references to be entered 
  into numeric inputs. For example, you can set a zombie's HP to `3d8 + @abilities.con.mod`, and it will automatically roll it for you.
- [Item Containers](https://foundryvtt.com/packages/itemcollection/) - Allows for grouping items into containers (aka, bags of holding) via two new backpack
  sheets: ItemSheetShop and ItemSheetWithBags. Good for organizing character sheets, providing a merchant with inventory, etc.
    - Gold conversion --> Disabled
    - Gold conversion percentage --> 50
    - Sort bag contents --> Enabled
- [Item Macro](https://foundryvtt.com/packages/itemacro/) - Adds a macro editor to items so that when you roll them, the macro executes instead of the 
  default behaviour. Used by [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/) in some more complicated spells.
    - Hookbar hook --> Enabled
    - Character sheet hook --> Disabled (NOTE: Speed rolling with this option enabled will lead to errors running macros.)
- [Kobold Press OGL Compendium](https://foundryvtt.com/packages/koboldpressogl/) - Adds a Kobold Press OGL monsters compendium. Although the monsters do not 
  import with tokens automatically, creating new tokens for them is usually pretty easy. A great way to import new monsters with stat blocks already created.
  
  NOTE: I usually keep this disabled until I need to import a monster.
- [Less Fog](https://foundryvtt.com/packages/lessfog/) - Slightly tweaks the default Foundry lighting and provides options to customize it. The main benefit I
  see while using it is increased visibility for GMs when controlling tokens while still retaining token sight.
    - Darkness - Dimming --> 0.5
    - Darkness - Explored --> 0.65
    - Darkness - Unexplored (GM only) --> 0.85
    - Reveal tokens --> Disabled
- [Let Me Roll That For You](https://foundryvtt.com/packages/lmrtfy/) - A module that allows a GM to request rolls from the players. While I don't use the base
  functionality hardly ever, it is extremely useful when paired with the [Midi QoL](https://foundryvtt.com/packages/midi-qol/) module.
    - Enable parchment theme --> Enabled
    - Deselect tokens when opening requestor --> Disabled
- [Lib - Color Settings](https://foundryvtt.com/packages/colorsettings/) - A dependency used by many other modules. Adds an easy-to-use color picker that some 
  other modules rely on. If you don't have a module that depends on this, I'd recommend not installing it.
    - Show Error --> Enabled
- [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/) - A dependency used by many other modules. Provides module developers with a simple way to modify
  core Foundry code while reducing the likelihood of conflict with other modules. Again, if you don't have a module that depends on this, I'd recommend not 
  installing it, unless you're a module developer.
    - Core Settings
        - Notify GM of issues --> Enabled
        - Notify players of issues --> Disabled
    - LibWrapper Settings Menu
        - Keep as defaults
- [Loot Sheet NPC 5e](https://foundryvtt.com/packages/lootsheetnpc5e/) - Adds an NPC loot sheet. This information is stored separately from the token's main 
  sheet, so you can place items in the inventory and give your players permission to view it upon the NPC's death. I personally use it for merchants and
  lootable enemies.
    - Convert currency after purchases --> Enabled
    - Change icon for spell scrolls --> Enabled 
    - Display chat message for purchases --> Enabled
    - Loot currency --> Enabled
    - Loot all --> Enabled
- [Macro Editor](https://foundryvtt.com/packages/macroeditor/) - Adds an IDE to the macro editor. A must-have if you use macros in any capacity.
    - Show macro editor by default --> Enabled
    - Wrap lines --> Enabled
- [Macro Folders](https://foundryvtt.com/packages/macro-folders/) - Made by the same developer as 
  [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/), this module adds folders for your macros. It also allows the ability to have 
  each player have their own default folder, thereby keeping your macro folder a little cleaner. A must-have if you prefer a high amount of organization in
  your world.
- [Magic Items](https://foundryvtt.com/packages/magicitems/) - Allows for the creation of items with specific charges, spells, etc. Accessed via a separate
  tab on an item's sheet. When equipped and attuned to, the item's spells or magical feats will be available via the Spellcasting tab in the character's sheet.
    - Only identified --> Enabled
    - Hide settings tab from players --> Disabled
- [Math.js](https://foundryvtt.com/packages/_mathjs/) - Includes the Math.js library for developers. No functionality on its own.
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
        - Enable roll automation support --> Enabled
        - Add attack/damage buttons to item inventory list --> Enabled
        - Item delete check --> Enabled
        - Add damage buttons to chat message --> Disabled
        - GM sees all whispered messages --> Enabled
        - Really hide private/blind/self rolls --> Enabled
        - Fast forward ability rolls --> Disabled
        - Choose how to roll critical damage --> DnD5e default
        - Drag and drop targeting --> Disabled
        - Experimental - Apply checks before doing speed/macro roll --> Disabled
        - Colored border messages --> Borders only
        - Untarget at end of turn --> Untarget dead after roll
        - Players control owned hidden tokens --> Disabled
        - Enable debug --> None
    - Workflow Settings
        - GM
            - Auto roll attack --> Enabled
            - Auto fast forward attack --> Enabled
            - Auto roll damage --> Never
            - Auto fast forward damage --> Enabled
            - Remove chat card buttons after roll --> Attack and Damage
            - Hide roll details --> None (Allows for "visible" rolls if I want them to be made in front of the players)
        - Player 
            - Auto roll attack --> Enabled
            - Auto roll damage --> Never
            - Auto fast forward rolls --> Attack and Damage
            - Remove chat card buttons after roll --> Attack and Damage
        - Workflow
            - Auto target on template draw --> Walls Block
            - Auto target for ranged target spells/attacks --> Disabled
            - Require targets to be selected before rolling --> Disabled
            - Add macro to call on use --> Disabled
            - Enable concentration automation --> Disabled (Already handled by [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/), 
              otherwise I would enable this.)
            - Single concentration check --> Disabled (Same deal for this one)
            - Auto apply item effects to targets --> Enabled
            - Auto check if attack hits target --> Check - only GM sees
            - Auto check saves --> Save - only GM sees
            - Display saving throw DC --> Disabled
            - Search spell description --> Enabled
            - Prompt players to roll saves --> LMRTFY
            - Prompt GM to roll saves --> Auto
            - Delay before rolling for players --> 10
            - Auto apply damage to target --> No + damage card
            - Apply damage immunities --> apply immunities + physical
            - Roll formula on failed save for rwak/mwak --> Disabled
        - Misc
            - Show item details in chat card --> Card + Details: PC Only
                - Show Details --> All
            - Merge rolls to one card --> Enabled
            - Condense attack/damage rolls --> Disabled
            - Chat cards use token name --> Disabled
            - Enable speed item rolls --> Enabled
            - Enable speed ability (save/check/skill) rolls --> Enabled
            - Advantage --> alt
            - Disadvantage --> ctrl|cmd
            - Critical --> alt
            - Versatile --> shift
            - Enable midi-qol custom sounds --> Disabled
- [Monks Little Details](https://foundryvtt.com/packages/monks-little-details) - Lots of various quality of life improvements. Turn notifications in combat 
  (including sounds), slight UI changes to compendiums and conditions, actor sound effects, wall moving improvements, and more! Definitely a module worth 
  taking a look at. Replaces [Multiple Wall Point Mover (MWPM)](https://foundryvtt.com/packages/mwpm/).
    - Show 'next up' notification --> Disabled
    - Next Sound --> modules/monks-little-details/sounds/next.wav
    - Show 'your turn' notification --> Disabled
    - Current turn sound --> modules/monks-little-details/sounds/turn.wav
    - Next round sound --> modules/monks-little-details/sounds/round.wav
    - Volume --> 20
    - Disable sounds --> Enabled
    - Combat dialog position --> Top Right
    - Popout combat dialog --> Everyone
    - Disable the combat popout --> Disabled
    - Close combat when done --> Enabled
    - Prevent token combat removal --> Disabled
    - Show encounter CR --> Disabled
    - Swap target and settings button on the token HUD --> Enabled
    - Alter the token HUD status effects --> Enabled
    - Add DnD statuses --> Disabled
    - Use DnD5e invisible icon --> Disabled
    - Actor sound effects --> Enabled
    - Show scene palette --> Enabled
    - Change core CSS --> Enabled
    - Show drag points together --> Enabled
    - Movement key --> z
    - Retain notify --> Enabled
    - Show blodsplat --> Disabled
    - Show token highlight --> Disabled (NOTE: Handled by [Next Up](https://foundryvtt.com/packages/Next-Up/), otherwise it would be enabled.)
- [Monk's Scene Navigation](https://foundryvtt.com/packages/monks-scene-navigation/) - A cool tweak to add folders to the navbar. It also replaces the 
  default Foundry scene functionality so that left-clicking on a scene will view it, as opposed to opening configuration for it. Replaces 
  [Navbar Tweaks](https://foundryvtt.com/packages/navbar-tweaks/).
    - Click to view --> Enabled
    - Scene icons --> Disabled
    - Scene folders position --> Back
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
    - Auto-sync player targets --> Enabled
    - Auto-sync chat bubbles --> Enabled
    - Clone token flags set by other modules --> Enabled
- [Next Up](https://foundryvtt.com/packages/Next-Up/) - A successor of [Turn Marker](https://foundryvtt.com/packages/turnmarker/), this module provides an 
  animated icon underneath the current token's turn. Also, it can automatically open/close character sheets in combat when their turn pops up, so you don't 
  have to worry about a thousand different NPC sheets all the time! This also works with [PopOut!](https://foundryvtt.com/packages/popout/), which is extremely 
  useful.
    - Sheet position --> Top Left
    - Which actor sheet types to open --> Only Unlinked
    - Which combatant sheets to close --> Previous Combatant
    - Which actor shet types to close --> Unlinked Only
    - Popout actor sheets --> Enabled
    - Enable panning for individual clients --> Enabled
    - Pan to next combatant --> Enabled
    - Remove pin icon from character sheets --> Enabled
    - Add turn marker --> Enabled
    - Turn marker icon --> \[data\] modules/Next-Up/Markers/madmage.png
    - Animation speed for turn marker --> 5
    - Turn marker ratio --> 1.35
    - Start turn marker --> Shadow
    - Start turn marker icon --> \[data\] modules/Next-Up/Markers/DoubleSquare.png (NOTE: This is unused.)
    - Start marker ratio --> 1
- [Not Enough NPCs - A 5e NPC Generator](https://foundryvtt.com/packages/npcgen/) - Adds a nifty NPC generator on the fly via a button at the bottom of the 
  Actor tab.
  
  NOTE: I usually keep this disabled until I need to create NPCs, as I usually make batches of them before the game so I can tweak their personalities and iron
  out any kinks.
    - Core Settings
        - Save NPCs as characters --> Enabled
        - Role specific images --> Disabled
    - Custom Generator Entries
        - Keep defaults
- [Party Overview](https://foundryvtt.com/packages/party-overview/) - A successor to
  [Virtual Tabletop Assets - Party Overview](https://foundryvtt.com/packages/vtta-party/), Party Overview adds an info icon in the Actors tab that pops an 
  overview of the current party of PCs. HP, AC, languages, wealth, etc. is all available. I use it mainly for the Languages tab since the other info is 
  pretty easy to see, but it's useful information to have in one place.
    - Grant players access to the overview --> False
- [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) - Replicates the darkvision rules of DnD5e, including seeing dim as bright light, 
  grayscale for seeing in darkness, options for global illumination light scale, etc. Extremely useful for adding a pinch of flavor for those 
  characters that can see in the dark.
  
  NOTE: Has some pretty significant performance issues. If you or your players have low-end hardware, it might be necessary to avoid this module, as good as it
  is. Additionally, it was recently updated in that monochrome vision is now dependent on the darkness level of the scene. Adjusting the slider will adjust 
  the severity of the monochrome. 
    - Global illumination light --> Scene Darkness
    - Improved GM vision --> Enabled
    - Vision rules --> Dungeons & Dragons 5e
    - Dim vision in darkness --> Dim Light (monochrome)
    - Dim vision in dim light --> Bright Light
    - Bright vision in darkness --> Bright Light
    - Bright vision in dim light --> Bright light
    - Monochrome vision color --> #ffffff
    - Monochrome token icons --> Enabled
    - Monochrome special effects --> Disabled
    - Fog of war weather --> Disabled
    - Actual fog of war --> Disabled
- [Permission Viewer](https://foundryvtt.com/packages/permission_viewer/) - Adds an easy way to view and customize permissions for players by adding UI
  elements along the side of actors, items, journals, etc. The UI is a little weird to get used to at first, but it's a nice quality of life change.
  
  NOTE: Share icon = None, Diamond = Limited, Square = Observer, Circle = Owner
- [Pick-Up-Stix](https://foundryvtt.com/packages/pick-up-stix/) - Allows players and GMs to drag and drop items onto the actual scene grid to share/collect 
  loot. Useful for when players drop weapons during combat, finding treasure chests, and more.
  
  NOTE: This module has some compatibility issues with 
  [Forien's Unidentified Items](https://github.com/League-of-Foundry-Developers/foundryvtt-forien-unidentified-items). Placing a mystified item on the scene 
  grid will remove the identified version of that item, so make sure to save the un-mystified version in your Items tab.
    - Default container opened image --> modules/pick-up-stix/assets/chest-opened.png
    - Default container closed image --> modules/pick-up-stix/assets/chest-closed.png
    - Disable currency loot --> Disabled
    - Default container open sound --> \*blank\*
    - Default container close sound --> \*blank\*
- [Pin Cushion](https://foundryvtt.com/packages/pin-cushion/) - When in journal mode, allows the GM to double-click on the map for quick creation of journal
  entries. These entries can be hovered over to view their title at a glance, making them extremely useful for dungeon notes.
    - Show journal preview --> Disabled (Was enabled, however, a core change to Foundry now implements it)
    - Journal preview type --> HTML
    - Preview maximum length --> 500
    - Preview delay --> 500
- [Pings](https://foundryvtt.com/packages/pings/) - Allows players and GMs to ping on the screen to highlight important areas.
    - Minimum move permission --> Player
    - Mouse button to press for a ping --> LeftClick
    - Mouse button for a screen-moving ping --> Shift + LeftClick
    - Mouse button press duration --> 350
    - Key to press for a ping --> \*blank\*
    - Key for a screen-moving ping --> \*blank\*
    - Show player name --> Enabled
    - Ping image --> \*blank\*
    - Scale --> 1
    - Duration --> 1
    - Rotation --> Enabled
    - Rotation speed --> 2
    - Size change --> Enabled
    - Size change amount --> 0.125
    - Size change speed --> 1
- [Playlist Importer](https://foundryvtt.com/packages/playlist_import/) - Allows for bulk importing of playlists via a button at the bottom of the Playlist tab.
  The playlists need to be ordered in a specific way to work nicely with the Foundry playlist system, however, once your folder structure is set up correctly,
  this module makes adding new music a breeze. I highly recommend it for those with lots of different music tracks for different scenarios.
    - S3 bucket --> \*blank\*
    - Set repeat for tracks --> Disabled
    - Set stream for tracks --> Enabled
    - Base music directory --> music
    - Set default volume --> 0.5
    - Song duplicate checker --> Enabled (Disable if you are importing for the first time/starting over from scratch)
    - Reassign regex --> ^\\d\\d+ \*_\*-\* \*
    - Select source --> data
- [Polyglot](https://foundryvtt.com/packages/polyglot/) - Allows players and GM-selected tokens to speak in their selected languages that are only readable by 
  others that speak the same language. For others that do not speak that language, the text appears as gibberish symbols.
    - Custom languages --> \*blank\*
    - Default language --> \*blank\*
    - Scramble for GM --> Enabled
    - Randomize runes --> Disabled
    - Make fonts available --> Enabled
    - Display translated box --> Enabled
    - Scramble on OOC chat messages --> Enabled
- [PopOut!](https://foundryvtt.com/packages/popout/) - Allows players and GMs to pop actors out into their own separate window. One of my most-used quality of 
  life modules, and it's especially useful for those with multiple monitors.
    - Pop sheets out into windows --> Enabled
- [Quick Encounters](https://foundryvtt.com/packages/quick-encounters/) - Adds an option for the GM in the top left menu to create a Quick Encounter from a 
  group of selected tokens. This will pull the tokens from the scene and into a journal, which replaces the tokens on the scene. Opening the journal 
  provides a pop-up menu to initialize the encounter and place all the tokens you took out. Useful for large maps with multiple groups of enemies.
    - Freeze "captured" tokens --> Enabled
    - Show automatically from journal entry --> Enabled
    - Display XP after combat --> Disabled (NOTE: Would enable if using XP levelling.)
- [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/) - Another amazing quality of life module, Quick Insert adds a hotkey to search
  through your world's scenes, actors, journals, items, and even compendiums. I almost never actually use the navigation tabs anymore to look up entities 
  because of how often I use this module.
    - Core Settings
        - GMs only --> Disabled
        - Character sheet integration --> Enabled
        - Experimental - Index guard --> Disabled
        - Automatic indexing --> 10 seconds
        - Search button in scene controls --> Enabled
        - Keybind - Open quick insert --> Ctrl + \*spacebar\*
        - Enable global browse mode --> Enabled
    - Indexing Settings
        - Set to your own preferences. Personally, I disable player searching for macros, rollable tables, and scenes while leaving everything else enabled.
    - Customise Filters
        - Set to your own preferences, but I keep the defaults.
    - Character Sheet Filters
        - Set to your own preferences, but I keep the defaults.
- [Roofs and Overhead Tiles](https://foundryvtt.com/packages/roofs/) - One of my newer additions, and I haven't had the opportunity to use it much, yet. Allows
  for placing of tiles with a separate "layer" above normal tiles. Whenever a player goes underneath these tiles, the tiles will become transparent.
    - Default closed roof opacity --> 1
    - Default open roof opacity --> 0.2
    - Enable token autohide --> Enabled
    - Enable GM quick peek --> Enabled
- [Simplefog - Manual Fog of War](https://github.com/League-of-Foundry-Developers/simplefog) - An updated version of the older 
  [Simplefog](https://foundryvtt.com/packages/simplefog/) module, Simplefog allows you manually show/hide the fog of war, similar to Roll20's free tier. It's 
  extremely useful for world maps and exploration.
  
  NOTE: Unlike most of the other modules in this list, you should manually import the updated version of this module via the manifest URL located 
  [here](https://raw.githubusercontent.com/League-of-Foundry-Developers/simplefog/master/module.json). If you use the typical Foundry interface, it will install
  the old version that is incompatible with the lighting upgrades in Foundry version 0.7.x.
- [Simple Dice Roller](https://foundryvtt.com/packages/simple-dice-roller/) - Adds a menu in the top left to easily roll dice, similar to Roll20's interface.
    - Maximum dices in a roll --> 10
- [The Furnace](https://foundryvtt.com/packages/furnace/) - Adds drawing tools, async macros (that are relied on by other modules and macros), enabling and 
  disabling GM token vision, valuable playlist enhancements, modifying initiative value within the Combat Tracker, etc. Small, random quality of life
  improvements. I mainly get value from the playlist changes.
    - Advanced macros --> Enabled
    - Advanced drawing tools --> Enabled
    - Freehand sample rate --> 50ms
    - Enable hooks debugging --> Disabled
    - Improve the playlists UI --> Enabled
    - Volume slider linear to logarithmic exponential approximation --> 3
- [Tidy UI - Game Settings](https://foundryvtt.com/packages/tidy-ui_game-settings/) - Makes the module manager and configuration settings UI cleaner and
  easier to navigate. Very useful when setting up modules and fine-tuning your world.
    - Always activate the module Settings tab --> Enabled
    - Hide "disable all modules" button --> Disabled
- [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) - Arguably the best character/NPC sheet out there (and my personal favorite). Keeps things 
  compact and well-organized, and it plays well with most other modules. It also has tons of configurable options if you want to tweak it for your liking. 
  Highly recommend.
    - User: Tidy5e color theme --> Default (light)
    - Global: round portrait style --> None
    - Global: expanded limited view for character sheets --> Disabled
    - Global: disable right click context menu --> Enabled
    - Global: GM can always edit PC sheets --> Disabled
    - Global: only GM can edit active effects --> Disabled
    - Global: always show item quantity --> Enabled
    - Global: disable exhaustion tracker --> Disabled
    - Global: disable inspiration tracker --> Disabled
    - Global PCs: offset hit point overlay --> 0
    - User PCs: hide hit point overlay --> Enabled
    - Global vehicles: offset hit point overlay --> 0
    - Global vehicles: hide hit point overlay --> Enabled
    - Global NPCs: hide hit point overlay --> Enabled
    - Global NPCs: resting for NPCs --> Enabled
    - Global NPCs: always show traits --> Enabled
    - Global NPCs: always show skills --> Enabled
    - Global NPs: mark linked/unlinked NPCs --> Highlight linked and unlinked tokens
    - User PCs: hide character class list --> Disabled
    - User PCs: inanimate inspiration tracker --> Disabled
    - User PCs: hide exhaustion and inspiration tracker on 0 --> Disabled
    - User PCs: show inspiration indicator only on hover --> Disabled
    - User PCs: show exhaustion tracker only on hover --> Disabled
    - User PCs: toggle empty character traits --> Enabled
    - User PCs: move traits below resources --> Disabled
- [Token Action HUD](https://foundryvtt.com/packages/token-action-hud/) - Adds a HUD to the top of the screen to easily perform token actions like access
  inventory, skill checks and saves, cast spells, etc. Very useful if you have lots of different monsters and you don't want to open the stat blocks for each
  one.
    - HUD roll handler --> Core D&D5e (supports Midi QOL)
    - Enable HUD for current user --> Enabled
    - Always display HUD --> Enabled
    - Show HUD title --> Enabled
    - Show action icons --> Enabled
    - Always show custom categories --> Enabled
    - Enable hovering --> Disabled
    - Click to open categories --> Disabled
    - Ignore passive feats --> Disabled
    - Display spell information --> Enabled
    - Show all non-preparable spells --> Enabled
    - Hide actions with an activation longer than 1 round --> Enabled
    - Abbreviate skill and ability names --> Disabled
    - Show separate ability check and save categories --> Enabled
    - Show all NPC items --> Enabled
    - Show empty items (includes items and spells) --> Disabled
    - Show conditions category --> Enabled
    - Enable HUD for players --> Enabled
    - Show item sheet on right click --> Enabled
    - HUD scale --> 1
    - Dropdown categories --> Enabled
    - Enable debugging --> Disabled
- [Token Attacher](https://foundryvtt.com/packages/token-attacher/) - Allows for attaching anything to a token. Literally, anything. As its most basic, it's 
  useful to attach tokens to other tokens, making it easier to create vehicles, mounts, etc. However, it can be used for tons of things outside of that, 
  including prefabs. The more you use it, the more you'll get out of it.
- [Token Auras](https://foundryvtt.com/packages/token-auras/) - Adds an option for creating auras in the Image tab of a token, similar to Roll20.
- [Token Health](https://foundryvtt.com/packages/token-health/) - Small module that adds a hotkey to easily apply damage or healing to a given token. For me,
  I configured it to the Enter key.
    - Damage selected tokens --> Enter
    - Heal selected tokens --> Shift + Enter
    - Damage targeted tokens --> Alt + Enter
    - Heal targeted tokens --> Alt + Shift + Enter
    - Current hit points source --> attributes.hp.value
    - Max hit points source --> attributes.hp.max
    - Temporary hit points source --> attributes.hp.temp
    - Allow negative hit points --> Disabled
- [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) - Allows a player or GM to assign a given page on the hotbar to remember different 
  macros for different tokens, sort of like "profiles". This module is extremely useful for GMs especially as it gives you a quick way to remember the most 
  commonly-used actions on a monster-by-monster basis. Works well when combined with [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/).
    - Use custom hotbar --> Enabled
    - Link to linked actor --> Enabled
    - Always link to actor --> Enabled
    - Shared token hotbar --> Disabled
    - Lock shared hotbar --> Disabled
    - Debug mode --> Disabled
- [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/) - Adds small speed, AC, and passive perception markers when right-clicking on a token.
    - GM only --> Disabled
    - Show all passive senses (dnd5e) --> Enabled
    - Token position --> left
- [Token Mold](https://foundryvtt.com/packages/token-mold/) - Overwrites token options when placing new tokens. In order to configure these overrides, click
  the Token Mold settings icon at the top of the Actors tab. Very useful when you have to place a lot of monsters and want to override the configuration for
  each one, especially if you want to roll for HP.
    - Name, Config, and Overlay enabled
    - Apply settings to unlinked tokens only --> Enabled
    - Name
        - Add counting numbers to name as suffix --> Enabled
        - Number style --> arabic numerals
        - Increase index by up to --> 1
        - Add random adjective from dictionary --> Disabled
        - Choose adjectives from following rollable table --> English - smaller but curated set of 700
        - Adjective placement --> Front
        - Base name --> Do nothing
    - System Specific
        - Send result to chat --> Enabled
        - Set token size to creature size and scaled to map scale --> Enabled
    - Modify Default Config
        - Display Bars
            - Overwrite --> Enabled
            - OWNER
        - Bar 1 Attribute
            - Overwrite --> Enabled
            - attributes.hp \[character, npc, vehicle\]
        - Bar 2 Attribute
            - Overwrite --> Disabled
            - None
        - Display Name
            - Overwrite --> Enabled
            - OWNER
        - Disposition
            - Overwrite --> Disabled
            - NEUTRAL
        - Vision
            - Overwrite --> Disabled
            - Has vision --> Enabled
        - Random Scale Multiplier
            - Active --> Disabled
            - Min --> 0.8
            - Max --> 1.2
        - Random Rotation Range
            - Min angle --> 0
            - Max angle --> 360
        - Random mirroring
            - Horizontal --> Disabled
            - Vertical --> Disabled
    - Stat Overlay
        - Icon --> Eye
        - Attribute --> None
- [Tokenizer - v0.7.5 Edition](https://foundryvtt.com/packages/vtta-tokenizer/) - Adds a mini token editor in-game that is extremely easy to use.
  Good for when you have a monster that doesn't have its own token associated with it.
  
  NOTE: This is an update from the previous version - [Virtual Tabletop Assets - Tokenizer](https://www.vttassets.com/assets/vtta-tokenizer). In the old
  version, there is a bug that causes the configuration window to hang, effectively limiting GMs from making modifications to their settings. If you are
  on the old version and unable to update your settings, please switch to the updated module or follow the instructions
  [here](https://www.reddit.com/r/FoundryVTT/comments/jfoadt/foundry_vtt_075_release/g9mca2k?utm_source=share&utm_medium=web2x&context=3) to fix.
    - Default character frame --> /modules/vtta-tokenizer/img/default-frame-pc.png
    - Default NPC frame --> /modules/vtta-tokenizer/img/default-frame-npc.png
    - Avatar/token upload directory --> assets/tokens
    - Token size --> 400
- [Trigger Happy](https://foundryvtt.com/packages/trigger-happy/) - Adds the ability to make triggers for journals, macros, and more. The amount of 
  functionality this module provides is only limited by your imagination (and scripting ability). I use it primarily for our group's landing page.
    - Name of the trigger journal to use --> Trigger Happy (NOTE: I created a folder called 'Trigger Happy' and store all my journals in there.)
- [Turn Alert](https://foundryvtt.com/packages/turnAlert/) - Adds the ability to create chat alerts in the combat tracker via a bell icon at the top of the
  Combat Tracker while combat is active. Clicking on that bell will show the current turn alerts and allow the GM to modify them.
- [Tweak Playlist](https://foundryvtt.com/packages/tweakplaylist/) - Allows for hiding of tracks and playlists from players. Also adds the ability to
  randomize volume/delays. Most importantly, adds CSS to turn the stop/start buttons red/green respectively.
    - Hide tracks --> Enabled
    - Allow random --> Disabled
- [Universal Battlemap Importer](https://foundryvtt.com/packages/dd-import/) - Adds a button at the bottom of the Scenes tab that allows you to import .dd2vtt files
  as scenes. If you make your maps with [Dungeondraft](https://dungeondraft.net/) (which I highly recommend, especially with the
  [Forgotten Adventures](https://www.patreon.com/forgottenadventures) assets), this module will save you hours of prep work.

  NOTE: I usually keep this disabled until I need to import something.
    - Openable windows --> Disabled
- [Vance's Sidebar Resizer](https://foundryvtt.com/packages/vance-sidebar-resizer/) - Allows for resizing of the sidebar.
- [Virtual Tabletop Assets - Iconizer](https://foundryvtt.com/packages/vtta-iconizer/) - When new items are created that match an already-existing item icon,
  this module replaces the stock image with the existing icon. 
    - Icon replacement policy --> Replace all icons
    - Icon database policy --> Use the predefined database and my custom one
    - Base dictionary --> Foundry Icons
    - Icon prefix --> iconizer
- [Wall Cutter](https://foundryvtt.com/packages/WallCutter/) - Adds the ability to create a breakpoint at the halfway point in a wall segment. Pretty useful for
  fixing mistakes when creating walls for scenes.
- [Wall Height](https://foundryvtt.com/packages/wall-height/) - Adds two fields to the wall menu - Wall Height (Top) and Wall Height (Bottom). When set up,
  tokens with an elevation higher than the Top can see over the wall, while tokens with an elevation lower can see under the Bottom. Extremely useful when 
  combined with [Multilevel Tokens](https://foundryvtt.com/packages/multilevel-tokens/) to automatically adjust token elevation.
- [zSync](https://foundryvtt.com/packages/zsync/) - Syncs all player/GM views so that tokens are on the same layer for everyone.
<a name="awesome-media-modules"></a>
## Awesome Media Modules
- [Tons of them right here!](https://foundryvtt.com/packages/exclusive)
<a name="awesome-organized-media-modules"></a>
## Awesome Media Modules (that I've already organized)
<a name="music-modules"></a>
### Music
- [Michael Ghelfi Audio Pack](https://foundryvtt.com/packages/michaelghelfi/) - Great ambient sounds and songs!
<a name="map-pack-modules"></a>
### Map Packs
- [Baileywiki Maps Pack](https://foundryvtt.com/packages/baileywiki-maps/) - Full scenes filled with module integrations.
- [Domille's Wondrous Works - Battlemap Collection](https://foundryvtt.com/packages/dww-battlemaps/) - Great, high quality maps!
- [The MAD Cartographer | Free Battlemap Pack](https://foundryvtt.com/packages/mad-cartographer-free-maps/) - More great maps!
- [MikWewa Battlemap Bundle](https://foundryvtt.com/packages/mikwewa-free/) - All the maps!
- [Spellarena Battlemap Collection](https://foundryvtt.com/packages/spellarena/) - I'm running out of adjectives for these (awesome) map packs.
- [TacticalMap Battlemaps Pack](https://foundryvtt.com/packages/tacticalmap-free/) - These are pretty cool, too!
- [Tom Cartos Ostenwold](https://foundryvtt.com/packages/tomcartos-ostenwold/) - This one's a little different as it's a preset town. Also, great maps!
<a name="modules-to-chop"></a>2
## Modules on the Chopping Block
- [Kobold Press OGL Compendium](https://foundryvtt.com/packages/koboldpressogl/) - I've found that I rarely end up using these resources.
- [Not Enough NPCs - A 5e NPC Generator](https://foundryvtt.com/packages/npcgen/) - I haven't used it too recently; however, we have been stuck in a cave 
  system with limited RP opportunities, so once we get back to a major city, it may become a factor once again.
- [Roofs and Overhead Tiles](https://foundryvtt.com/packages/roofs/) - I haven't found many maps to use it in. That could change, however, if we end up 
  doing more urban maps.
<a name="modules-to-review"></a>2
## Modules to Review
<a name="modules-to-review-later"></a>
## Modules to Review at a Later Date
- [Grid Scaler](https://foundryvtt.com/packages/grid_scaler/) - Adds an option in the top-left menu to easily configure your background map to the grid. 
  Allows for setting map by "squares" (x by y), drawing a 3x3 grid, and more. Extremely useful and intuitive.
  
  Why removed: The two biggest use cases - "x by y squares" and 3x3 grid drawing - is bugged and doesn't work on Foundry 0.7.x.
  
  Will revisit: When the module has been updated to work in the current version of Foundry.
- [Loot Tavern Magic Item Compendium](https://foundryvtt.com/packages/free-loot-tavern-compendium/) - A compendium filled with custom magic items? Looks fun!
  
  Why removed: At the moment, I don't need any additional items for our campaign. However, that could change in the future.
  
  Will revisit: If the aforementioned scenario arises.
- [Point of Interest Character Sheet](https://foundryvtt.com/packages/poi-sheet/) - Adds a character sheet that can act as locations in world-map scenes.

  Why removed: I can see the utility, but I never ended up using it.
  
  Will revisit: If any of my campaigns rely heavily on world maps.
- [Token Magic FX](https://foundryvtt.com/packages/tokenmagic/) - An insanely cool module that adds visual effects to tokens, spell effects, custom lighting
  effects, macros, you name it. If you and your players want a more visual representation of the different spells and effects within your game, this is a 
  fantastic module to add.
  
  Why removed: Slight performance hits when logging in, as well as a small, but consistent, FPS dip.
  
  Will revisit: When performance is no longer an issue. HIGH PRIORITY.
- [Workshop's Ammo Swapper](https://foundryvtt.com/packages/workshop-ammo-swapper/) - Adds a super slick HUD at the bottom of your screen near your macro bar 
  that allows you to toggle between ammunition types.
  
  Why removed: Bugged, seems to only work on certain machines.
  
  Will revisit: When the module has been updated to show on all machines. HIGH PRIORITY.
<a name="other-cool-modules"></a>
## Other Cool Modules
- [Active Auras](https://foundryvtt.com/packages/ActiveAuras/) - Allows for some automation for auras. Would be more useful if our paladin was still with our
  group, but it's still an interesting concept.

  Why not install: Limited use cases for our group. If we had a paladin or some other member that loved to use aura effects, I'd take a closer look.
- [Active Token Lighting](https://foundryvtt.com/packages/ATL/) - Lets you adjust token light settings automatically via items. So by clicking a torch, the 
  PC would automatically start emitting torchlight.
  
  Why not install: Seemed like a sorta-kinda replacement for [Torch](https://foundryvtt.com/packages/torch/), however, it requires the items to be set up 
  correctly. I prefer to let my players gather their own items from the compendiums, and I'd rather not have items split between multiple compendiums if I can 
  help it. It's definitely a neat idea, though.
- [Blood 'N Guts](https://foundryvtt.com/packages/blood-n-guts/) - Adds blood splatters whenever tokens are injured. Looks pretty fun!

  Why not install: Not my thing, but it's definitely a cool idea.
- [Break Time](https://foundryvtt.com/packages/breaktime/) - A fun little module that pops up with a menu that lets you see who's back from a 
  break.
  
  Why not install: Not worth increasing my module count over. That being said, I like the idea of it :)
- [D&D 5e OGL Character Sheet](https://foundryvtt.com/packages/5e-ogl-character-sheet/) - Traditional D&D5e-style character sheet, similar to Roll20's.

  Why not install: Already have enough character sheets :) But it looks solid, for what it's worth!
- [DNDBeyond NPC Sheet](https://foundryvtt.com/packages/dndbeyond-npc-sheet/) - Adds an NPC sheet with D&DBeyond styling.

  Why not install: I almost always use [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) and 
  [Loot Sheet NPC 5e](https://foundryvtt.com/packages/lootsheetnpc5e/), so there's no use for a 3rd NPC sheet without additional functionality. However, if you
  prefer the look of this over Tidy5e, it's definitely worth getting!
- [Monster Blocks](https://foundryvtt.com/packages/monsterblock/) - Adds an NPC sheet in the style of the traditional 5e monster blocks.

  Why not install: Super cool-looking, but I prefer Tidy5e instead for NPCs.
- [Scene Defaults](https://foundryvtt.com/packages/scene-defaults/) - Allows you to template your new scenes. Interesting concept, could save time, especially
  because of the [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) changes.
  
  Why not install: Unfortunately, the fields in [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) that would make this module worth 
  installing aren't available to this module.
- [Token Tooltip Alt](https://foundryvtt.com/packages/token-tooltip-alt) - Allows you to fully customize any tooltips next to a token. Could possibly be a
  replacement for [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/). Was recommended by [SeuRonao](https://github.com/SeuRonao). Requires
  [CodeMirror](https://foundryvtt.com/packages/_CodeMirror/), [Math.js](https://foundryvtt.com/packages/_mathjs/), and
  [SortableJS](https://foundryvtt.com/packages/_sortablejs/).

  Why not install: Some of the functionality is already implemented in [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/). While I'm
  normally a fan of more customization, Token Info Icons seems to blend with the Foundry UI better, and I personally don't need to see everything when
  hovering over a token. If you're someone who wants to see everything at a glance, though, this module could prove invaluable!
<a name="modules-with-performance-issues"></a>
## Modules with Possible Performance Issues
- [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) - Very noticeable FPS drop when dragging tokens and recalculating light. Makes this module
  on the cusp of being removed...
- [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/) - Extremely small startup slowdown. Not enough to outweigh the benefits.
- [Drag Ruler](https://foundryvtt.com/packages/drag-ruler/) - Sometimes can stutter when dragging tokens. However, that's not enough to outweigh the 
  benefits, in my opinion.
- [Token Magic FX](https://foundryvtt.com/packages/tokenmagic/) - Slows down startup and has some FPS drops, especially when a large effect is placed. It's
  enough to prevent me from installing it, but you should test it on your own machine to see what you think, as it's a very useful module.
- [Virtual Tabletop Assets - Tokenizer](https://www.vttassets.com/assets/vtta-tokenizer) - Extremely small startup slowdown. Should upgrade to 
  [Tokenizer - v0.7.5 Edition](https://foundryvtt.com/packages/vtta-tokenizer/) regardless, but I'm not sure if that'll fix the startup speed. Not enough to 
  outweigh the benefits.
<a name="modules-reviewed-and-retired"></a>
## Modules Reviewed and Retired
- [Adventure Importer/Exporter](https://foundryvtt.com/packages/adventure-import-export/) - Allows you to, as the title says, import and export your worlds.

  Why retired: Never really used it, and I don't create a lot of content within Foundry. The content I do create can be copied via the Data folder.
- [Batch Permission Change by Folder](https://foundryvtt.com/packages/BatchPermissionsByFolder/) - Allows the GM to quickly change the permissions for all items
  in a folder.
  
  Why retired: Now included in default Foundry.
- [Better Curses for 5e](https://foundryvtt.com/packages/betterCurses/) - Makes it easier to apply Hexblade's Curse/Hunter's Mark/etc. damage bonuses and other
  macro effects.
  
  Why retired: My players already came up with macros to calculate the damage bonuses and stuff with 
  [Dynamic Active Effects](https://foundryvtt.com/packages/dae/), and I apply the conditions with 
  [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/). It also looks to be bugged when combined with the 
  [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) module. However, it could be useful for applying macros when attacking.
- [Better Rolls](https://foundryvtt.com/packages/betterrolls5e/) - Overhauls the rolling system with major improvements. Better-looking chat rolls, helpful 
  character sheet buttons, some custom fields for special weapons, etc. If not for [Midi QoL](https://foundryvtt.com/packages/midi-qol/), this would be one of
  my favorite modules.
  
  Why retired: Although it was a close call, I felt as though Midi QoL had a more robust system that fit my needs better. That being said, there are aspects of
  this module that are really freaking cool.
- [Chat Damage Buttons - Beyond20 Edition](https://foundryvtt.com/packages/chatdamagebuttons-beyond20/) - Adds "Apply Damage" buttons to Beyond20 chat rolls.
  
  Why retired: My characters moved all of their sheets directly into Foundry, so we no longer needed the Beyond20 chat buttons.
- [Combat Ready](https://foundryvtt.com/packages/combatready/) - Provides popups and sounds to let players know when it's almost their turn/is their turn.

  Why retired: A little too much for my taste, but it looks like a ton of fun if everyone's on board.
- [Compendium Browser](https://github.com/syl3r86/compendium-browser) - Allows for easy browsing of compendium files.

  Why retired: This module adds a severe amount of startup lag, and it can potentially cause issues with 
  [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/), which sort of provides the same functionality.
- [Darker Vision](https://github.com/Voldemalort/darker-vision-for-5e) - Replicates darkvision rules for 5e.

  Why retired: Broken in Foundry version 0.7.x and succeeded by [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/).
- [Deselection](https://github.com/Sky-Captain-13/foundry/tree/master/deselection) - By enabling, deselects tokens when clicking on an empty spot on the scene.

  Why retired: Now included in default Foundry under Core Settings --> Left-Click to Release Objects --> Enabled
- [Dice Tray](https://foundryvtt.com/packages/dice-calculator/) - Adds a small widget at the bottom of the chat to easily calculate custom rolls.

  Why retired: Great module, but I never really used it, especially when [Simple Dice Roller](https://foundryvtt.com/packages/simple-dice-roller/) is a thing.
- [Dynamic Effects](https://foundryvtt.com/packages/dynamiceffects/) - Allows for different item bonuses and nerfs.

  Why retired: Succeeded by [Dynamic Active Effects](https://foundryvtt.com/packages/dae/).
- [Easy Exports](https://foundryvtt.com/packages/easy-exports/) - Adds the ability to export sections of Journals, Scenes, and Actors. 

  Why retired: Never really used, and I have other methods of backing up my game.
- [Encounter Builder for 5e](https://foundryvtt.com/packages/encounter-builder-5e/) - Adds a screen for quick encounter difficulty calculation.
  
  Why retired: 1) My PCs are way stronger than their level would indicate (oops), and 2) I already use D&DBeyond's Encounter Builder for this. It's a pretty 
  neat module, though.
- [Ethck's 5e Downtime Tracking](https://foundryvtt.com/packages/downtime-ethck/) - Similar to 
  [Crash's 5e Downtime Tracking](https://foundryvtt.com/packages/5e-training/), these two module creators collaborated to make different downtime tracking 
  modules that fulfill different niches. Ethck's is definitely more complex, allowing for tracking of anything you can imagine. It comes with the downtime rules
  in Xanathar's Guide to Everything already configured.
  
  Why retired: If I would have found this module a couple weeks earlier, I guarantee we'd still be using it. However, once my players finished their downtime 
  activities, there wasn't any need for this module when Crash's already handles skill tracking in an arguably simpler way. Regardless, if you're planning on 
  having downtime, I highly recommend checking this one out.
- [Fog Manager](https://foundryvtt.com/packages/fogmanager/) - Allows the GM to manually edit fog.

  Why retired: I prefer [Simplefog](https://github.com/League-of-Foundry-Developers/simplefog).
- [Forien's Easy Polls](https://foundryvtt.com/packages/forien-easy-polls/) - Adds the ability to create polls in chat by typing `/poll`, your poll title, and 
  your given answers.
  
  Why retired: Not really used. Cool idea, though!
- [Forien's Quest Log](https://foundryvtt.com/packages/forien-quest-log/) - Adds a quest log at the bottom of the Journal tab to allow for players to create
  their own customized quests depending on who they've met.
  
  Why retired: It's a great module, and I'd definitely give it another go, but my players never really used it.
- [Forien's Scene Navigator](https://foundryvtt.com/packages/forien-scene-navigator/) - Adds the ability to open a scene by clicking on a journal link.

  Why retired: I never really used it.
- [GM Scene Background](https://github.com/death-save/gm-bg) - Allows GM to set background that only they can see.

  Why retired: Succeeded by [Scenery](https://foundryvtt.com/packages/scenery/) and part of default Foundry in Scene Settings.
- [GM Token-Drag Visibility](https://foundryvtt.com/packages/token-drag-visibility/) - Disables vision limitations when the GM drags tokens.

  Why retired: Other modules handle this functionality.
- [Hide GM Rolls](https://foundryvtt.com/packages/hide-gm-rolls/) - Hides GM rolls completely from chat.

  Why retired: Functionality included in [Midi QoL](https://foundryvtt.com/packages/midi-qol/).
- [Illandril's Chat Enhancements](https://foundryvtt.com/packages/illandril-chat-enhancements/) - Shows player names in chat, shows your current speaker, and 
  adds hover functionality to chat.
  
  Why retired: Doesn't really add a lot to the chat experience, at least from my point of view.

- [Journal to Canvas Slideshow](https://foundryvtt.com/packages/journal-to-canvas-slideshow/) - Allows for clicking of a journal entry to update an image on
  screen. Could be useful for landing pages.

  Why retired: Not what I needed, personally.
- [Laptop Form Fix](https://foundryvtt.com/packages/laptop-fix/) - Fixes CSS issues where the Save button is often unclickable due to being too far down.

  Why retired: Foundry's updates have fixed the issue, at least it appears that way.
- [Mount Up!](https://brunhine.com/fvtt/mountup) - A fun little module that lets tokens "mount" other tokens and follow them wherever they go. Useful if you
  have pets or use vehicles.

  Why retired: Somewhat buggy, and oftentimes shrank the "riding" token. Succeeded by [Token Attacher](https://foundryvtt.com/packages/token-attacher/).
- [Multiple Wall Point Mover (MWPM)](https://foundryvtt.com/packages/mwpm/) - By default, Foundry wall points that share the same space will not move
  together. This module enables that behaviour by allowing the GM to drag a single point and move all wall points that meet at that location. One of those
  modules that is extremely intuitive and should be an option in the core settings.
  
  Why retired: Functionality, plus more, is included in [Monks Little Details](https://foundryvtt.com/packages/monks-little-details).
- [Navbar Tweaks](https://foundryvtt.com/packages/navbar-tweaks/) - Always shows the navigation bar for GM users. Allows for hiding the "actual" name of the
  scene from players while showing the real name for the GM in the navigation. It's a small change, but quite useful.
  
  Why retired: Functionality is part of Foundry, and scene navigation is being updated by
  [Monk's Scene Navigation](https://foundryvtt.com/packages/monks-scene-navigation/).
- [No Summon Vision](https://foundryvtt.com/packages/no-summon-vision/) - Allows for "totems" and other similar objects that do not provide token vision for 
  their owner, but might need to be able to see.
  
  Why retired: Now included in default Foundry.
- [PnP - Pointer and Pings](https://foundryvtt.com/packages/pointer/) - Adds pointer/mouse follow functionality, plus a ping option as well.
  
  Why retired: [Pings](https://foundryvtt.com/packages/pings/) was much easier to use and fit our use-case better.
- [Scenery](https://foundryvtt.com/packages/scenery/) - Allows for different variations in backgrounds for scenes.
  
  Why retired: I never really used the extra variations. If I have a different variation, I just make a new scene for it. However, it could be useful in certain
  situations.
- [Show Drag Distance](https://foundryvtt.com/packages/ShowDragDistance/) - Another quality of life improvement that, as the title says, shows the drag distance
  when dragging a token. Has support for [Terrain Layer](https://foundryvtt.com/packages/TerrainLayer/). Good for in-combat use.
  
  Why retired: Outdated and replaced by [Drag Ruler](https://foundryvtt.com/packages/drag-ruler/).
- [Torch](https://foundryvtt.com/packages/torch/) - Adds a neat little icon to automatically create "torch light" around a token and consume a torch if one
  is available in the inventory.

  Why retired: Was having issues in the Foundry 0.7.x upgrade.
- [Turn Marker](https://foundryvtt.com/packages/turnmarker/) - Adds an animated icon beneath whoever's turn it is.
  
  Why retired: Outdated and replaced by [Next Up](https://foundryvtt.com/packages/Next-Up/).
- [VTTA D&DBeyond Integration](https://foundryvtt.com/packages/vtta-dndbeyond/) - Adds the ability to import monsters, spells, and character sheets from 
  D&DBeyond into Foundry. Also adds the ability to roll monster attacks and saves from the D&DBeyond page.
  
  Why retired: Succeeded by [D&D Beyond Importer](https://foundryvtt.com/packages/ddb-importer/) and I never really used the "roll from D&DBeyond" feature.
- [Virtual Tabletop Assets - Party Overview](https://foundryvtt.com/packages/vtta-party/) - Adds an info icon in the Actors tab that pops an overview of the
  current party of PCs. HP, AC, languages, wealth, etc. are all available. I use it mainly for the Languages tab since the other info is pretty easy to see,
  but it's useful information to have in one place.
    - Grant players access to the overview --> Disabled
    - Enable tooltips --> Disabled (conflicts with [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/), and is buggy)
    - Enable tooltips for players --> Disabled
    - Set the font size for tooltips in pixels --> 14

  Why retired: Broke when updating to newer versions of Foundry. Also, replaced by [Party Overview](https://foundryvtt.com/packages/party-overview/).
<a name="macro-notes"></a>
## Macro Notes
- Accessing class levels of a character
    - `@classes.sorcerer.level`
- Accessing abilities scores
    - `@abilities.dex.mod`
- Updating token elevation
    - `token.update({"elevation": args[0]});`
<a name="performance-improvements"></a>
## Performance Improvements
- Use Microsoft Edge browser when playing on Windows 10. Strangely enough, it seems to be more fluid than Chrome, at least regarding Foundry.
- [Performance troubleshooting tips prezi](https://prezi.com/view/FeiO42h6cxdmoIsZvUlt/)
- [Increasing/fixing performance (video)](https://www.youtube.com/watch?v=R4UIU0_mC8A)
- [Possible Firefox performance improvements?](https://www.reddit.com/r/FoundryVTT/comments/k1pquy/a_fix_for_weird_firefox_performance_problems)
<a name="useful-resources"></a>
## Other Useful Resources
- [Hosting FoundryVTT on a raspberry pi](https://dracoli.ch/posts/foundry-rpi/)
- [How to deploy a Foundry server on AWS](https://www.reddit.com/r/FoundryVTT/comments/iurf7h/i_created_a_method_to_automatically_deploy_a/)
- [The Player's Guide to Foundry (video)](https://www.youtube.com/watch?v=ja88yRVQmck)
- [FoundryVTT Subreddit](https://www.reddit.com/r/FoundryVTT/)
- [Foundry Hub](https://www.foundryvtt-hub.com/)
<a name="other-media"></a>
## Other Media and Software
<a name="software"></a>
### Software
- Map Makers
    - [Dungeondraft](https://dungeondraft.net/) - Amazingly intuitive battle-map maker. For most simple maps, I can get them created and imported into Foundry
      within 10 minutes. Although I'm not a huge fan of the default art style, it allows you to import custom asset packs, like those from 
      [Forgotten Adventures](https://www.forgotten-adventures.net/product/map-making/assets/dungeondraft-integration/). 10/10, would recommend.
    - [Wonderdraft](https://www.wonderdraft.net/) - From the same creator as Dungeondraft, and works very similarly. I use it for regional/world/city maps. 
      Again, I highly recommend it. Inkarnate is another good alternative.
    - [Arkenforge](https://arkenforge.com/) - Another great map maker and VTT. Especially useful for in-person games. I don't use it anymore, but it worked well
      while I did.
    - [Inkarnate](https://inkarnate.com/) - An alternative to Wonderdraft and entirely web-based. I prefer Wonderdraft, others prefer this. I'd recommend trying
      out both.
    - [Dungeon Fog](https://www.dungeonfog.com/) - High quality map maker with assets already built-in.
    - [Dungeon Scrawl](https://dungeonscrawl.com/) - Free-form maps, good for if you need to make a quick scrawl (hehe). 
- Generators
    - [Kobold Fight Club](https://kobold.club/fight/#/encounter-builder) - Widely known as one of the greatest random encounter generators out there.
    - [RPG Tinkerer](https://www.rpgtinker.com/) - Combat NPCs.
    - [D&D 5e Random Character Generator](https://tetra-cube.com/dnd/dnd-char-gen.html) - Non-combat NPCs with images.
    - [NPC Generator](http://www.npcgenerator.com/) - More non-combat NPCs with personality quirks.
    - [Eigengraus Essential Establishment Generator](https://eigengrausgenerator.com/) - Generates a brand new town with tons of links and connecting 
      storylines. I heard there's a Foundry module in the makes as well. Good if you're short on time or need to create a city or village on the fly.
    - [D&D Town Generator](https://town.noordstar.me/) - Another town or city generator, now with work schedules!
    - [DunGen](https://dungen.app/dungen/) - Map generator. Patreons can get maps pre-configured with FoundryVTT-ready lighting and walls.
    - [donjon](https://donjon.bin.sh/) - Generators upon generators. If you need one, this place has it.
    - [Weak Magic Items for 5e](http://www.lordbyng.net/inspiration/index.php) - Great for when I want to be generous to my players, but not *too* generous ;)
- Miscellaneous
    - [Audacity](https://www.audacityteam.org/) - For trimming audio clips.
    - [Token Stamp](http://rolladvantage.com/tokenstamp/) - Easy-to-use token creator. I use Tokenizer now, but I'd argue the default borders are nicer on 
      this site.
    - [r/dndmaps Search Engine](https://gamemaster.pixelastic.com/maps/) - Searches through all maps posted in the r/dndmaps subreddit.
    - [Collection of Random Tables](https://www.reddit.com/r/DnD/comments/452r6r/a_massive_and_growing_resource_of_random_tables/) - Tables for almost anything.
    - [Fancy Text Generator](https://lingojam.com/FancyTextGenerator) - Can use for "handwritten" notes.
    - [Gimp](https://www.gimp.org/) - Free Photoshop(ish). Really good for image manipulation, and if you're good with artsy stuff (definitely not me), you can
      hand-draw your own maps.
<a name="maps-and-tokens"></a>
### Maps and Tokens (in no particular order)
- [Forgotten Adventures](https://www.patreon.com/forgottenadventures) - Maps, tokens, and Dungeondraft assets. I use these more than any other assets.
- [Heroic Maps](https://www.patreon.com/heroicmaps/posts) - Maps!
- [Tom Cartos](https://www.patreon.com/tomcartos) - Maps!
- [Eightfold Paper](https://www.patreon.com/EightfoldPaper/posts) - Maps!
- [Dynamic Dungeons](https://www.patreon.com/dynamicdungeons) - Animated maps!1
- [Animated Dungeon Maps](https://www.patreon.com/animatedmaps) - Animated maps!
- [PogS Props](https://www.patreon.com/PogS_Props) - Maps!
- [Cze and Peku](https://www.patreon.com/czepeku) - Maps!
- [Afternoon Maps](https://www.patreon.com/afternoonmaps) - Maps!
- [Caeora](https://www.patreon.com/caeora) - Maps!
- [Maphammer](https://www.patreon.com/maphammer) - Maps!
- [Mik & Wewa](https://www.patreon.com/mikwewa) - Maps! Also, they have generously released over **600** Foundry-ready maps located
  [here](https://www.patreon.com/posts/608-free-foundry-44690565?utm_medium=clipboard_copy&utm_source=copy_to_clipboard&utm_campaign=postshare).
- [Token Borders](https://www.pinterest.com/kimy142643/token-borders/) - Token borders!
- [Endless Dungeon Maps](https://www.reddit.com/r/dndmaps/comments/jwdp6x/endless_dungeon_level_0/) - Ongoing plug-and-play dungeons!
- [Matt's Massive Map Menagerie](https://drive.google.com/drive/folders/1c_8hDZKuZuu_NF76oq2fjcm4XaE1stkJ) - Tons of free maps and tokens!
- [Dundjinni](http://www.dundjinni.com/forums/) - Tons of free maps and tokens!
- [RPG Map Share](http://rpgmapshare.com/) - Gallery of free maps!
<a name="sounds-and-music"></a>
### Sounds and Music
- Sites
    - [Tabletop Audio](https://tabletopaudio.com/) - Seriously amazing ambiances and music!
    - [16,000 Free Sound Effects](http://bbcsfx.acropolis.org.uk/) - Sounds!
- Spotify Playlists
    - [Bezoing's curated list of D&D encounter playlists](https://www.reddit.com/r/DnD/comments/595zc6/my_curated_spotify_playlists_i_use_for_dd/) - Tons of 
      useful atmosphere, mood, and combat playlists.
    - [Strttrynr's 112 Spotify playlists to run your game](https://www.reddit.com/r/DnD/comments/d12q2x/112_spotify_playlists_to_run_your_game/) - Even more 
      playlists for a variety of scenarios.
<a name="other-dnd-materials"></a>
### Other D&D Materials
- [Darkest Dungeon Monsters](https://www.reddit.com/r/DnDBehindTheScreen/comments/jx1ta2/darkest_dungeon_horrors_of_the_dark_a_complete/)
- [Octavian's Guide to Herbalism & Alchemy](https://homebrewery.naturalcrit.com/share/By_JPajBW)
- [Sane Magic Item Prices](https://forums.giantitp.com/showthread.php?424243-Sane-Magic-Item-Prices)
- [Ultimate Optimizer's Multiclassing Guide](https://forums.giantitp.com/showthread.php?502248-Ultimate-Optimizer-s-Multiclassing-Guide)
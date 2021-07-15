# Nathan's DnD5e/FoundryVTT Modules and Notes
I'd like to preface this by saying that this is the setup that works for my group's personal needs, and it may not be reflective of what everyone wants 
within Foundry. If you are new to Foundry, welcome! This is an amazing community, and I'm super happy that you came across this repo. That being said, I'd 
highly recommend starting out with the core Foundry application and only adding modules if you *absolutely* know what they do and what problems they solve. 
Additionally, unless you're willing to sit down and debug for a while, I'd recommend sticking to module versions that you've worked with and have tested as 
opposed to updating on a whim. I'm as guilty as anyone of clicking that super convenient "Update All" button to pull the most recent module versions, but more 
often than not, it's led to more issues than anything else. 

For those that are new to Foundry, before looking for new modules, I highly recommend checking out 
[Encounter Library's Foundry VTT Basics playlist](https://www.youtube.com/playlist?list=PLGgCMB0gYnLFWxyrCkUYwHY4vvA_yME7m). He breaks things down extremely 
well and touches on pretty much everything you need to know to get your first session underway. 

You really want to do this? Well alright then, let's get into it!

This is a list of modules and resources that I personally use for my FoundryVTT D&D 5th Edition games, along with my preferred settings. I did my best to 
double-check any significant issues beforehand, however, there's always a chance of something slipping through or changing in subsequent updates. There are
also copies of my environment settings within this repository if you want to try the settings that I personally use. In order to import them, all you need to do
is download the modules you want, enable the [Forien's Copy Environment](https://foundryvtt.com/packages/forien-copy-environment/) module, and import the 
"foundry-settings-export.json" file I have located within this repo. Hope these help!

Inspired by [Bryan's Preferred Modules for Foundry VTT](https://github.com/bryancasler/Bryans-Preferred-Modules-for-FoundryVTT), as a lot of the modules I use
now were found on his page. I 100% recommend checking his stuff out for even more useful stuff.

If there's a module, resource, or other missing piece that you think should be on this page, feel free to create an issue and I'll check it out!

### 0.8.8 Upgrade Notes
I have a separate [page](https://github.com/NateHawk85/Nathans-DnD5e-Foundry-Modules/blob/main/0.8.8%20Upgrade%20Notes.md) for notes upgrading from 0.7.9-0.8.8,
and that will go into the things I noticed. In general, my group and I played our first session on 0.8.8 this past week, and overall, it went very smoothly.
That being said, like with everything, there's always a chance that something could go awry. Let me know if there's any improvements that could be made by
creating an [issue](https://github.com/NateHawk85/Nathans-DnD5e-Foundry-Modules/issues/new), and I'll get to it as soon as I can!

# Versions
## Current Foundry Version - 0.8.8
If you want to view my preferred modules for a specific version of Foundry, you can use the 
[commit history](https://github.com/NateHawk85/Nathans-DnD5e-Foundry-Modules/commits/main) to view past versions of this page. Each commit should have the
corresponding Foundry version in the commit message, and if it doesn't, I messed up somewhere :)

# Table of Contents
- Modules and Settings
    - [Foundry VTT Settings](#foundry-settings)
        - [Core Settings](#core-settings)
        - [System Settings](#system-settings)
    - [Must-Have Modules](#must-have-modules)
    - [Full List of Currently-Installed Modules, Descriptions, and Settings](#all-installed-modules)
    - [Awesome Media Modules](#awesome-media-modules)
    - [Awesome Media Modules (that I've already organized)](#awesome-organized-media-modules)
        - [Music](#music-modules)
        - [Map Packs](#map-pack-modules)
    - [Modules on the Chopping Block](#modules-to-chop)
    - [Modules Waiting on 0.8.x Support](#modules-waiting-8)
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
# Foundry VTT Settings

<a name="core-settings"></a>
## Core Settings

  Setting                             | Default   | Recommended   | Comments
  ---                                 | ---       | ---           | ---    
  Disable Game Canvas                 | Disabled  | ---           | ---    
  Language Preference                 | English   | ---           | ---    
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

## Configure Permissions

  Setting                       | Player    | Trusted Player  | Assistant GM  | Game Master
  ---                           | ---       | ---             | ---           | ---
  Allow Broadcasting Audio      | Disabled  | Enabled         | Enabled       | Enabled 
  Allow Broadcasting Video      | Disabled  | Enabled         | Enabled       | Enabled 
  Configure Token Settings      | Disabled  | Enabled         | Enabled       | Enabled 
  Create Journal Entries        | Disabled  | Enabled         | Enabled       | Enabled 
  Create Map Notes              | Disabled  | Enabled         | Enabled       | Enabled 
  Create Measured Template      | Enabled   | Enabled         | Enabled       | Enabled 
  Create New Actors             | Disabled  | Enabled         | Enabled       | Enabled 
  Create New Items              | Disabled  | Enabled         | Enabled       | Enabled 
  Create New Tokens             | Disabled  | Enabled         | Enabled       | Enabled 
  Display Mouse Cursor          | Enabled   | Enabled         | Disabled      | Disabled
  Display Ruler Measurement     | Enabled   | Enabled         | Disabled      | Disabled
  Modify Configuration Settings | Disabled  | Disabled        | Disabled      | Enabled
  Open and Close Doors          | Enabled   | Enabled         | Enabled       | Enabled 
  Upload New Files              | Disabled  | Enabled         | Enabled       | Enabled 
  Use Drawing Tools             | Disabled  | Enabled         | Enabled       | Enabled 
  Use File Browser              | Enabled   | Enabled         | Enabled       | Enabled 
  Use Script Macros             | Disabled  | Enabled         | Enabled       | Enabled 
  Whisper Private Messages      | Disabled  | Disabled        | Disabled      | Disabled

## Default Token Configuration

  Setting               | Default          | Recommended      | Comments 
  ---                   | ---              | ---              | ---      
  Light Animation Type  | Never Displayed  | Always for Owner | These defaults get overridden by [Token Mold](https://foundryvtt.com/packages/token-mold/), but they're still good to have
  Token Disposition     | Hostile          | Neutral          | ---      
  Lock Rotation         | Disabled         | ---              | ---      
  Has Vision            | Disabled         | Enabled          | ---      
  Dim Vision            | 0                | ---              | ---      
  Bright Vision         | 0                | ---              | ---      
  Sight Angle           | 360              | ---              | ---      
  Dim Light Radius      | 0                | ---              | ---      
  Bright Light Radius   | 0                | ---              | ---      
  Emission Angle        | 360              | ---              | ---      
  Light Color           | 0, 0, 0          | ---              | ---      
  Color Intensity       | 0.5              | ---              | ---      
  Light Animation Type  | None             | ---              | ---      
  Animation Speed       | 5                | ---              | ---      
  Animation Intensity   | 5                | ---              | ---      
  Display Bars          | Never Displayed  | Always for Owner | ---      
  Bar 1 Attribute       | attributes.hp    | ---              | ---      
  Bar 2 Attribute       | None             | ---              | ---      

<a name="system-settings"></a>
## DnD5e - Fifth Edition System v1.3.6 Settings

  Setting                             | Default   | Recommended   | Comments
  ---                                 | ---       | ---           | ---    
  Rest Variant                        | PHB       | ---           | ---    
  Diagonal Movement Rule              | PHB       | ---           | ---    
  Initiative Dexterity Tiebreaker     | Disabled  | Enabled       | ---    
  Apply Currency Weight               | Enabled   | ---           | ---    
  Disable Experience Tracking         | Disabled  | Enabled       | ---    
  Collapse Item Cards In Chat         | Disabled  | ---           | ---    
  Allow Polymorphing                  | Disabled  | Enabled       | In order for your players to polymorph, they need to have the permission to create new tokens.

<a name="must-have-modules"></a>
# Must-Have Modules
If I had to run Foundry with a limited amount of modules, these are the ones I'd definitively pick up first. Here's my short(ish) list of the modules (and
module combinations) that have the biggest impact on the games I run. More in-depth descriptions of each module can be found in the sections below this one.
- [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) for time tracking. (Requires [About Time](https://foundryvtt.com/packages/about-time/)
  and [Simple Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar).)
- [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/) combined with [Midi QoL](https://foundryvtt.com/packages/midi-qol/), 
  [Let Me Roll That For You](https://foundryvtt.com/packages/lmrtfy/), [Dynamic Active Effects](https://foundryvtt.com/packages/dae/),
  and [About Time](https://foundryvtt.com/packages/about-time/) for tons of combat enhancements.
- [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/) and [Macro Folders](https://foundryvtt.com/packages/macro-folders/) for folder 
  organization.
- My personal [Custom Shared Compendium](https://www.reddit.com/r/FoundryVTT/comments/fvw3c7/how_to_create_a_tiny_module_for_shared_content/) for sharing
  scenes, items, actors, rules, etc. between worlds.
- [DF Settings Clarity](https://foundryvtt.com/packages/df-settings-clarity/) for clarifying whether a setting is a global or per-individual setting, providing
  peace-of-mind when making changes.
- [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice/) for dice rolling!
- [Drag Ruler](https://foundryvtt.com/packages/drag-ruler/) for automatically calculating movement distances during combat.
- [Easy Target](https://foundryvtt.com/packages/easy-target/) to speed up targeting as a GM.
- [Forien's Copy Environment](https://foundryvtt.com/packages/forien-copy-environment/) for sharing the same settings between worlds.
- [GM Secret Block](https://foundryvtt.com/packages/gm-secrets/) to store private notes on things. (Or [GM Notes](https://foundryvtt.com/packages/gm-notes/) if 
  you prefer that module instead.)
- [Multilevel Tokens](https://foundryvtt.com/packages/multilevel-tokens/) for various grid enhancements.
- [Next Up](https://foundryvtt.com/packages/Next-Up/) for opening/closing NPC sheets during combat automatically, which saves quite a bit of time.
- [Playlist Importer](https://foundryvtt.com/packages/playlist_import/) for setting up playlists and music with almost zero hassle.
- [PopOut!](https://foundryvtt.com/packages/popout/) for utilizing multiple monitors (and that sweet, sweet Alt + Tab).
- [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/) for access to any virtually any entity at a moment's notice.
- [Tidy UI - Game Settings](https://foundryvtt.com/packages/tidy-ui_game-settings/) and [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) for a 
  cleaner overall UI.
- [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) and [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/) to store the 
  most-used actions for monsters.
- [Token Mold](https://foundryvtt.com/packages/token-mold/) for creating monsters without fiddling with settings over and over again.
- [Universal Battlemap Importer](https://foundryvtt.com/packages/dd-import/) for importing my custom maps and other mapmakers' creations.

<a name="all-installed-modules"></a>
# Full List of 108 Currently-Installed Modules, Descriptions, and Settings

## [About Time](https://foundryvtt.com/packages/about-time/) v1.0.3
  Tracks in-game time and required for the [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) module. 

  NOTE: This module may be potentially going away with the future core API time updates.

  Requires [Simple Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar).
  
  Setting                               | Default       | Recommended   | Comments
  ---                                   | ---           | ---           | ---
  Debug output                          | Disabled      | ---           | ---    

## [Ace Library](https://foundryvtt.com/packages/acelib) v1.1.2
  Adds the Ace editor for macro editing within Foundry. Good for macro creators, programmers, module creators, etc.
  
  If you don't have a module that depends on this, I'd recommend not installing it unless you're a module developer.

  Setting                               | Default     | Recommended | Comments
  ---                                   | ---         | ---         | ---    
  Selection style                       | text        | ---         | ---
  Highlight active line                 | Disabled    | ---         | ---
  Highlight selected word               | Enabled     | ---         | ---
  Cursor style                          | smooth      | ---         | ---
  Show invisibles                       | Enabled     | ---         | ---
  Display indent guides                 | Enabled     | ---         | ---
  Navigate within soft tabs             | Enabled     | ---         | ---
  Enable multiselect                    | Enabled     | ---         | ---
  Highlight gutter line                 | Enabled     | ---         | ---
  Show print margin                     | Disabled    | ---         | ---
  Print margin column                   | 80          | ---         | ---
  Show fold widgets                     | Enabled     | ---         | ---
  Fade fold widgets                     | Enabled     | ---         | ---
  Show line numbers                     | Enabled     | ---         | ---
  Show gutter                           | Enabled     | ---         | ---
  Font size                             | 15          | ---         | ---
  Font family                           | monospace   | ---         | ---
  Scroll past end                       | 0.5         | ---         | ---
  Theme                                 | monokai     | ---         | ---
  New line mode                         | unix        | ---         | ---
  Tab size                              | 4           | ---         | ---
  Wrap text                             | Enabled     | ---         | ---
  Fold style                            | markbegin   | ---         | ---
  Mode                                  | plain text  | javascript  | ---
  Enable basic autocompletion           | Enabled     | ---         | ---
  Enable snippets                       | Enabled     | ---         | ---
  Enable live autocompletion            | Enabled     | ---         | ---
  Use elastic tabstops                  | Enabled     | ---         | ---
  Keyboard handler                      | emacs       | sublime     | ---
  Horizontal scroll bar always visible  | Disabled    | ---         | ---
  Vertical scroll bar always visible    | Disabled    | ---         | ---
  Scroll speed                          | 2           | ---         | ---
  Drag-and-drop delay                   | 0           | ---         | ---
  Enable drag-and-drop                  | Enabled     | ---         | ---
  First line number                     | 1           | ---         | ---
  Overwrite                             | Disabled    | ---         | ---
  Use soft tabs                         | Enabled     | ---         | ---
  Indented soft wrap                    | Enabled     | ---         | ---

## [Active-Auras](https://foundryvtt.com/packages/ActiveAuras/) v0.3.03
  Adds the ability to use active effects in an aura around a player. Super useful for paladins aura, twilight domain cleric, etc. There's tons of applications.

  NOTE: I have this module configured in a very specific way for one specific use-case. These are most likely not the best settings for everyone.

  Requires [SocketLib](https://foundryvtt.com/packages/socketlib), [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/).

  Setting                   | Default   | Recommended | Comments
  ---                       | ---       | ---         | ---    
  Measurement System        | Enabled   | Disabled    | ---
  Walls block auras         | Disabled  | ---         | ---
  Height measurement system | Enabled   | ---         | ---
  Remove auras on death     | Enabled   | ---         | ---
  Auras in combat           | Enabled   | ---         | ---
  Debug                     | Disabled  | ---         | ---

## [Advanced Macros](https://foundryvtt.com/packages/advanced-macros) v1.6
  Split off of [The Furnace](https://foundryvtt.com/packages/furnace/), adds a 'Run Macro' button and an 'Execute Macro As GM' option that allows players to 
  run macros... as a GM! There are some other small enhancements as well, including some syntax sugar for calling other macros. Pretty neat!
  
## [Autocomplete Inline Properties](https://foundryvtt.com/packages/autocomplete-inline-properties/) v2.1.1
  A nice quality of life fix that autocompletes... inline... properties... Yeah, I probably didn't need to explain this one. Great quality of life fix that lets
  us forgetful folk remember the correct entity fields.
  
## [Autocomplete Whisper](https://foundryvtt.com/packages/autocomplete-whisper/) v0.3.3
  Overhauls the whisper functionality to provide an easy-to-use pop-up to select whisper targets.
  
  Setting                   | Default   | Recommended   | Comments
  ---                       | ---       | ---           | ---    
  Include GM Usernames List | Disabled  | Enabled       | ---    
  
## [Automatic Journal Icon Numbers](https://foundryvtt1.com/packages/journal-icon-numbers/) v1.3.1
  Applies numbered pins to journal entries. Nice to differentiate journal icons, especially if you have a lot of them.

  Requires [Lib - Color Settings](https://foundryvtt.com/packages/colorsettings/).
  
  Setting               | Default                       | Recommended   | Comments
  ---                   | ---                           | ---           | ---    
  Foreground colors     | 000000ff                      | ---           | ---    
  Background colors     | ffffff6f                      | ---           | ---    
  Font family           | \*blank\*                     | ---           | ---    
  Icon style            | Circle                        | ---           | ---    
  Upload path           | upload/journal-icon-numbers   | ---           | ---    
  Icon scale            | 0.75                          | ---           | ---    
  Font size             | 48                            | ---           | ---    
  Icons from folders    | Enabled                       | ---           | ---    
  Rebuild all icons     | No rebuild                    | ---           | ---

## [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) v3.1.6
  Tracks time/calendar/weather with a widget. Can be used to automatically generate a weather description based on the current time of year and environment. 

  Requires [About Time](https://foundryvtt.com/packages/about-time/), [Simple Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar).
  
  Setting                               | Default   | Recommended   | Comments
  ---                                   | ---       | ---           | ---
  Calendar display for non-GM           | Disabled  | Enabled       | In some situations the party may be unaware of time, aka long Underdark scenarios. Disable when the party should not know the time!    
  Output weather to chat                | Enabled   | ---           | ---    
  Output moon changes to chat           | Enabled   | ---           | ---    
  Display time as 24hr                  | Disabled  | ---           | ---    
  Disable global illumination at night  | Enabled   | Disabled      | Could enable, however, I prefer to modify this via [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) instead.    
  Use celsius                           | Disabled  | ---           | ---    
  Can players see the weather           | Disabled  | ---           | ---    
  Use Lunar Sanctions                   | Disabled  | ---           | ---    

## [Character Actions list DnD5e](https://foundryvtt.com/packages/character-actions-list-5e/) v4.1.0
  Adds a reusable component that details different actions a player can take, including actions and bonus actions. It is required for 
  [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/), otherwise, I probably wouldn't use it.

  Setting                               | Default   | Recommended | Comments
  ---                                   | ---       | ---         | ---    
  Limit actions to cantrips             | Disabled  | ---         | ---
  Include minute-long spells as actions | Enabled   | Disabled    | ---
  Include consumables as actions        | Enabled   | ---         | ---
  Inject character actions list         | Enabled   | ---         | ---
  Inject NPC actions list               | Enabled   | ---         | ---
  Inject vehicle actions list           | Enabled   | ---         | ---

## [Chat Images](https://foundryvtt.com/packages/chat-images/) v2.5.3
  Allows you to put images in chat via uploading, screenshots, etc. I find it very useful for sharing certain bits of the map with only certain players, or 
  showing them, "Look, I swear. Boblin really did crit 3 times in a row."
  
  NOTE: This has the possibility of considerably bloating your server. Make a note to do a routine check to remove unnecessary images in order to keep your 

  Setting                           | Default       | Recommended   | Comments
  ---                               | ---           | ---           | ---    
  Warning on drop                   | Disabled      | ---           | ---
  Warning on paste                  | Disabled      | ---           | ---
  Uploaded files quality            | 0.5           | ---           | ---
  Embedded files quality            | 0.5           | ---           | ---
  Files save location               | Data folder   | ---           | Make sure to ignore this folder from your players' sight via the file picker, if you care about that stuff.
  Embed if upload is not possible   | Disabled      | ---           | Enable if you want your players to be able to use the module, but don't want to give upload permissions.
  
## [Chat Portrait](https://foundryvtt.com/packages/chat-portrait/) v0.3.9
  Adds an image of the corresponding image/token to player and GM chat messages.

  Setting                                                     | Default                                             | Recommended | Comments
  ---                                                         | ---                                                 | ---         | ---    
  Use token image                                             | Disabled                                            | ---         | ---
  Use token name                                              | Disabled                                            | ---         | ---
  Use avatar image                                            | Disabled                                            | ---         | ---
  Shows the name of the player next to the name of the actor  | Disabled                                            | ---         | ---
  Portrait size (px)                                          | 36                                                  | ---         | ---
  Portrait size for item (px)                                 | 36                                                  | ---         | ---
  Portrait border shape                                       | square                                              | ---         | ---
  Use player color for portrait border                        | Enabled                                             | ---         | ---
  Portrait border color                                       | #000000                                             | ---         | ---
  Portrait border width                                       | 2                                                   | ---         | --- 
  Change color of message border                              | Disabled                                            | ---         | --- 
  Change color of message background                          | Disabled                                            | ---         | --- 
  Display chat flavor text next to portrait                   | Disabled                                            | ---         | --- 
  Force name search                                           | Disabled                                            | ---         | --- 
  Size of the name text on chat (px)                          | 0                                                   | ---         | --- 
  Display setting                                             | allCards                                            | ---         | --- 
  Adds a textual tag to chat messages                         | Disabled                                            | ---         | --- 
  Use image replacer feature                                  | Enabled                                             | Disabled    | --- 
  Display chat message of type other                          | Enabled                                             | ---         | --- 
  Display chat message of type OOC                            | Enabled                                             | ---         | --- 
  Display chat message of type IC                             | Enabled                                             | ---         | --- 
  Display chat message of type emote                          | Enabled                                             | ---         | --- 
  Display chat message of type whisper                        | Enabled                                             | ---         | --- 
  Display chat message of type roll                           | Enabled                                             | ---         | --- 
  Display chat message of whisper to other                    | Disabled                                            | ---         | --- 
  Display unknown                                             | none                                                | ---         | --- 
  Placeholder for the label unknown actor name                | Unknown Actor                                       | ---         | --- 
  Placeholder for the label unknown item name                 | Unknown Item                                        | ---         | --- 
  Placeholder for the label unknown item icon                 | /modules/chat-portrait/assets/inv-unidentified.png  | ---         | --- 
  Setup additional custom styling on the text chat message    | Disabled                                            | ---         | --- 

## [Collapsible Journal Sections](https://github.com/ofdiceandmagic/FVTT-collapsible-journal-sections) v1.3.1
  Small quality of life fix that allows you to collapse journal headers. Very useful for long journals and dungeon notes!

  Requires [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/).

  Setting                 | Default   | Recommended | Comments
  ---                     | ---       | ---         | ---    
  Default collapsed state | Shown     | Collapsed   | ---
  Layout                  | Static    | ---         | ---
  
## [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/) v1.6.0
  One of the most important and impactful combat modules out there. There's too many functions to list, and if you want to automate your combat, this is 
  absolutely necessary. It works extremely well when combined with the [Midi QoL](https://foundryvtt.com/packages/midi-qol/) module. Requires 
  [SocketLib](https://foundryvtt.com/packages/socketlib).

### Core Settings

  Setting                       | Default               | Recommended | Comments
  ---                           | ---                   | ---         | ---    
  Enable concentrator           | Disabled              | ---         | Disabled in favor of the concentrator by [Midi QoL](https://foundryvtt.com/packages/midi-qol/).
  Enable enhanced conditions    | Disabled              | Enabled     | ---
  Enable award XP               | Disabled              | ---         | Would enable if I was using XP levelling instead of milestone levelling.
  Modifier                      | 1                     | ---         | ---
  Enable hide actor names       | Disabled              | Enabled     | ---
  Enable pan to token           | Disabled              | Enabled     | ---
  Enable select token           | Disabled              | ---         | ---
  Enable reroll initiative      | Disabled              | ---         | ---
  Enable temporary combatants   | Disabled              | ---         | I used to have this enabled, however, it causes graphical issues with [Hidden Initiative](https://foundryvtt.com/packages/hidden-initiative/) when enabled.
  Token effect icon size        | Small (Default) - 5x5 | ---         | ---
  Enable mighty summoner        | Disabled              | ---         | Disabled only because I have a macro that gets interrupted by this option. Otherwise, I'd keep it.

### CUBPuter Options

  Setting                   | Recommended | Comments
  ---                       | ---         | ---    
  Use oldschool CRT styling | Disabled    | ---
  Show terminal             | Disabled    | ---
  Show startup              | Disabled    | ---
  Show greeting             | Disabled    | ---
  Show instructions         | Disabled    | ---
  Show gadget information   | Enabled     | ---

### Award XP

  Setting           | Default   | Recommended | Comments
  ---               | ---       | ---         | ---    
  Enable Award XP   | Disabled  | ---         | Could be useful if I was using XP levelling instead of milestone levelling.
  Modifier          | 1         | ---         | ---

### Concentrator

  Setting                                   | Default       | Recommended   | Comments
  ---                                       | ---           | ---           | ---    
  Enable concentrator                       | Disabled      | ---           | Disabled in favor of the concentrator by [Midi QoL](https://foundryvtt.com/packages/midi-qol/).
  Concentration condition name              | Concentrating | ---           | ---
  Concentration attribute                   | con           | ---           | ---
  Health attribute                          | attributes.hp | ---           | ---
  Notify chat                               | Disabled      | Enabled       | ---
  Prompt player                             | Disabled      | Enabled       | ---
  Automatically set concentrating status    | Disabled      | Enabled       | ---
  Notify on double concentration            | None          | GM only       | ---

### Enhanced Conditions

  Setting                               | Default   | Recommended   | Comments
  ---                                   | ---       | ---           | ---    
  Enable enhanced conditions            | Disabled  | Enabled       | ---
  Output to chat                        | Disabled  | Enabled       | ---
  Output during combat                  | Disabled  | Enabled       | ---
  Remove default status effects         | Disabled  | ---           | ---
  Suppress preventative save reminder   | Disabled  | Enabled       | After updating to Foundry version 0.7.x. I would recommend NOT modifying this option manually.

### Hide Names

  Setting                   | Default           | Recommended   | Comments
  ---                       | ---               | ---           | ---    
  Enabled hide actor names  | Disabled          | Enabled       | ---
  Hide all name parts       | Disabled          | Enabled       | ---
  Hide hostile names        | Disabled          | Enabled       | ---
  Hide neutral names        | Disabled          | Enabled       | ---
  Hide friendly names       | Disabled          | ---           | ---
  Hostile replacement name  | Unknown Creature  | \*blank\*     | ---
  Neutral replacement name  | Unknown Creature  | \*blank\*     | ---
  Friendly replacement name | Unknown Creature  | ---           | This is unused.
  Hide chat card footer     | Disabled          | Enabled       | ---

### Pan/Select

  Setting               | Default   | Recommended   | Comments
  ---                   | ---       | ---           | ---    
  Enable pan to token   | Disabled  | Enabled       | ---
  Pan GM                | None      | All           | ---
  Pan players           | None      | ---           | ---
  Enable select token   | Disabled  | ---           | ---
  Select GM             | None      | All           | This is unused.
  Select players        | Disabled  | ---           | ---
  Deselect tokens       | Disabled  | ---           | ---

### Reroll Initiative

  Setting                       | Default   | Recommended   | Comments
  ---                           | ---       | ---           | ---    
  Enable reroll initiative      | Disabled  | ---           | ---
  Reroll temporary combatants   | Disabled  | ---           | ---

### Temporary Combatants

  Setting                       | Default   | Recommended | Comments
  ---                           | ---       | ---         | ---    
  Enable temporary combatants   | Disabled  | ---         | Would enable, however, it conflicts with [Hidden Initiative](https://foundryvtt.com/packages/hidden-initiative/).

### Misc Token

  Setting                           | Default               | Recommended   | Comments
  ---                               | ---                   | ---           | ---    
  Enable auto roll hostile token HP | Disabled              | ---           | ---
  Hide automatic HP roll            | Disabled              | Enabled       | ---
  Token effect icon size            | Small (Default) - 5x5 | ---           | ---
  Enable mighty summoner            | Disabled              | ---           | Disabled only because I have a macro that gets interrupted by this option. Otherwise, I'd keep it.
  Mighty summoner feat name         | Mighty Summoner       | ---           | ---

### Triggler Settings

  Category      | Attribute | Property 1    | Operator  | Value | Property 2    | Advanced Trigger  | Options   | Comments
  ---           | ---       | ---           | ---       | ---   | ---           | ---               | ---       | ---
  attributes    | hp        | value         | =         | 0     | value         | Disabled          | PCs Only  | Used for adding the unconscious condition when a PCs health falls to 0.
  attributes    | hp        | value         | =         | 0     | value         | Disabled          | NPCs Only | Used for adding the dead condition when an NPCs health falls to 0.
  attributes    | hp        | value         | >         | 0     | value         | Disabled          | PCs Only  | Used for removing the unconscious condition when a PCs HP rises above 0.
  attributes    | hp        | value         | >         | 0     | value         | Disabled          | NPCs Only | Used for removing the dead condition when an NPCs health rises above 0.

### Condition Lab

  I personally keep the default conditions and add journal entries for custom conditions/status effects in a custom compendium. On all conditions, I set the 
  "Output to chat" setting to "Enabled". I'd highly recommmend adding as many custom conditions as you need for your games!

  Condition Name        | Icon                                                | Journal                                               | Apply Trigger                                             | Remove Trigger                                            | Options                   | Comments
  ---                   | ---                                                 | ---                                                   | ---                                                       | ---                                                       | ---                       | ---    
  Unconscious           | icons/svg/unconscious.svg                           | Journal (C)/Conditions (D&D5e)/Unconscious            | attributes.hp.value = 0 attributes.hp.value (PCs Only)    | attributes.hp.value > 0 attributes.hp.value (PCs Only)    | Overlay                   | Automatically adds/removes Unconscious condition to PCs that fall to/rise above 0 HP.
  Dead                  | icons/svg/skull.svg                                 | Journal/No Reference Entry                            | attributes.hp.value = 0 attributes.hp.value (NPCs Only)   | attributes.hp.value > 0 attributes.hp.value (NPCs Only)   | Overlay, Mark Defeated    | Automatically adds/removes Dead condition to NPCs that fall to/rise above 0 HP.
  Fury of the Small     | systems/dnd5e/icons/skills/yellow_20.jpg            | Journal (C)/Custom Conditions/Fury of the Small       | ---                                                       | ---                                                       | ---                       | ---
  Hexblade's Curse      | systems/dnd5e/icons/skills/affliction_08.jpg        | Journal (C)/Custom Conditions/Hexblade's Curse        | ---                                                       | ---                                                       | ---                       | ---
  Flames of Phlegethos  | systems/dnd5e/icons/skills/fire_11.jpg              | Journal (C)/Custom Conditions/Flames of Phlegethos    | ---                                                       | ---                                                       | ---                       | ---
  Wild Shape            | systems/dnd5e/icons/skills/green_13.jpg             | Journal (C)/Custom Conditions/Wild Shape              | ---                                                       | ---                                                       | ---                       | ---
  Hunter's Mark         | systems/dnd5e/icons/spells/evil-eye-red-1.jpg       | Journal (C)/Custom Conditions/Hunter's Mark           | ---                                                       | ---                                                       | ---                       | ---
  Reactionless          | icons/svg/downgrade.svg                             | Journal/No Reference Entry                            | ---                                                       | ---                                                       | ---                       | Used for [DnD5e Helpers](https://foundryvtt.com/packages/dnd5e-helpers/).
  Darkness              | systems/dnd5e/icons/spells/evil-eye-red-2.jpg       | Journal/No Reference Entry                            | ---                                                       | ---                                                       | ---                       | ---
  Bladesong             | systems/dnd5e/icons/skills/weapon_01.jpg            | Journal (C)/Custom Conditions/Bladesong               | ---                                                       | ---                                                       | ---                       | ---
  Invisible             | modules/conditional-visibility/icons/unknown.svg    | Journal/No Reference Entry                            | ---                                                       | ---                                                       | ---                       | Used for [Conditional Visibility](https://foundryvtt.com/packages/conditional-visibility/).
  Obscured              | modules/conditional-visibility/icons/foggy.svg      | Journal/No Reference Entry                            | ---                                                       | ---                                                       | ---                       | Used for [Conditional Visibility](https://foundryvtt.com/packages/conditional-visibility/).
  In Darkness           | modules/conditional-visibility/icons/moon.svg       | Journal/No Reference Entry                            | ---                                                       | ---                                                       | ---                       | Used for [Conditional Visibility](https://foundryvtt.com/packages/conditional-visibility/).
  Hidden                | modules/conditional-visibility/icons/newspaper.svg  | Journal/No Reference Entry                            | ---                                                       | ---                                                       | ---                       | Used for [Conditional Visibility](https://foundryvtt.com/packages/conditional-visibility/).

## [Compact DnDBeyond 5e Character Sheet](https://foundryvtt.com/packages/compact-beyond-5e-sheet/) v0.16.3
  Adds a compact DnDBeyond-style character sheet for PCs.

  Requires [Character Actions list DnD5e](https://foundryvtt.com/packages/character-actions-list-5e/).

  Setting                       | Default   | Recommended   | Comments
  ---                           | ---       | ---           | ---    
  Use expanded sheet as limited | Disabled  | ---           | ---
  Show passive perception       | Disabled  | Enabled       | ---
  Show passive insight          | Disabled  | Enabled       | ---
  Show passive investigation    | Disabled  | Enabled       | ---
  Show passive stealth          | Disabled  | Enabled       | ---

## [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/) v2.3.2
  Adds the ability to create folders for compendiums. A must-have if you prefer a high amount of organization in your world.

  NOTE: If while using this module you 1) add a compendium to a folder, then 2) remove the compendium from the folder, that compendium will no longer appear in
  your Default folder. Re-enable the compendium in a folder to show it again.

  Setting               | Default   | Recommended | Comments
  ---                   | ---       | ---         | ---    
  Default merge by name | Disabled  | ---         | ---
  
## [Condition Automation](https://foundryvtt.com/packages/condition-automation/) v3.0.2
  Automatically generates shadows based on elevation when combined with [Token Magic FX](https://foundryvtt.com/packages/tokenmagic/), removes vision 
  automatically when a token is blinded, and freezes a token when it is paralyzed. It has multiple other status effects that automatically affect a token if its
  status changes.

  Setting                               | Default   | Recommended                 | Comments
  ---                                   | ---       | ---                         | ---    
  Blinding setting                      | Disabled  | Perfect Vision limit sight  | ---
  Blind status name                     | Blind     | Blinded                     | ---
  Enable unlinked token vision settings | Disabled  | ---                         | ---
  Shadow settings                       | Disabled  | ---                         | Would enable if I had Token Magic FX enabled.
  Death macro                           | Disabled  | \*blank\*                   | ---
  Poisoned macro                        | Disabled  | \*blank\*                   | ---
  Stunned macro                         | Disabled  | \*blank\*                   | ---
  Paralyzed macro                       | Disabled  | \*blank\*                   | ---
  Petrified macro                       | Disabled  | \*blank\*                   | ---

## [Crash's 5e Downtime Tracking](https://foundryvtt.com/packages/5e-training/) v0.6.3
  Adds another tab on supported character sheets to allow for tracking of activities. Uses could include training, keeping track of "worship score"/piety, 
  Xanathar's downtime rules, etc.

  Setting                           | Default       | Recommended   | Comments
  ---                               | ---           | ---           | ---    
  Show import button                | Disabled      | ---           | ---
  Enable GM only mode               | Disabled      | ---           | ---
  Show downtime tab (PCs)           | Enabled       | ---           | ---
  Show downtime tab (NPCs)          | Enabled       | ---           | ---
  Downtime tab name                 | Downtime      | Activities    | ---
  Character sheet width adjustment  | 50            | ---           | ---
  Default completion target         | 300           | ---           | ---
  Announce completion for           | PC's Only     | ---           | ---
  
## [CritterDB Import](https://foundryvtt.com/packages/critterdb-import/) v1.0.2
  Allows for importing homebrew monsters from [CritterDB](https://critterdb.com/). A button will appear at the bottom of the Compendiums tab and import them to 
  the compendium CritterDB - MyCritters.
  
  NOTE: I usually keep this disabled until I need to import something.

## [Cursor Popups](https://github.com/CowWhispered/fvtt-cursor-popups) v0.0.6
  Adds hotkeys that, when pressed, puts small chat bubbles or arrows that follow your cursor around. My players love this one, and even though it doesn't change
  anything from a GM perspective, it adds a little RP flavor for them.

  Setting             | Default   | Recommended | Comments
  ---                 | ---       | ---         | ---    
  Speech bubble key   | KeyT      | ---         | ---
  Arrow key           | KeyY      | ---         | ---
  Show your own icon? | Enabled   | ---         | ---
  Movement easing     | 5         | ---         | ---
  Popup size          | 2         | ---         | ---
  
## [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/) v2.1.0
  Creates a second configurable hotbar that can be moved and styled according to your own specifications. This works extremely well when combined with the 
  [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) module. 
  
  NOTE: I personally specify the default custom hotbar that works best for me. That way, I don't have to configure it in multiple areas. If other users want a
  different one, they can override it :)

  Requires [Library: DF Hotkeys](https://foundryvtt.com/packages/lib-df-hotkeys), [Lib - Color Settings](https://foundryvtt.com/packages/colorsettings/).

### Core Settings

  Setting               | Default   | Recommended | Comments
  ---                   | ---       | ---         | ---    
  Disable custom hotbar | Disabled  | ---         | ---
  Disable core hotbar?  | Disabled  | ---         | ---

### Default Custom Hotbar Settings

  Setting                               | Default   | Recommended   | Comments
  ---                                   | ---       | ---           | ---    
  Custom hotbar color                   | #0000ff80 | #192a3080     | ---
  Custom hotbar border color            | #0000ffff | #7db7f0ff     | ---
  Custom hotbar horizontal position     | 220       | 800           | ---
  Custom hotbar vertical position       | 63        | 10            | ---
  Custom hotbar highlight color         | #ffffffff | #ff6400ff     | ---
  Custom hotbar highlight color (empty) | #808080ff | ---           | ---

### Default Global Core Hotbar Settings

  Setting                               | Default   | Recommended   | Comments
  ---                                   | ---       | ---           | ---    
  Custom hotbar color                   | #00000080 | ---           | ---
  Custom hotbar border color            | #000000ff | ---           | ---
  Custom hotbar horizontal position     | 220       | ---           | ---
  Custom hotbar vertical position       | 10        | ---           | ---
  Custom hotbar highlight color         | #ff6400ff | ---           | ---
  Custom hotbar highlight color (empty) | #939799ff | ---           | ---
  
## [Custom Journal](https://foundryvtt.com/packages/custom-journal/) v1.2.1
  Adds a couple more journal sheets and some custom styling options.
  
## [Custom Shared Compendiums](https://www.reddit.com/r/FoundryVTT/comments/fvw3c7/how_to_create_a_tiny_module_for_shared_content/)
  Although this isn't a standard module, I highly recommend creating one of these for your own use.

## [Cycle Token Stack](https://foundryvtt.com/packages/cycle-token-stack/) v0.5.4
  Cycle tokens on top of one another by using certain hotkeys. Very nice for uncovering tokens when they're covered by other tokens. Combined with
  [zSync](https://foundryvtt.com/packages/zsync/), it alleviates quite a common problem with token management :)

  Setting                         | Default   | Recommended   | Comments
  ---                             | ---       | ---           | ---    
  Click threshold (milliseconds)  | 300       | ---           | ---
  Cycle token forward key         | [         | ---           | ---
  Push token behind key           | ]         | ---           | ---
  
## [D&D Beyond Importer](https://foundryvtt.com/packages/ddb-importer/) v2.1.26
  A fork of the [VTTA D&DBeyond Integration](https://foundryvtt.com/packages/vtta-dndbeyond/) module that allows you to automatically import spells, items, and 
  character sheets from D&DBeyond into Foundry. Although it's currently in development and missing some functionality, it is still definitely an extremely 
  useful module if you either a) own a lot of content on D&DBeyond (guilty), or b) have players that prefer to create their character sheets in D&DBeyond. To 
  get the most out of this module, it should be paired with both [Dynamic Active Effects](https://foundryvtt.com/packages/dae/) and 
  [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/).
  
### Core Settings

  Setting                                     | Default                         | Recommended   | Comments
  ---                                         | ---                             | ---           | ---    
  Munch botton be at the top?                 | Enabled                         | ---           | ---
  Use full source book name?                  | Enabled                         | ---           | ---
  Use damage type hints?                      | Enabled                         | ---           | ---
  Add restrictions to damage hint?            | Enabled                         | ---           | ---
  Should imported monster have vision set?    | Enabled                         | ---           | ---
  Restrict to trusted users                   | Disabled                        | ---           | ---
  Allow all users to sync to DDB              | Disabled                        | Enabled       | ---
  Monster D&D beyond link in title bar?       | Enabled                         | ---           | ---
  Character DDB-importer button in title bar? | Disabled                        | ---           | ---
  Make title bar icon white?                  | Disabled                        | ---           | ---
  Adventure import path                       | \[data\] adventures/import      | ---           | ---
  Adventure upload path                       | \[data\] ddb-images/adventures  | ---           | ---
  Adventure misc upload path                  | \[data\] ddb-images/adventures  | ---           | ---
  Log level                                   | INFO                            | ---           | ---

### Core Setup

  Setting                                 | Default                             | Recommended                                     | Comments
  ---                                     | ---                                 | ---                                             | ---    
  Player character images                 | \[data\] assets/ddb-imported-images | \[data\] assets/ddb-imported-images             | ---
  Other images                            | \[data\] assets/ddb-imported-images | \[data\] assets/ddb-imported-images             | ---
  Avatar frame images                     | \[data\] ddb-images/frames          | \[data\] assets/ddb-imported-images             | ---
  A cobalt cookie                         | \*blank\*                           | \*your cobalt cookie here\*                     | ---
  Store cobolt cookie in browser storage? | \*blank\*                           | \*your cobalt cookie here\*                     | ---
  Campaign ID                             | \*blank\*                           | \*your campaign URL/ID here, if you have one\*  | ---
  Patreon link                            | \*blank\*                           | \*your patreon key here, if you have one\*      | ---

### Compendiums

  Setting                                   | Default                       | Recommended                                                       | Comments
  ---                                       | ---                           | ---                                                               | ---    
  Spells                                    | \[world\] DDB Spells          | \[CustomSharedCompendiums\] All DnDBeyond Imported Spells         | ---
  Items                                     | \[world\] DDB Items           | \[CustomSharedCompendiums\] All DnDBeyond Imported Items          | ---
  Classes                                   | \[world\] DDB Classes         | \[CustomSharedCompendiums\] All DnDBeyond Imported Classes        | ---
  Class features                            | \[world\] DDB Class Features  | \[CustomSharedCompendiums\] All DnDBeyond Imported Class Features | ---
  Races                                     | \[world\] DDB Races           | \[CustomSharedCompendiums\] All DnDBeyond Imported Races          | ---
  Feats                                     | \[world\] DDB Feats           | \[CustomSharedCompendiums\] All DnDBeyond Imported Feats          | ---
  Racial traits                             | \[world\] DDB Racial Traits   | \[CustomSharedCompendiums\] All DnDBeyond Imported Racial Traits  | ---
  Monsters                                  | \[world\] DDB Monsters        | ---                                                               | ---
  Override                                  | \[world\] DDB Override        | ---                                                               | ---
  Create default compendiums if missing?    | Enabled                       | Disabled                                                          | ---
  
## [DF Curvy Walls](https://foundryvtt.com/packages/df-curvy-walls) v3.2.0
  Adding circles to the standard Foundry wall-creation tools is something I didn't even know I needed. Very useful, especially for putting a terrain circle 
  around your 1000th tree and your carefully-copied wall segments just don't want to paste correctly.

  Requires [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/), [Library: DF Hotkeys](https://foundryvtt.com/packages/lib-df-hotkeys).

  Setting                       | Default   | Recommended | Comments
  ---                           | ---       | ---         | ---    
  Preserve tool state           | Enabled   | ---         | ---
  Key to hold when placing tool | Alt       | ---         | ---
  
## [DF Settings Clarity](https://foundryvtt.com/packages/df-settings-clarity/) v3.2.0
  Adds icons next to individual settings to distinguish global settings from player ones. Extremely useful for people like me who spend quite a bit of time 
  playing around with module settings :)

  Requires [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/).

## [DFreds Droppables](https://foundryvtt.com/packages/dfreds-droppables) v1.2.7
  A split off of [The Furnace](https://foundryvtt.com/packages/furnace/), this module allows you to, instead of dragging each actor token one by one, drag a
  whole folder of actors onto the scene to place all the tokens at once. It's very small, but a great quality of life fix. 

  Setting     | Default | Recommended     | Comments
  ---         | ---     | ---             | ---    
  Drop style  | Dialog  | Horizontal Line | ---

## [DFreds Pocket Change](https://foundryvtt.com/packages/dfreds-pocket-change/) v2.0.5
  Automatically populates coinage via [Loot Sheet NPC 5e](https://foundryvtt.com/packages/lootsheetnpc5e/). This is an amazing quality of life fix, especially 
  if you are like me and don't always have the enemy's loot laid out beforehand. These tables are based on the 5th edition Dungeon Master's Guide, and there's 
  even an option to customize the currency multiplier based on your game's economy. 

  Setting                   | Default   | Recommended | Comments
  ---                       | ---       | ---         | ---    
  Enabled                   | Enabled   | ---         | ---
  Creature types            | Humanoid  | \*blank\*   | I use in combination with [Monk's TokenBar](https://foundryvtt.com/packages/monks-tokenbar/), which allows me to only toggle loot sheets I want.
  Chance of no currency     | 0.25      | 0.1         | ---
  Currency multiplier       | 1         | ---         | ---
  Use silver                | Enabled   | ---         | ---
  Use electrum              | Enabled   | Disabled    | Poor electrum...
  Use gold                  | Enabled   | ---         | ---
  Use platinum              | Enabled   | ---         | ---
  
## [Dice So Nice!](https://foundryvtt.com/packages/dice-so-nice/) v4.0.0
  How can you play D&D without any dice!? Allows you to roll 3D dice on your screen. It is absolutely necessary for the clickity clackities. I personally 
  haven't done a deep-dive into these settings, but some of my players have and they've *loved*it.

### Core Settings

  Setting                             | Default         | Recommended | Comments
  ---                                 | ---             | ---         | ---    
  Max number of dice                  | 20              | ---         | ---
  Global animation speed              | Players' choice | ---         | ---
  Simultaneous rolls are merged       | Enabled         | ---         | ---
  Dice can be flipped                 | Enabled         | ---         | ---
  Disabled during combat              | Disabled        | ---         | ---
  Disabled for initiative rolls       | Disabled        | ---         | ---
  Display chat message immediately    | Disabled        | ---         | ---
  Enable 3D dice on roll tables       | Disabled        | ---         | ---
  Enable 3D dice on inline rolls      | Enabled         | ---         | ---
  Disable 3D dice on NPC rolls        | Disabled        | ---         | ---
  Allow interaction with rolled dice  | Enabled         | ---         | ---

### 3D Dice Settings
### Appearance

  Setting               | Default               | Recommended   | Comments
  ---                   | ---                   | ---           | ---    
  Enable 3D dice        | Enabled               | ---           | ---
  Dice presets (faces)  | Standard              | ---           | ---
  Theme                 | Custom                | ---           | ---
  Texture               | None / Auto (Theme)   | Metal         | ---
  Material              | Auto (Theme/Texture)  | Glass         | ---
  Font                  | Auto (Theme)          | ---           | ---
  Label color           | #FFFFFF               | #000000       | ---
  Dice color            | #ff0000               | #28c9cc       | ---
  Outline color         | #ff0000               | #547fcf       | ---
  Edge color            | #ff0000               | #0e7f81       | ---

### Alternative Appearances

  ---           | Astral Sea Blue | Bird Blue     | Fire Red    
  ---           | ---             | ---           | ---         
  Texture       | Astral Sea      | Bird          | Fire        
  Material      | Chrome          | Chrome        | Metal       
  Font          | Bradley Hand    | Bradley Hand  | Bradley Hand
  Label color   | #121212         | #aadaee       | #fc8803     
  Dice color    | #0ae6cc         | #02edc6       | #f90101     
  Outline color | #ffffff         | #000000       | #000000     
  Edge color    | #ffffff         | #ffffff       | #000000     

### Preferences

  Setting                   | Default     | Recommended   | Comments
  ---                       | ---         | ---           | ---    
  Automatically hide        | Enabled     | ---           | ---
  Millisecs before hiding   | 2000        | 500           | ---
  Hide FX                   | FadeOut     | ---           | ---
  Sound effects             | Enabled     | ---           | ---
  Sound volume              | 0.5         | ---           | ---
  Table surface for sounds  | Felt        | Wood tray     | ---
  Auto scale?               | Enabled     | ---           | ---
  Manual scale              | 75          | ---           | ---
  Animation speed           | Normal      | ---           | ---
  3D layer position         | Over sheets | ---           | ---
  Throwing force            | Medium      | ---           | ---

### Special Effects

  Setting                             | Default | Recommended   | Comments
  ---                                 | ---     | ---           | ---    
  Show other players special effects  | Enabled | ---           | ---

### Performance

  Setting                               | Default | Recommended   | Comments
  ---                                   | ---     | ---           | ---    
  Shadows quality                       | High    | ---           | ---
  Advanced lighting                     | Enabled | ---           | ---
  Enable 'high density' screen support  | Enabled | ---           | ---
  
## [Dice Tooltip](https://foundryvtt.com/packages/dice-tooltip/) v1.0.8
  Shows hit bonuses and damage calculations when hovering over items in a PC/NPC's inventory. Pretty nice quality of life improvement.

  NOTE: Does not work with [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) v0.4.29.

## [Dice Tray](https://foundryvtt.com/packages/dice-calculator/) v1.1.0
  Adds a small widget at the bottom of the chat to easily calculate custom rolls. Very intuitive with left-click to add a die, right-click to remove one.
  Replaces [Simple Dice Roller](https://foundryvtt.com/packages/simple-dice-roller/).

  Setting                 | Default  | Recommended  | Comments
  ---                     | ---      | ---          | ---    
  Enable dice tray        | Enabled  | ---          | ---
  Enable dice calculator  | Enabled  | ---          | ---
  Enable d6 pips          | Disabled | Enabled      | ---
  
## [DnD5e Helpers](https://foundryvtt.com/packages/dnd5e-helpers/) v2.0.7
  Some helpful automation to remind GMs of legendary actions, regeneration, undead fortitude checks, wild magic surges, auto proficiencies, and more. Also 
  provides additional homebrew rules like open wounds, great wounds, and measured template adjustments.
  
  NOTE: At the time of writing this, I've had issues with setting undead fortitude to "Quick Saves". Hoping that will be fixed in upcoming versions.

### System Helpers

  Setting                                   | Default             | Recommended                           | Comments
  ---                                       | ---                 | ---                                   | ---    
  Auto adjust templates to 5e grids         | No Template Scaling | ---                                   | ---
  Compute cover on target                   | Disabled            | Center Point Vision (Foundry Vision)  | ---
  Consider intervening tokens as half cover | Disabled            | ---                                   | ---
  Keybind for cover                         | \*blank\*           | ---                                   | ---
  Cover application                         | Manual              | ---                                   | ---
  Cover button tint                         | Dark Red            | ---                                   | ---
  Remove cover on turn end                  | Disabled            | Enabled                               | ---
  Remove targets on turn end                | Disabled            | ---                                   | Handled already by [Midi QoL](https://foundryvtt.com/packages/midi-qol/).
  Hide GM info from cover report            | Disabled            | Enabled                               | ---
  Auto proficiency                          | Enabled             | ---                                   | ---
  Debugging                                 | Enabled             | Disabled                              | ---

### Feature Helpers

  Setting                           | Default                 | Recommended       | Comments
  ---                               | ---                     | ---               | ---    
  Wild magic auto-detect            | Disabled                | Enabled - More    | ---
  Wild magic surge table name       | Wild-Magic-Surge-Table  | Wild Magic Surges | ---
  Tides of chaos feature name       | Tides of Chaos          | ---               | ---
  Recharge tides of chaos on surge  | Disabled                | Enabled           | ---
  Hide wild magic from players      | Disabled                | Enabled           | ---

### Combat Helpers

  Setting                                                       | Default     | Recommended     | Comments
  ---                                                           | ---         | ---             | ---    
  Action status automation                                      | Enabled     | ---             | There may be a bug by disabling this, so you might as well enable it. :)
  Indicate used reaction as status                              | Disabled    | Enabled         | Has some small issues combined with [Mob Attack Tool](https://foundryvtt.com/packages/mob-attack-tool), but it's still worth it.
  Lair action prompt                                            | Disabled    | Enabled         | ---
  Legendary action prompt                                       | Disabled    | Enabled         | ---
  Start of turn legendary action reset                          | Enabled     | ---             | ---
  Automatically roll any uncharged abilities with a d6 recharge | Off         | Start of Turn   | ---
  Hide the results of ability recharge rolls                    | Enabled     | ---             | ---
  Automatic regeneration                                        | Disabled    | Enabled         | ---
  Effect name to block regeneration                             | No Regen    | ---             | ---
  Undead fortitude                                              | No checks   | Advanced Saves  | Requires a little extra work, but is very useful.
  Hide GM info from great wound and open wound report           | Disabled    | ---             | ---
  Great wound                                                   | Disabled    | ---             | ---
  Great wound name replacement                                  | Great Wound | ---             | ---
  Great wound table                                             | *\blank\*   | ---             | ---
  Open wound feature name                                       | Open Wound  | ---             | ---
  Open wound - death saves                                      | Disabled    | ---             | ---
  Open wound - crits                                            | Disabled    | ---             | ---
  Open wound - HP at 0                                          | Disabled    | ---             | ---
  Open wound - HP at 0 from a great wound                       | Disabled    | ---             | ---
  Open wound table                                              | \*blank\*   | ---             | ---

## [DnDBeyond Character Sheet for 5e](https://foundryvtt.com/packages/dndbeyond-character-sheet/) v1.7.0
  Adds a character sheet that mimics the style of D&DBeyond. I personally prefer the look and feel of 
  [Compact DnDBeyond 5e Character Sheet](https://foundryvtt.com/packages/compact-beyond-5e-sheet/), but they are both very similar.
  
## [Drag Ruler](https://foundryvtt.com/packages/drag-ruler/) v1.7.5
  An updated version of [Show Drag Distance](https://foundryvtt.com/packages/ShowDragDistance/). As the title says, it's a quality of life improvement that 
  shows the drag distance via colors when dragging a token. Good for in-combat use.

  Requires [socketlib](https://foundryvtt.com/packages/socketlib).

### Core Settings

  Setting                               | Default   | Recommended | Comments
  ---                                   | ---       | ---         | ---    
  Swap spacebar and right click         | Disabled  | Enabled     | ---
  Show PC speed to everyone             | Enabled   | ---         | ---
  Show GM ruler to players              | Enabled   | Disabled    | ---
  Enable movement history during combat | Enabled   | ---         | ---

### Speed Provider Settings

  Setting                 | Default                                   | Recommended | Comments
  ---                     | ---                                       | ---         | ---    
  Speed settings provider | Generic                                   | ---         | ---
  Speed Attribute         | actor.data.data.attributes.movement.walk  | ---         | ---
  Dash Multiplier         | 2                                         | ---         | ---
  Color for walk          | 0, 255, 0                                 | 0, 255, 255 | Default colors may be difficult for colorblind players. These settings are per-person, so if you prefer the defaults, changing them won't affect your players.
  Color for dash          | 255, 255, 0                               | 255, 150, 0 | ---
  Color for unreachable   | 255, 0, 0                                 | ---         | ---
  
## [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/) v5.0.01
  Adds a compendium of items, spells, and macros that are automated by the Active Effects system. Requires
  [Dynamic Active Effects](https://foundryvtt.com/packages/dae/).
  
  NOTE: In order to use, first import the macro compendium to your game. Then, you can cast the SRD spells included module as normal, and it should
  automatically work. Casting spells from the DnD5e SRD will NOT work, they need to be the DAE SRD spells.

  Requires [Dynamic Active Effects](https://foundryvtt.com/packages/dae/).

## [Dynamic Active Effects](https://foundryvtt.com/packages/dae/)  v0.8.28
  The successor to the old [Dynamic Effects](https://foundryvtt.com/packages/dynamiceffects/) module, this acts as a bridge between the new Active Effects
  system implemented in Foundry 0.7.x and the DnD5e system. This will allow you to do multiple things, including calculating AC, adding bonuses to attacks,
  applying certain spells and effects, implementing non-SRD features and abilities... One of the most impactful modules out there.
  [Kandashi](https://github.com/kandashi) has an excellent guide regarding the Active Effects system and this module that can be found
  [here](https://docs.google.com/document/d/1hgCJ4evPXo1gabJ_1z8AZLnsAtNdETlRgqWyZL28nMs/edit).
  
  NOTE: This module will create a "DAE" button along the top ribbon of every actor and item. Clicking on this will bring you to a menu to apply Active Effects
  for that particular entity. Additionally, if you are converting from the old Dynamic Effects system, run the following two methods to convert all existing
  info over into the new system:
  
    ```
    DAE.convertAllItems();
    DAE.migrateAllActors();
    ```
  
  Setting                                           | Default   | Recommended | Comments
  ---                                               | ---       | ---         | ---    
  Non-transfer effects require item targets (dnd5e) | Enabled   | ---         | ---
  Use the DAE active effect config sheet            | Enabled   | ---         | ---
  No duplicate damage macros                        | Disabled  | ---         | ---
  Expire timed effects in real time                 | Enabled   | Disabled    | [About Time](https://foundryvtt.com/packages/about-time/) is installed, so this field isn't used.
  Include active effects in special traits display  | Disabled  | ---         | ---
  Use ability save field when rolling ability saves | Enabled   | ---         | ---
  Auto calculate armor class                        | Enabled   | ---         | ---
  Auto calc base AC                                 | Enabled   | ---         | ---
  Confirm effect deletions                          | Disabled  | Enabled     | ---
  Amount of debug to show                           | None      | ---         | ---
  Disable all active effect processing              | Disabled  | ---         | ---
  
## [Easy Target](https://foundryvtt.com/packages/easy-target/) v2.12
  Allows for targeting tokens by holding the Alt key and clicking. Extremely useful for GMs.
  
  Setting           | Default | Recommended | Comments
  ---               | ---     | ---         | ---    
  Release behaviour | Sticky  | Standard    | ---
  
## [Find the Culprit!](https://foundryvtt.com/packages/find-the-culprit/) v1.3.3
  A module for debugging compatibility issues between other modules. Extremely helpful for when something isn't working the way you want it to and you don't 
  know why.
  
  NOTE: I usually keep this disabled until I need to debug module issues.
  
## [Forien's Copy Environment](https://foundryvtt.com/packages/forien-copy-environment/) v2.0.5
  By right-clicking within the General Information section of the Settings tab, this module allows you to import/export your world's current system version as 
  well as your modules and their settings. Very useful for copying the same modules and their settings over to another world.
  
  NOTE: I usually keep this disabled until I need to import or export my world and module settings.
  
## [Forien's Custom Fonts](https://foundryvtt.com/packages/forien-custom-fonts/) v0.1.3
  Adds Google fonts option to drawings and writings. Useful for when players want to be able to draw on things.
  
  Setting                               | Default   | Recommended                                                   | Comments
  ---                                   | ---       | ---                                                           | ---    
  Font families                         | Disabled  | Berkshire Swash,Marck Script,MedievalSharp,Milonga,Pirata One | ---

## [Forien's Quest Log](https://foundryvtt.com/packages/forien-quest-log/) v0.7.3
  Adds a quest log at the bottom of the Journal tab to allow for players to create their own customized quests depending on who they've met. Very flexible,
  I use it mainly for the landing page.

  

  Setting                                           | Default   | Recommended | Comments
  ---                                               | ---       | ---         | ---    
  Show available tab                                | Enabled   | ---         | ---
  Allow players to drag rewards to their inventory  | Enabled   | ---         | ---
  Players can create                                | Enabled   | ---         | ---
  Players can accept quests                         | Enabled   | ---         | ---
  Count hidden tasks                                | Disabled  | ---         | ---
  Dynamic bookmark background                       | Enabled   | ---         | ---
  Navigation style                                  | Bookmarks | ---         | ---
  Show tasks in quest log                           | Show Objectives: done/total  | ---         | ---
  Default quest permission level                    | Observer  | ---         | ---
  Hide quest log from players                       | Disabled  | ---         | ---
  Show reward drop notifications                    | Disabled  | ---         | ---
  Show quest folder                                 | Disabled  | ---         | ---
  Enable quest tracker                              | Disabled  | ---         | ---
  Quest tracker background                          | Enabled   | ---         | ---
  Show quest tracker tasks                          | Enabled   | ---         | ---
  Reset quest tracker position                      | Disabled  | ---         | ---
  
## [Forien's Unidentified Items](https://github.com/League-of-Foundry-Developers/foundryvtt-forien-unidentified-items) v0.2.5
  As a GM who frequently uses mysterious/items with abilities that aren't immediately obvious, this module is great in that it gives the GM the ability to 
  "mystify" an item and revert it back to its true form. 
  
  NOTE: With the recent update to Foundry version 0.7.x and other module changes to Better Rolls/Magic Items/Better Curses, there is an extremely serious bug
  that can prevent your world from loading if you have previous versions of this module installed. If you have Forien's Unidentified Items version 0.2.3 or
  below, you MUST upgrade to version 0.2.4 or above or risk losing everything in your world.

  For "Icon Manager" settings, I keep them at their defaults. For the "Property Manager" settings, I enable the Equipped, Quantity, Weapon Type, and Weight
  options. All other settings are disabled.

  Setting                 | Default   | Recommended | Comments
  ---                     | ---       | ---         | ---    
  Keep original icon      | Disabled  | Enabled     | ---
  Allow tiering (nesting) | Disabled  | ---         | ---
  
## [Foundry Community Macros](https://foundryvtt.com/packages/foundry_community_macros/) v0.43.0
  Various macros created by the community. You'll find them in the corresponding compendiums.
  
  NOTE: I usually keep this disabled until I need a specific macro from this module.
  
## [Foundry Community Tables](https://foundryvtt.com/packages/foundry_community_tables/) v0.15.0
  Same as [Foundry Community Macros](https://foundryvtt.com/packages/foundry_community_macros/), but with tables!

  NOTE: I usually keep this disabled until I need a specific table from this module.
  
## [FPS Meter](https://foundryvtt.com/packages/fpsmeter/) v1.1.1
  This module adds a small FPS counter in the top right corner. Useful for gauging performance at a glance, especially when adding new modules. 

### Core Settings

  Setting   | Default | Recommended | Comments
  ---       | ---     | ---         | ---    
  Show FPS? | Enabled | ---         | ---

### Location Settings

  Setting               | Default | Recommended | Comments
  ---                   | ---     | ---         | ---    
  Use default location  | Enabled | ---         | ---
  Top/Right/Bottom/Left | Auto    | ---         | ---

## [GM Secret Block](https://foundryvtt.com/packages/gm-secrets/) v1.0.0
  A great replacement for [GM Notes](https://foundryvtt.com/packages/gm-notes/), as it adds an additional field in descriptions for GMs to put notes. Unlike
  [GM Notes](https://foundryvtt.com/packages/gm-notes/), the notes are right there in the description, so it's not as easy to forget about them. 

  NOTE: There are some bugs with this module. For example, if a player edits the description and deletes the bottom-most row closest to your GM secret block, it
  will delete the secret block. Additionally, if your players are tech-savvy, there are ways to bypass the "GM secret" blocks and reveal the info out of turn. I
  trust my players not to do that, but if you feel as though that might tempt your players, this probably isn't the best solution for you and I highly recommend
  you check out [GM Notes](https://foundryvtt.com/packages/gm-notes/) instead.

  Additionally, if you do end up removing this module or disabling it at some point, the secret text reverts to a normal "secret" text block and is visible by
  players.

## [Grid Scaler](https://foundryvtt.com/packages/grid_scaler/) - Adds an option in the top-left menu to easily configure your background map to the grid.
  Allows for setting map by "squares" (x by y), drawing a 3x3 grid, and more. Extremely useful and intuitive.
  
## [Health Estimate](https://foundryvtt.com/packages/healthEstimate/) v2.6.1
  A fun little module that allows you to set "health tiers" for tokens. By hovering over a token, a customizable health phrase will pop up over the token, like
  "Uninjured", "Barely Injured", "Badly Injured" "Near Death", etc. depending on how much HP they have left.
  
### Core Settings

  Setting                       | Default                                                                     | Recommended                           | Comments
  ---                           | ---                                                                         | ---                                   | ---    
  Show estimates: users         | All                                                                         | ---                                   | ---
  Show estimates: tokens        | All                                                                         | ---                                   | ---
  Stages                        | Unconscious, Near Death, Badly Injured, Injured, Barely Injured, Uninjured  | Unconscious, Bloodied, Wounded, Fresh | ---
  Perfectionism                 | Enabled                                                                     | ---                                   | ---
  Output estimate to chat       | Disabled                                                                    | ---                                   | ---
  Add temporary health          | Disabled                                                                    | ---                                   | ---
  Hide on tokens with 0 max HP  | Enabled                                                                     | ---                                   | ---
  Use vehicle threshold         | Disabled                                                                    | ---                                   | ---
  Threshold stages              | Wrecked, Broken, Fully Functional                                           | ---                                   | ---
  Vehicle stages                | Wrecked, Broken, Battered, Scratched, Pristine                              | ---                                   | ---

### Style Settings

  Setting               | Recommended                                                             | Comments
  ---                   | ---                                                                     | ---    
  Use color             | Enabled                                                                 | ---
  Smooth gradient       | Enabled                                                                 | ---
  *Color bar*           | Split green/orange down the middle, indicating Bloodied <= 50% HP. RGB  | ---
  Color of dead tokens  | Dark Red                                                                | ---
  Outline               | Darken x 2                                                              | ---
  Font size             | x-large                                                                 | ---
  Position              | Top x -1                                                                | ---

### Death Settings

  Setting                   | Recommended         | Comments
  ---                       | ---                 | ---
  Death state on condition  | Disabled            | This is handled by [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/).
  Death state name          | Dead                | ---
  NPCs die immediately      | Enabled             | ---
  Death marker              | icons/svg/skull.svg | ---

## [Hidden Initiative](https://foundryvtt.com/packages/hidden-initiative/) v1.0.2
  For players, this hides the initiatives of non-owned tokens until they've had a turn in combat. Super fun to add in a little suspense before combat starts.

  NOTE: This module has a pretty annoying bug when combined with the Temporary Combatant feature of
  [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/). Additionally, it duplicates some UI elements of
  [Turn Alert](https://foundryvtt.com/packages/turnAlert/), though those aren't as bad. It completely 100% breaks
  [Combat Enhancements](https://foundryvtt.com/packages/combat-enhancements/). Basically, any module that adds UI elements to the combat tracker, expect them to 
  play poorly with this module. That being said, I really like this functionality, and I value it over those other settings/modules.

  Setting                                 | Default | Recommended   | Comments
  ---                                     | ---     | ---           | ---
  Reveal initiative numbers during combat | Enabled | ---           | ---
  NPC roll visibility                     | GM      | ---           | ---
  Player roll visibility                  | Public  | ---           | ---

## [Illandril's Hotbar Uses](https://foundryvtt.com/packages/illandril-hotbar-uses/) v2.3.5
  Adds a "uses" counter to item macros in hotbars. A good quality of life improvement, especially for players.
  
  Setting             | Default | Recommended | Comments
  ---                 | ---     | ---         | ---    
  Show maximum values | Enabled | ---         | ---

## [Image Hover](https://foundryvtt.com/packages/image-hover/) v1.1.8
  Upon hovering over a token, allows you to view the actor's image (or token image). Can be configured to only show upon pressing a key. Super nice for players
  if they want to view the monster's they're fighting whenever they want.

  Requires [Keybind Lib](https://foundryvtt.com/packages/keybind-lib).

  Setting                             | Default       | Recommended | Comments
  ---                                 | ---           | ---         | ---    
  Required actor permission           | None          | ---         | ---
  Art on hover                        | Character art | ---         | ---
  Enable/disable image hover          | Enabled       | ---         | ---
  Enable/disable keybind requirement  | Disabled      | Enabled     | ---
  Keybind                             | KeyV          | ---         | ---
  Position of image                   | Bottom left   | Top left    | ---
  Image to monitor width              | 7             | 3           | ---

  
## [Input Expressions](https://foundryvtt.com/packages/input-expressions/) v1.3.4
  Allows for mathematical expressions and attribute/ability references to be entered into numeric inputs. For example, you can set a zombie's HP to 
  `3d8 + @abilities.con.mod`, and it will automatically roll it for you.

  Requires [Math.js](https://foundryvtt.com/packages/_mathjs/).
  
## [Item Collection](https://foundryvtt.com/packages/itemcollection/) v1.8.3
  Allows for grouping items into containers (aka, bags of holding) via two new backpack sheets: ItemSheetShop and ItemSheetWithBags. Good for organizing 
  character sheets, providing a merchant with inventory, etc.

  Requires [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/).

  Setting                     | Default | Recommended | Comments
  ---                         | ---     | ---         | ---    
  Gold conversion             | Enabled | Disabled    | ---
  Gold conversion percentage  | 50      | ---         | ---
  Sort bag contents           | Enabled | ---         | ---
  
## [Item Macro](https://foundryvtt.com/packages/itemacro/) v1.3.2
  Adds a macro editor to items so that when you roll them, the macro executes instead of the default behaviour. Used by 
  [Dynamic Active Effects SRD](https://foundryvtt.com/packages/Dynamic-Effects-SRD/) in some more complicated spells.

  Setting                               | Default   | Recommended | Comments
  ---                                   | ---       | ---         | ---    
  Debug (client setting)                | Disabled  | ---         | ---
  Override default macro execution      | Disabled  | ---         | ---
  Character sheet hook                  | Enabled   | Disabled    | Speed rolling with this option enabled will lead to errors running macros.
  Player access                         | Disabled  | ---         | ---
  Display icon only                     | Disabled  | ---         | ---
  Right click override (client setting) | Disabled  | ---         | ---

## [Keybind Lib](https://foundryvtt.com/packages/keybind-lib) v0.3.2
  A dependency installed by other modules that allows those modules to assign hotkey shortcuts to certain actions. Super nifty! I'd recommend not installing it\
  unless you're a module developer or another module requires it. 
  
## [Less Fog](https://foundryvtt.com/packages/lessfog/) v0.8.5
  Slightly tweaks the default Foundry lighting and provides options to customize it. The main benefit I see while using it is increased visibility for GMs when 
  controlling tokens while still retaining token sight.

  Requires [Lib - Color Settings](https://foundryvtt.com/packages/colorsettings/).

  Setting                         | Default   | Recommended   | Comments
  ---                             | ---       | ---           | ---    
  Global daylight color           | #EEEEEEFF | ---           | ---
  Reveal to all players           | #484864FF | ---           | ---
  Darkness - Dimming              | 0.5       | ---           | ---
  Darkness - Explored             | 0.65      | ---           | ---
  Darkness - Unexplored (GM only) | 0.8       | ---           | ---
  Reveal tokens                   | Enabled   | Disabled      | ---
  Reveal to all players           | Disabled  | ---           | ---
  
## [Let Me Roll That For You](https://foundryvtt.com/packages/lmrtfy/) v1.17
  A module that allows a GM to request rolls from the players. While I don't use the base functionality hardly ever, it is extremely useful when paired with the
  [Midi QoL](https://foundryvtt.com/packages/midi-qol/) module.

  Setting                                 | Default   | Recommended   | Comments
  ---                                     | ---       | ---           | ---    
  Enable parchment theme                  | Enabled   | ---           | ---
  Deselect tokens when opening requestor  | Disabled  | ---           | ---

## [Let's Trade 5e](https://foundryvtt.com/packages/lets-trade-5e) v0.3.0
  Replaces [Give Item to Another Player](https://foundryvtt.com/packages/give-item) for the Foundry 0.8.x upgrade. This module adds an option in players' 
  character sheets to send items to and from other characters. Super useful. The only issue right now is that existing items don't get merged, but it's still in
  a better spot than the previous implementation.
  
## [Lib - Color Settings](https://foundryvtt.com/packages/colorsettings/) v2.5.9
  A dependency used by many other modules. Adds an easy-to-use color picker that some other modules rely on. 
  
  If you don't have a module that depends on this, I'd recommend not installing it.

  Setting     | Default   | Recommended | Comments
  ---         | ---       | ---         | ---    
  Show error  | Enabled   | ---         | ---
  
## [Library: DF Hotkeys](https://foundryvtt.com/packages/lib-df-hotkeys) v2.3.4
  Adds a hotkey modifier for different modules. Useful mainly for module developers, and as a sucker for hotkeys, I'm very appreciative of this module as a 
  user as well. Hotkeys depend on the modules you have installed.

  If you don't have a module that depends on this, I'd recommend not installing it unless you're a module developer.

## [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/) v1.7.5.0
  A dependency used by many other modules. Provides module developers with a simple way to modify core Foundry code while reducing the likelihood of conflict 
  with other modules. Again, if you don't have a module that depends on this, I'd recommend not installing it unless you're a module developer.
  
  For the "libWrapper Settings Menu" settings, I leave them at their defaults.

  Setting                   | Default   | Recommended | Comments
  ---                       | ---       | ---         | ---    
  Notify GM of issues       | Enabled   | ---         | ---
  Notify players of issues  | Disabled  | ---         | ---
  High-performance mode     | Disabled  | Enabled     | Only enable after ensuring there are no conflicts in your system

## [Lock View](https://foundryvtt.com/packages/LockView/) v1.4.12
  Adds ability to lock the view of scenes. Useful for landing pages and scenes that you want to set a specific view for.

  Setting       | Default   | Recommended | Comments
  ---           | ---       | ---         | ---    
  Screen width  | 1         | ---         | ---
  Gridsize      | 25        | ---         | ---
  
## [Loot Sheet NPC 5e](https://foundryvtt.com/packages/lootsheetnpc5e/) v3.1.0
  Adds an NPC loot sheet. This information is stored separately from the token's main sheet, so you can place items in the inventory and give your players 
  permission to view it upon the NPC's death. I personally use it for merchants and lootable enemies.

  Setting                             | Default   | Recommended | Comments
  ---                                 | ---       | ---         | ---    
  Convert currency after purchases?   | Disabled  | ---         | ---
  Display chat message for purchases? | Enabled   | ---         | ---
  Loot currency?                      | Enabled   | ---         | ---
  Loot all?                           | Enabled   | ---         | ---
  Show stack weight?                  | Disabled  | Enabled     | ---
  Reduce update shop verbosity        | Enabled   | ---         | ---
  Maximum price increase              | 200       | ---         | ---
  
## [Macro Editor](https://foundryvtt.com/packages/macroeditor/) v1.0.9
  Adds an IDE to the macro editor. A must-have if you use macros in any capacity.

  Requires [Ace Library](https://foundryvtt.com/packages/acelib).

  Setting                       | Default | Recommended | Comments
  ---                           | ---     | ---         | ---    
  Show macro editor by default  | Enabled | ---         | ---
  Wrap lines                    | Enabled | Disabled    | ---
 
## [Macro Folders](https://foundryvtt.com/packages/macro-folders/) v1.2.22
  Made by the same developer as [Compendium Folders](https://foundryvtt.com/packages/compendium-folders/), this module adds folders for your macros. It also 
  allows the ability to have each player have their own default folder, thereby keeping your macro folder a little cleaner. A must-have if you prefer a high 
  amount of organization in your world.

  Setting                   | Default   | Recommended | Comments
  ---                       | ---       | ---         | ---    
  Auto create user folders  | Disabled  | Enabled     | ---
  User folder location      | ---       | Users       | ---
  
## [Magic Items](https://foundryvtt.com/packages/magicitems/) v2.1.1
  Allows for the creation of items with specific charges, spells, etc. Accessed via a separate tab on an item's sheet. When equipped and attuned to, the item's
  spells or magical feats will be available via the Spellcasting tab in the character's sheet.

  Setting                         | Default   | Recommended | Comments
  ---                             | ---       | ---         | ---    
  Only identified                 | Enabled   | ---         | ---
  Hide settings tab from players  | Disabled  | ---         | ---
  
## [Math.js](https://foundryvtt.com/packages/_mathjs/) v7.5.1-fvtt2
  Includes the Math.js library for developers. No functionality on its own.
  
## [Midi QoL](https://foundryvtt.com/packages/midi-qol/) v0.3.103
  One of the best combat automation modules, period. This module allows for automatic damage calculation and application, immediate AC hit/miss check, NPC 
  saving throws, auto-prompt PCs to roll saves (in combination with [Let Me Roll That For You](https://foundryvtt.com/packages/lmrtfy/)), apply Active Effects 
  to targets (including conditions), and more. This module, along with [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/), 
  [Dynamic Active Effects](https://foundryvtt.com/packages/dae/), and [About Time](https://foundryvtt.com/packages/about-time/) do a wonderful job of making 
  GMing simpler. You can enable or disable as much functionality as you want.
  
  NOTE: There are other very great combat automation tools such as [MESS](https://foundryvtt.com/packages/mess/) and 
  [Better Rolls](https://foundryvtt.com/packages/betterrolls5e/), and they may be worth investigating. However, these settings assume that neither of those two
  modules are installed, as there is potential for compatibility issues between them.

  Requires [socketlib](https://foundryvtt.com/packages/socketlib).

### Core Settings

  Setting                                                   | Default                   | Recommended   | Comments
  ---                                                       | ---                       | ---           | ---    
  Enable roll automation support                            | Enabled                   | ---           | ---
  Add attack/damage buttons to item inventory list          | Enabled                   | ---           | ---
  Item delete check                                         | Enabled                   | ---           | ---
  GM sees all whispered messages                            | Disabled                  | ---           | ---
  Really hide private/blind/self rolls                      | Enabled                   | ---           | ---
  Fast forward ability rolls                                | Disabled                  | Enabled       | ---
  Choose how to roll critical damage                        | DND5e default             | ---           | ---
  Drag and drop targeting                                   | Disabled                  | ---           | ---
  Add damage buttons to chat message                        | None                      | ---           | ---
  Experimental: Apply checks before doing speed/macro roll  | Disabled                  | ---           | ---
  Colored border messages                                   | \*blank\*                 | Borders Only  | ---
  Untarget at end of turn                                   | untarget dead after roll  | ---           | ---
  Players control owned hidden tokens                       | Disabled                  | ---           | ---
  Enable debug                                              | \*blank\*                 | None          | ---

### Workflow Settings
### GM

  Setting                             | Recommended       | Comments
  ---                                 | ---               | ---    
  Auto roll attack                    | Enabled           | ---
  Auto fast forward attack            | Enabled           | ---
  Auto roll damage                    | Never             | ---
  Auto fast forward damage            | Enabled           | ---
  Remove chat card buttons after roll | Attack and Damage | ---
  Hide roll details                   | None              | Allows for "visible" rolls if I want them to be made in front of the players.

### Player

  Setting                             | Recommended       | Comments
  ---                                 | ---               | ---    
  Auto roll attack                    | Enabled           | ---
  Auto roll damage                    | Never             | ---
  Auto fast forward rolls             | Attack and Damage | ---
  Remove chat card buttons after roll | Attack and Damage | ---

### Workflow

  Setting                                       | Recommended                 | Comments
  ---                                           | ---                         | ---    
  Auto target on template draw                  | Walls Block                 | ---
  Auto target for ranged target spells/attacks  | None                        | ---
  Require targets to be selected before rolling | In Combat                   | ---
  Add macro to call on use                      | Disabled                    | Enabled
  Auto apply item effects to targets            | Enabled                     | ---
  Auto check if attack hits target              | Check - only GM sees        | ---
  Check player reactions                        | off                         | ---
  Check NPC/GM reactions                        | On                          | ---
  Reaction check timeout                        | 0                           | ---
  Show attack roll                              | Attack Hits                 | ---
  Auto check saves                              | Save - only GM sees         | ---
  Display saving throw DC                       | Enabled                     | ---
  Search spell description                      | Enabled                     | ---
  Default saving throw multiplier               | 0.5                         | ---
  Prompt players to roll saves                  | LMRTFY                      | ---
  Prompt GM to roll saves                       | Auto                        | ---
  Delay before rolling for players              | 10                          | ---
  Auto apply damage to target                   | No + damage card            | ---
  Apply damage immunities                       | apply immunities + physical | ---
  Require 'magical' property                    | Enabled                     | ---
  Roll formula on failed save for rwak/mwak     | Disabled                    | ---
  Enable concentration automation               | Enabled                     | Used to have it handled by [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/), but I switched to this and am much happier.
  Remove concentration on failed save           | Enabled                     | ---
  Single concentration check                    | Disabled                    | ---

### Misc

  Setting                                       | Recommended             | Comments
  ---                                           | ---                     | ---    
  Show item details in chat card                | Card + Details: PC Only | All details enabled in the sub-menu.
  Merge rolls to one card                       | Enabled                 | ---
  Condense attack/damage rolls                  | Disabled                | ---
  Chat cards use token name                     | Disabled                | ---
  Use actor portrait in chat cards              | Enabled                 | ---
  Keep roll statistics                          | Enabled                 | ---
  Save statistics every                         | 10                      | ---
  Player statistics only                        | Enabled                 | ---
  Enable speed item rolls                       | Enabled                 | ---
  Enable speed ability (save/check/skill) rolls | Enabled                 | ---
  Advantage                                     | alt                     | ---
  Disadvantage                                  | ctrl/cmd                | ---
  Critical                                      | alt                     | ---
  Versatile                                     | shift                   | ---
  Enable midi-qol custom sounds                 | Disabled                | ---

## [Mob Attack Tool](https://foundryvtt.com/packages/mob-attack-tool) v0.3.1
  Super helpful for GMs and players that have lots of summons. Allows you to roll mobs all at once, significantly speeding up encounters where you have lots of 
  enemies.

### Core Settings

  Setting                                   | Default   | Recommended             | Comments
  ---                                       | ---       | ---                     | ---    
  Use mob rules or roll individually        | Mob Rules | Individual Attack Rolls | ---
  Allow players to use mob attack tool      | Disabled  | Enabled                 | ---
  Include option to end grouped mob turns   | Enabled   | ---                     | ---
  Keep dialog open                          | Disabled  | ---                     | ---
  Default mob name prefix                   | Mob of    | ---                     | ---
  Default mob name suffix                   | (s)       | ---                     | ---

### Advanced Settings - Rolls

  Setting                                   | Default   | Recommended | Comments
  ---                                       | ---       | ---         | ---    
  Show individual attack rolls              | Disabled  | Enabled     | ---
  Show unsuccessful attack rolls            | Disabled  | Enabled     | ---
  Show individual damage rolls              | Disabled  | Enabled     | ---
  Stop whispering mob attack results        | Disabled  | ---         | ---
  Include advantage/disadvantage selection  | Disabled  | Enabled     | ---
  Advantage/disadvantage value              | 5         | ---         | ---

### Advanced Settings - Multiattack

  Setting                       | Default       | Recommended             | Comments
  ---                           | ---           | ---                     | ---    
  Show multiattack description  | Enabled       | ---                     | ---
  Autodetect multiattack        | No autodetect | Autodetect + autoselect | ---

### Advanced Settings - Targets

  Setting             | Default   | Recommended | Comments
  ---                 | ---       | ---         | ---    
  Persist AC modifier | Disabled  | ---         | ---

### Advanced Settings - Modules

  Setting                           | Default   | Recommended | Comments
  ---                               | ---       | ---         | ---    
  Enable automated animations       | Enabled   | ---         | ---
  Enable better rolls for 5e        | Enabled   | ---         | ---
  Enable dice so nice rolls         | Enabled   | ---         | Now that they all roll at once, I'm much happier with this enabled.
  Hide 3D dice for GM attack rolls  | Enabled   | ---         | ---
  Enable group initiative           | Disabled  | ---         | ---
  Group mob initiatives together    | Disabled  | ---         | ---
  Enable midi-qol                   | Enabled   | ---         | ---
  Enable on use macro               | Enabled   | ---         | ---
  Don't share itemCardId            | Enabled   | ---         | ---

## [Monks Little Details](https://foundryvtt.com/packages/monks-little-details) v1.0.34
  Lots of various quality of life improvements. Turn notifications in combat(including sounds), slight UI changes to compendiums and conditions, actor sound 
  effects, wall moving improvements, and more! Definitely a module worth taking a look at. Replaces 
  [Multiple Wall Point Mover (MWPM)](https://foundryvtt.com/packages/mwpm/).
  
  Setting                                           | Default                                           | Recommended | Comments
  ---                                               | ---                                               | ---         | ---    
  System Changes                                    | ---                                               | ---         | ---
  Swap target and settings button on the token HUD  | Enabled                                           | ---         | ---
  Alter the token HUD status effects                | Enabled                                           | ---         | ---
  Sort by columns                                   | Disabled                                          | ---         | ---
  Highlight token HUD status effects                | Enabled                                           | ---         | ---
  Add DnD statuses                                  | Enabled                                           | Disabled    | ---
  Use DnD5e invisible icon                          | Enabled                                           | Disabled    | ---
  Change core CSS                                   | Enabled                                           | ---         | ---
  Compendium scene view artwork                     | Enabled                                           | ---         | ---
  Combat Tracker                                    | ---                                               | ---         | ---
  Show encounter CR                                 | Disabled                                          | ---         | ---
  Hide enemies                                      | Disabled                                          | ---         | ---
  Popout combat dialog enabled                      | Enabled                                           | ---         | ---
  Popout combat dialog                              | Everyone                                          | ---         | ---
  Combat dialog position                            | \*blank\*                                         | Top Right   | ---
  Close combat when done                            | Enabled                                           | ---         | ---
  Prevent token combat removal                      | Enabled                                           | Disabled    | ---
  Automatically set defeated                        | NPC Zero HP                                       | No one      | Already handled by [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/).
  Automatically reveal combat tracker character     | Enabled                                           | ---         | ---
  Add combat bars                                   | Disabled                                          | ---         | ---
  Combat Turn                                       | ---                                               | ---         | ---
  Show 'next up' notification                       | Disabled                                          | Enabled     | ---
  Show 'your turn' notification                     | Disabled                                          | Enabled     | ---
  Next turn sound enabled                           | Disabled                                          | ---         | ---
  Next turn sound                                   | modules/monks-little-details/sounds/next.wav      | ---         | ---
  Current turn sound enabled                        | Disabled                                          | ---         | ---
  Current turn sound                                | modules/monks-little-details/sounds/turn.ogg      | ---         | ---
  Next round sound enabled                          | Enabled                                           | Disabled    | ---
  Next round sound                                  | modules/monks-little-details/sounds/round.wav     | ---         | ---
  Clear targets every turn                          | Enabled                                           | Disabled    | ---
  Combat Token Highlight                            | ---                                               | ---         | ---
  Show token highlight                              | Disabled                                          | Enabled     | I use this as opposed to [Next Up](https://foundryvtt.com/packages/Next-Up/), but you choose what works for you.
  Animate combat highlight                          | 100                                               | ---         | ---
  Combat highlight image                            | modules/monks-little-details/icons/turnmarker.png | ---         | ---
  Highlight size                                    | 1.5                                               | ---         | ---
  Added Features                                    | ---                                               | ---         | ---
  Actor sound effects                               | Enabled                                           | ---         | ---
  Show scene palette                                | Enabled                                           | ---         | ---
  Show drag points together                         | Enabled                                           | ---         | ---
  Movement key                                      | m                                                 | z           | "Z" doesn't stand for anything, but it fits where my hand naturally lies, so I changed it.
  Retain notify                                     | Enabled                                           | ---         | ---
  Move the pause icon up                            | Disabled                                          | ---         | ---
  Show bloodsplat                                   | Disabled                                          | ---         | ---
  Use keys to swap tools                            | Disabled                                          | ---         | ---

## [Monk's Scene Navigation](https://foundryvtt.com/packages/monks-scene-navigation/) v1.0.14
  A cool tweak to add folders to the navbar. It also replaces the default Foundry scene functionality so that left-clicking on a scene will view it, as opposed 
  to opening configuration for it. Replaces [Navbar Tweaks](https://foundryvtt.com/packages/navbar-tweaks/).

  Setting                   | Default   | Recommended | Comments
  ---                       | ---       | ---         | ---    
  Click to view             | Enabled   | ---         | ---
  Scene icons               | Enabled   | ---         | --- 
  Scene folders position    | Back      | ---         | ---
  Show folders for players  | Disabled  | ---         | ---
  Display background        | Enabled   | ---         | ---

## [Monk's TokenBar](https://foundryvtt.com/packages/monks-tokenbar/) v1.0.43
  This quality of life module adds a small "party overview" that you (the GM) can drag to any spot on your screen. It adds useful features like 
  enabling/disabling player movement, requesting rolls, etc. It even adds functionality to convert creatures into 
  [Loot Sheets](https://foundryvtt.com/packages/lootsheetnpc5e/) post-combat. Works wonderfully with 
  [DFreds Pocket Change](https://foundryvtt.com/packages/dfreds-pocket-change/), although you'll have to make sure to not override their values in the 
  post-combat menu.

  Setting                             | Default                                             | Recommended       | Comments
  ---                                 | ---                                                 | ---               | ---    
  Notify on movement change           | Enabled                                             | ---               | ---
  Show XP dialog                      | Enabled                                             | Disabled          | ---
  How to divide XP among players      | Divide XP among players                             | Do not divide XP  | ---
  Whisper player on levelup           | Enabled                                             | Disabled          | ---
  Show resource bars                  | Disabled                                            | Enabled           | ---
  Token pictures                      | Token Image                                         | Actor Portrait    | ---
  Change movement to combat           | Enabled                                             | Disabled          | ---
  Allow movement after turn           | Enabled                                             | ---               | ---
  Set movement after combat           | Free Movement                                       | Ignore            | ---
  Show on tracker                     | Enabled                                             | Disabled          | ---
  Free all tokens of active combatant | Disabled                                            | Enabled           | ---
  Convert enemies to lootable         | Disabled                                            | Enabled           | ---
  Allow player to use                 | Disabled                                            | Enabled           | ---
  Disable tokenbar                    | Disabled                                            | ---               | ---
  Delete message after grab           | Disabled                                            | ---               | ---
  Show lootable menu                  | Enabled                                             | ---               | ---
  Show inspiration                    | Disabled                                            | Enabled           | ---
  Request roll sound                  | modules/monks-tokenbar/sounds/RollRequestAlert.ogg  | \*blank\*         | ---
  Stat1 icon                          | fa-shield-alt                                       | ---               | ---
  Stat1 resource                      | attributes.ac.value                                 | ---               | ---
  Stat2 icon                          | fa-eye                                              | ---               | ---
  Stat2 resource                      | skills.prc.passive                                  | ---               | ---

## [Multilevel Tokens](https://foundryvtt.com/packages/multilevel-tokens/) v1.5.2
  An incredibly versatile module that allows the GM to set triggers whenever a token enters a certain region laid out by the Foundry built-in drawing tools. 
  Uses include teleporting an actor to a basement scene when they "walk down" a set of steps, creating portals that hop to different areas on the same map 
  (or others), adjusting token properties based on its position, etc. I use this most often in conjunction with the
  [Wall Height](https://foundryvtt.com/packages/wall-height/) module to trigger a macro that automatically adjusts a token's height by passing in the 
  "elevation" of the current terrain. If you want a trigger to activate whenever a player lands on a spot, this is the module for you.
  
  Example: To adjust height of a token automatically, draw on a region that has a different elevation than the surrounding area. Then, in the Multilevel tab of 
  the drawing, enable the "Trigger on enter" field, set the macro name to \*your macro name for adjusting elevation\*, and for additional arguments, set the 
  elevation of the region. Then, create a macro with the name of \*your macro name for adjusting elevation\*, set the type to script, and paste the following 
  code:
  ```
  token.update({"elevation": args[0]});
  ```

  Setting                                 | Default | Recommended | Comments
  ---                                     | ---     | ---         | ---    
  Auto-sync player targets                | Enabled | ---         | ---
  Auto-sync chat bubbles                  | Enabled | ---         | ---
  Clone token flags set by other modules  | Enabled | ---         | ---
  
## [Next Up](https://foundryvtt.com/packages/Next-Up/) v0.1.05
  A successor of [Turn Marker](https://foundryvtt.com/packages/turnmarker/), this module provides an animated icon underneath the current token's turn. Also, 
  it can automatically open/close character sheets in combat when their turn pops up, so you don't have to worry about a thousand different NPC sheets all the 
  time! This also works with [PopOut!](https://foundryvtt.com/packages/popout/), which is extremely useful.

  Setting                               | Default                                           | Recommended                                       | Comments
  ---                                   | ---                                               | ---                                               | ---    
  Auto open character sheets            | Enabled                                           | ---                                               | ---    
  Sheet position                        | Disable opening character sheet                   | Top Left                                          | ---
  Open sheets: actor type filter        | All                                               | Only Unlinked                                     | ---
  Close sheets: actor type filter       | Unlinked Only                                     | ---                                               | ---
  Close sheets: combatant filter        | None                                              | Previous Combatant                                | ---
  Popout actor sheets                   | Disabled                                          | ---                                               | Would love to have this functionality, but it can lead to multiple bugs so I prefer to avoid it.
  Enable panning for individual clients | Disabled                                          | Enabled                                           | ---
  Pan to next combatant                 | Disabled                                          | ---                                               | ---
  Remove pin icon from character sheets | Disabled                                          | Enabled                                           | ---
  Add turn marker                       | Enabled                                           | Disabled                                          | Handled by [Monks Little Details](https://foundryvtt.com/packages/monks-little-details).
  Turn marker icon                      | \[data\] modules/Next-Up/Markers/DoubleSquare.png | \[data\] modules/Next-Up/Markers/madmage.png      | ---
  Animation speed for turn marker       | 3                                                 | 5                                                 | ---
  Turn marker ratio                     | 1                                                 | 1.35                                              | ---
  Render icon above target              | Disabled                                          | ---                                               | ---
  Start turn marker                     | \*blank\*                                         | Shadow                                            | ---
  Start turn marker icon                | \[data\] modules/Next-Up/Markers/BlackCross.png   | \[data\] modules/Next-Up/Markers/DoubleSquare.png | This is unused.
  Start marker ratio                    | 1                                                 | ---                                               | ---
  Auto control next token               | None                                              | NPCs Only                                         | ---
  Auto clear user targets               | Disabled                                          | ---                                               | ---
  Turn start audio cue                  | Disabled                                          | ---                                               | ---
  Audio cue path                        | \*blank\*                                         | ---                                               | ---
  
## [Party Overview](https://foundryvtt.com/packages/party-overview/) v2.4.2
  A successor to [Virtual Tabletop Assets - Party Overview](https://foundryvtt.com/packages/vtta-party/), Party Overview adds an info icon in the Actors tab 
  that pops an overview of the current party of PCs. HP, AC, languages, wealth, etc. is all available. I use it mainly for the Languages tab since the other 
  info is pretty easy to see, but it's useful information to have in one place.

  Setting                               | Default | Recommended | Comments
  ---                                   | ---     | ---         | ---    
  Grant players access to the overview  | Enabled | Disabled    | ---

## [PDFFoundry](https://foundryvtt.com/packages/pdfoundry) v0.8.10
  Adds PDF functionality to Foundry. Incredibly useful if you have homebrew PDF rules or PDF character sheets that you like to use. Unfortunately, it doesn't 
  work well with [PopOut!](https://foundryvtt.com/packages/popout/), and it looks like maintenance work on it has ceased. That being said, it's an incredibly 
  useful module that works well as-is.

  Setting                             | Default           | Recommended | Comments
  ---                                 | ---               | ---         | ---    
  PDF cache size                      | 256               | 512         | ---
  Show shared PDFs in existing viewer | Enabled           | ---         | ---
  Viewer theme                        | Fantasy (Default) | ---         | ---
  
## [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/) v1.9.14
  Replicates the darkvision rules of DnD5e, including seeing dim as bright light, grayscale for seeing in darkness, options for global illumination light scale,
  etc. Extremely useful for adding a pinch of flavor for those characters that can see in the dark.
  
  NOTE: Has some pretty significant performance issues. If you or your players have low-end hardware, it might be necessary to avoid this module, as good as it
  is.

  Setting                     | Default                 | Recommended     | Comments
  ---                         | ---                     | ---             | ---    
  Vision rules                | Dungeons & Dragons 5e   | ---             | ---
  Dim vision in darkness      | Dim Light (monochrome)  | ---             | ---
  Dim vision in dim light     | Bright Light            | ---             | ---
  Bright vision in darkness   | Bright Light            | ---             | ---
  Bright vision in dim light  | Bright Light            | ---             | ---
  Monochrome vision color     | #ffffff                 | ---             | ---
  Monochrome token icons      | Disabled                | Enabled         | ---
  Monochrome special effects  | Disabled                | ---             | ---

## [Permission Viewer](https://foundryvtt.com/packages/permission_viewer/) v0.8.7
  Adds an easy way to view and customize permissions for players by adding UI elements along the side of actors, items, journals, etc. The UI is a little weird
  to get used to at first, but it's a nice quality of life change.
  
  NOTE: Share icon = None, Diamond = Limited, Square = Observer, Circle = Owner
  
## [Pin Cushion](https://foundryvtt.com/packages/pin-cushion/) v1.5.0
  When in journal mode, allows the GM to double-click on the map for quick creation of journal entries. These entries can be hovered over to view their title at
  a glance, making them extremely useful for dungeon notes.

  Setting                           | Default   | Recommended | Comments
  ---                               | ---       | ---         | ---    
  Show journal preview              | Disabled  | ---         | I used to enable this, however, a core change to Foundry now implements it.
  Journal preview type              | HTML      | ---         | ---
  Preview maximum length            | 500       | ---         | ---
  Preview delay                     | 500       | ---         | ---
  Default journal entry permission  | None      | ---         | ---
  Default journal entry folder      | None      | Per User    | ---
  
## [Pings](https://foundryvtt.com/packages/pings/) v1.2.12+0.8.6
  Allows players and GMs to ping on the screen to highlight important areas.

  Requires [Settings Extender](https://foundryvtt.com/packages/settings-extender).

  Setting                               | Default           | Recommended | Comments
  ---                                   | ---               | ---         | ---    
  Minimum move permission               | PLAYER            | ---         | ---
  Mouse button to press for a ping      | LeftClick         | ---         | ---
  Mouse button for a screen-moving ping | Shift + LeftClick | ---         | ---
  Mouse button press duration           | 350               | ---         | ---
  Key to press for a ping               | \*blank\*         | ---         | ---
  Key for a screen-moving ping          | \*blank\*         | ---         | ---
  Show player name                      | Enabled           | ---         | ---
  Ping image                            | \*blank\*         | ---         | ---
  Scale                                 | 1                 | ---         | ---
  Duration                              | 3                 | ---         | ---
  Rotation                              | Enabled           | ---         | ---
  Rotation speed                        | 6                 | 2           | ---
  Size change                           | Enabled           | ---         | ---
  Size change amount                    | 0.125             | ---         | ---
  Size change speed                     | 3                 | 1           | ---
  
## [Playlist Importer](https://foundryvtt.com/packages/playlist_import/) v1.6.1
  Allows for bulk importing of playlists via a button at the bottom of the Playlist tab. The playlists need to be ordered in a specific way to work nicely with
  the Foundry playlist system, however, once your folder structure is set up correctly, this module makes adding new music a breeze. I highly recommend it for
  those with lots of different music tracks for different scenarios.

  Setting                 | Default             | Recommended | Comments
  ---                     | ---                 | ---         | ---    
  S3 bucket               | \*blank\*           | ---         | ---
  Set repeat for tracks   | Disabled            | ---         | ---
  Set stream for tracks   | Disabled            | Enabled     | ---
  Base music directory    | music               | ---         | ---
  Set default volume      | 0.5                 | ---         | ---
  Song duplicate checker  | Enabled             | ---         | Disable if you are importing for the first time/starting over from scratch.
  Reassign regex          | ^\d\d+ \*_\*-\* \*  | ---         | ---
  Select source           | data                | ---         | ---
  
## [Polyglot](https://foundryvtt.com/packages/polyglot/) v1.6.12.1
  Allows players and GM-selected tokens to speak in their selected languages that are only readable by others that speak the same language. For others that do 
  not speak that language, the text appears as gibberish symbols.

  Setting                     | Default   | Recommended | Comments
  ---                         | ---       | ---         | ---    
  Default language              | \*blank\* | ---         | ---
  Randomize runes               | Disabled  | ---         | ---
  Make fonts available          | Enabled   | ---         | ---
  Language Settings             | ---       | ---         | ---
  Replace system's languages    | Disabled  | ---         | ---
  Custom languages              | \*blank\* | ---         | ---
  Comprehend languages spell    | \*blank\* | ---         | ---
  Tongues spell                 | \*blank\* | ---         | ---
  Chat Settings                 | ---       | ---         | ---    
  Display translations          | Enabled   | ---         | ---    
  Hide indicators from players  | Disabled  | ---         | ---    
  Scramble OOC chat messages    | GM Only   | None        | ---
  Scramble messages for GM      | Enabled   | Disabled    | ---
  
## [PopOut!](https://foundryvtt.com/packages/popout/) v2.0
  Allows players and GMs to pop actors out into their own separate window. One of my most-used quality of life modules, and it's especially useful for those 
  with multiple monitors.
  
  Setting                         | Default   | Recommended | Comments
  ---                             | ---       | ---         | ---    
  Show popout! button.            | Enabled   | ---         | ---
  Pop sheets out into windows     | Enabled   | ---         | ---
  Bounding box compatibility mode | Disabled  | ---         | ---
  
## [Quick Encounters](https://foundryvtt.com/packages/quick-encounters/) v0.8.1
  Adds an option for the GM in the top left menu to create a Quick Encounter from a group of selected tokens. This will pull the tokens from the scene and into
  a journal, which replaces the tokens on the scene. Opening the journal provides a pop-up menu to initialize the encounter and place all the tokens you took
  out. Useful for large maps with multiple groups of enemies.
  
  Setting                               | Default | Recommended | Comments
  ---                                   | ---     | ---         | ---    
  Freeze "captured" tokens              | Enabled | ---         | ---
  Show automatically from journal entry | Enabled | ---         | ---
  Display XP after combat               | Enabled | Disabled    | Would enable if using XP levelling.
  
## [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/) v2.4.7
  Another amazing quality of life module, Quick Insert adds a hotkey to search through your world's scenes, actors, journals, items, and even compendiums. I 
  almost never actually use the navigation tabs anymore to look up entities because of how often I use this module.
  
  For the settings and filters, you should definitely look to set those to your personal preferences. Personally, I disable players searching for macros, 
  rollable tables, and scenes while leaving everything else enabled. I leave the filters as their defaults.

  Requires [Keybind Lib](https://foundryvtt.com/packages/keybind-lib).

  Setting                         | Default               | Recommended | Comments
  ---                             | ---                   | ---         | ---    
  GMs only                        | Disabled              | ---         | ---
  Character sheet integration     | Enabled               | ---         | ---
  Experimental - Index guard      | Disabled              | ---         | ---
  Automatic indexing              | Wait until first open | 5 seconds   | ---
  Index timeout                   | 1.5 seconds           | ---         | ---
  Search button in scene controls | Disabled              | ---         | ---
  Enable global browse mode       | Enabled               | ---         | ---
  Keybind - Open quick insert     | Ctrl + \*spacebar\*   | ---         | ---

## [Settings Extender](https://foundryvtt.com/packages/settings-extender) v1.1.6+0.8.6
  A dependency used by many other modules. Basically, it provides module developers an easier way to create more complicated settings for users to enjoy. If you
  don't have a module that depends on this, I'd recommend not installing it unless you're a module developer.

## [Simple Calendar](https://foundryvtt.com/packages/foundryvtt-simple-calendar) v1.2.113
  As the title says, this module includes a simple calendar that helps GMs and players alike in adjusting the time, adding calendar notes, tracking the lunar
  phases, etc. It's very simple and very well-done. It integrates well with [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/), and I highly
  recommend using them together.

  NOTE: Upon updating to 0.8.8, my [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/) module was not running. This is because it needed to 
  sync with this module. If you're having this issue as well, follow the instructions on the 0.8.8 Upgrade Notes page.

## [Simplefog - Manual Fog of War](https://github.com/League-of-Foundry-Developers/simplefog) v0.1.18
  An updated version of the older [Simplefog](https://foundryvtt.com/packages/simplefog/) module, Simplefog allows you manually show/hide the fog of war, 
  similar to Roll20's free tier. It's extremely useful for world maps and exploration.
  
  NOTE: Unlike most of the other modules in this list, you should manually import the updated version of this module via the manifest URL located 
  [here](https://raw.githubusercontent.com/League-of-Foundry-Developers/simplefog/master/module.json). If you use the typical Foundry interface, it will install
  the old version that is incompatible with the lighting upgrades in Foundry version 0.7.x.

## [socketlib](https://foundryvtt.com/packages/socketlib) v1.0.8
  Used by other modules. Don't install unless you have another module that requires it.

## [Tidy UI - Game Settings](https://foundryvtt.com/packages/tidy-ui_game-settings/) v0.1.23
  Makes the module manager and configuration settings UI cleaner and easier to navigate. Very useful when setting up modules and fine-tuning your world.

  Setting                                 | Default   | Recommended | Comments
  ---                                     | ---       | ---         | ---    
  Always activate the module settings tab | Disabled  | Enabled     | ---
  Hide "disable all modules" button       | Disabled  | ---         | ---

## [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) v0.5.10
  Arguably the best character/NPC sheet out there (and my personal favorite). Keeps things compact and well-organized, and it plays well with most other
  modules. It also has tons of configurable options if you want to tweak it for your liking. Highly recommend.
  
### Core Settings
  
  Setting                                 | Default         | Recommended | Comments
  ---                                     | ---             | ---         | ---    
  Tidy5e color theme                      | Default (light) | ---         | ---
  Use classic item controls in list view  | Disabled        | ---         | ---
  Show item info cards in all layouts     | Enabled         | ---         | ---
  Show item info cards for NPCs/vehicles  | Enabled         | Disabled    | ---
  Item info cards float next to cursor    | Disabled        | ---         | ---
  Delay showing info cards                | 300             | ---         | ---
  
### Sheet Settings - Players
  
  Setting                                       | Default   | Recommended | Comments
  ---                                           | ---       | ---         | ---    
  Hide character journal                        | Disabled  | ---         | ---
  Hide character class list                     | Disabled  | ---         | ---
  Inanimate inspiration tracker                 | Disabled  | ---         | ---
  Hide exhaustion and inspiration tracker on 0  | Disabled  | ---         | ---
  Show inspiration indicator only on hover      | Disabled  | ---         | ---
  Show exhaustion tracker only on hover         | Disabled  | ---         | ---
  Disable health bar                            | Disabled  | ---         | ---
  Hide hit point overlay                        | Disabled  | Enabled     | ---
  Show trait labels                             | Disabled  | Enabled     | ---
  Toggle empty character traits                 | Disabled  | Enabled     | ---
  Move traits below resources                   | Disabled  | Enabled     | ---
  Only show equipped ammunition                 | Disabled  | ---         | ---
  
### Sheet Settings - NPCs/Vehicles
  
  Setting                     | Default                   | Recommended | Comments
  ---                         | ---                       | ---         | ---    
  Resting for NPCs            | Disabled                  | ---         | ---
  Hide chat card for NPC rest | Disabled                  | ---         | ---
  Mark linked/unlinked NPCs   | No link marker (default)  | ---         | ---
  Disable health bar          | Disabled                  | ---         | ---
  Hide hit point overlay      | Disabled                  | Enabled     | ---
  Always show traits          | Disabled                  | ---         | ---
  Move traits below resources | Disabled                  | Enabled     | ---
  Always show skills          | Disabled                  | Enabled     | ---
  Disabled health bar         | Disabled                  | ---         | ---
  Hide hit point overlay      | Disabled                  | Enabled     | ---
  
### Sheet Settings - GM Options
  
  Setting                                     | Default                                     | Recommended                                             | Comments
  ---                                         | ---                                         | ---                                                     | ---    
  Show player name                            | Disabled                                    | Enabled                                                 | ---
  Disable right click context menu            | Disabled                                    | ---                                                     | ---
  Expanded limited view for character sheets  | Disabled                                    | ---                                                     | ---
  Key to hold for item card interaction       | x                                           | ---                                                     | ---
  Round portrait style                        | none                                        | ---                                                     | ---
  Offset hit point overlay PCs                | 0                                           | ---                                                     | ---
  Offset hit point overlay NPCs               | 0                                           | ---                                                     | ---
  Offset hit point overlay vehicles           | 0                                           | ---                                                     | ---
  Lock down sensitive fields                  | Disabled                                    | ---                                                     | ---
  GM can always edit PC sheets                | Disabled                                    | ---                                                     | ---
  Only GM can edit active effects             | Disabled                                    | ---                                                     | ---
  Always show item quantity                   | Disabled                                    | Enabled                                                 | ---
  Disable inspiration tracker                 | Disabled                                    | ---                                                     | ---
  Auto exhaustion effects                     | No automatic exhaustion effects             | Tidy5e - Apply integrated effects (uses Active Effects) | ---
  Custom exhaustion effect icon               | modules/tidy5e-sheet/images/exhaustion.svg  | ---                                                     | ---
  Disable exhaustion tracker                  | Disabled                                    | ---                                                     | ---
  
### Sheet Settings - Modules
  
  Setting                                             | Default   | Recommended | Comments
  ---                                                 | ---       | ---         | ---    
  Default tab when opening a sheet for the first time | Actions   | Attributes  | ---
  Show midi qol item buttons in item's info card      | Disabled  | Enabled     | ---
  Show active effects marker on items                 | Disabled  | Enabled     | ---


## [Token Action HUD](https://foundryvtt.com/packages/token-action-hud/) v1.1.12
  Adds a HUD to the top of the screen to easily perform token actions like access inventory, skill checks and saves, cast spells, etc. Very useful if you have
  lots of different monsters and you don't want to open the stat blocks for each one.

  Setting                                             | Default                                     | Recommended | Comments
  ---                                                 | ---                                         | ---         | ---    
  HUD roll handler                                    | Core D&D5e \[supports Midi QOL\]            | ---         | ---
  Enable HUD for current user                         | Enabled                                     | ---         | ---
  Always display HUD                                  | Enabled                                     | ---         | ---
  Show HUD title                                      | Enabled                                     | ---         | ---
  Show action icons                                   | Enabled                                     | ---         | ---
  Always show custom categories                       | Enabled                                     | ---         | ---
  Enable hovering                                     | Disabled                                    | ---         | ---
  Click-to-open categories                            | Disabled                                    | ---         | ---
  Ignore passive feats                                | Disabled                                    | ---         | ---
  Display spell information                           | Enabled                                     | ---         | ---
  Show all non-preparable spells                      | Enabled                                     | ---         | ---
  Hide actions with an activation longer than 1 round | Disabled                                    | Enabled     | ---
  Abbreviate skill and ability names                  | Disabled                                    | ---         | ---
  Show separate ability check and save categories     | Enabled                                     | ---         | ---
  Show all NPC items                                  | Enabled                                     | ---         | ---
  Show empty items (includes items and spells)        | Disabled                                    | ---         | ---
  Show conditions category                            | Enabled                                     | ---         | ---
  Group by action type                                | Disabled                                    | Enabled     | ---
  Item-macro: item macro, original item, or both      | Show both original item and item macro item | ---         | ---
  Enable HUD for players                              | Enabled                                     | ---         | ---
  Show item sheet on right click                      | Enabled                                     | ---         | ---
  HUD scale                                           | 1                                           | ---         | ---
  HUD background color                                | none                                        | ---         | ---
  Mark active CSS with text                           | Disabled                                    | ---         | ---
  Dropdown categories                                 | Enabled                                     | ---         | ---
  Enable debugging                                    | Disabled                                    | ---         | ---
  
## [Token Attacher](https://foundryvtt.com/packages/token-attacher/) v4.1.2
  Allows for attaching anything to a token. Literally, anything. As its most basic, it's useful to attach tokens to other tokens, making it easier to create
  vehicles, mounts, etc. However, it can be used for tons of things outside of that, including prefabs. The more you use it, the more you'll get out of it.
  
## [Token Auras](https://foundryvtt.com/packages/token-auras/) v1.11
  Adds an option for creating auras in the Image tab of a token, similar to Roll20.
  
## [Token Health](https://foundryvtt.com/packages/token-health/) v0.4.3
  Small module that adds a hotkey to easily apply damage or healing to a given token. For me, I prefer it as the Enter key. I use this quite a bit, even with 
  other automation modules.

  Requires [Library: DF Hotkeys](https://foundryvtt.com/packages/lib-df-hotkeys).

  Setting                               | Default                             | Recommended | Comments
  ---                                   | ---                                 | ---         | ---    
  Enable token images in dialog         | Enabled                             | ---         | ---
  Additive damage                       | Disabled                            | ---         | ---
  Primary damage type (optional)        | \*blank\*                           | ---         | ---
  Secondary damage type (optional)      | \*blank\*                           | ---         | ---
  Tertiary damage type (optional)       | \*blank\*                           | ---         | ---
  Mitigation source 1 (optional)        | \*blank\*                           | ---         | ---
  Mitigation source 2 (optional)        | \*blank\*                           | ---         | ---
  Mitigation source 3 (optional)        | \*blank\*                           | ---         | ---
  Primary damage subtype (optional)     | \*blank\*                           | ---         | ---
  Primary health pool (required)        | attributes.hp.value                 | ---         | ---
  Max 1st health pool (required)        | attributes.hp.max                   | ---         | ---
  Temporary 1st health pool (optional)  | attributes.hp.temp                  | ---         | ---
  Secondary damage type (optional)      | \*blank\*                           | ---         | ---
  Secondary health pool (\*)            | \*blank\*                           | ---         | ---
  Max 2nd health pool (\*)              | \*blank\*                           | ---         | ---
  Temporary 2nd health pool (optional)  | \*blank\*                           | ---         | ---
  Allow negative hit points             | Disabled                            | ---         | ---
  Threshold for unconscious (optional)  | 0                                   | ---         | ---
  Threshold for dying (optional)        | 0                                   | ---         | ---
  Set token conditions - AGE games      | Disabled                            | ---         | ---
  Allow damage buyoff - AGE games       | Disabled                            | ---         | ---
  Enable token chat                     | Enabled                             | Disabled    | I'm not really a fan of the chat messages, but that's just me. If you want to disable them, this is the spot.
  When damage done                      | You hit me!                         | ---         | ---
  Minimal damage                        | For one measly point of damage...   | ---         | ---
  Points of damage                      | points of damage                    | ---         | ---
  Recipient becomes unconscious         | I feel so sleepy...                 | ---         | ---
  Recipient dies                        | Goodbye cruel world!                | ---         | ---
  Recipient is already dead             | Hey! Don't beat a dead horse!       | ---         | ---
  When healing applied                  | Oooo! Thank you!                    | ---         | ---
  Minimal healing                       | For one measly point of healing...  | ---         | ---
  Points of healing                     | points of healing                   | ---         | ---
  No effect (healing or damage)         | Meh! Not impressed                  | ---         | ---
  Recipient becomes injured             | Ouch! That hurt!                    | ---         | ---
  Recipient becomes wounded             | Dang! That really hurt!             | ---         | ---
  
## [Token Hotbar](https://foundryvtt.com/packages/foundry-token-hotbar/) v4.2.1
  Allows a player or GM to assign a given page on the hotbar to remember different macros for different tokens, sort of like "profiles". This module is 
  extremely useful for GMs especially as it gives you a quick way to remember the most commonly-used actions on a monster-by-monster basis. Works well when 
  combined with [Custom Hotbar](https://foundryvtt.com/packages/custom-hotbar/).

  Setting                   | Default   | Recommended | Comments
  ---                       | ---       | ---         | ---    
  Use custom hotbar (beta)  | Disabled  | Enabled     | ---
  Page                      | 5         | 1           | ---
  Link to linked actor      | Enabled   | ---         | ---
  Always link to actor      | Disabled  | Enabled     | ---
  Shared token hotbar       | Disabled  | ---         | ---
  Lock shared hotbar        | Disabled  | ---         | ---
  Debug mode                | Disabled  | ---         | ---
  
## [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/) v2.3.2
  Adds small speed, AC, and passive perception markers when right-clicking on a token.

  Setting                         | Default   | Recommended | Comments
  ---                             | ---       | ---         | ---    
  GM only?                        | Enabled   | Disabled    | ---
  Show all passive senses (dnd5e) | Disabled  | Enabled     | ---
  Token position                  | left      | ---         | ---
  
## [Token Mold](https://foundryvtt.com/packages/token-mold/) v2.13.1
  Overwrites token options when placing new tokens. In order to configure these overrides, click the Token Mold settings icon at the top of the Actors tab. 
  Very useful when you have to place a lot of monsters and want to override the configuration for each one, especially if you want to roll for HP.
  
  I usually keep the Name, Config, and Overlay settings enabled.

### Name

  Setting                                         | Recommended                               | Comments
  ---                                             | ---                                       | ---    
  Apply settings to unlinked tokens only          | Enabled                                   | ---
  Add counting numbers to name as suffix          | Enabled                                   | ---
  Number style                                    | arabic numerals                           | ---
  Increase index by up to                         | 1                                         | ---
  Add random adjective from dictionary            | Disabled                                  | ---
  Choose adjectives from following rollable table | English - smaller but curated set of 700  | ---
  Adjective placement                             | Front                                     | ---
  Base name                                       | Do nothing                                | ---

### System Specific

  Setting                                                 | Recommended | Comments
  ---                                                     | ---         | ---    
  Send result to chat                                     | Enabled     | ---
  Set token size to creature size and scaled to map scale | Enabled     | ---

### Modify Default Config

  Setting                           | Recommended                               | Comments
  ---                               | ---                                       | ---    
  Display bars: overwrite           | Enabled                                   | ---
  Display bars                      | OWNER                                     | ---
  Bar 1 attribute: overwrite        | Enabled                                   | ---
  Bar 1 attribute                   | attributes.hp \[character, npc, vehicle\] | ---
  Bar 2 attribute: overwrite        | Disabled                                  | ---
  Bar 2 attribute                   | None                                      | ---
  Display name: overwrite           | Enabled                                   | ---
  Display name                      | OWNER                                     | ---
  Token disposition: overwrite      | Disabled                                  | ---
  Token disposition                 | NEUTRAL                                   | ---
  Vision: overwrite                 | Disabled                                  | ---
  Vision: has vision                | Enabled                                   | ---
  Random scale multiplier: active   | Disabled                                  | ---
  Random scale multiplier: min      | 0.8                                       | ---
  Random scale multiplier: max      | 1.2                                       | ---
  Random rotation range: overwrite  | Disabled                                  | ---
  Random rotation range: min angle  | 0                                         | ---
  Random rotation range: max angle  | 360                                       | ---
  Random mirroring: horizontal      | Disabled                                  | ---
  Random mirroring: vertical        | Disabled                                  | ---

### Stat Overlay

  Icon  | Attribute | Comments  
  ---   | ---       | ---
  Eye   | None      | No idea what this does, to be honest, but it's there :) 

## [Token Stamp 2](https://foundryvtt.com/packages/rolladvantage-token-stamp-2-foundry) v1.1.2
  I used to use this *so* often when creating monsters for Roll20. Token Stamp 2 is an application that allows you to create custom tokens for your images. 
  This module adds a window within Foundry, so you don't have to navigate to their site in order to use their tool. Very useful! Adds a small button by the 
  link to the token image within the token menu.

  Setting                 | Default                                     | Recommended   | Comments
  ---                     | ---                                         | ---           | ---    
  Token stamp 2 save path | worlds/this-isnt-working-out/rolladvantage  | assets/tokens | ---
  
## [Tokenizer](https://foundryvtt.com/packages/vtta-tokenizer/) v3.2.5
  Adds a mini token editor in-game that is extremely easy to use. Good for when you have a monster that doesn't have its own token associated with it.

  Setting                                   | Default                                           | Recommended             | Comments
  ---                                       | ---                                               | ---                     | ---    
  Default character frame                   | /modules/vtta-tokenizer/img/default-frame-pc.png  | ---                     | ---
  Default NPC frame                         | /modules/vtta-tokenizer/img/default-frame-npc.png | ---                     | ---
  Directory for custom token frames         | \*blank\*                                         | ---                     | ---
  Add a frame to the token when opened      | Enabled                                           | ---                     | ---
  Player image upload directory             | \*blank\*                                         | \[data\] assets/tokens  | ---
  NPC image upload directory for NPC tokens | \*blank\*                                         | \[data\] assets/tokens  | ---
  Image file type                           | *.webp                                            | ---                     | ---
  Token size                                | 400                                               | ---                     | ---
  Portrait size                             | 400                                               | ---                     | ---
  Title bar link?                           | Disabled                                          | ---                     | ---
  
## [Trigger Happy](https://foundryvtt.com/packages/trigger-happy/) v0.8.7
  Adds the ability to make triggers for journals, macros, and more. The amount of functionality this module provides is only limited by your imagination (and 
  scripting ability). I use it primarily for our group's landing page.
  
  Setting                                 | Default       | Recommended | Comments
  ---                                     | ---           | ---         | ---    
  Name of the trigger journal to use      | Trigger Happy | ---         | I created a folder called 'Trigger Happy' and store all my journals in there. Makes it easier to organize.
  Capture at edge of drawing/token        | Disabled      | ---         | ---
  Add enable/disable trigger happy button | Enabled       | Disabled    | ---
  
## [Turn Alert](https://foundryvtt.com/packages/turnAlert/) v2.0.0
  Adds the ability to create chat alerts in the combat tracker via a bell icon at the top of the Combat Tracker while combat is active. Clicking on that bell 
  will show the current turn alerts and allow the GM to modify them.
  
## [Tweak Playlist](https://foundryvtt.com/packages/tweakplaylist/) v0.4.5.11
  Allows for hiding of tracks and playlists from players. Also adds the ability to randomize volume/delays. Most importantly, adds CSS to turn the stop/start
  buttons red/green respectively.

  Setting       | Default   | Recommended | Comments
  ---           | ---       | ---         | ---    
  Hide tracks   | Disabled  | Enabled     | ---
  Allow random  | Disabled  | ---         | ---
  
## [Universal Battlemap Importer](https://foundryvtt.com/packages/dd-import/) v2.1.0
  Adds a button at the bottom of the Scenes tab that allows you to import .dd2vtt files as scenes. If you make your maps with 
  [Dungeondraft](https://dungeondraft.net/) (which I highly recommend, especially with the [Forgotten Adventures](https://www.patreon.com/forgottenadventures)
  and [Tom Cartos](https://www.patreon.com/tomcartos) assets), this module will save you hours of prep work.

  NOTE: I usually keep this disabled until I need to import something.
  
  Setting           | Default   | Recommended | Comments
  ---               | ---       | ---         | ---    
  Openable windows  | Disabled  | ---         | ---
  
## [Vance's Sidebar Resizer](https://foundryvtt.com/packages/vance-sidebar-resizer/) v0.0.2
  Allows for resizing of the sidebar. Nothing more, nothing less!
  
## [Virtual Tabletop Assets - Iconizer](https://foundryvtt.com/packages/vtta-iconizer/) v2.1.12
  When new items are created that match an already-existing item icon, this module replaces the stock image with the existing icon.

  Setting                 | Default                           | Recommended                                   | Comments
  ---                     | ---                               | ---                                           | ---    
  Icon replacement policy | Replace all icons                 | ---                                           | ---
  Icon database policy    | Use only the predefined database  | Use the predefined database and my custom one | Not that it matters since I have no custom icons, but if I add them, I like to have this option enabled.
  Base dictionary         | Foundry Icons                     | ---                                           | ---
  Icon prefix             | iconizer                          | ---                                           | ---
  
## [Wall Cutter](https://foundryvtt.com/packages/WallCutter/) v1.1.1
  Adds the ability to create a breakpoint at the halfway point in a wall segment. Pretty useful for fixing mistakes when creating walls for scenes.
  
## [Wall Height](https://foundryvtt.com/packages/wall-height/) v3.5.3.9
  Adds two fields to the wall menu - Wall Height (Top) and Wall Height (Bottom). When set up, tokens with an elevation higher than the Top can see over the 
  wall, while tokens with an elevation lower can see under the Bottom. Extremely useful when combined with 
  [Multilevel Tokens](https://foundryvtt.com/packages/multilevel-tokens/) to automatically adjust token elevation.

  Setting         | Default | Recommended | Comments
  ---             | ---     | ---         | ---    
  Enable tooltip  | Enabled | ---         | ---
  
## [zSync](https://foundryvtt.com/packages/zsync/) v0.0.4
  Syncs all player/GM views so that tokens are on the same layer for everyone.

<a name="awesome-media-modules"></a>
# Awesome Media Modules
- [Tons of them right here!](https://foundryvtt.com/packages/exclusive)
<a name="awesome-organized-media-modules"></a>
# Awesome Media Modules (that I've already organized)
<a name="music-modules"></a>
## Music
- [Michael Ghelfi Audio Pack](https://foundryvtt.com/packages/michaelghelfi/) - Great ambient sounds and songs!
<a name="map-pack-modules"></a>
## Map Packs
- [Baileywiki Maps Pack](https://foundryvtt.com/packages/baileywiki-maps/) - Full scenes filled with module integrations.
- [Domille's Wondrous Works - Battlemap Collection](https://foundryvtt.com/packages/dww-battlemaps/) - Great, high quality maps!
- [The MAD Cartographer | Free Battlemap Pack](https://foundryvtt.com/packages/mad-cartographer-free-maps/) - More great maps!
- [MikWewa Battlemap Bundle](https://foundryvtt.com/packages/mikwewa-free/) - All the maps!
- [Spellarena Battlemap Collection](https://foundryvtt.com/packages/spellarena/) - I'm running out of adjectives for these (awesome) map packs.
- [TacticalMap Battlemaps Pack](https://foundryvtt.com/packages/tacticalmap-free/) - These are pretty cool, too!
- [Tom Cartos Ostenwold](https://foundryvtt.com/packages/tomcartos-ostenwold/) - This one's a little different as it's a preset town. Also, great maps!
<a name="modules-to-chop"></a>
# Modules on the Chopping Block
<a name="modules-waiting-8"></a>
# Modules Waiting on 0.8.x Support

## [Conditional Visibility](https://foundryvtt.com/packages/conditional-visibility/) v0.1.4
Adds certain conditions that hides tokens for players based on certain sight conditions such as Invisibility, being shrouded in the Darkness spell, etc. A
borderline must-have if one of your players is a Shadow Sorcerer.

  Setting                       | Default   | Recommended   | Comments
  ---                           | ---       | ---           | ---    
  Auto hide on stealth rolls    | Disabled  | ---           | ---

## [RC Spent/Recoverable Ammo Tracker](https://foundryvtt.com/packages/rc-spent-ammo) v1.0.13
  Keeps track of ammo spent before and after combat, then outputs an option to recover half (rounded down) after combat ends. Super nice if you have a ranger or
  similar character in your party.

<a name="modules-to-review"></a>
# Modules to Review
- [Automated Animations](https://foundryvtt.com/packages/automated-jb2a-animations) - Leverages JB2A templates for automatically applying their assets to spell
  effects and other cool stuff. Wondering about performance impact.
- [DF Chat Enhancements](https://foundryvtt.com/packages/df-chat-enhance) - Chat enhancements, look pretty neat.
- [Food and Water Tracker](https://foundryvtt.com/packages/food-and-water-tracker) - Could be useful for survival games, either this one or Burger Time.
- [FXMaster](https://foundryvtt.com/packages/fxmaster/) - Adds cool animations. Wondering about performance impact.
- [JB2A Animated Assets](https://foundryvtt.com/packages/JB2A_DnD5e/) - Library of animations and assets. Wondering about performance impact.
- [Levels](https://foundryvtt.com/packages/levels) - Finally, a cool multi-level solution that 'just works'. No offense Multilevel Tokens, but this looks like
  the real deal. Definitely next on my list to check out.
- [Lichtgeschwindigkeit](https://foundryvtt.com/packages/lichtgeschwindigkeit) - Huge lighting upgrades.
- [Module Sets](https://foundryvtt.com/packages/module-sets) - Alternate between setup vs. live modules.
- [Monk's Active Tile Triggers](https://foundryvtt.com/packages/monks-active-tiles) - Replacement for Multilevel Tokens?
- [Moulinette](https://foundryvtt.com/packages/moulinette-core) - Searchable tile and other prefab placement tools... this could get spicy.
- [Potato or Not](https://foundryvtt.com/packages/potato-or-not) - I think I'm in love.
- [Quick Status Select](https://foundryvtt.com/packages/quick-status-select) - Filtering conditions... could be useful, but could interfere with other modules.
  
<a name="modules-to-review-later"></a>
# Modules to Review at a Later Date
- [DF Architect](https://foundryvtt.com/packages/df-architect) - A host of GM tools, could replace [Wall Cutter](https://foundryvtt.com/packages/WallCutter/).
  Requires Library: DF Hotkeys, libwrapper

  Why removed: Cool concept, but it wouldn't render any scenes with this module enabled.

  Will revisit: If it starts working again.
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
  
  Will revisit: When the module has been updated to show on all machines and doesn't glitch all the time.
<a name="other-cool-modules"></a>
# Other Cool Modules
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

- [SmallTime](https://github.com/unsoluble/smalltime) - Cool replacement for Calendar/Weather... However, it doesn't have as fine-grain of control.
  
  Why not install: I prefer [Calendar/Weather](https://foundryvtt.com/packages/calendar-weather/).
- [Token Tooltip Alt](https://foundryvtt.com/packages/token-tooltip-alt) - Allows you to fully customize any tooltips next to a token. Could possibly be a
  replacement for [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/). Was recommended by [SeuRonao](https://github.com/SeuRonao). Requires
  [CodeMirror](https://foundryvtt.com/packages/_CodeMirror/), [Math.js](https://foundryvtt.com/packages/_mathjs/), and
  [SortableJS](https://foundryvtt.com/packages/_sortablejs/).

  Why not install: Some of the functionality is already implemented in [Token Info Icons](https://foundryvtt.com/packages/token-info-icons/). While I'm
  normally a fan of more customization, Token Info Icons seems to blend with the Foundry UI better, and I personally don't need to see everything when
  hovering over a token. If you're someone who wants to see everything at a glance, though, this module could prove invaluable!
<a name="modules-with-performance-issues"></a>
# Modules with Possible Performance Issues
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
# Modules Reviewed and Retired
- [Adventure Importer/Exporter](https://foundryvtt.com/packages/adventure-import-export/) - Allows you to, as the title says, import and export your worlds.

  Why retired: Never really used it, and I don't create a lot of content within Foundry. The content I do create can be copied via the Data folder.
- [Always HP](https://foundryvtt.com/packages/always-hp/) - Adds a bar to adjust HP.

  Why retired: I think [Token Health](https://foundryvtt.com/packages/token-health/) does the job better for my use-cases.
- [Batch Permission Change by Folder](https://foundryvtt.com/packages/BatchPermissionsByFolder/) - Allows the GM to quickly change the permissions for all items
  in a folder.
  
  Why retired: Now included in default Foundry.
- [Better Curses for 5e](https://foundryvtt.com/packages/betterCurses/) - Makes it easier to apply Hexblade's Curse/Hunter's Mark/etc. damage bonuses and other
  macro effects.
  
  Why retired: My players already came up with macros to calculate the damage bonuses and stuff with 
  [Dynamic Active Effects](https://foundryvtt.com/packages/dae/), and I apply the conditions with 
  [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/). It also looks to be bugged when combined with the 
  [Tidy5e Sheet](https://foundryvtt.com/packages/tidy5e-sheet/) module. However, it could be useful for applying macros when attacking.
  
- [Better Roll Tables](https://github.com/ultrakorne/better-rolltables)
  Gives GMs more functionality when designing and using roll tables. Formulas, random spells for spell scrolls, etc. I use it in combination with
  [DnD5eShopRollTables](https://www.reddit.com/r/FoundryVTT/comments/mnwzi4/as_promised_the_rolltables_for_every_type_of_shop/) since it looked to be quite
  useful :)

  Setting                                     | Default               | Recommended                             | Comments
  ---                                         | ---                   | ---                                     | ---    
  Sheet to use for generated loot             | dnd5e.LootSheet5eNPC  | ---                                     | ---
  Spell compendium to use for random scrolls  | dnd5e.spells          | CustomSharedCompendiums.all-ddb-spells  | Point this to your full spell list
  
  Why retired: Never ended up using them.
- [Better Rolls](https://foundryvtt.com/packages/betterrolls5e/) - Overhauls the rolling system with major improvements. Better-looking chat rolls, helpful 
  character sheet buttons, some custom fields for special weapons, etc. If not for [Midi QoL](https://foundryvtt.com/packages/midi-qol/), this would be one of
  my favorite modules.
  
  Why retired: Although it was a close call, I felt as though Midi QoL had a more robust system that fit my needs better. That being said, there are aspects of
  this module that are really freaking cool.
  
- [Cautious Gamemaster](https://foundryvtt.com/packages/CautiousGamemastersPack/) -
  Disables GM from speaking as PCs, hidden tokens automatically roll blind, small chat QoL with up/down arrows, and typing notifications. Automatically hides
  private rolls from chat, too, which is not configurable.

  Setting                           | Default   | Recommended   | Comments
  ---                               | ---       | ---           | ---    
  Disable GM speaking as PC tokens  | Disabled  | Enabled       | ---
  Blind chats made by hidden tokens | Disabled  | Enabled       | ---
  Disable chat recalls              | Disabled  | ---           | ---
  Notify typings                    | Disabled  | Enabled       | ---
  
  Why retired: Conflicted with [DnD5e Helpers](https://foundryvtt.com/packages/dnd5e-helpers/) action bar. It's a shame, because the "is typing..." feature was 
  pretty nifty.
- [Chat Damage Buttons - Beyond20 Edition](https://foundryvtt.com/packages/chatdamagebuttons-beyond20/) - Adds "Apply Damage" buttons to Beyond20 chat rolls.

  Why retired: My characters moved all of their sheets directly into Foundry, so we no longer needed the Beyond20 chat buttons.
- [Combat Enhancements](https://foundryvtt.com/packages/combat-enhancements/) -
  Adds health tracking via a radial bar and HP field in the Combat Tracker, as well as drag and drop initiative reordering.
  
  Setting                           | Default   | Recommended   | Comments
  ---                               | ---       | ---           | ---    
  Show HP for actor type            | None      | ---           | ---
  Enable initiative reflow          | Disabled  | ---           | ---
  Enable HP field                   | Enabled   | ---           | ---
  Enable HP radial bar              | Enabled   | ---           | ---
  Enable target removal every turn  | Disabled  | ---           | Could enable, however, this is already taken care of by [Midi QoL](https://foundryvtt.com/packages/midi-qol/).
  
  Why retired: I value [Hidden Initiative](https://foundryvtt.com/packages/hidden-initiative/) more, and these two modules do not like each other at all.
- [Combat Ready](https://foundryvtt.com/packages/combatready/) - Provides popups and sounds to let players know when it's almost their turn/is their turn.

  Why retired: A little too much for my taste, but it looks like a ton of fun if everyone's on board.
- [Compendium Browser](https://github.com/syl3r86/compendium-browser) - Allows for easy browsing of compendium files.

  Why retired: This module adds a severe amount of startup lag, and it can potentially cause issues with 
  [Quick Insert - Search Widget](https://foundryvtt.com/packages/quick-insert/), which sort of provides the same functionality.

- [Compendium Scene Viewer](https://foundryvtt.com/packages/scene-viewer/) -
  Allows for viewing compendium scenes from within the compendium, not requiring you to import them. This used to be an extremely big pain point, especially for
  someone with a large amount of scenes stored in their compendiums. Very nice quality of life fix.
  
  Setting                   | Default   | Recommended   | Comments
  ---                       | ---       | ---           | ---    
  Context menu option       | Disabled  | Enabled       | Adds a right-click option to view the scene background.
  Close other popouts       | Disabled  | Enabled       | ---
  
  Why retired: Implemented by [Monks Little Details](https://foundryvtt.com/packages/monks-little-details).
- [Darker Vision](https://github.com/Voldemalort/darker-vision-for-5e) - Replicates darkvision rules for 5e.

  Why retired: Broken in Foundry version 0.7.x and succeeded by [Perfect Vision](https://foundryvtt.com/packages/perfect-vision/).
- [Deselection](https://github.com/Sky-Captain-13/foundry/tree/master/deselection) - By enabling, deselects tokens when clicking on an empty spot on the scene.

  Why retired: Now included in default Foundry under Core Settings --> Left-Click to Release Objects --> Enabled
- [DnD5eShopRollTables](https://www.reddit.com/r/FoundryVTT/comments/mnwzi4/as_promised_the_rolltables_for_every_type_of_shop/)
  A collection of quite a few roll tables and table-generation tools. I'm not sure if I'll keep this in, but for right now, it gets the job done with SRD items.
  Requires [Better Roll Tables](https://github.com/ultrakorne/better-rolltables), [Combat Utility Belt](https://foundryvtt.com/packages/combat-utility-belt/),
  [Loot Sheet NPC 5e](https://foundryvtt.com/packages/lootsheetnpc5e/), and [LibWrapper](https://foundryvtt.com/packages/lib-wrapper/).
  
  Why retired: Solid work, but I never really used it. It was fun to play with, though.
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
- [Forien's Scene Navigator](https://foundryvtt.com/packages/forien-scene-navigator/) - Adds the ability to open a scene by clicking on a journal link.

  Why retired: I never really used it.

- [Give Item to Another Player](https://foundryvtt.com/packages/give-item) v1.7.2
  Adds an option in players' character sheets to send items to and from other character sheets. Super useful, and replaced
  [Pick-Up-Stix](https://foundryvtt.com/packages/pick-up-stix/) for 90% of our group's use cases.

  Setting               | Default   | Recommended | Comments
  ---                   | ---       | ---         | ---    
  Activate giving item  | Disabled  | Enabled     | ---

  Why retired: Replaced by [Let's Trade 5e](https://foundryvtt.com/packages/lets-trade-5e).
- [GM Notes](https://foundryvtt.com/packages/gm-notes/) v0.3
  Adds a "GM Notes" button along the top ribbon of every actor and item. Clicking on the button will provide the GM with a place to store notes, information,
  curses, etc. without having to put them in a separate journal. As far as simplicity and flexibility goes, this is one of my staple modules that I use often.

  Setting                 | Default | Recommended | Comments
  ---                     | ---     | ---         | ---    
  Show full GM note label | Enabled | ---         | ---

  Why retired: Replaced by [GM Secret Block](https://foundryvtt.com/packages/gm-secrets/).
- [GM Scene Background](https://github.com/death-save/gm-bg) - Allows GM to set background that only they can see.

  Why retired: Succeeded by [Scenery](https://foundryvtt.com/packages/scenery/) and part of default Foundry in Scene Settings.
- [GM Token-Drag Visibility](https://foundryvtt.com/packages/token-drag-visibility/) - Disables vision limitations when the GM drags tokens.

  Why retired: Other modules handle this functionality.
- [Hide GM Rolls](https://foundryvtt.com/packages/hide-gm-rolls/) - Hides GM rolls completely from chat.

  Why retired: Functionality included in [Midi QoL](https://foundryvtt.com/packages/midi-qol/).
- [Illandril's Chat Enhancements](https://foundryvtt.com/packages/illandril-chat-enhancements/) - Shows player names in chat, shows your current speaker, and 
  adds hover functionality to chat.
  
  Why retired: Doesn't really add a lot to the chat experience, at least from my point of view.

- [Initiative Double Click](https://foundryvtt.com/packages/initiative-double-click) - Split off of [The Furnace](https://foundryvtt.com/packages/furnace/),
  double-clicking initiative lets you set the value.
  
  Why retired: It happens infrequently enough that I'm okay with right-clicking and selecting the "Update Combatant" option.

- [Journal to Canvas Slideshow](https://foundryvtt.com/packages/journal-to-canvas-slideshow/) - Allows for clicking of a journal entry to update an image on
  screen. Could be useful for landing pages.

  Why retired: Not what I needed, personally.

- [Kobold Press OGL Compendium](https://foundryvtt.com/packages/koboldpressogl/) v0.24 - Adds a Kobold Press OGL monsters compendium. Although the monsters do
  not import with tokens automatically, creating new tokens for them is usually pretty easy. A great way to import new monsters with stat blocks already
  created.

  NOTE: I usually keep this disabled until I need to import a monster.
  
  Why retired: I never ended up using it.
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
- [Not Enough NPCs - A 5e NPC Generator](https://foundryvtt.com/packages/npcgen/) v0.4.0 - Adds a nifty NPC generator on the fly via a button at the bottom of
  the Actor tab.

  NOTE: I usually keep this disabled until I need to create NPCs, as I usually make batches of them before the game so I can tweak their personalities and iron
  out any kinks.

  For the "Custom Generator Entries" and "Export/Import" settings, I leave them at their defaults.

  Setting                 | Default   | Recommended | Comments
  ---                     | ---       | ---         | ---    
  Save NPCs as characters | Enabled   | ---         | ---
  Role specific images    | Disabled  | ---         | ---
  
  Why retired: Never ended up using it, and I have other NPC generators that I use for personality stuff, and I like to make tweaks as well. Cool concept, 
  though!
- [PnP - Pointer and Pings](https://foundryvtt.com/packages/pointer/) - Adds pointer/mouse follow functionality, plus a ping option as well.
  
  Why retired: [Pings](https://foundryvtt.com/packages/pings/) was much easier to use and fit our use-case better.

- [Pick-Up-Stix](https://foundryvtt.com/packages/pick-up-stix/) -
  Allows players and GMs to drag and drop items onto the actual scene grid to share/collect loot. Useful for when players drop weapons during combat, finding
  treasure chests, and more.
  
  NOTE: This module has some compatibility issues with
  [Forien's Unidentified Items](https://github.com/League-of-Foundry-Developers/foundryvtt-forien-unidentified-items). Placing a mystified item on the scene
  grid will remove the identified version of that item, so make sure to save the un-mystified version in your Items tab.

  Setting                         | Default                                       | Recommended | Comments
  ---                             | ---                                           | ---         | ---    
  Default container opened image  | modules/pick-up-stix/assets/chest-opened.png  | ---         | ---
  Default container closed image  | modules/pick-up-stix/assets/chest-closed.png  | ---         | ---
  Disable currency loot           | Disabled                                      | ---         | ---
  Default container open sound    | undefined                                     | ---         | ---
  Default container close sound   | undefined                                     | ---         | ---
  
  Why removed: It had too many module incompatibilities, was prone to issues, and just overall wasn't worth it. Also, the most-used functionality for it
  (players passing items between themselves) was replaced by [Give Item to Another Player](https://foundryvtt.com/packages/give-item). The rest was replaced by
  using [Loot Sheet NPC 5e](https://foundryvtt.com/packages/lootsheetnpc5e/).
- [Roofs and Overhead Tiles](https://foundryvtt.com/packages/roofs/) v0.1.1
  One of my newer additions, and I haven't had the opportunity to use it much, yet. Allows for placing of tiles with a separate "layer" above normal tiles.
  Whenever a player goes underneath these tiles, the tiles will become transparent.

  Setting                     | Default | Recommended | Comments
    ---                         | ---     | ---         | ---    
  Default closed roof opacity | 1       | ---         | ---
  Default open roof opacity   | 0.2     | ---         | ---
  Enable token autohide       | Enabled | ---         | ---
  Enable GM quick peek        | Enabled | ---         | ---  

  Why retired: Implemented by core Foundry in 0.8.x.
- [Scenery](https://foundryvtt.com/packages/scenery/) - Allows for different variations in backgrounds for scenes.
  
  Why retired: I never really used the extra variations. If I have a different variation, I just make a new scene for it. However, it could be useful in certain
  situations.
- [Show Drag Distance](https://foundryvtt.com/packages/ShowDragDistance/) - Another quality of life improvement that, as the title says, shows the drag distance
  when dragging a token. Has support for [Terrain Layer](https://foundryvtt.com/packages/TerrainLayer/). Good for in-combat use.
  
  Why retired: Outdated and replaced by [Drag Ruler](https://foundryvtt.com/packages/drag-ruler/).
- [Simple Dice Roller](https://foundryvtt.com/packages/simple-dice-roller/) v1.2.0
  Adds a menu in the top left to easily roll dice, similar to Roll20's interface.
  
  Setting                 | Default | Recommended | Comments
  ---                     | ---     | ---         | ---    
  Maximum dices in a roll | 10      | ---         | ---

  Why retired: Replaced by [Dice Tray](https://foundryvtt.com/packages/dice-calculator/).
- [The Furnace](https://foundryvtt.com/packages/furnace/) v2.6.0
  Adds drawing tools, async macros (that are relied on by other modules and macros), enabling and disabling GM token vision, valuable playlist enhancements,
  modifying initiative value within the Combat Tracker, etc. Small, random quality of life improvements. I mainly get value from the playlist changes and
  advanced macros via other modules.
  
  Setting                                                       | Default   | Recommended | Comments
  ---                                                           | ---       | ---         | ---    
  Advanced macros                                               | Enabled   | ---         | ---
  Advanced drawing tools                                        | Enabled   | Disabled    | ---
  Freehand sample rate                                          | 50ms      | ---         | ---
  Enable hooks debugging                                        | Disabled  | ---         | Only enable when debugging :)
  Improve the playlists UI                                      | Enabled   | ---         | ---
  Volume slider linear to logarithmic exponential approximation | 3         | ---         | ---
  
  Why retired: Split into multiple different modules.
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
# Macro Notes
- Accessing class levels of a character
    - `@classes.sorcerer.level`
- Accessing abilities scores
    - `@abilities.dex.mod`
- Updating token elevation
    - `token.update({"elevation": args[0]});`
<a name="performance-improvements"></a>
# Performance Improvements
- Use Microsoft Edge browser when playing on Windows 10. Strangely enough, it seems to be more fluid than Chrome, at least regarding Foundry.
- [Performance troubleshooting tips prezi](https://prezi.com/view/FeiO42h6cxdmoIsZvUlt/)
- [Increasing/fixing performance (video)](https://www.youtube.com/watch?v=R4UIU0_mC8A)
- [Possible Firefox performance improvements?](https://www.reddit.com/r/FoundryVTT/comments/k1pquy/a_fix_for_weird_firefox_performance_problems)
<a name="useful-resources"></a>
# Other Useful Resources
- [Hosting FoundryVTT on a raspberry pi](https://dracoli.ch/posts/foundry-rpi/)
- [How to deploy a Foundry server on AWS](https://www.reddit.com/r/FoundryVTT/comments/iurf7h/i_created_a_method_to_automatically_deploy_a/)
- [The Player's Guide to Foundry (video)](https://www.youtube.com/watch?v=ja88yRVQmck)
- [FoundryVTT Subreddit](https://www.reddit.com/r/FoundryVTT/)
- [Foundry Hub](https://www.foundryvtt-hub.com/)
<a name="other-media"></a>
# Other Media and Software
<a name="software"></a>
## Software
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
      storylines. Has a Foundry Module, [EEEG Importer](https://github.com/HadaIonut/EEEG-importer).
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
## Maps and Tokens (in no particular order)
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
## Sounds and Music
- Sites
    - [Tabletop Audio](https://tabletopaudio.com/) - Seriously amazing ambiances and music!
    - [16,000 Free Sound Effects](http://bbcsfx.acropolis.org.uk/) - Sounds!
- Spotify Playlists
    - [Bezoing's curated list of D&D encounter playlists](https://www.reddit.com/r/DnD/comments/595zc6/my_curated_spotify_playlists_i_use_for_dd/) - Tons of 
      useful atmosphere, mood, and combat playlists.
    - [Strttrynr's 112 Spotify playlists to run your game](https://www.reddit.com/r/DnD/comments/d12q2x/112_spotify_playlists_to_run_your_game/) - Even more 
      playlists for a variety of scenarios.
<a name="other-dnd-materials"></a>
## Other D&D Materials
- [Darkest Dungeon Monsters](https://www.reddit.com/r/DnDBehindTheScreen/comments/jx1ta2/darkest_dungeon_horrors_of_the_dark_a_complete/)
- [Octavian's Guide to Herbalism & Alchemy](https://homebrewery.naturalcrit.com/share/By_JPajBW)
- [Sane Magic Item Prices](https://forums.giantitp.com/showthread.php?424243-Sane-Magic-Item-Prices)
- [Ultimate Optimizer's Multiclassing Guide](https://forums.giantitp.com/showthread.php?502248-Ultimate-Optimizer-s-Multiclassing-Guide)

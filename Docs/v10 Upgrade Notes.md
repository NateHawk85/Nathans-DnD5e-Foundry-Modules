# What's this about?
Here, I'll try to list any main differences between my prior Foundry v9.269 setup and the current version.

# TODO - fix monsters in shared compendiums - some formulas no longer work for calculating AC
# TODO - do all of these
## Removed Modules
- Lichtgeschwindigkeit (lighting improvements now part of core Foundry)
- Pings (now included in core Foundry)
- PDFoundry (now included in core Foundry)
- Calendar/Weather (replaced by SmallTime, and I just never got around to removing it)
- Drag Ruler (temporarily, see Issues)
- DnD5e Helpers (temporarily, see Issues)
- Changelogs (not needed anymore, apparently?)
- Collapsable Journal Sections (not needed with the journal improvements in core Foundry)
- Cursor Popups (doesn't work, not important enough to keep)
- Cycle Token Stack (removed in favor of Token Z)
- DFred's Pocket Change (preference)
- Foundry Community Macros/Tables (not used)
- FPS Meter (now included in core Foundry)
- Loot Sheet NPC (too many bugs)
- Macro Folders (now included in core Foundry)
- Multilevel Tokens (outdated, should use Monk's Active Tiles if you want similar functionality)
- Pin Cushion (now included in core Foundry)
- Playlist Importer (now included in core Foundry)
- Simplefog (never used)
- Turn Alert (never used)
- Iconizer (never used)
- Workshop Ammo Swapper (bugged)

## Added Modules
- Lib DF Buttons
- Color Picker
- DF Architect

## Other Notes
- Manually had to reinstall About Time
- Manually had to reinstall Dynamic Active Effects
- Manually had to reinstall Health Estimate
- Manually had to reinstall Midi QoL
- Manually had to reinstall Tidy 5e Sheet
- Manually had to reinstall Trigger Happy
- Manually had to reinstall LMRTFY
- Manually had to reinstall Item Macro
- Manually had to reinstall Hidden Initiative
- Manually had to reinstall Lock View
- 

## Issues
- Custom Hotbar does not load, and you have to manually update the `module.json` to fix it
  - Open `${YOUR FOUNDRY INSTALL LOCATION}/Data/modules/custom-hotbar/module.json`
  - Delete line 11 (`, "./lib/colorsettings/colorSettingStub.js"`)
  - Restart your Foundry server
- Workshop Ammo Swapper does not load, and you have to manually update the `module.json` to fix it
  - Open `${YOUR FOUNDRY INSTALL LOCATION}/Data/modules/workshop-ammo-swapper/module.json`
  - Update lines 6 and 9 with any author, as long as it's not blank
    - `"author": ""` --> `"author": "Me"`
    - `"name": ""` --> `"name": "Me"`
  - That being said, it doesn't work anyways...
- Drag Ruler has an upcoming fix, but is broken on v10 until then. Disabled until the fix is applied
- DnD5e Helpers has an issue that prevents canvas rendering. Disabled until a fix is applied
- Cursor Popups is broken in v10
- DF Architect has bugs when enabling/disabling walls and lights on multiple layers. Avoid that and you should be good
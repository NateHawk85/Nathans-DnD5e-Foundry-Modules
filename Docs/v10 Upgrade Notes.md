# What's this about?
Here, I'll try to list any main differences between my prior Foundry v9.269 setup and the current version.

# TODO - do all of these
## Removed Modules
- Lichtgeschwindigkeit (lighting improvements now part of core Foundry)
- Pings (now included in core Foundry)

## Added Modules
- Lib DF Buttons
- Color Picker

## Other Notes
- Manually had to reinstall About Time
- Manually had to reinstall Dynamic Active Effects
- Manually had to reinstall Health Estimate
- Manually had to reinstall Midi QoL
- Manually had to reinstall Tidy 5e Sheet
- Manually had to reinstall Trigger Happy

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

## High Priority Non-Updated Modules

## Non-Updated Modules
-
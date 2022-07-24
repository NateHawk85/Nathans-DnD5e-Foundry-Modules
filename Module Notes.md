## Create an API accessible from outside your module
    const api = {
        yourApiMethod: yourApiMethod
    };

    // Use this to access your API via something like 'game.yourModuleName.yourApiMethod()'
	game.yourModuleName = api;

    // Use this to access your API via something like 'YourModuleName.api.yourApiMethod()'
	window.YourModuleName = {
        api: api
    };`

## Core settings in game.settings
`.register("core", "_____")`
- permissions
- rtcWorldSettings
- rtcClientSettings
- defaultToken
- noCanvas
- language
- rollMode
- time
- moduleConfiguration
- compendiumConfiguration
- combatTrackerConfig
- sheetClasses
- chatBubbles
- chatBubblesPan
- scrollingStatusText
- disableResolutionScaling
- leftClickRelease
- performanceMode
- maxFPS
- fpsMeter
- fontSize
- tokenDragPreview
- visionAnimation
- lightAnimation
- mipmap
- defaultDrawingConfig
- keybindings
- nue.shownTips
- animateRollTable
- notesDisplayToggle
- coneTemplateType
- playlist.playingLocation
- globalPlaylistVolume
- globalAmbientVolume
- globalInterfaceVolume

`.registerMenu("core", "_____")`
- permissions
- webRtc
- defaultToken
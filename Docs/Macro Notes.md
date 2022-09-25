# What is this?
This is a collection of macro notes that I've built up. A lot of it is going to be random, so I apologize in advance if it seems a little unorganized.

### Ability score examples(D&D5e)
`@abilities.con.mod`

### About Time Queue stuff
`game.Gametime.queue();` shows the queue  
`game.Gametime.clearTimeout(1581598672547);` clears a specific object(s) at a certain timestamp  
`game.Gametime.flushQueue();` removes the whole queue

### Accessing class levels of a character
`@classes.sorcerer.level`

### Accessing abilities scores
`@abilities.dex.mod`

### Calling a macro from within a macro (requires Advanced Macros module)
```javascript
let doStuff = game.macros.getName("Do Stuff");
// when you need to execute it
doStuff.execute(arg1, arg2, etc.);
```

### Get GM users
`game.users.entities.filter(u => u.isGM).map(u => u._id);`

### Get params from macro call
`args[0]`

### Get selected token
`canvas.tokens.controlled[0]` gets you 5e token-specific data  
`canvas.tokens.controlled[0].data` gets you TokenData  
`canvas.tokens.controlled[0].actor.data` gets you ActorData  
`canvas.tokens.controlled[0].actor.data.data` gets you actor-specific data like attributes, abilities, etc.

### Get result from other macro (requires Advanced Macros module)
`let result = await game.macros.getName("yourMacroName").execute();`

### Get current scene
`game.scenes.active`

### Macro parameters
`{speaker, actor, token, character, args, scene}`

`speaker`: [ChatSpeakerData](https://foundryvtt.com/api/data.ChatSpeakerData.html)  
`actor`: [Actor5e](https://gitlab.com/foundrynet/dnd5e/-/blob/master/module/actor/entity.js) (D&D5e-specific)  
`token`: [Token5e](https://gitlab.com/foundrynet/dnd5e/-/blob/master/module/token.js) (D&D5e-specific)  
`character`: [Actor5e](https://gitlab.com/foundrynet/dnd5e/-/blob/master/module/actor/entity.js) (D&D5e-specific)  
`args`: any[] (specified by user and/or calling macro)  
`scene`: [Scene](https://foundryvtt.com/api/Scene.html)

### Render Forien's Quest Log
`Hooks.call('ForienQuestLog.Open.QuestLog');`

### UI Notification
`ui.notifications.info(message)`

### Updating an array of tokens
```javascript
let update = canvas.tokens.controlled.map(token => ({_id: token.id, anyTokenFieldsYouWantToEdit: 0}));
await canvas.scene.updateEmbeddedDocuments("Token", update);
```

### Updating one token with data
```javascript
await token.document.update(
            {
                lightAnimation: {type: "none"},
                dimLight: 0,
                brightLight: 0,
                lightColor: "",
                lightAlpha: 1
            });
```

### Updating token elevation
`token.update({"elevation": args[0]});`

### Whisper to a user(s) in a macro
`ChatMessage.create({content: message, whisper: *collection of users*});`
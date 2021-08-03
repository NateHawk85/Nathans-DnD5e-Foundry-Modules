# What is this?
This is a collection of macro notes that I've built up. A lot of it is going to be random, so I apologize in advance if it seems a little unorganized.

### Ability score examples(D&D5e)
`@abilities.con.mod`

### About Time Queue stuff
`game.Gametime.queue();` shows the queue
`game.Gametime.clearTimeout(1581598672547);` clears a specific object(s) at a certain timestamp
`game.Gametime.flushQueue();` removes the whole queue

### Calling a macro from within a macro (requires Advanced Macros module)
```javascript
let doStuff = game.macros.getName("Do Stuff");
// when you need to execute it
doStuff.execute(arg1, arg2, etc.);
```
### Get params from macro call
`args[0]`

### Get selected token
`canvas.tokens.controlled[0]` gets you 5e token-specific data
`canvas.tokens.controlled[0].data` gets you TokenData
`canvas.tokens.controlled[0].actor.data` gets you ActorData
`canvas.tokens.controlled[0].actor.data.data` gets you actor-specific data like attributes, abilities, etc.

### Updating an array of tokens
```javascript
let update = canvas.tokens.controlled.map(token => ({_id: token.id, anyTokenFieldsYouWantToEdit: 0}));
await canvas.scene.updateEmbeddedDocuments("Token", update);
```

### Get GM users
`game.users.entities.filter(u => u.isGM).map(u => u._id);`

### Get result from other macro (requires Advanced Macros module)
`let result = await game.macros.getName("yourMacroName").execute();`

### Whisper to a user(s) in a macro
`ChatMessage.create({content: message, whisper: *collection of users*});`

### Render Forien's Quest Log
`Hooks.call('ForienQuestLog.Open.QuestLog');`

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

### Get current scene
`game.scenes.active`

### UI Notification
`ui.notifications.info(message)`
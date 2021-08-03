let selected = canvas.tokens.controlled;

const CONTENT = '' +
    '   <label for="macroConditionName">Condition Name: </label>' +
    '   <input id="macroConditionName" name="macroConditionName" value="" />' +
    '   <br />';

const CSS = await game.macros.getName("prettyDialogButtonsCSS").execute();

new Dialog({
    title: "Apply Temporary CUB Condition",
    content: CONTENT + CSS,
    buttons: buildButtons()
}, {
    classes: ["dialog", "pretty-dialog-buttons"]
}).render(true, {width: 600});

function buildButtons() {
    let buttons = {};
    buttons["oneRound"] = buildButtonWith("One Round", {seconds: 6});
    buttons["oneMinute"] = buildButtonWith("One Minute", {minutes: 1});
    buttons["tenMinutes"] = buildButtonWith("Ten Minutes", {minutes: 10});
    buttons["oneHour"] = buildButtonWith("One Hour", {hours: 1});
    return buttons;
}

function buildButtonWith(label, conditionDuration) {
    return {
        label: label,
        callback: async (html) => game.macros.getName("applyConditionToTokensForDuration").execute(html?.find("#macroConditionName")[0].value, canvas.tokens.controlled.map(token => token.id), conditionDuration)
    };
}

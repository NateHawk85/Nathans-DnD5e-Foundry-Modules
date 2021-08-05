const CONTENT = '' +
    '   <label for="macroRemindMeMessage">Remind me to </label>' +
    '   <input id="macroRemindMeMessage" name="macroRemindMeMessage"/>' + '<span> in</span>' +
    '   <br />' +
    '   <label for="macroIntervalSeconds">Seconds: </label>' +
    '   <input id="macroIntervalSeconds" name="macroIntervalSeconds" />' +
    '   <br />' +
    '   <label for="macroIntervalMinutes">Minutes: </label>' +
    '   <input id="macroIntervalMinutes" name="macroIntervalMinutes" />' +
    '   <br />' +
    '   <label for="macroIntervalHours">Hours: </label>' +
    '   <input id="macroIntervalHours" name="macroIntervalHours" />' +
    '   <br />' +
    '   <label for="macroIntervalDays">Days: </label>' +
    '   <input id="macroIntervalDays" name="macroIntervalDays" />' +
    '   <br />' +
    '   <label for="macroIntervalMonths">Months: </label>' +
    '   <input id="macroIntervalMonths" name="macroIntervalMonths" />' +
    '   <br />' +
    '   <label for="macroIntervalYears">Years: </label>' +
    '   <input id="macroIntervalYears" name="macroIntervalYears" />' +
    '   <br />';


new Dialog({
    title: "Remind Me",
    content: CONTENT,
    buttons: {
        cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel"
        },
        ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "Remind Me",
            callback: async (html) => {
                let message = html?.find("#macroRemindMeMessage")[0].value;
                let interval = await game.macros.getName("findIntervalFromHTML").execute(html);

                game.macros.getName("queueGMReminder").execute(interval, message);
            }
        }
    },
    default: "ok"
}).render(true);

setTimeout(function () {
    document.getElementById("macroRemindMeMessage").focus();
}, 300);

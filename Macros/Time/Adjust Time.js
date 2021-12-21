const CONTENT = `
    <p>Adjust time by...</p>
    <label for="macroIntervalSeconds">Seconds: </label>
    <input id="macroIntervalSeconds" name="macroIntervalSeconds" />
    <br />
    <label for="macroIntervalMinutes">Minutes: </label>
    <input id="macroIntervalMinutes" name="macroIntervalMinutes" />
    <br />
    <label for="macroIntervalHours">Hours: </label>
    <input id="macroIntervalHours" name="macroIntervalHours" />
    <br />
    <label for="macroIntervalDays">Days: </label>
    <input id="macroIntervalDays" name="macroIntervalDays" />
    <br />
    <label for="macroIntervalMonths">Months: </label>
    <input id="macroIntervalMonths" name="macroIntervalMonths" />
    <br />
    <label for="macroIntervalYears">Years: </label>
    <input id="macroIntervalYears" name="macroIntervalYears" />
    <br />
`;

const CSS = await game.macros.getName("prettyDialogButtonsCSS").execute();

new Dialog({
    title: "Adjust Time",
    content: CONTENT + CSS,
    buttons: {
        cancel: {
            icon: '<i class="fas fa-times"></i>',
            label: "Cancel"
        },
        ok: {
            icon: '<i class="fas fa-check"></i>',
            label: "Adjust Time",
            callback: async (html) => {
                let interval = await game.macros.getName("findIntervalFromHTML").execute(html);

                SimpleCalendar.api.changeDate(interval);
            }
        }
    },
    default: "ok"
}).render(true);

setTimeout(function () {
    document.getElementById("macroIntervalSeconds").focus();
}, 300);

/**
 * @param {DateTime} interval In the form of {year: years, month: months, day: days, hour: hours, minute: minutes, second: seconds}, fields can be null or
 * undefined
 * @param {string} message
 * @returns {void}
 */
async function main(interval, message) {
    interval = await game.macros.getName("sanitizeDateTime").execute(interval);

    Gametime.doIn(interval, () => {
        ui.notifications.info(message);
        game.macros.getName("sendGMOnlyChatMessage").execute(message);
    });

    ui.notifications.info("Reminder saved to execute in " + JSON.stringify(interval) + ": " + message);

    console.log(`Macro ${MACRO_NAME} completed`);
}

const MACRO_NAME = "queueGMReminder";

if (await game.macros.getName("isValidMacroArgs")
              .execute(MACRO_NAME, 2, args))
{
    main(args[0], args[1]);
} else
{
    game.macros.getName("notifyInvalidMacroCall")
        .execute(MACRO_NAME, args);
}
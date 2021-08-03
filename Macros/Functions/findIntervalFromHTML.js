// noinspection JSAnnotator

/**
 * @param {string} html with the following fields recognized: macroIntervalSeconds, macroIntervalMinutes, macroIntervalHours, macroIntervalDays,
 * macroIntervalMonths, macroIntervalYears
 * @returns {DateTime} in the form of {year: years, month: months, day: days, hour: hours, minute: minutes, second: seconds}
 */
async function main(html) {
    let seconds = html?.find("#macroIntervalSeconds")[0].value;
    let minutes = html?.find("#macroIntervalMinutes")[0].value;
    let hours = html?.find("#macroIntervalHours")[0].value;
    let days = html?.find("#macroIntervalDays")[0].value;
    let months = html?.find("#macroIntervalMonths")[0].value;
    let years = html?.find("#macroIntervalYears")[0].value;

    let interval = {year: years, month: months, day: days, hour: hours, minute: minutes, second: seconds};
    interval = await game.macros.getName("sanitizeDateTime").execute(interval);

    console.log("Macro " + MACRO_NAME + " returning " + JSON.stringify(interval));
    return interval;
}

const MACRO_NAME = "findIntervalFromHTML";

if (await game.macros.getName("isValidMacroArgs").execute(MACRO_NAME, 1, args)) {
    return main(args[0]);
}
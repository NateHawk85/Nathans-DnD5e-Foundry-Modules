// noinspection JSAnnotator

/**
 * Sanitize input, deleting empty strings and null values, and turning strings into ints
 * @param {DateTime} interval in the form of {year: years, month: months, day: days, hour: hours, minute: minutes, second: seconds}, fields can be null or
 * undefined.
 * @returns {DateTime}
 */
async function main(interval) {
    if (typeof interval === "string") {
        interval = JSON.parse(interval);
    }
    for (const propertyName in interval) {
        if (!interval[propertyName] || interval[propertyName].length === 0) {
            delete interval[propertyName];
        } else {
            interval[propertyName] = parseInt(interval[propertyName]);
        }
    }
    console.log("Macro " + MACRO_NAME + " returning " + JSON.stringify(interval));
    return interval;
}

const MACRO_NAME = "sanitizeDateTime";

if (await game.macros.getName("isValidMacroArgs").execute(MACRO_NAME, 1, args)) {
    return main(args[0]);
}
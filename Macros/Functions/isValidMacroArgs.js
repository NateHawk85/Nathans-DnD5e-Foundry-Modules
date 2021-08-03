// noinspection JSAnnotator

/**
 * @param {string} macroName
 * @param {int} numberOfExpectedArguments
 * @param {[object]} args
 * @returns {boolean}
 */
async function main(macroName, numberOfExpectedArguments, args) {
    console.log("Macro " + macroName + " called with args " + JSON.stringify(args));
    if (args[numberOfExpectedArguments - 1] == null || args.length !== numberOfExpectedArguments) {
        let errorMessage = "Macro " + macroName + " called with invalid arguments.";
        ui.notifications.error(errorMessage);
        console.log(errorMessage);
        return false;
    }
    return true;
}

return main(args[0], args[1], args[2]);
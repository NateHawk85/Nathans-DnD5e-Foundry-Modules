// noinspection JSAnnotator

/**
 * @param {string} macroName
 * @param {int} numberOfExpectedArguments
 * @param {[object]} args
 * @returns {boolean}
 */
async function main(macroName, numberOfExpectedArguments, args) {
    console.log(`Macro ${macroName} called with args ${JSON.stringify(args)}`);

    let isValidMacroCall = !(args[numberOfExpectedArguments - 1] == null || args.length !== numberOfExpectedArguments);

    console.log(`Macro ${MACRO_NAME} returning ${JSON.stringify(isValidMacroCall)}`);
    return isValidMacroCall;
}

const MACRO_NAME = "isValidMacroArgs";

return main(args[0], args[1], args[2]);
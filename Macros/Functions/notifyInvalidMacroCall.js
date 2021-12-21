// noinspection JSAnnotator

/**
 * @param {string} macroName
 * @param {[object]} args
 * @returns {void}
 */
async function main(macroName, args) {
	let errorMessage = `Macro ${macroName} called with invalid arguments - ${JSON.stringify(args)}`;
	ui.notifications.error(errorMessage);
	console.log(errorMessage);
}

const MACRO_NAME = "notifyInvalidMacroCall";

main(args[0], args[1]);
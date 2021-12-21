// noinspection JSAnnotator

/**
 * @returns {string} CSS as a string
 */
async function main()
{
	let css = `
		<style>
		    .pretty-dialog-buttons .dialog-buttons button { flex: 1 0 calc(25% - 10px); }
		</style>
	`;

	console.log(`Macro ${MACRO_NAME} returning ${JSON.stringify(css)}`);
	return css;
}

const MACRO_NAME = "prettyDialogButtonsCSS";

return main();
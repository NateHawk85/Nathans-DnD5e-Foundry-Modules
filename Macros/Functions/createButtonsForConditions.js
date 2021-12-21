// noinspection JSAnnotator

/**
 * @param {function} callbackFunction A callback function to be performed upon clicking the condition. The function must take in at least 1 parameter of
 * type Condition, as well as an optional html parameter.
 * @param {[function]} filters (optional) Filters applied to the list of conditions. Each filter function must take in 1 parameter of type Condition and
 * return a boolean.
 * @returns {[DialogButton]}
 */
async function main(callbackFunction, filters)
{
	let conditions = game.cub.conditions
						 .sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
	applyFiltersToConditionsList(filters, conditions);

	let buttons = {};
	conditions.forEach(condition => buttons[condition.name] = buildButtonWith(condition, callbackFunction));

	console.log(`Macro ${MACRO_NAME} returning ${JSON.stringify(buttons)}`);
	return buttons;
}

function applyFiltersToConditionsList(filters, conditions)
{
	filters?.forEach(filter => conditions = conditions.filter(condition => filter(condition)));
}

function buildButtonWith(condition, callbackFunction)
{
	return {
		label: condition.name,
		icon: `<img src="${condition.icon}" height="25px" width="25px"/>`,
		callback: async (html) => callbackFunction(condition, html)
	}
}

const MACRO_NAME = "createButtonsForConditions";

if (await game.macros.getName("isValidMacroArgs")
			  .execute(MACRO_NAME, 1, args) || await game.macros.getName("isValidMacroArgs")
														 .execute(MACRO_NAME, 2, args))
{
	return main(args[0], args[1]);
} else
{
	game.macros.getName("notifyInvalidMacroCall")
		.execute(MACRO_NAME, args);
}
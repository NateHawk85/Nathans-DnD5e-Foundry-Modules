// noinspection JSAnnotator

/**
 * @param {string} conditionName
 * @param {[string]} tokenIds
 * @param {DateTime} duration in the form of {year: years, month: months, day: days, hour: hours, minute: minutes, second: seconds}
 * @returns {void}
 */
async function main(conditionName, tokenIds, duration) {
    let tokens = await game.macros.getName("mapTokenIdsToTokens").execute(tokenIds);

    duration = await game.macros.getName("sanitizeDateTime").execute(duration);

    try {
        game.cub.addCondition(conditionName, tokens);
        let actorNames = tokens.map(token => token.actor.name);
        ui.notifications.info("Applying \'" + conditionName + "\' to " + JSON.stringify(actorNames) + " for " + JSON.stringify(duration));

        game.Gametime.doIn(duration, () => {
            game.cub.removeCondition(conditionName, tokens, {warn: false});
            ui.notifications.info("Condition \'" + conditionName + "\' was removed from " + JSON.stringify(actorNames) + " after " + JSON.stringify(duration));
        });
    } catch (ignored) {
        ui.notifications.error("Unable to add condition.");
    }
}

const MACRO_NAME = "applyConditionToTokensForDuration";

if (await game.macros.getName("isValidMacroArgs").execute(MACRO_NAME, 3, args)) {
    return main(args[0], args[1], args[2]);
}
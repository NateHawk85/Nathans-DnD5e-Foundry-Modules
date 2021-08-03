// noinspection JSAnnotator

/**
 * @param {[string]} tokenIds
 * @returns {[Token]}
 */
async function main(tokenIds) {
    let tokens = tokenIds.map(id => canvas.tokens.get(id));

    console.log("Macro " + MACRO_NAME + " returning " + JSON.stringify(tokens.map(token => ({id: token.id, name: token.actor.name}))));
    return tokens;
}

const MACRO_NAME = "mapTokenIdsToTokens";

if (await game.macros.getName("isValidMacroArgs").execute(MACRO_NAME, 1, args)) {
    return main(args[0]);
}
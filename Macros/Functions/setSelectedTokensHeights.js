/**
 * @param {int} elevation
 * @returns {void}
 */
async function main(elevation) {
    let update = canvas.tokens.controlled.map(token => ({_id: token.id, elevation: args[0]}));
    await canvas.scene.updateEmbeddedDocuments("Token", update);

    console.log(`Macro ${MACRO_NAME} completed`);
}

const MACRO_NAME = "setSelectedTokensHeights";

if (await game.macros.getName("isValidMacroArgs")
              .execute(MACRO_NAME, 1, args))
{
    main(args[0]);
} else
{
    game.macros.getName("notifyInvalidMacroCall")
        .execute(MACRO_NAME, args);
}
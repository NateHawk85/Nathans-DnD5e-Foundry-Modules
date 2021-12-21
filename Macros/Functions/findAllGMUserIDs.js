// noinspection JSAnnotator

/**
 * @returns {[string]} an array of existing GM user IDs
 */
async function main() {
    let gmUserIds = game.users.contents.filter(u => u.isGM).map(u => u.id);

    console.log(`Macro ${MACRO_NAME} returning ${JSON.stringify(gmUserIds)}`);
    return gmUserIds;
}

const MACRO_NAME = "findAllGMUserIDs";

return main();

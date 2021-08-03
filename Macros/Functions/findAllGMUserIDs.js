// noinspection JSAnnotator

/**
 * @returns {[string]} an array of existing GM user IDs
 */
async function main() {
    return game.users.contents.filter(u => u.isGM).map(u => u.id);
}

return main();

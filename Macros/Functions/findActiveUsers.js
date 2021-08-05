// noinspection JSAnnotator

/**
 * @returns {[User]} an array of active users
 */
async function main() {
    return game.users.contents.filter(user => user.active);
}

return main();

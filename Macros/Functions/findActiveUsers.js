// noinspection JSAnnotator

/**
 * @returns {[User]} an array of active users
 */
async function main() {
    let activeUsers = game.users.contents.filter(user => user.active);

    console.log(`Macro ${MACRO_NAME} returning ${JSON.stringify(activeUsers)}`);
    return activeUsers;
}

const MACRO_NAME = "findActiveUsers";

return main();

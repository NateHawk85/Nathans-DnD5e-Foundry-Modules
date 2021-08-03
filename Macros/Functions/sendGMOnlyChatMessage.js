/**
 * @param {string} message
 * @returns {void}
 */
async function main(message) {
    let whisperRecipients = await game.macros.getName("findAllGMUserIDs").execute();
    ChatMessage.create({content: message, whisper: whisperRecipients});
}

const MACRO_NAME = "sendGMOnlyChatMessage";

if (await game.macros.getName("isValidMacroArgs").execute(MACRO_NAME, 1, args)) {
    main(args[0]);
}
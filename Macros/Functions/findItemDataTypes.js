// noinspection JSAnnotator

/**
 * @returns {[string]} an array of valid item types
 */
async function main() {
    let itemTypes = ["weapon", "equipment", "consumable", "tool", "loot", "class", "spell", "feat", "backpack"];

    console.log(`Macro ${MACRO_NAME} returning ${JSON.stringify(itemTypes)}`);
    return itemTypes;
}

const MACRO_NAME = "findItemDataTypes";

return main();

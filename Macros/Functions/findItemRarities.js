// noinspection JSAnnotator

/**
 * @returns {[string]} an array of valid item rarities
 */
async function main() {
    let itemRarities = ["common", "uncommon", "rare", "veryRare", "legendary", "artifact"];

    console.log(`Macro ${MACRO_NAME} returning ${JSON.stringify(itemRarities)}`);
    return itemRarities;
}

const MACRO_NAME = "findItemRarities";

return main();

let itemTypes = await game.macros.getName("findItemDataTypes").execute();

const DEFAULT_ITEM_IMAGE = "icons/svg/item-bag.svg";
const ITEM_TYPE_OPTIONS = itemTypes.map(type =>
	`<option value="${type}" ${(type === 'loot' && 'selected')}>${type[0].toUpperCase().concat(type.slice(1))}</option>`
).join('<br />');

const CONTENT = `
<table>
	<tr>
		<td>
			<label for="macroItemName">Item Name: </label>
			<input id="macroItemName" name="macroItemName" />
			<br />
			<label for="macroItemTypeSelect">Item Type: </label>
			<select name="type" id="macroItemTypeSelect">
				${ITEM_TYPE_OPTIONS}
			</select>
			<br />
			<label for="macroItemQuantity">Quantity: </label>
			<input id="macroItemQuantity" name="macroItemQuantity" value="1" />
			<br />
			<label for="macroItemWeight">Weight: </label>
			<input id="macroItemWeight" name="macroItemWeight" value="1" />
			<br />
			<label for="macroItemPrice">Price: </label>
			<input id="macroItemPrice" name="macroItemPrice" value="1" />
			<br />
			<label for="macroItemDescription">Description: </label>
			<textarea id="macroItemDescription" name="macroItemDescription" rows="4" cols="50"></textarea>
			<br />
			<label for="macroItemAddToCompendium">Add To Hamund's Compendium (requires unlock): </label>
<input type="checkbox" id="macroItemAddToCompendium" name="macroItemAddToCompendium" />
		</td>
		<td style="vertical-align:top">
			<img class="profile" id="macroItemImageProfile" src="${DEFAULT_ITEM_IMAGE}" width="200" height="200"/>
			<input id="macroItemImage" name="macroItemImage" value="${DEFAULT_ITEM_IMAGE}" />
		</td>
	</tr>
</table>
`;

new Dialog(
	{
		title: "Create New Hamund's Item",
		content: CONTENT,
		buttons: {
			cancel: {
				icon: '<i class="fas fa-times"></i>',
				label: "Cancel"
			},
			ok: {
				icon: '<i class="fas fa-check"></i>',
				label: "Create Item",
				callback: async (html) => {
					let name = html?.find("#macroItemName")[0].value;
					let type = html?.find("#macroItemTypeSelect")[0].value;
					let description = html?.find("#macroItemDescription")[0].value;
					let quantity = html?.find("#macroItemQuantity")[0].value;
					let weight = html?.find("#macroItemWeight")[0].value;
					let price = html?.find("#macroItemPrice")[0].value;
					let image = html?.find("#macroItemImage")[0].value;
					let addToCompendium = html?.find("#macroItemAddToCompendium")[0].checked;

					let itemData = {
						name: name,
						type: type,
						img: image,
						data: {
							description: {
								value: '<p>' + description + '</p>'
							},
							quantity: quantity,
							weight: weight,
							price: price
						},
					};
					let compendiumData = {pack: "CustomSharedCompendiums.hamunds-harvesting-items"};

					addToCompendium ? await Item.create(itemData, compendiumData) : Item.create(itemData);
				}
			}
		},
		default: "ok"
	}).render(true, {width: 600});

setTimeout(function () {
	document.getElementById("macroItemName").focus();
	document.getElementById("macroItemImageProfile").addEventListener("click", async function() {
		await new FilePicker({
			callback: (url) => {
				document.getElementById('macroItemImage').value = url;
				document.getElementById('macroItemImageProfile').src = url;
			}
		}).render(true);
	});
}, 300);

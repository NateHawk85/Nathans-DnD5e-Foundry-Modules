let selectedTokens = canvas.tokens.controlled;

const COLORS_MAP = new Map([
		['Black', '#000000'],
		['Cyan', '#05F5F3'],
		['Dark Blue', '#0110F5'],
		['Dark Green', '#3DDE0B'],
		['Gold', '#DEC20B'],
		['Light Green', '#8DF500'],
		['Orange', '#F56500'],
		['Orange Red', '#F52800'],
		['Pink', '#F529F5'],
		['Purple', '#9F00F5'],
		['Purple Pink', '#E200F5'],
		['Red', '#F50134'],
		['Seafoam Blue', '#009CF5'],
		['Seafoam Green', '#00F59C'],
		['White', '#FFFFFF'],
		['Yellow', '#F5E800'],
		['Torch Light', '#FE8730']
	]
);

const CONTENT = '' +
	'   <label for="macroDimLightRadius">Dim Light Radius: </label>' +
	'   <input id="macroDimLightRadius" name="macroDimLightRadius" value="40" />' +
	'   <br />' +
	'   <label for="macroBrightLightRadius">Bright Light Radius: </label>' +
	'   <input id="macroBrightLightRadius" name="macroBrightLightRadius" value="20" />' +
	'   <br />' +
	'   <label for="macroIsTorchLightAnimation">Is Light Animation? </label>' +
	'   <input type="checkbox" id="macroIsTorchLightAnimation" name="macroIsTorchLightAnimation" />';

const CSS = await game.macros.getName('prettyDialogButtonsCSS').execute();
const LIGHT_STRENGTH = 0.5;

if (selectedTokens.some(token => token.light.active))
{
	let update = selectedTokens.map(token => ({
		_id: token.id,
		light: {
			dim: 0,
			bright: 0
		}
	}));

	await canvas.scene.updateEmbeddedDocuments('Token', update);
} else
{
	new Dialog(
		{
			title: 'Adjust Light on Selected Token',
			content: CONTENT + CSS,
			buttons: buildButtons()
		}, {
			classes: ['dialog', 'pretty-dialog-buttons']
		}).render(true, {width: 600});
}

function buildButtons()
{
	let buttons = {};
	COLORS_MAP.forEach((value, key) => buttons[key.replaceAll(' ', '')] = buildButtonWith(key, value));
	buttons['RandomColor'] = buildButtonWith('Random Color');

	return buttons;
}

function buildButtonWith(label, colorHex)
{
	return {
		label: label,
		callback: async (html) => addLightToSelectedTokens(html, colorHex)
	}
}

async function addLightToSelectedTokens(html, colorHex)
{
	let dimLightRadius = parseInt(html?.find('#macroDimLightRadius')[0].value);
	let brightLightRadius = parseInt(html?.find('#macroBrightLightRadius')[0].value);
	let isTorchLightAnimation = html?.find('#macroIsTorchLightAnimation')[0].checked;

	let update = selectedTokens.map(token => ({
		_id: token.id,
		light: {
			alpha: LIGHT_STRENGTH,
			animation: {type: isTorchLightAnimation ? 'torch' : 'none'},
			color: colorHex != null ? colorHex : randomItemIn(COLORS_MAP),
			dim: dimLightRadius,
			bright: brightLightRadius
		}
	}));

	await canvas.scene.updateEmbeddedDocuments('Token', update);
}

function randomItemIn(map)
{
	let items = Array.from(map.values());
	return items[Math.floor(Math.random() * items.length)];
}
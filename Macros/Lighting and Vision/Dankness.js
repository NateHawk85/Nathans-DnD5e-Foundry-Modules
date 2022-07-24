let selectedTokens = canvas.tokens.controlled;

let update = selectedTokens.map(token => ({
	_id: token.id,
	light: {
		animation: {type: 'hole'},
		dim: 15,
		luminosity: -.3
	}
}));

await canvas.scene.updateEmbeddedDocuments('Token', update);
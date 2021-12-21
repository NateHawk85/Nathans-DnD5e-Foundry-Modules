canvas.tokens.placeables
	.filter(token => token.actor.hasPlayerOwner === false)
	.forEach(token => token.control({releaseOthers: false}));

canvas.tokens.placeables
	.map(token => token.actor.name)
	.join(", ");

let tileYouWant = canvas.scene.data.tiles.contents
	.filter(tile => tile.data.x === 800 && tile.data.y === 700 && 100 < tile.data.width && tile.data.width < 200)[0];
let currentlyHasVision = false;

if (canvas.tokens.controlled.every(token => token.data.vision)) {
    currentlyHasVision = true;
}

let update = canvas.tokens.controlled.map(token => ({
    _id: token.id,
    vision: !currentlyHasVision
}));

await canvas.scene.updateEmbeddedDocuments("Token", update);
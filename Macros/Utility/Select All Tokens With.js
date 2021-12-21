const CONTENT = `
<label for="macroTokenNameIncludes">Token Name:</label>
<input id="macroTokenNameIncludes" name="macroTokenNameIncludes" />
`;


const CSS = await game.macros.getName("prettyDialogButtonsCSS")
					  .execute();

new Dialog({
	title: "Select All Tokens With Condition",
	content: CONTENT + CSS,
	buttons: await game.macros.getName("createButtonsForConditions")
				 .execute(selectAllTokensWith, [isNotMobGroupCondition])
}, {
	classes: ["dialog", "pretty-dialog-buttons"]
}).render(true, {width: 600});

function isNotMobGroupCondition(condition)
{
	return !condition.name.toLowerCase()
					 .includes("mob group");
}

function selectAllTokensWith(condition, html)
{
	const tokenNameIncludes = html?.find("#macroTokenNameIncludes")[0].value;
	let tokensWithCondition = canvas.tokens.ownedTokens.filter(token => game.cub.hasCondition(condition.name, token));

	if (tokenNameIncludes)
	{
		tokensWithCondition = tokensWithCondition.filter(token => token.name.toLowerCase().includes(tokenNameIncludes.toLowerCase()));
	}

	tokensWithCondition.forEach(token => token.control({releaseOthers: false}));
	ui.notifications.info(`Selected tokens with the ${condition.name} condition`);
}

setTimeout(function ()
{
	document.getElementById("macroTokenNameIncludes")
			.focus();
}, 300);
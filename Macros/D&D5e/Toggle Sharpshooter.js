const SELECTED_TOKENS = canvas.tokens.controlled;
const CONDITION_NAME = 'Sharpshooter';

SELECTED_TOKENS.forEach(token =>
{
	if (game.cub.hasCondition(CONDITION_NAME, token))
	{
		game.cub.removeCondition(CONDITION_NAME, token);
		ui.notifications.info(`${CONDITION_NAME} toggled OFF for ${token.document.data.name}`);
	} else
	{
		game.cub.addCondition(CONDITION_NAME, token);
		ui.notifications.info(`${CONDITION_NAME} toggled ON for ${token.document.data.name}`);
	}
});
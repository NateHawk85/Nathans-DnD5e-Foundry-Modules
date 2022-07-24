var effect;
var effectName = 'Sharpshooter';

if (game.user.isGM && canvas.tokens.controlled[0])
{
	effect = canvas.tokens.controlled[0].actor.data.effects.find(i => i.data.label === effectName);
} else
{
	effect = game.user.character.data.effects.find(i => i.data.label === effectName);
}

if (effect)
{
	effect.update({ disabled: !effect.data.disabled });
	var onOrOff = effect.data.disabled ? 'ON' : 'OFF';
	ui.notifications.info('Sharpshooter toggled ' + onOrOff);
}
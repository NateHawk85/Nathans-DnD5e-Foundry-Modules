const SELECTED_TOKENS = canvas.tokens.controlled;

const CONTENT = `
<div>
	<input type="radio" id="macroRadio1Round"
     name="macroApplyConditionForDurationRadios" value='{"seconds":6}'>
    <label for="macroRadio1Round">1 Round</label>
    <input type="radio" id="macroRadio1Minute"
     name="macroApplyConditionForDurationRadios" value='{"minutes":1}'>
    <label for="macroRadio1Minute">1 Minute</label>
    <input type="radio" id="macroRadio10Minutes"
     name="macroApplyConditionForDurationRadios" value='{"minutes":10}'>
    <label for="macroRadio10Minutes">10 Minutes</label>
    <input type="radio" id="macroRadio1Hour"
     name="macroApplyConditionForDurationRadios" value='{"hours":1}'>
    <label for="macroRadio1Hour">1 Hour</label>
    <input type="radio" id="macroRadio8Hours"
     name="macroApplyConditionForDurationRadios" value='{"hours":8}'>
    <label for="macroRadio8Hours">8 Hours</label>
    <input type="radio" id="macroRadio1Day"
     name="macroApplyConditionForDurationRadios" value='{"days":1}'>
    <label for="macroRadio1Day">1 Day</label>
    <input type="radio" id="macroRadioForever"
     name="macroApplyConditionForDurationRadios" value="forever" checked>
    <label for="macroRadioForever">Forever</label>
</div>
<label for="macroButtonFilter">Filter by button</label>
<input id="macroButtonFilter" type="text" placeholder="Filter" oninput="filter(this)"/>
<script type="application/javascript">
	function filter(input) {
		const allButtons = Array.from(document.getElementsByClassName('dialog-button'));
		allButtons.forEach(button => button.style.backgroundColor = '');
	
		if (input.value === '') {
			return;
		}
	
		const matchingButtons = allButtons.filter(button => button.innerText?.toLowerCase().includes(input.value.toLowerCase()));
		matchingButtons.forEach(button => button.style.backgroundColor = 'yellow');
	}
</script>
`;

const CSS = await game.macros.getName("prettyDialogButtonsCSS").execute() +
	`
	  <style>
		.highlight {
			background-color: yellow;
		}
	  </style>
  	`;

new Dialog({
	title: "Apply Temporary CUB Condition",
	content: CONTENT + CSS,
	buttons: await game.macros.getName("createButtonsForConditions").execute(callback)
}, {
	classes: ["dialog", "pretty-dialog-buttons"]
}).render(true, {width: 600});

async function callback(condition, html)
{
	let checked = html?.find("[name=macroApplyConditionForDurationRadios]:checked")[0];
	if (checked.value === "forever")
	{
		game.cub.addCondition(condition.name, SELECTED_TOKENS);
		ui.notifications.info(`Applying ${condition.name} to ${JSON.stringify(SELECTED_TOKENS.map(token => token.actor.name))}`);
	} else
	{
		game.macros.getName("applyConditionToTokensForDuration").execute(condition.name, SELECTED_TOKENS.map(token => token.id), JSON.parse(checked.value));
	}
}

setTimeout(function ()
{
	document.getElementById("macroButtonFilter").focus();
}, 300);
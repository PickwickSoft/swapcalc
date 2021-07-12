function calcSwap() {
	let ram = parseFloat(document.getElementById('ram-select').value);
	var checkBox = document.getElementById("hibernationChecker");
	var useHibernation = checkBox.checked;
	ram = Math.max(ram, 0.0);
	var swapSize = Math.round(Math.sqrt(ram));
	if (useHibernation) {
		swapSize += ram;
	}
	setLabel(swapSize.toString());
}
function setLabel(swaplabelText) {
	document.getElementById('min-swap').innerHTML = swaplabelText.concat(' GB');
}
calcSwap()
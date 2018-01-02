require.config({
	baseUrl:'lib',
	paths:{
		trd: "trd",
		alg: "alg",
	}
});
require([
	'alg/movement/movement',
	'trd/vuejs/source/2.5.8-format.min',
], function (m) {
	console.log("movement loaded", m)
	var target = document.getElementById("test-target")
	movement.applyAction.keyMove(target);
	movement.applyAction.mouseMove(target);
});


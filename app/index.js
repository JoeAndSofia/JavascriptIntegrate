// import movement from './lib/alg/movement/movement'
//
// import Vue from './lib/trd/vuejs/source/2.5.8-format.min'


require.config({
	baseUrl:'lib',
	paths:{
		trd: "trd",
		alg: "alg",
	}
});
require([
	'alg/movement/movement',
	'alg/select/select',
	'trd/vuejs/source/2.5.8-format.min',
], function (m) {
	console.log("movement loaded", m)
	var target = document.getElementById("test-target")
	movement.applyAction.keyMove(target);
	movement.applyAction.mouseMove(target);
});



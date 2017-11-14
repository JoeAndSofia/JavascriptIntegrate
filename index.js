require.config({
    baseUrl:'lib',
    paths:{
        trd: "trd",
        alg: "alg",
    }
});
require(['alg/movement/movement'], function (m) {
    console.log("movement loaded", m)
    var target = document.getElementById("test-target")
    movement.applyAction.keyMove(target);
    movement.applyAction.mouseMove(target);
});


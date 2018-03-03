var util = {
	event: {
		showCoordinate: function(event){
			console.log(`button:${event.button};
buttons:${event.buttons};
client:${event.clientX},${event.clientY};
layer:${event.layerX},${event.layerY};
movement:${event.movementX},${event.movementY};
page:${event.pageX},${event.pageY};
screen:${event.screenX}, ${event.screenY};
`);
		}
	}
}
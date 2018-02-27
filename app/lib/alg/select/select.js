var select = {
	defaultSelectClassName:{
		0:"selectable",
		1:"un-selected",
		2:"selected",
	},
	applyAction: {
		clickSelect:function(element){
			if(element){
			
			}
		},
		dragSelect:function(element){
			if(element && element.offsetParent){
				let offsetParent = element.offsetParent
				offsetParent.addEventListener("dragstart", function(event){
					console.log(this)
					console.log(event);
					console.log("drag start");
				});
				offsetParent.addEventListener("dragover", function(event){
					// console.log(event);
					// console.log("drag overing");
				});
				offsetParent.addEventListener("dragend", function(event){
					console.log(this)
					console.log(event);
					console.log("drag end");
				});
			}
		},
	},
	selectSeal:{
		select:function(element){
		
		},
		deselect:function(element){
		
		},
	},
}
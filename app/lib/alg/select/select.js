var select = {
	defaultSelectClassName:{
		0:"selectable",
		1:"selected",
	},
	applyAction: {
		clickSelect:function(element){
			if(element){
				element.addEventListener("click", function(event){
					let ele = this
					if(ele.classList.contains(select.defaultSelectClassName[0])){
                        element.classList.toggle(select.defaultSelectClassName[1])
					}
				})
			}
		},
		dragSelect:function(element){
			if(element){
				let ele = element
				ele.addEventListener("mousedown", function(event){
					event.preventDefault()
				    // event.preventDefault()
					let ele = this
					let selectables = ele.querySelectorAll(select.defaultSelectClassName[0])
					for(let i = 0; i < ele.length; i++){
                        selectables[i].classList.remove(select.defaultSelectClassName[1])
					}
					ele.dataset.selecting = "1";
					ele.dataset.selectStartX = event.layerX;
					ele.dataset.selectStartY = event.layerY;
					// util.event.showCoordinate(event);

				});
				ele.addEventListener("mouseup", function () {
					if(event.target.dataset.selecting == "1"){
						// console.log("mouseup", "select end")
						event.target.dataset.selecting = ""
					}
				});
				ele.addEventListener("mousemove", function(event){
                    event.preventDefault()
					let ele = this
					// util.event.showCoordinate(event)
				});
				ele.addEventListener("mouseout", function(event){
					// console.log(event)
					let rt = event.relatedTarget
					let self = event.target
					console.log("this", this)
					console.log("target", self)
					console.log("relatedTarget", rt)

					if(this == target){
						if(rt.tagName == 'BODY'){
							if(event.target.dataset.selecting == "1"){
								// console.log("mouseout", "select end")
								event.target.dataset.selecting = ""
							}
						}else if(rt==event.target){
							console.log("mouseout to self")
						}
					}

					
					// console.log(`mouseout--button:${event.button};buttons:${event.buttons};client:${event.clientX},${event.clientY};layer:${event.layerX},${event.layerY};movement:${event.movementX},${event.movementY};page:${event.pageX},${event.pageY};screen:${event.screenX}, ${event.screenY}; `);
				});
				ele.addEventListener("mouseenter", function(event){
					// event.preventDefault()
					// console.log("mouseenter", event.relatedTarget)
					// console.log(`mouseenter--button:${event.button};buttons:${event.buttons};client:${event.clientX},${event.clientY};layer:${event.layerX},${event.layerY};movement:${event.movementX},${event.movementY};page:${event.pageX},${event.pageY};screen:${event.screenX}, ${event.screenY}; `);
				});
				ele.addEventListener("dragstart", function(event){
					console.log("dragstart")
				});
				ele.addEventListener("dragover", function(event){
					console.log("dragovering")
				});
				ele.addEventListener("dragend", function(event){
					console.log("dragend")
				});
			}
		},
	},
	selectSeal:{
		select:function(element){
			element.classList.add(select.defaultSelectClassName[1])
		},
		deselect:function(element){
            element.classList.remove(select.defaultSelectClassName[1])
		},
	},
}
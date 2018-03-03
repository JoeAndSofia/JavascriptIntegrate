require.config({
	baseUrl:'../../',
	paths:{
		trd: "trd",
		alg: "alg",
	}
});
console.log("require config done");
require([
	'alg/select/select',
	'alg/util/util',
], function(){
	console.log(select)
	console.log(select.applyAction)
	let area1 = document.getElementById("select-area-1")
	let area2 = document.getElementById("select-area-2")
	for(let i=0;i<25;i++){
		let span = document.createElement("span")
		span.classList.add("selectable")
		span.classList.add("un-selected")
		span.innerText = i;
		span.style.left = (25 * (i % 5) + 10) + "px"
		span.style.top = (25 * Math.floor(i / 5) + 10) + "px"
		area1.appendChild(span)
//		area2.appendChild(span)
	}
	
	var targetList = document.querySelectorAll(".selectable");
	
	for(let i=0; i<targetList.length; i++){
//		console.log(targetList[i]);
		select.applyAction.clickSelect(targetList[i]);
	}
	let x = document.getElementById("select-area-1")
		// .querySelector(".select-layer")
	select.applyAction.dragSelect(x);
})
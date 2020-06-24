document.addEventListener('DOMContentLoaded', () => {
	var change = document.getElementById("changeBtn");
	var whBtn = document.getElementById("whiteBtn");
	var blkBtn = document.getElementById("blackBtn");
	var greyBtn = document.getElementById("greyBtn");
	var blueBtn = document.getElementById("blueBtn");
	//var muteBtn = document.getElementById("muteBtn");
	change.addEventListener('click', () => {
		let color = document.getElementById("colorbox").value;
		changeColor(color);
	});
 	whBtn.addEventListener('click', () => {
		let color = '#ffffff';
 	 	changeColor(color);
 	});
 	blkBtn.addEventListener('click', () => {
		let color = '#000000';
 	 	changeColor(color);
 	});
 	greyBtn.addEventListener('click', () => {
		let color = '#7e7e7e';
 	 	changeColor(color);
 	});
 	blueBtn.addEventListener('click', () =>{
		let color = '#80b4f7';
 	 	changeColor(color);
 	});
})

function changeColor(color){
	//store current value
	chrome.storage.local.set({color});
	//get current tab and change the background color
	chrome.tabs.query({
		active: true, currentWindow: true
	}, 
	(tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, {input: color})
	});
}
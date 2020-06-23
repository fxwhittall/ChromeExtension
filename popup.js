// document.querySelector('#greyBtn').addEventListener('click', () => {
// 	console.log('grey button clicked');
// 	changeColor('#7e7e7e');
// });

// document.querySelector('#blueBtn').addEventListener('click', () => {
// 	console.log('blue button clicked');
// 	changeColor('#80b4f7');
// });

document.addEventListener('DOMContentLoaded', () => {
	var change = document.getElementById("changeBtn");
	var whBtn = document.getElementById("whiteBtn");
	var blkBtn = document.getElementById("blackBtn");
	change.addEventListener('click', () => {
		let color = document.getElementById("colorbox").value;
		changeColor(color);
	});
// 	whBtn.addEventListener('click', () => {
// 	 	changeColor('#ffffff');
// 	});
})


function changeColor(color){
	//get current tab and change the background color
	chrome.tabs.query({
		active: true, currentWindow: true
	}, 
	(tabs) => {
		chrome.tabs.sendMessage(tabs[0].id, {input: color})
	});
}
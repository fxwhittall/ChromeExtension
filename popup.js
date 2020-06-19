document.querySelector('#whiteBtn').addEventListener('click', () => {
	console.log('white button clicked');
	changeColor(white);
});

document.querySelector('#blackBtn').addEventListener('click', () => {
	console.log('black button clicked');
	changeColor(black);
});

document.querySelector('#greyBtn').addEventListener('click', () => {
	console.log('grey button clicked');
	changeColor('#7e7e7e');
});

document.querySelector('#blueBtn').addEventListener('click', () => {
	console.log('blue button clicked');
	changeColor('#80b4f7');
});

document.querySelector('#changeBtn').addEventListener('click', () => {
	console.log('custom button clicked');
	changeColor(document.querySelector('#colorbox').value);
});

function changeColor(color){
	//read selected color and store it
	chrome.storage.local.set({color});

	//get current tab and change the background color
	chrome.tabs.query({
		url : 'https://*.google.com/*'
	}, tabs => {
		tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, {color}));
	});
}
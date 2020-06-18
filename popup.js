document.querySelector('#changeBtn').addEventListener('click', () => {
	console.log('button clicked');

	//read selected color and store it
	const color = document.querySelector('#colorbox').value;
	chrome.storage.local.set({color});

	//get current tab and change the background color
	chrome.tabs.query({
		url : 'https://*.google.com/*'
	}, tabs => {
		tabs.forEach(tab => chrome.tabs.sendMessage(tab.id, {color}));
	});
});
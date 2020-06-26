//button click sound
//var click = new Audio(chrome.runtime.getURL("Button_Push.mp3"));
//document.addEventListener('click', () => click.play());

 chrome.storage.local.get('color', (response) => {
 	if(response.color){
 		document.body.style.backgroundColor = response.color;
 	}
 })

//color change
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
	document.body.style.backgroundColor = message.input;
});
//document.addEventListener('scroll', () => alert('Watch out, it is DJ Khaled!'));
var click = new Audio(chrome.runtime.getURL("Button_Push.mp3"));

document.addEventListener('click', () => click.play());

function replace(message, sender, sendresponse){
	console.log(message);
	let paragraphs = document.getElementsByTagName("p");
	for(elt of paragraphs){
		elt.innerText = message;
	}
}
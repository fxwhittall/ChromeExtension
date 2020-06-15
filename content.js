//document.addEventListener('scroll', () => alert('Watch out, it is DJ Khaled!'));
var click = new Audio(chrome.runtime.getURL("Button_Push.mp3"));

document.addEventListener('click', () => click.play());
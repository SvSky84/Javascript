function traitement(el){
	alert(el.style.background);
}

function coordImage(ev, el){
	var posX = ev.offsetX ? (ev.offsetX) : ev.pageX - el.offsetLeft;
	var posY = ev.offsetY ? (ev.offsetY) : ev.pageY - el.offsetTop;

	document.getElementById('xy').innerHTML = "X : " + posX + " et Y : " + posY;
}

function majuscule(ev){
	document.getElementById('divMaj').innerHTML += ev.char.toUpperCase();
}

function survolColor(el, color){
	el.style.backgroundColor = color;
}

function dimImage(el, width){
	width == '' ? el.removeAttribute('style') : el.style.width = width;
}
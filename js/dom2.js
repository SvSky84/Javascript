function injection(){
	document.getElementById('leBouton').setAttribute('onclick', 'clicBouton()');
}

function clicBouton(){
	alert('Vous avez cliqué sur le bouton');
	//document.getElementById('leBouton').removeAttribute('onclick');
	document.getElementById('leBouton').disabled = true;
}
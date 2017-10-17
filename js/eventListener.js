function injection(){
	document.getElementById('btn').addEventListener('click', clickBtn);
}

function clickBtn(){
	alert('Vous avez cliqué');
	document.getElementById('btn').removeEventListener('click', clickBtn);
}
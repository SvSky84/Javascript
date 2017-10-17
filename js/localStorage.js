function lire(){
	var html = "<thead><tr><th>Nom</th><th>Valeur</th></tr></thead><tbody>";
					
	for (var a in localStorage){
		html += "<tr><td>" + a + "</td><td>" + localStorage[a] + "</td></tr>";
	}

	document.getElementById('table').innerHTML = html + "</tbody>";
}

function enregistre(){
	localStorage.setItem(f.nom.value, f.donnees.value);
	lire();
}

function efface(){
	localStorage.removeItem(f.nom.value);
	lire();
}

function effaceTout(){
	localStorage.clear();
	lire();
}
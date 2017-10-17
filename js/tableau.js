function ajoutEntre(tab, nom, nomAvant){
	tab.splice(tab.indexOf(nomAvant), 0, nom);
	return tab;
}

function supprime(tab, nom){
	tab.splice(tab.indexOf(nom), 1);
	return tab;
}

function ajoutDeb(tab, nom){
	tab.unshift(nom);
	return tab;
}

function ajoutFin(tab, nom){
	tab.push(nom);
	return tab;
}

function triAlpha(tab){
	tab.sort();
	return tab;
}

function troisPremiersElem(tab){
	tab.slice(1,3);
	return tab;
}
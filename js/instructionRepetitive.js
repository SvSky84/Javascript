String.prototype.toCapitalize = function(){
	var tab = this.split(" ");

	for (var i=0 ; i<tab.length ; i++){
		tab[i] = tab[i].substr(0,1).toUpperCase() + tab[i].substr(1);
	}

	return tab.join(" ");
};

function afficheCodeAscii(debut, fin){
	var resultat = "<pre>", count = 0;

	for (var i=debut ; i<=fin ; i++){
		(count%16 == 0) ? resultat += "<br>&#" + i + "; " : resultat += "&#" + i + "; ";
		count++;
	}

	document.write(resultat + "</pre>");
}

function parcoursTab(tab){
	for (var i in tab){
		document.write(tab[i] + '<br>');
	}
}

function affine(){
	for (var x=2 ; x<=4 ; x+=0.1){
		if (x.toFixed(1) == 3.0){
			continue; // Saute l'instruction et passe à la suivante
			//break; // Sort de la boucle sans faire la suite
		}else{
			y = 1/(x-3);
			document.write("Pour X = " + x.toFixed(1) + ", Y vaut " + y.toFixed(2) + "<br>");
		}
	}
}
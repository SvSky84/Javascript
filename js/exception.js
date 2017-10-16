function inverse(nombre){
	if (nombre == 0){
		throw "Division par zéro impossible <br>";
	}else{
		var resultat = "L'inverse de " + nombre + " est 1/" + nombre + " et vaut : " + 1/nombre + ".<br>";
		return resultat;
	}
}
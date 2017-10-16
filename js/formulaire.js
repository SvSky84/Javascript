function carre(nombre){
	var resultat = "Le carré de ";
	if (nombre == 0 || nombre == ''){
		resultat += "0";
	}else{
		resultat += nombre;
	}
	resultat += " est " + nombre*nombre + ".";
	alert(resultat);
}
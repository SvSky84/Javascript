function calcul(){
	var nb1 = myForm.nb1.value;
	var nb2 = myForm.nb2.value;

	var debut = "Après l'opération r1 ";
	var milieu = "r2, le résultat est "

	var addition = debut + "+= " + milieu + (parseFloat(nb1)+parseFloat(nb2)) + "\n";
	var multiplication = debut + "*= " + milieu + (parseFloat(nb1)*parseFloat(nb2)) + "\n";

	if (parseFloat(nb2) == 0){
		var division =  "Division par zéro impossible \n";
	}else{
		var division = debut + "/= " + milieu + (parseFloat(nb1)/parseFloat(nb2)) + "\n";
	}

	var soustraction = debut + "-= " + milieu + (parseFloat(nb1)-parseFloat(nb2)) + "\n";

	var resultat = addition + multiplication + division + soustraction;

	document.getElementById("zoneResultat").innerHTML = resultat;
}
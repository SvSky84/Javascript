function verif(){
	var lettre = f.lettre.value;

	if (lettre.length == 1 ){
		if(lettre.match(/[A-Z]/)){
			var result = "Vous avez entré une lettre majuscule";
		}else if(lettre.match(/[a-z]/)){
			var result = "Vous avez entré une lettre minuscule";
		}else{
			var result = "Le caractère entré n'est pas une lettre";
		}
	}else{
		var result = "Le caractère entré n'est pas une lettre";
	}

	document.getElementById("zoneResultat").innerHTML = result;
}
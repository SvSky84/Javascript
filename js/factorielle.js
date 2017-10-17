function factorielle(i, nb, result){
	/*
	var tab = new Array;
	tab[0] = 1;

	for (var i=1 ; i<=nb ; i++){
		tab[i] = tab[i-1]*(i+1);
	}

	for (var j in tab){
		document.write(tab[j] + "<br>");
	}
	*/

	if (nb == 0){
		document.write('factorielle de ' + i + ' = ' + result);
	}else{
		result = result * nb;
		i++;
		nb -= 1;
		factorielle(i, nb, result);
	}
}
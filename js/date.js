function afficheDateHeureSys(){
	var d = new Date();
	var j = d.getDate();
	var m = d.getMonth();
	var a = d.getFullYear();
	var h = (d.getHours() <= 9) ? '0' + d.getHours() : d.getHours();
	var mi = (d.getMinutes() <= 9) ? '0' + d.getMinutes() : d.getMinutes();
	var s = (d.getSeconds() <= 9) ? '0' + d.getSeconds() : d.getSeconds();
	var ms = d.getMilliseconds();

	f.horloge.value =  j + "-" + m + "-" + a + " " + h + ":" + mi + ":" + s + "." + ms;
}
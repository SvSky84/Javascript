var bool= new Array({'etat':false,'rule':0});

function sans(){
	document.styleSheets[0].disabled=true;
}

function avec(){
	document.styleSheets[0].disabled=false;
}

function courrier(){
	bool.etat ? document.styleSheets[0].removeRule(bool.rule) : bool.etat = true;
	bool.rule = 1;
	document.styleSheets[0].insertRule('p{font-family: "courier"}', 1);
	
}

function verdana(){
	bool.etat ? document.styleSheets[0].removeRule(bool.rule) : bool.etat = true;
	bool.rule = 2;
	document.styleSheets[0].insertRule('p{font-family: "verdana"}', 2);
}
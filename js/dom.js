function grisBg(id){
	var el =  document.getElementById(id);
	el.style.backgroundColor = "#aaaaaa";
}

function blancBg(id){
	var el =  document.getElementById(id);
	el.style.backgroundColor = "#ffffff";
}

function deplacement(nb){
	var el = document.getElementById("d");
	el.style.marginLeft = nb;
}

function chgImage(){
	var el = document.getElementById("image");
	var src = el.getAttribute('src');

	if (src == 'image/chat1.jpg'){
		el.setAttribute('src', 'image/chat2.jpg');
	}else{
		el.setAttribute('src', 'image/chat1.jpg');
	}
}

function check(){
	var el = document.getElementById("divNomFille");
	(el.style.display == "none") ? el.style.display = "block" : el.style.display = "none" ;
}


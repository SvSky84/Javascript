function addElement(lg){
	var txt = document.createTextNode('Page ' + (lg+1));
	
	var a = document.createElement('a')
	a.setAttribute('href', 'page' + (lg+1) + '.htm');
	a.appendChild(txt);

	var li = document.createElement('li');
	li.appendChild(a);	

	document.getElementById('horizontal').appendChild(li);
}
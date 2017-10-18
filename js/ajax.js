$(function(){

	$('#btn1').click(function(){
		$('#divResult').empty().load('texte.html');
	});

	$('#btn2').click(function(){
		$('#divResult').empty().load('chat.html');
	});

	// LOAD
	$('.btn').click(function(){
		$('#divResult').empty().load('texte2.html #' + $(this).attr('name'));
	});

	// GET
	$('.loi').click(function(){
		$.get('src/donneesGet.php?l=' + $(this).attr('name'), function(data){
			$('#divResult').empty().html(data);
		});
	});

	// POST
	$('.loi2').click(function(){
		$.post('src/donneesPost.php', {l: $(this).attr('name')}, function(data){
			$('#divResult').empty().html(data);
		});
	});

	// GETJSON 1 
	$('#btn6').click(function(){
		$.getJSON('src/employe.json', function(json) {
			var data = '';
			data += 'Nom : ' + json.Nom + '<br>';
			data += 'Prenom : ' + json.Prenom + '<br>';
			data += 'Age : ' + json.Age + '<br>';
			
			$('#divResult').empty().html(data);
		});
	});

	// GETJSON 2 
	$('#btn7').click(function(){
		$.getJSON('src/employe2.json', function(json) {
			var data = '';
			$.each(json, function(i, e) {
				data += 'Nom : ' + e.Nom + '<br>';
				data += 'Prenom : ' + e.Prenom + '<br>';
				data += 'Age : ' + e.Age + '<br><br>';
			});
			
			$('#divResult').empty().html(data);
		});
	});

	// XML 
	$('#btn8').click(function(){
		$.get('src/data.xml', function(data){
			$(data).find('site').each(function(){
				var id = $(this).attr('id');
				var title = $(this).find('title').text();
				var url = $(this).find('url').text();

				$('#divResult').append(id + ' : <a target="_blank" href="' + url + '">' + title + '<br>');
			});
		});
	});

	// AJAX
	$('.ajax').click(function(){
		$.ajax({
			method: "GET",
			url: 'src/donneesGet.php?l=' + $(this).attr('name'),
			dataType: "html",
			timeout: 5,
			success: function(data){
				$('#divResult').empty().html(data);
			},
			error: function(e){
				$('#divResult').empty().html(e.statusText);
			}
		});
	});

	//AJAX BDD
	$('#btn10').click(function(){
		$.ajax({
			method: "GET",
			url: 'src/lecture.php',
			dataType: "html",
			timeout: 5,
			success: function(data){
				$('#divResult').empty().html(data);
			},
			error: function(e){
				$('#divResult').empty().html(e.statusText);
			}
		});
	});



	$('.clear').click(function(){
		$('#divResult').empty();
	});

});
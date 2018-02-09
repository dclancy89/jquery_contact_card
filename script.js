"use strict";

$(document).ready(function() {

	var count = 1;

	$('#add_card').submit(function(e) {
		e.preventDefault();

		var el = '<div class="card" id="card_' + count + '">';
		

		el += '<h2>' + $('#first_name').val() + ' ' + $('#last_name').val() + '</h2>';
		el += '<p>Click for description</p>';

		$('.cards').append(el);
		var id = 'card_' + count;

		$('#' + id).data({
					first_name: $('#first_name').val(),
					last_name: $('#last_name').val(),
					description: $('#description').val(),
				});

		$('#add_card').children('label').children('input[type="text"]').val('');
		$('#add_card').children('label').children('textarea').val('');
		count +=1;
	});

	$(document).on('click', '.card', function(){
		$(this).html('<p>' + $(this).data('description') + '</p>');
	});




});
"use strict";

$(document).ready(function() {

	var count = 1;

	$('#add_card').submit(function(e) {
		e.preventDefault();

		var el = '<div class="card" id="card_' + count + '" data-show-desc="false">';
		

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

		if($(this).attr('data-show-desc') == "false") {
			$(this).attr('data-show-desc', 'true')
			$(this).html('<p>' + $(this).data('description') + '</p>');
		} else if ($(this).attr('data-show-desc') == "true") {
			$(this).attr('data-show-desc', 'false')
			$(this).html('<h2>' + $(this).data('first_name') + ' ' + $(this).data('last_name') + '</h2>');
			$(this).append('<p>Click for description</p>');
		}

	});




});
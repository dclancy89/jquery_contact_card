"use strict";

$(document).ready(function() {

	// set the count of how many cards we start with
	var count = 0;


	// the form is submitted
	$('#add_card').submit(function(e) {
		count +=1;
		e.preventDefault();


		// start the html for the card
		var el = '<div class="card" id="card_' + count + '" data-show-desc="false">';
		
		// add the name
		el += '<h2>' + $('#first_name').val() + ' ' + $('#last_name').val() + '</h2>';
		el += '<p>Click for description</p>';


		// append the card to the end of the cards list
		$('.cards').append(el);
		var id = 'card_' + count;


		// attach the card data to the card for the toggle
		$('#' + id).data({
					first_name: $('#first_name').val(),
					last_name: $('#last_name').val(),
					description: $('#description').val(),
				});


		//clear the input fields
		$('#add_card').children('label').children('input[type="text"]').val('');
		$('#add_card').children('label').children('textarea').val('');
		
	});


	// when you click on a card
	$(document).on('click', '.card', function(){


		// if show desc is false, show the desc.
		// if show desc is true, show name
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
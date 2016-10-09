function split() {
	var source_array = [];
	var index = 0;
	num_hands++;

	hit_choice=false;
	split_choice=false;
	stay_choice=false;
	double_choice=false;

	$('#double_down').css("display", "none");
	$('#split').css("display", "none");
	$('#hit').css("display", "none");
	$('#stay').css("display", "none");
	$('#player_total').css("display", "none");
	$('#split_player_total_1').css("display", "unset");
	$('#split_player_total_2').css("display", "unset");

	if(player_ace_count>0){
		$('#split_player_total_1').text(11);
		$('#split_player_total_2').text(11);
		split_total_1 = 11;
		split_total_2 = 11;
		split_ace_count_1=1;
		split_ace_count_2=1;
	}
	else{
		$('#split_player_total_1').text(player_total/2);
		$('#split_player_total_2').text(player_total/2);
		split_total_1 = player_total/2;
		split_total_2 = player_total/2;
	}
	$('.player_div img').each(function(){
		if($(this).is(':visible')){
			source_array.push(this.src);
			$(this).css("display", "none");
		}
		index++;
	});
	$('body').append('<div class=\"player_div\" style =\"left:250px\"><img src=\"static/img/' 
				+ source_array[0].split('/')[source_array[0].split('/').length-1] +'\"/></div>');

	random_number = Math.floor(Math.random()*(52));

	$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(200+(split_card_count_1+1)*45,10)+ 'px\"><img src=\"static/img/' 
		+ card_array[random_number] +'\"/></div>');

	if (card_dict[card_array[random_number]] === 11){
		split_ace_count_1++;
	};

	split_total_1 = split_total_1 + card_dict[card_array[random_number]];
	$('#split_player_total_1').text(split_total_1);
	$('#split_popup_1').text("+" + card_dict[card_array[random_number]]);
	
	
	$('#split_popup_1').fadeIn("fast");
	$('#split_popup_1').fadeOut("fast"); 
	
	split_card_count_1 = split_card_count_1 + 1;

	$('body').append('<div class=\"player_div\" style =\"left:750px\"><img src=\"static/img/' 
				+ source_array[1].split('/')[source_array[1].split('/').length-1] +'\"/></div>');
	random_number = Math.floor(Math.random()*(52));
	$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(700+(split_card_count_2+1)*45,10)+ 'px\"><img src=\"static/img/' 
				+ card_array[random_number] +'\"/></div>');
	if (card_dict[card_array[random_number]] === 11){
		split_ace_count_2++;
	};
	
	split_total_2 = split_total_2 + card_dict[card_array[random_number]];
	$('#split_player_total_2').text(split_total_2);
	$('#split_popup_2').text("+" + card_dict[card_array[random_number]]);
	$('#split_popup_2').fadeIn("fast");
	$('#split_popup_2').fadeOut("fast"); 
	split_card_count_2 = split_card_count_2 + 1;
	$('#split_1_hit').css("display", "unset");
	$('#split_1_stay').css("display", "unset");
	$('#split_1_double_down').css("display", "unset");
}
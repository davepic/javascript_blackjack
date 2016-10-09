function reset(){
	$('#wager').prop('disabled', true);
	hit_choice = false;
	stay_choice= false;
	double_choice = false;
	split_choice = false;
	$('#dealer_total').text("");
	$('#hit').css("display", "none");
	$('#stay').css("display", "none");
	$('#stay').text("STAY");
	$('.player_div').css("display", "none");
	$('.dealer_div').css("display", "none");
	$('.banner').css("display", "none");
	$('.split_banner_left').css("display", "none");
	$('.split_banner_right').css("display", "none");
	$('#player_total').text("");
	$('.card_back').css("display", "none");
	$('#reload').css("display", "none");
	$('#double_down').css("display", "none");
	$('#split').css("display", "none");
	$('#split_1_hit').css("display", "none");
	$('#split_1_stay').css("display", "none");
	$('#split_1_double_down').css("display", "none");
	$('#split_2_hit').css("display", "none");
	$('#split_2_stay').css("display", "none");
	$('#split_2_double_down').css("display", "none");
	$('#hit').css("background-color", "black");
	$('#stay').css("background-color", "black");
	$('#double_down').css("background-color", "black");
	$('#split').css("background-color", "black");
	if($('#split_player_total_1').is(':visible')){
		$('#player_total').css("display", "unset");
	}
	$('#split_player_total_1').css("display", "none");
	$('#split_player_total_2').css("display", "none");
						
	player_blackjack_flag=false;
	card_count = 0;
	random_number= 0;
	player_total = 0;
	ace_count = 0;
	dealer_total = 0;
	dealer_card_count = 0;
	split_player_total_1=0;
	split_player_total_2=0;
	split_ace_count_1=0;
	split_ace_count_2=0;
	split_card_count_1=1;
	split_card_count_2=1;
	dealer_ace_count = 0;
	player_card_count = 0;
	player_ace_count = 0;
	player_total = 0;
	player_ace_flag=false;
	dealer_card_list = ['x'];
	dealer_total_list = ['x'];
	dealer_count_list = ['x'];
	player_card_list = ['x'];
	player_total_list = ['x'];
	player_count_list = ['x'];
	split_flag = false;

};
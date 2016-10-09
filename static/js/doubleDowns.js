function doubleDown () {
	ace_flag = false;
	$('#hit').css("display", "none");
	$('#stay').css("display", "none");
	$('#double_down').css("display", "none");
	$('#split').css("display", "none");
	double_total = parseInt($('#wager').val(), 10)*2;
	$('#wager').val(double_total);
	random_number = Math.floor(Math.random()*(52));
	$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(400+(card_count+1)*45,10)+ 'px\"><img src=\"static/img/' 
		+ card_array[random_number] +'\"/></div>');

	if (card_dict[card_array[random_number]] === 11){
		player_ace_count++;
	};

	player_total = player_total + card_dict[card_array[random_number]];

	if(player_total>21 && player_ace_count>0){
		player_total=player_total-10;
		player_ace_count=player_ace_count-1;
		ace_flag=true;
	};
	$('#player_total').text(player_total);
	if (ace_flag){
		$('#player_popup').text("+1");
	}
	else {
		$('#player_popup').text("+" + card_dict[card_array[random_number]]);
	}
		
	$('#player_popup').fadeIn("fast");
	$('#player_popup').fadeOut("fast"); 	
	card_count = card_count + 1;

	if(player_total>21){
		var current_total = parseInt(localStorage.getItem("total"), 10);
		$('body').append('<div class=\"banner\">BUST</div>');
		var new_total = current_total - parseInt($('#wager').val(), 10);
		$('#money_total').text(new_total.toString());
		localStorage.setItem("total", $('#money_total').text());
		$('#reload').css("display", "unset");
		$('#reload').css('z-index', 9999);
		$('#wager').prop('disabled', false);
		losses=losses+1;
		$('#losses').text(losses);
	} else {
		$('#stay').css("display", "unset");
		$('#stay').text("Cont");
	}
};

function splitDoubleDown1() {
	ace_flag = false;

	$('#split_1_hit').css("display", "none");
	$('#split_1_stay').css("display", "none");
	$('#split_1_double_down').css("display", "none");
	

	double_total = parseInt($('#wager').val(), 10)*2;

	$('#wager').val(double_total);

	hit_choice=false;
	stay_choice=false;
	double_choice=false;
	split_choice=false;
	
	if(split_total_1<=21){

		random_number = Math.floor(Math.random()*(52));

		$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(200+(split_card_count_1+1)*45,10)+ 'px\"><img src=\"static/img/' 
			+ card_array[random_number] +'\"/></div>');

		if (card_dict[card_array[random_number]] === 11){
			player_ace_count++;
		};

		split_total_1 = split_total_1 + card_dict[card_array[random_number]];

		if(split_total_1>21 && split_ace_count_1>0){
			split_total_1=split_total_1-10;
			split_ace_count_1=split_ace_count_1-1;
			ace_flag=true;
		};

		$('#split_player_total_1').text(split_total_1);

		if (ace_flag){
			$('#split_popup_1').text("+1");
		}
		else {

			$('#split_popup_1').text("+" + card_dict[card_array[random_number]]);
		}
		
		$('#split_popup_1').fadeIn("fast");
		$('#split_popup_1').fadeOut("fast"); 
		
		
		split_card_count_1 = split_card_count_1 + 1;

		if(split_total_1>21){
			var current_total = parseInt(localStorage.getItem("total"), 10);
			$('body').append('<div class=\"split_banner_left\" style=\"width:' + (275+40*(split_card_count_1-2)) +'px;\"">BUST</div>');
			var new_total = current_total - parseInt($('#wager').val(), 10);
			$('#money_total').text(new_total.toString());
			localStorage.setItem("total", $('#money_total').text());
			losses=losses+1;
			$('#losses').text(losses);
			split_alive = false;
		}
		else
		{
			secondDecision(split_total_1 + ","+ $('#dealer_total').text(), "split_1");		
		}	

		$('#split_2_hit').css("display", "unset");
		$('#split_2_stay').css("display", "unset");
		$('#split_2_double_down').css("display", "unset");		
	}
};

function splitDoubleDown2() {
	ace_flag = false;

	$('#split_2_hit').css("display", "none");
	$('#split_2_stay').css("display", "none");
	$('#split_2_double_down').css("display", "none");
	

	$('#wager').val(double_total);

	hit_choice=false;
	stay_choice=false;
	double_choice=false;
	split_choice=false;
	
	
	if(split_total_2<=21){

		random_number = Math.floor(Math.random()*(52));
		$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(700+(split_card_count_2+1)*45,10)+ 'px\"><img src=\"static/img/' 
			+ card_array[random_number] +'\"/></div>');

		if (card_dict[card_array[random_number]] === 11){
			player_ace_count++;
		};

		split_total_2 = split_total_2 + card_dict[card_array[random_number]];

		if(split_total_2>21 && split_ace_count_2>0){
			split_total_2=split_total_1-10;
			split_ace_count_2=split_ace_count_2-1;
			ace_flag=true;
		};

		$('#split_player_total_2').text(split_total_2);

		if (ace_flag){
			$('#split_popup_2').text("+1");
		}
		else {

			$('#split_popup_2').text("+" + card_dict[card_array[random_number]]);
		}
		
		$('#split_popup_2').fadeIn("fast");
		$('#split_popup_2').fadeOut("fast"); 
		split_card_count_2 = split_card_count_2 + 1;

		if(split_total_2>21){
			var current_total = parseInt(localStorage.getItem("total"), 10);
			$('body').append('<div class=\"split_banner_right\" style=\"width:' + (275+40*(split_card_count_2-2)) +'px;\"">BUST</div>');
			var new_total = current_total - parseInt($('#wager').val(), 10);
			$('#money_total').text(new_total.toString());
			localStorage.setItem("total", $('#money_total').text());
			losses=losses+1;
			$('#losses').text(losses);
		}

		else {
			secondDecision(split_total_2 + ","+ $('#dealer_total').text(), "split_2");		
		}	

		if (split_alive || split_total_2<=21){

			$('#split_2_stay').css("display", "unset");
			$('#split_2_stay').text("Cont");
		}
	}
};
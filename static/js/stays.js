function stay () {
	ace_flag = false;

	$('#hit').css("display", "none");
	$('#stay').css("display", "none");
	$('#double_down').css("display", "none");
	$('#split').css("display", "none");
	$('.card_back').css("display", "none");

	var second_value = dealer_total - $('#dealer_total').text();
	$('#dealer_total').text(dealer_total);
	$('#dealer_popup').text("+" + second_value);
	$('#dealer_popup').fadeIn("fast");
	$('#dealer_popup').fadeOut("fast");
	dealer_card_list = ['x'];
	dealer_total_list = ['x'];
	dealer_count_list = ['x'];

	if(dealer_total>21 && dealer_ace_count>0){

			dealer_total= dealer_total-10;
			dealer_ace_count=dealer_ace_count-1;
			ace_flag=true;

	}
	dealer_card_count = 2;
	if (player_blackjack_flag){
		var current_total = parseInt(localStorage.getItem("total"), 10);
		if (dealer_total === 21){
			$('body').append('<div class=\"banner\">PUSH</div>');
			pushes=pushes+1;
			$('#pushes').text(pushes);
		} else{
			$('body').append('<div class=\"banner\">BLACKJACK</div>');
			var new_total = current_total + parseInt($('#wager').val(), 10)*1.5;
			$('#money_total').text(new_total.toString());
			localStorage.setItem("total", $('#money_total').text());
			wins=wins+1;
			$('#wins').text(wins);
		}
		$('#reload').css("display", "unset");
		$('#reload').css('z-index', 9999);
		$('#wager').prop('disabled', false);
	}
	else {
		while (dealer_total < 17) {
			random_number = Math.floor(Math.random()*(52));
			dealer_card_list.push(card_array[random_number]);
			if (card_dict[card_array[random_number]] === 11){
				dealer_ace_count++;
			}
			dealer_total = dealer_total + card_dict[card_array[random_number]];
			if(dealer_total>21 && dealer_ace_count>0){
				dealer_total= dealer_total-10;
				dealer_ace_count=dealer_ace_count-1;
				ace_flag=true;
			}
			dealer_card_count = dealer_card_count + 1;
			dealer_count_list.push(dealer_card_count);
			dealer_total_list.push(dealer_total);
		}
		for (var i = 1; i<dealer_total_list.length; i++){
			setTimeout(function(x) { return function() { 
				$('body').append('<div class=\"dealer_div\" style =\"left:' + parseInt(500+(dealer_count_list[x]-2)*45,10)+ 'px\"><img src=\"static/img/' 
				+ dealer_card_list[x] +'\"/></div>');
				$('#dealer_total').text(dealer_total_list[x]);
				if (ace_flag){
					$('#dealer_popup').text("+1");
				}
				else {
					$('#dealer_popup').text("+" + card_dict[dealer_card_list[x]]);
				}

				$('#dealer_popup').fadeIn("fast");
				$('#dealer_popup').fadeOut("fast");
			}; }(i), 500*i);
		}
		setTimeout(function(){
			var current_total = parseInt(localStorage.getItem("total"), 10);
						
			if(dealer_total>21){
				$('body').append('<div class=\"banner\">DEALER BUSTS</div>');
				var new_total = parseInt($('#wager').val(), 10)+ current_total;
				$('#money_total').text(new_total.toString());
				localStorage.setItem("total", $('#money_total').text());
				wins=wins+1;
				$('#wins').text(wins);
			} 
			else if((dealer_total>player_total) && (17<=dealer_total<=21)){
				$('body').append('<div class=\"banner\">YOU LOSE</div>');
				var new_total = current_total - parseInt($('#wager').val(), 10);
				$('#money_total').text(new_total.toString());
				localStorage.setItem("total", $('#money_total').text());
				losses=losses+1;
				$('#losses').text(losses);
			} else if(dealer_total===player_total && 17<=dealer_total<=21){
				$('body').append('<div class=\"banner\">PUSH</div>');
				pushes=pushes+1;
				$('#pushes').text(pushes);
			} else if(dealer_total<player_total && 17<=dealer_total<=21){
				$('body').append('<div class=\"banner\">YOU WIN</div>');
				var new_total = current_total + parseInt($('#wager').val(), 10);
				$('#money_total').text(new_total.toString());
				localStorage.setItem("total", $('#money_total').text());
				wins=wins+1;
				$('#wins').text(wins);
			}
			$('#reload').css("display", "unset");
			$('#reload').css('z-index', 9999);
			$('#wager').prop('disabled', false);
		}, 500*dealer_total_list.length);
	}
};

function splitStay1() {
	hit_choice=false;
	split_choice=false;
	stay_choice=false;
	double_choice=false;

	$('#split_1_hit').css("display", "none");
	$('#split_1_stay').css("display", "none");
	$('#split_1_double_down').css("display", "none");
	$('#split_2_hit').css("display", "unset");
	$('#split_2_stay').css("display", "unset");
	$('#split_2_double_down').css("display", "unset");
};

function splitStay2() {
	$('#split_2_hit').css("display", "none");
	$('#split_2_stay').css("display", "none");
	$('#split_2_double_down').css("display", "none");

	ace_flag = false;

	$('.card_back').css("display", "none");

	var second_value = dealer_total - $('#dealer_total').text();
	$('#dealer_total').text(dealer_total);
	$('#dealer_popup').text("+" + second_value);
	$('#dealer_popup').fadeIn("fast");
	$('#dealer_popup').fadeOut("fast");


	var dealer_card_list = ['x'];
	var dealer_total_list = ['x'];
	var dealer_count_list = ['x'];

	dealer_card_count = 2;
	while (dealer_total < 17) {
		random_number = Math.floor(Math.random()*(52));
		dealer_card_list.push(card_array[random_number]);
		if (card_dict[card_array[random_number]] === 11){
			dealer_ace_count++;
		}

		dealer_total = dealer_total + card_dict[card_array[random_number]];

		if(dealer_total>21 && dealer_ace_count>0){
			dealer_total= dealer_total-10;
			dealer_ace_count=dealer_ace_count-1;
			ace_flag=true;
		}
			
		dealer_card_count = dealer_card_count + 1;
		dealer_count_list.push(dealer_card_count);
		dealer_total_list.push(dealer_total);
	}

	for (var i = 1; i<dealer_total_list.length; i++){
		setTimeout(function(x) { return function() { 
			$('body').append('<div class=\"dealer_div\" style =\"left:' + parseInt(500+(dealer_count_list[x]-2)*45,10)+ 'px\"><img src=\"static/img/' 
				+ dealer_card_list[x] +'\"/></div>');
			$('#dealer_total').text(dealer_total_list[x]);
			if (ace_flag){
				$('#dealer_popup').text("+1");
			}
			else {
				$('#dealer_popup').text("+" + card_dict[dealer_card_list[x]]);
			}
			
			$('#dealer_popup').fadeIn("fast");
			$('#dealer_popup').fadeOut("fast");

			}; }(i), 500*i);

	}

	setTimeout(function(){
		var current_total = parseInt(localStorage.getItem("total"), 10);
						
			if(dealer_total>21){
				$('body').append('<div class=\"banner\">DEALER BUSTS</div>');
				if(split_total_1<22){
					$('body').append('<div class=\"split_banner_left\">WIN</div>');
					var new_total = parseInt($('#wager').val(), 10) + current_total;
					$('#money_total').text(new_total.toString());
					localStorage.setItem("total", $('#money_total').text());
					wins=wins+1;
					$('#wins').text(wins);
				}
			} 

			else if((dealer_total>split_total_1) && (17<=dealer_total<=21 && split_total_1<22)){

				$('body').append('<div class=\"split_banner_left\">LOSE</div>');
				var new_total = current_total - parseInt($('#wager').val(), 10);
				$('#money_total').text(new_total.toString());
				localStorage.setItem("total", $('#money_total').text());
				losses=losses+1;
				$('#losses').text(losses);
			

			} else if(dealer_total===split_total_1 && 17<=dealer_total<=21 && split_total_1<22){

					$('body').append('<div class=\"split_banner_left\">PUSH</div>');
					pushes=pushes+1;
					$('#pushes').text(pushes);


			} else if(dealer_total<split_total_1 && 17<=dealer_total<=21 && split_total_1<22){

				$('body').append('<div class=\"split_banner_left\">WIN</div>');
				var new_total = current_total + parseInt($('#wager').val(), 10);
				$('#money_total').text(new_total.toString());
				localStorage.setItem("total", $('#money_total').text());
				wins=wins+1;
				$('#wins').text(wins);
			}
			current_total = parseInt(localStorage.getItem("total"), 10);		
			if(dealer_total>21){
				if(split_total_2<22){
					$('body').append('<div class=\"split_banner_right\">WIN</div>');
					var new_total = parseInt($('#wager').val(), 10)+ current_total;
					$('#money_total').text(new_total.toString());
					localStorage.setItem("total", $('#money_total').text());
					wins=wins+1;
					$('#wins').text(wins);
				}
			} 

			else if((dealer_total>split_total_2) && (17<=dealer_total<=21 && split_total_2<22)){

				$('body').append('<div class=\"split_banner_right\">LOSE</div>');
				var new_total = current_total - parseInt($('#wager').val(), 10);
				$('#money_total').text(new_total.toString());
				localStorage.setItem("total", $('#money_total').text());
				losses=losses+1;
				$('#losses').text(losses);
			

			} else if(dealer_total===split_total_2 && 17<=dealer_total<=21 && split_total_2<22){

				$('body').append('<div class=\"split_banner_right\">PUSH</div>');
				pushes=pushes+1;
				$('#pushes').text(pushes);

			} else if(dealer_total<split_total_2 && 17<=dealer_total<=21 && split_total_2<22){

				$('body').append('<div class=\"split_banner_right\">WIN</div>');
				var new_total = current_total + parseInt($('#wager').val(), 10);
				$('#money_total').text(new_total.toString());
				localStorage.setItem("total", $('#money_total').text());
				wins=wins+1;
				$('#wins').text(wins);

			}

			$('#reload').css("display", "unset");
			$('#reload').css('z-index', 9999);
			$('#reload').css('left', "600px");
			$('#wager').prop('disabled', false);

		}, 500*dealer_total_list.length);
};
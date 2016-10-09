function start() {	
	$('#start').css("display", "none");
	$('#wager').prop('disabled', true);
	$('#money_total').text(localStorage.getItem("total"));
	for (var i = 0; i<2;i++){
		random_number = Math.floor(Math.random()*(52));
		dealer_card_list.push(card_array[random_number]);
		if (card_dict[card_array[random_number]] === 11){
			dealer_ace_count++;
		}
		dealer_total = dealer_total + card_dict[card_array[random_number]];
		if (dealer_total>21 && dealer_ace_count>0){
			dealer_total=dealer_total-10;
			dealer_ace_count=dealer_ace_count-1;
			dealer_ace_flag = true;
		}
		dealer_card_count++;
		dealer_total_list.push(dealer_total);
		dealer_count_list.push(dealer_card_count);
	}
	for (var i = 1; i < dealer_total_list.length; i++){
		setTimeout(function(x) { return function() { 
			$('body').append('<div class=\"dealer_div\" style =\"left:' + parseInt(460+(dealer_count_list[x]-1)*45,10)+ 'px\"><img src=\"static/img/' 
			+ dealer_card_list[x] +'\"/></div>');
			if (x===2){
				$('body').append('<div class = \"card_back\"><img src=\"static/img/card_back.jpg\"/></div>');
			}		
			if (x===1){
				$('#dealer_total').text(dealer_total_list[1]);
				$('#dealer_popup').text("+" + card_dict[dealer_card_list[x]]);
				$('#dealer_popup').fadeIn("fast");
				$('#dealer_popup').fadeOut("fast");
			}
		}; } (i), 1000*i);
	}
	for (var i = 0; i < 2;i++){
		random_number = Math.floor(Math.random()*(52));
		player_card_list.push(card_array[random_number]);
		if (card_dict[card_array[random_number]] === 11){
			player_ace_count++;
		}
		player_total = player_total + card_dict[card_array[random_number]];
		if(player_total > 21 && player_ace_count > 0){
			player_total=player_total-10;
			player_ace_count=player_ace_count-1;
			player_ace_flag = true;
		};
		player_card_count++;
		player_total_list.push(player_total);
		player_count_list.push(player_card_count);
	}
	if (player_card_list[1].split('_')[0] === player_card_list[2].split('_')[0]){
		split_flag = true;
	}
	for (var i = 1; i<player_total_list.length; i++){
		setTimeout(function(x) { return function() { 
			$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(400+(dealer_count_list[x]-2)*45,10)+ 'px\"><img src=\"static/img/' 
			+ player_card_list[x] +'\"/></div>');
			$('#player_total').text(player_total_list[x]);
			if(x===2 && player_ace_flag){
				$('#player_popup').text("+1");
			} else {
				$('#player_popup').text("+" + card_dict[player_card_list[x]]);
			}	
			$('#player_popup').fadeIn("fast");
			$('#player_popup').fadeOut("fast");
			if (x===2){
				if (player_total === 21){
					$('#stay').css("display","unset");
					$('#stay').text("Cont");
					player_blackjack_flag=true;
				}
				else {
				$('#hit').css("display", "unset");
				$('#stay').css("display", "unset");
				$('#double_down').css("display", "unset");

				if (split_flag){
					$('#split').css("display", "unset");
				}
						
				var decision_key_1 = "";
				switch (player_card_list[1].split('_')[0]) {
					case "jack":
						decision_key_1 = decision_key_1 + "J";
						break;
					case "queen":
						decision_key_1 = decision_key_1 + "Q";
						break;
					case "king":
						decision_key_1 = decision_key_1 + "K";
						break;
					case "ace":
						decision_key_1 = decision_key_1 + "A";
						break;
					default:
						decision_key_1 = decision_key_1 + player_card_list[1].split('_')[0]
				}
				decision_key_1 = decision_key_1 + ",";

				switch (player_card_list[2].split('_')[0]) {
					case "jack":
						decision_key_1 = decision_key_1 + "J";
						break;
					case "queen":
						decision_key_1 = decision_key_1 + "Q";
						break;
					case "king":
						decision_key_1 = decision_key_1 + "K";
						break;
					case "ace":
						decision_key_1 = decision_key_1 + "A";
						break;
					default:
						decision_key_1 = decision_key_1 + player_card_list[2].split('_')[0]
				}
				decision_key_1 = decision_key_1 + ",";
				switch (dealer_card_list[1].split('_')[0]) {
					case "jack":
						decision_key_1 = decision_key_1 + "J";
						break;
					case "queen":
						decision_key_1 = decision_key_1 + "Q";
						break;
					case "king":
						decision_key_1 = decision_key_1 + "K";
						break;
					case "ace":
						decision_key_1 = decision_key_1 + "A";
						break;
					default:
						decision_key_1 = decision_key_1 + dealer_card_list[1].split('_')[0]
				}
				if (first_dict[decision_key_1] === undefined){
					if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === undefined){
						hit_choice = true; 
						$('#hit').css("background-color", "red");
					} else if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === "s") {
						stay_choice = true;
						$('#stay').css("background-color", "red");
					}
					else if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === "d") {
						double_choice = true;
						$('#double_down').css("background-color", "red");
					}
					else if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === "sp") {
						split_choice = true;
						$('#split').css("background-color", "red");
					}
				}
				else if (first_dict[decision_key_1]==="s"){
					stay_choice=true;
					$('#stay').css("background-color", "red");
				}
				else if (first_dict[decision_key_1]==="d"){
					double_choice=true;
					$('#double_down').css("background-color", "red");
					} 
				else if (first_dict[decision_key_1]==="sp"){
					split_choice=true;
					$('#split').css("background-color", "red");
				}
			}
		}

		}; } (i), 1500*i);
	}

	};
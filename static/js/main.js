var card_count = 0;
var split_card_count_1 = 1;
var split_card_count_2 = 1;
var random_number= 0;
var player_total = 0;
var split_total_1 = 0;
var split_total_2 = 0;
var split_alive = true;
var hit_choice = false;
var stay_choice = false;
var double_choice = false;
var split_choice = false;
var wins = 0;
var losses = 0;
var pushes = 0;
var player_blackjack_flag = false;
var split_ace_count_1 = 0;
var split_ace_count_2 = 0;
var ace_count = 0;
var dealer_total = 0;
var dealer_card_count = 0;
var dealer_ace_count = 0;
var player_card_count = 0;
var player_ace_count = 0;
var num_hands = 0;
var player_ace_flag=false;
var dealer_card_list = ['x'];
var dealer_total_list = ['x'];
var dealer_count_list = ['x'];
var player_card_list = ['x'];
var player_total_list = ['x'];
var player_count_list = ['x'];
var split_flag = false;
var dealer_ace_flag = false;
var player_ace_flag = false;
var split_flag = false;
var ace_flag = false;
var double_total = 0;


localStorage.setItem("total", $('#money_total').text());


var card_array = ["10_of_clubs.png", "10_of_diamonds.png", "10_of_hearts.png", "10_of_spades.png", "2_of_clubs.png", 
"2_of_diamonds.png", "2_of_hearts.png", "2_of_spades.png", "3_of_clubs.png", "3_of_diamonds.png", "3_of_hearts.png",
 "3_of_spades.png", "4_of_clubs.png", "4_of_diamonds.png", "4_of_hearts.png", "4_of_spades.png", "5_of_clubs.png",
 "5_of_diamonds.png", "5_of_hearts.png", "5_of_spades.png", "6_of_clubs.png", "6_of_diamonds.png", "6_of_hearts.png",
 "6_of_spades.png", "7_of_clubs.png", "7_of_diamonds.png", "7_of_hearts.png", "7_of_spades.png", "8_of_clubs.png",
 "8_of_diamonds.png", "8_of_hearts.png", "8_of_spades.png", "9_of_clubs.png", "9_of_diamonds.png", "9_of_hearts.png",
 "9_of_spades.png", "ace_of_clubs.png", "ace_of_diamonds.png", "ace_of_hearts.png", "ace_of_spades.png", "jack_of_clubs.png",
 "jack_of_diamonds.png", "jack_of_hearts.png", "jack_of_spades.png", "king_of_clubs.png", "king_of_diamonds.png",
 "king_of_hearts.png", "king_of_spades.png", "queen_of_clubs.png", "queen_of_diamonds.png", "queen_of_hearts.png",
"queen_of_spades.png"]



var card_dict = {"10_of_clubs.png": 10, "10_of_diamonds.png": 10, "10_of_hearts.png": 10, "10_of_spades.png": 10,
"2_of_clubs.png": 2, "2_of_diamonds.png": 2, "2_of_hearts.png": 2, "2_of_spades.png": 2, "3_of_clubs.png": 3,
"3_of_diamonds.png": 3, "3_of_hearts.png": 3, "3_of_spades.png": 3, "4_of_clubs.png": 4, "4_of_diamonds.png": 4,
"4_of_hearts.png": 4, "4_of_spades.png": 4, "5_of_clubs.png": 5, "5_of_diamonds.png": 5, "5_of_hearts.png": 5,
"5_of_spades.png": 5, "6_of_clubs.png": 6, "6_of_diamonds.png": 6, "6_of_hearts.png": 6, "6_of_spades.png": 6,
"7_of_clubs.png": 7, "7_of_diamonds.png": 7, "7_of_hearts.png": 7, "7_of_spades.png": 7, "8_of_clubs.png": 8,
"8_of_diamonds.png": 8, "8_of_hearts.png": 8, "8_of_spades.png": 8, "9_of_clubs.png": 9, "9_of_diamonds.png": 9,
"9_of_hearts.png": 9, "9_of_spades.png": 9, "ace_of_clubs.png": 11, "ace_of_diamonds.png": 11, "ace_of_hearts.png": 11,
"ace_of_spades.png": 11, "jack_of_clubs.png": 10, "jack_of_diamonds.png": 10, "jack_of_hearts.png": 10, "jack_of_spades.png": 10,
"king_of_clubs.png": 10, "king_of_diamonds.png": 10, "king_of_hearts.png": 10, "king_of_spades.png": 10,
"queen_of_clubs.png": 10, "queen_of_diamonds.png": 10, "queen_of_hearts.png": 10, "queen_of_spades.png": 10 
} 

var first_dict = {"A,8,2": "s"	, "A,8,3": "s"	, "A,8,4": "s"	, "A,8,5": "s"	, "A,8,6": "s"	, "A,8,7": "s"	, "A,8,8": "s"	, "A,8,9": "s"	, "A,8,10": "s"	, "A,8,J": "s"	, "A,8,Q": "s"	, "A,8,K": "s"	, "A,8,A": "s"
	, "8,A,2": "s"	, "8,A,3": "s"	, "8,A,4": "s"	, "8,A,5": "s"	, "8,A,6": "s"	, "8,A,7": "s"	, "8,A,8": "s"	, "8,A,9": "s"	, "8,A,10": "s"	, "8,A,J": "s"	, "8,A,Q": "s"	, "8,A,K": "s"	, "8,A,A": "s"
	, "A,9,2": "s"	, "A,9,3": "s"	, "A,9,4": "s"	, "A,9,5": "s"	, "A,9,6": "s"	, "A,9,7": "s"	, "A,9,8": "s"	, "A,9,9": "s"	, "A,9,10": "s"	, "A,9,J": "s"	, "A,9,Q": "s"	, "A,9,K": "s"	, "A,9,A": "s"
	, " 9,A,2": "s"	, " 9,A,3": "s"	, " 9,A,4": "s"	, " 9,A,5": "s"	, " 9,A,6": "s"	, " 9,A,7": "s"	, " 9,A,8": "s"	, " 9,A,9": "s"	, " 9,A,10": "s"	, " 9,A,J": "s"	, " 9,A,Q": "s"	, " 9,A,K": "s"	, "9,A,A": "s"
	, "A,10,2": "s"	, "A,10,3": "s"	, "A,10,4": "s"	, "A,10,5": "s"	, "A,10,6": "s"	, "A,10,7": "s"	, "A,10,8": "s"	, "A,10,9": "s"	, "A,10,10": "s"	, "A,10,J": "s"	, "A,10,Q": "s"	, "A,10,K": "s"	, "A,10,A": "s"
	, "10,A,2": "s"	, "10,A,3": "s"	, "10,A,4": "s"	, "10,A,5": "s"	, "10,A,6": "s"	, "10,A,7": "s"	, "10,A,8": "s"	, "10,A,9": "s"	, "10,A,10": "s"	, "10,A,J": "s"	, "10,A,Q": "s"	, "10,A,K": "s"	, "10,A,A": "s"
	, "A,A,2": "sp"	, "A,A,3": "sp"	, "A,A,4": "sp"	, "A,A,5": "sp"	, "A,A,6": "sp"	, "A,A,7": "sp"	, "A,A,8": "sp"	, "A,A,9": "sp"	, "A,A,10": "sp"	, "A,A,J": "sp"	, "A,A,Q": "sp"	, "A,A,K": "sp"	, "A,A,A": "sp"
	, "8,8,2": "sp"	, "8,8,3": "sp"	, "8,8,4": "sp"	, "8,8,5": "sp"	, "8,8,6": "sp"	, "8,8,7": "sp"	, "8,8,8": "sp"	, "8,8,9": "sp"	, "8,8,10": "sp"	, "8,8,J": "sp"	, "8,8,Q": "sp"	, "8,8,K": "sp"	, "8,8,A": "sp"
	, "10,10,2": "s"	, "10,10,3": "s"	, "10,10,4": "s"	, "10,10,5": "s"	, "10,10,6": "s"	, "10,10,7": "s"	, "10,10,8": "s"	, "10,10,9": "s"	, "10,10,10": "s"	, "10,10,J": "s"	, "10,10,Q": "s"	, "10,10,K": "s"	, "10,10,A": "s"
	, "J,10,2": "s"	, "J,10,3": "s"	, "J,10,4": "s"	, "J,10,5": "s"	, "J,10,6": "s"	, "J,10,7": "s"	, "J,10,8": "s"	, "J,10,9": "s"	, "J,10,10": "s"	, "J,10,J": "s"	, "J,10,Q": "s"	, "J,10,K": "s"	, "J,10,A": "s"
	, "10,J,2": "s"	, "10,J,3": "s"	, "10,J,4": "s"	, "10,J,5": "s"	, "10,J,6": "s"	, "10,J,7": "s"	, "10,J,8": "s"	, "10,J,9": "s"	, "10,J,10": "s"	, "10,J,J": "s"	, "10,J,Q": "s"	, "10,J,K": "s"	, "10,J,A": "s"
	, "J,Q,2": "s"	, "J,Q,3": "s"	, "J,Q,4": "s"	, "J,Q,5": "s"	, "J,Q,6": "s"	, "J,Q,7": "s"	, "J,Q,8": "s"	, "J,Q,9": "s"	, "J,Q,10": "s"	, "J,Q,J": "s"	, "J,Q,Q": "s"	, "J,Q,K": "s"	, "J,Q,A": "s"
	, "Q,J,2": "s"	, "Q,J,3": "s"	, "Q,J,4": "s"	, "Q,J,5": "s"	, "Q,J,6": "s"	, "Q,J,7": "s"	, "Q,J,8": "s"	, "Q,J,9": "s"	, "Q,J,10": "s"	, "Q,J,J": "s"	, "Q,J,Q": "s"	, "Q,J,K": "s"	, "Q,J,A": "s"
	, "J,K,2": "s"	, "J,K,3": "s"	, "J,K,4": "s"	, "J,K,5": "s"	, "J,K,6": "s"	, "J,K,7": "s"	, "J,K,8": "s"	, "J,K,9": "s"	, "J,K,10": "s"	, "J,K,J": "s"	, "J,K,Q": "s"	, "J,K,K": "s"	, "J,K,A": "s"
	, "K,J,2": "s"	, "K,J,3": "s"	, "K,J,4": "s"	, "K,J,5": "s"	, "K,J,6": "s"	, "K,J,7": "s"	, "K,J,8": "s"	, "K,J,9": "s"	, "K,J,10": "s"	, "K,J,J": "s"	, "K,J,Q": "s"	, "K,J,K": "s"	, "K,J,A": "s"
	, "Q,10,2": "s"	, "Q,10,3": "s"	, "Q,10,4": "s"	, "Q,10,5": "s"	, "Q,10,6": "s"	, "Q,10,7": "s"	, "Q,10,8": "s"	, "Q,10,9": "s"	, "Q,10,10": "s"	, "Q,10,J": "s"	, "Q,10,Q": "s"	, "Q,10,K": "s"	, "Q,10,A": "s"
	, "10,Q,2": "s"	, "10,Q,3": "s"	, "10,Q,4": "s"	, "10,Q,5": "s"	, "10,Q,6": "s"	, "10,Q,7": "s"	, "10,Q,8": "s"	, "10,Q,9": "s"	, "10,Q,10": "s"	, "10,Q,J": "s"	, "10,Q,Q": "s"	, "10,Q,K": "s"	, "10,Q,A": "s"
	, "Q,Q,2": "s"	, "Q,Q,3": "s"	, "Q,Q,4": "s"	, "Q,Q,5": "s"	, "Q,Q,6": "s"	, "Q,Q,7": "s"	, "Q,Q,8": "s"	, "Q,Q,9": "s"	, "Q,Q,10": "s"	, "Q,Q,J": "s"	, "Q,Q,Q": "s"	, "Q,Q,K": "s"	, "Q,Q,,A": "s"
	, "Q,K,2": "s"	, "Q,K,3": "s"	, "Q,K,4": "s"	, "Q,K,5": "s"	, "Q,K,6": "s"	, "Q,K,7": "s"	, "Q,K,8": "s"	, "Q,K,9": "s"	, "Q,K,10": "s"	, "Q,K,J": "s"	, "Q,K,Q": "s"	, "Q,K,K": "s"	, "Q,K,A": "s"
	, "K,Q,2": "s"	, "K,Q,3": "s"	, "K,Q,4": "s"	, "K,Q,5": "s"	, "K,Q,6": "s"	, "K,Q,7": "s"	, "K,Q,8": "s"	, "K,Q,9": "s"	, "K,Q,10": "s"	, "K,Q,J": "s"	, "K,Q,Q": "s"	, "K,Q,K": "s"	, "K,Q,A": "s"
	, "K,10,2": "s"	, "K,10,3": "s"	, "K,10,4": "s"	, "K,10,5": "s"	, "K,10,6": "s"	, "K,10,7": "s"	, "K,10,8": "s"	, "K,10,9": "s"	, "K,10,10": "s"	, "K,10,J": "s"	, "K,10,Q": "s"	, "K,10,K": "s"	, "K,10,A": "s"
	, "10,K,2": "s"	, "10,K,3": "s"	, "10,K,4": "s"	, "10,K,5": "s"	, "10,K,6": "s"	, "10,K,7": "s"	, "10,K,8": "s"	, "10,K,9": "s"	, "10,K,10": "s"	, "10,K,J": "s"	, "10,K,Q": "s"	, "10,K,K": "s"	, "10,K,A": "s"
	, "K,K,2": "s"	, "K,K,3": "s"	, "K,K,4": "s"	, "K,K,5": "s"	, "K,K,6": "s"	, "K,K,7": "s"	, "K,K,8": "s"	, "K,K,9": "s"	, "K,K,10": "s"	, "K,K,J": "s"	, "K,K,Q": "s"	, "K,K,K": "s"	, "K,K,A": "s"
	, "A,7,2": "s"	, "A,7,3": "d"	, "A,7,4": "d"	, "A,7,5": "d"	, "A,7,6": "d"	, "A,7,7": "s"	, "A,7,8": "s"	, "7,A,2": "s"	, "7,A,3": "d"	, "7,A,4": "d"	, "7,A,5": "d"	, "7,A,6": "d"	, "7,A,7": "s"
	, "7,A,8": "s"	, "A,6,3": "d"	, "A,6,4": "d"	, "A,6,5": "d"	, "A,6,6": "d"	, "6,A,3": "d"	, "6,A,4": "d"	, "6,A,5": "d"	, "6,A,6": "d"	, "A,5,4": "d"	, "A,5,5": "d"	, "A,5,6": "d"	, "5,A,4": "d"
	, "5,A,5": "d"	, "5,A,6": "d", "A,4,4": "d"	, "A,4,5": "d"	, "A,4,6": "d"	, "4,A,4": "d"	, "4,A,5": "d"	, "4,A,6": "d"	, "A,3,5": "d"	, "A,3,6": "d"	, "3,A,5": "d"	, "3,A,6": "d"	, "A,2,5": "d"
	, "A,2,6": "d"	, "2,A,5": "d"	, "2,A,6": "d"	, "9,9,2": "sp"	, "9,9,3": "sp"	, "9,9,4": "sp"	, "9,9,5": "sp"	, "9,9,6": "sp"	, "9,9,7": "s"	, "9,9,8": "sp"	, "9,9,9": "sp"	, "9,9,10": "s"	, "9,9,J": "s"
	, "9,9,Q": "s"	, "9,9,K": "s"	, "9,9,A": "s"	, "7,7,2": "sp"	, "7,7,3": "sp"	, "7,7,4": "sp"	, "7,7,5": "sp"	, "7,7,6": "sp"	, "7,7,7": "sp"	, "6,6,2": "sp"	, "6,6,3": "sp"	, "6,6,4": "sp"	, "6,6,5": "sp"
	, "6,6,6": "sp"	, "5,5,2": "d"	, "5,5,3": "d"	, "5,5,4": "d"	, "5,5,5": "d"	, "5,5,6": "d"	, "5,5,7": "d"	, "5,5,8": "d"	, "5,5,9": "d"	, "4,4,5": "sp"	, "4,4,6": "sp"	, "3,3,2": "sp"	, "3,3,3": "sp"
	, "3,3,4": "sp"	, "3,3,5": "sp"	, "3,3,6": "sp"	, "3,3,7": "sp"	, "2,2,2": "sp"	, "2,2,3": "sp"	, "2,2,4": "sp"	, "2,2,5": "sp"	, "2,2,6": "sp"	, "2,2,7": "sp"}


var number_dict = {"17,2": "s"	, "17,3": "s"	, "17,4": "s"	, "17,5": "s"	, "17,6": "s"	, "17,7": "s"	, "17,8": "s"	, "17,9": "s"	, "17,10": "s"	, "17,11": "s"
	, "18,2": "s"	, "18,3": "s"	, "18,4": "s"	, "18,5": "s"	, "18,6": "s"	, "18,7": "s"	, "18,8": "s"	, "18,9": "s"	, "18,10": "s"	, "18,11": "s"
	, "19,2": "s"	, "19,3": "s"	, "19,4": "s"	, "19,5": "s"	, "19,6": "s"	, "19,7": "s"	, "19,8": "s"	, "19,9": "s"	, "19,10": "s"	, "19,11": "s"
	, "20,2": "s"	, "20,3": "s"	, "20,4": "s"	, "20,5": "s"	, "20,6": "s"	, "20,7": "s"	, "20,8": "s"	, "20,9": "s"	, "20,10": "s"	, "20,11": "s"
	, "21,2": "s"	, "21,3": "s"	, "21,4": "s"	, "21,5": "s"	, "21,6": "s"	, "21,7": "s"	, "21,8": "s"	, "21,9": "s"	, "21,10": "s"	, "21,11": "s"
	, "13,2": "s"	, "13,3": "s"	, "13,4": "s"	, "13,5": "s"	, "13,6": "s"	, "14,2": "s"	, "14,3": "s"	, "14,4": "s"	, "14,5": "s"	, "14,6": "s"
	, "15,2": "s"	, "15,3": "s"	, "15,4": "s"	, "15,5": "s"	, "15,6": "s"	, "16,2": "s"	, "16,3": "s"	, "16,4": "s"	, "16,5": "s"	, "16,6": "s"
	, "11,2": "d"	, "11,3": "d"	, "11,4": "d"	, "11,5": "d"	, "11,6": "d"	, "11,7": "d"	, "11,8": "d"	, "11,9": "d"	, "11,10": "d"	, "12,4": "s"
	, "12,5": "s"	, "12,6": "s"	, "10,2": "d"	, "10,3": "d"	, "10,4": "d"	, "10,5": "d"	, "10,6": "d"	, "10,7": "d"	, "10,8": "d"	, "10,9": "d"
	, "9,3": "d"	, "9,4": "d"	, "9,5": "d"	, "9,6": "d"}


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

function start(){

					
		$('#start').css("display", "none");
		$('#wager').prop('disabled', true);


		$('#money_total').text(localStorage.getItem("total"));

		for(var i = 0; i<2;i++){

			random_number = Math.floor(Math.random()*(52));
			dealer_card_list.push(card_array[random_number]);

			if (card_dict[card_array[random_number]] === 11){

				dealer_ace_count++;

			}


			dealer_total = dealer_total + card_dict[card_array[random_number]];

			if(dealer_total>21 && dealer_ace_count>0){

				dealer_total=dealer_total-10;
				dealer_ace_count=dealer_ace_count-1;
				dealer_ace_flag = true;
					
			}

			dealer_card_count++;

			dealer_total_list.push(dealer_total);
			dealer_count_list.push(dealer_card_count);

		}


		for (var i = 1; i<dealer_total_list.length; i++){


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


		for(var i = 0; i<2;i++){

			random_number = Math.floor(Math.random()*(52));
			player_card_list.push(card_array[random_number]);

			if (card_dict[card_array[random_number]] === 11){

				player_ace_count++;

			}

			player_total = player_total + card_dict[card_array[random_number]];

			if(player_total>21 && player_ace_count>0){

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

				} else
				{

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

					else{

					$('#hit').css("display", "unset");
					$('#stay').css("display", "unset");
					$('#double_down').css("display", "unset");

					/*if (split_flag){*/

						$('#split').css("display", "unset");

					/*}*/
						
					var decision_key_1 = "";


					switch(player_card_list[1].split('_')[0]){

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

					switch(player_card_list[2].split('_')[0]){

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

					switch(dealer_card_list[1].split('_')[0]){

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



					if (first_dict[decision_key_1]===undefined){


						if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === undefined){

							hit_choice = true; 

							$('#hit').css("background-color", "red");

						} else if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === "s")
						{
							stay_choice = true;

							$('#stay').css("background-color", "red");

						}
						else if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === "d")
						{

							double_choice = true;
							$('#double_down').css("background-color", "red");

						}
						else if (number_dict[player_total_list[2]+","+dealer_total_list[1]] === "sp")
						{

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

	$(document).ready(function(){


		if (wins===0 && losses===0 && pushes===0){

			var result = prompt("Enter your money total");
			$('#money_total').text(result);
			localStorage.setItem("total", $('#money_total').text());


		}

		$('#start').click(function(){

			start();

		});


	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */	

	



		$('#hit').click(function(){

			hit_choice=false;
			split_choice=false;
			stay_choice=false;
			double_choice=false;

			$('#double_down').css("display", "none");
			$('#split').css("display", "none");

			
			ace_flag = false;
			
			if(player_total<=21){

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

					losses = losses + 1;
					$('#losses').text(losses);


				}


				else
				{

							

					if (number_dict[player_total + ","+ $('#dealer_total').text()] === undefined){

						hit_choice = true; 

						$('#hit').css("background-color", "red");

					} else if (number_dict[player_total + ","+ $('#dealer_total').text()] === "s")
					{
						stay_choice = true;

						$('#stay').css("background-color", "red");

					}
					else if (number_dict[player_total + ","+ $('#dealer_total').text()] === "d")
					{

						double_choice = true;
						$('#double_down').css("background-color", "red");

					}
					else if (number_dict[player_total + ","+ $('#dealer_total').text()] === "sp")
					{

						split_choice = true;
						$('#split').css("background-color", "red");

					}
						

				}		

			}
		});		

	/* -----------------------------------------------------------------------------------------------------------------*/
	/* ------------------------------------------------------------------------------------------------------------------*/


		$('#stay').click(function(){


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

		});



	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */
	
		$('#reload').click(function(){


			reset();
			start();
		
		});

	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */

	$('#hit').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#hit').mouseout(function(){

		if (!hit_choice){

			$(this).css("background-color", "black");

		}
		


	});

	$('#stay').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#stay').mouseout(function(){


		if (!stay_choice){

			$(this).css("background-color", "black");
			
		}


	});

	$('#double_down').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#double_down').mouseout(function(){


		if (!double_choice){

			$(this).css("background-color", "black");
			
		}


	});

	$('#split').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#split').mouseout(function(){


		if (!split_choice){

			$(this).css("background-color", "black");
			
		}


	});

	$('#split_1_hit').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#split_1_hit').mouseout(function(){

		if (!hit_choice){

			$(this).css("background-color", "black");

		}
		


	});

	$('#split_1_stay').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#split_1_stay').mouseout(function(){


		if (!stay_choice){

			$(this).css("background-color", "black");
			
		}


	});

	$('#split_1_double_down').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#split_1_double_down').mouseout(function(){


		if (!double_choice){

			$(this).css("background-color", "black");
			
		}


	});

	$('#split_2_hit').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#split_2_hit').mouseout(function(){

		if (!hit_choice){

			$(this).css("background-color", "black");

		}
		


	});

	$('#split_2_stay').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#split_2_stay').mouseout(function(){


		if (!stay_choice){

			$(this).css("background-color", "black");
			
		}


	});

	$('#split_2_double_down').mouseover(function(){


		$(this).css("background-color", "red");


	});

	$('#split_2_double_down').mouseout(function(){


		if (!double_choice){

			$(this).css("background-color", "black");
			
		}


	});

	

	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */

		$('#double_down').click(function(){

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

		});


	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */
	$('#split').click(function(){

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
		
	});

	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */

	$('#split_1_hit').click(function(){

			$('#split_1_double_down').css("display", "none");
			
			ace_flag = false;

			hit_choice=false;
			stay_choice=false;
			double_choice=false;
			split_choice=false;
			
			
			if(split_total_1<=21){

				random_number = Math.floor(Math.random()*(52));

				$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(200+(split_card_count_1+1)*45,10)+ 'px\"><img src=\"static/img/' 
					+ card_array[random_number] +'\"/></div>');

				if (card_dict[card_array[random_number]] === 11){

					split_ace_count_1++;

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

					$('#split_1_hit').css("display", "none");
					$('#split_1_stay').css("display", "none");

					$('#split_2_hit').css("display", "unset");
					$('#split_2_stay').css("display", "unset");
					$('#split_2_double_down').css("display", "unset");

					split_alive = false;



				}
				else
				{

					secondDecision(split_total_1 + ","+ $('#dealer_total').text(), "split_1");		

				}			

			}

		});	


	function secondDecision(key_value, button_name){

		if (number_dict[key_value] === undefined){

			hit_choice = true;
			$('#'+ button_name+"_hit").css("background-color", "red");

		} else if (number_dict[key_value] === "s")
		{
			stay_choice = true;
			$('#'+ button_name+"_stay").css("background-color", "red");

		}
		else if (number_dict[key_value] === "d")
		{
			double_choice = true;
			$('#'+ button_name+"_double").css("background-color", "red");

		}


	};

	

	$('#split_1_double_down').click(function(){


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


	});

	$('#split_2_double_down').click(function(){


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
				else
				{

					secondDecision(split_total_2 + ","+ $('#dealer_total').text(), "split_2");		

				}	

				if (split_alive || split_total_2<=21){

					$('#split_2_stay').css("display", "unset");
					$('#split_2_stay').text("Cont");

				}
					

			}


	});

	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */

	$('#split_2_hit').click(function(){

			$('#split_2_double_down').css("display", "none");
			
			ace_flag = false;

			
			if(split_total_2<=21){

				random_number = Math.floor(Math.random()*(52));

				$('body').append('<div class=\"player_div\" style =\"left:' + parseInt(700+(split_card_count_2+1)*45,10)+ 'px\"><img src=\"static/img/' 
					+ card_array[random_number] +'\"/></div>');

				if (card_dict[card_array[random_number]] === 11){

					player_ace_count++;

				};

				split_total_2 = split_total_2 + card_dict[card_array[random_number]];

				if(split_total_2>21 && player_ace_count>0){

					split_total_2= split_total_2-10;
					player_ace_count=player_ace_count-1;
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

					losses=losses+1;
					$('#losses').text(losses);

					var new_total = current_total - parseInt($('#wager').val(), 10);
					$('#money_total').text(new_total.toString());
					localStorage.setItem("total", $('#money_total').text());

					$('#split_2_hit').css("display", "none");

					if (!split_alive){

						$('#split_2_stay').css("display", "none");
						$('#reload').css("display", "unset");
						$('#reload').css('z-index', 9999);
						$('#reload').css('left', "600px");
						$('#wager').prop('disabled', false);

					}

				}
				else
				{

					secondDecision(split_total_2 + ","+ $('#dealer_total').text(), "split_2");		

				}

			}

	});

	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */
	

	$('#split_1_stay').click(function(){


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



	});

	/* --------------------------------------------------------------------------------------------------------------- */
	/* --------------------------------------------------------------------------------------------------------------- */
	

	$('#split_2_stay').click(function(){


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


	});


});		
	

	


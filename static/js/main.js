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

$(document).ready(function(){

	format();

});		
	

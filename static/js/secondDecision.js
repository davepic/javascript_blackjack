function secondDecision(key_value, button_name){

	if (number_dict[key_value] === undefined){
		hit_choice = true;
		$('#'+ button_name+"_hit").css("background-color", "red");

	} else if (number_dict[key_value] === "s") {
		stay_choice = true;
		$('#'+ button_name+"_stay").css("background-color", "red");

	}
	else if (number_dict[key_value] === "d")
	{
		double_choice = true;
		$('#'+ button_name+"_double").css("background-color", "red");

	}
};
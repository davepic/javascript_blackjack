function format() {

	$(window).resize(function(){
		$("#money_table").css("width", $(window).width());
		$("img").css("height", 245*($(window).width())/1275);
		$("img").css("width", 175*($(window).width())/1275);
	});
	
	if (wins===0 && losses===0 && pushes===0){
		var result = prompt("Enter your money total");
		$('#money_total').text(result);
		localStorage.setItem("total", $('#money_total').text());
	}

	$('#start').click(function(){
		start();
	});

	$('#hit').click(function(){
		hit();
	});		

	$('#stay').click(function(){
		stay();
	});	
	$('#reload').click(function(){
		reset();
		start();
	});

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

	$('#double_down').click(function(){
		doubleDown();
	});

	$('#split').click(function(){
		split();
	});
}
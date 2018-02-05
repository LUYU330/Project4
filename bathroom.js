$(document).ready(function() {
    $(document).keydown(function(key) {
        switch(parseInt(key.which,10)) {
			// Left arrow key pressed
			case 37:
				$('img').animate({left: "-=30px"}, 'fast');
				break;
			// Up Arrow Pressed
			case 38:
				// Put our code here
				$('img').animate({top:"-=30px"},'fast');
				break;
			// Right Arrow Pressed
			case 39:
				// Put our code here
				$('img').animate({left:"+=30px"},'fast');
				break;
			// Down Arrow Pressed
			case 40:
				// Put our code here
				$('img').animate({top:"+=30px"},'fast');
				break;
		}
	});
  $('#bath').draggable();
  $('#sink').draggable();
  $('#toilet').draggable();
  $('#mirror').draggable();
});

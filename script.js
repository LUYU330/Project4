$(document).ready(function(){
  $('#drag1').draggable();
  $('#drag2').draggable();
  $('#drag3').draggable();
  $('#drag4').draggable();
  $('#drag5').draggable();
  $('#drag6').draggable();
  $('#drag7').draggable();
  $('#drag8').draggable();
  $('#drag9').draggable();
  $('#drag10').draggable();
  $('#drag11').draggable();
  $('#drag12').draggable();

  $('#drag1').hover(
    function(){
    $(this).append(( "<span>Time to Sleep!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag2').hover(
    function(){
    $(this).append(( "<span>Play Phone!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag3').hover(
    function(){
    $(this).append(( "<span>Happy Time!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag4').hover(
    function(){
    $(this).append(( "<span>Shower Time!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag5').hover(
    function(){
    $(this).append(( "<span>Cook Brunch!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag6').hover(
    function(){
    $(this).append(( "<span>Eat Brunch!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag7').hover(
    function(){
    $(this).append(( "<span>Play Games!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag8').hover(
    function(){
    $(this).append(( "<span>Relax Time!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag9').hover(
    function(){
    $(this).append(( "<span>Simple Dinner!</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );
  $('#drag10').hover(
    function(){
    $(this).append(( "<span>Why So Much Homework?</span>" ));
    },
    function(){
    $(this).find("span:last").remove();
    }
  );


});

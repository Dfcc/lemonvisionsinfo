$(document).mousemove(function(e){
    $(".follow").css({left:e.pageX, top:e.pageY});
});

var name = "#floating";
var menuYloc = null;
 
$(document).ready(function(){
    menuYloc = parseInt($(name).css("top").substring(0,$(name).css("top").indexOf("px")))
    $(window).scroll(function () { 
        var offset = menuYloc+$(document).scrollTop()+"px";
        $(name).animate({top:offset},{duration:300,queue:false});
    });
});
$(window).ready(function() {
	window.setTimeout(function() {window.scrollTo(x,y);}, 0);
    var viewport = $(window).width();

    if ( viewport <= 759 ) {
        console.log( "Mobile,", viewport ) ;}
    else if ( viewport <= 1040 ) {
        console.log( "Tablet,", viewport ) ;}
    else {
        console.log( "Desktop,", viewport ) };
});


// fades 
$(window).scroll(function() {

    if ($(this).scrollTop()>1340)
     {
        $('.content-4slide').fadeOut("slow");
     }
    else
     {
      $('.content-4slide').fadeIn("slow");
     }
 });

$(document).ready(function(){
		$(window).bind('scroll', function(e){
			parallaxScroll();
		});
		function parallaxScroll(){
			var scrolledY = $(window).scrollTop();
			$('#slide1_invert').css('top','-' + ((scrolledY*0.9)) + 'px');
			$('.content-2slide').css('top','-' + ((scrolledY*0.7)) + 'px');
			$('.content-3slide').css('top','-' + ((scrolledY*0.1)) + 'px');
			$('.content-5slide').css('top','-' + ((scrolledY*0.47)) + 'px');
		
		}
	});
 // text color	
//var lastScrollTop = 950;
//$(window).scroll(function(event){
   //var st = $(this).scrollTop();
   //if (st > lastScrollTop){
    // $('h3').css('color','#FFFFFF'); 
   //} else {
     //$('h3').css('color','#000000');
  // }
//});

 
      var $ =jQuery.noConflict();
	  var scroll_pos = 0;
      var animation_begin_pos = 0; //where you want the animation to begin
      var animation_end_pos = 1000; //where you want the animation to stop
      var beginning_color = new $.Color( 'rgba(210,50,98, 0.15)' ); //we can set this here, but it'd probably be better to get it from the CSS; for the example we're setting it here.
      var ending_color = new $.Color( 'rgba(90, 209, 0, 0.34902)' ); ;//what color we want to use in the end
      $(document).scroll(function() {
          scroll_pos = $(this).scrollTop(); 
          if(scroll_pos >= animation_begin_pos && scroll_pos <= animation_end_pos ) { 
             // console.log( 'scrolling and animating' );
              //we want to calculate the relevant transitional rgb value
              var percentScrolled = scroll_pos / ( animation_end_pos - animation_begin_pos );
              var newRed = beginning_color.red() + ( ( ending_color.red() - beginning_color.red() ) * percentScrolled );
              var newGreen = beginning_color.green() + ( ( ending_color.green() - beginning_color.green() ) * percentScrolled );
              var newBlue = beginning_color.blue() + ( ( ending_color.blue() - beginning_color.blue() ) * percentScrolled );
			  
              var newColor = new $.Color( newRed, newGreen, newBlue );
              //console.log( newColor.red(), newColor.green(), newColor.blue() );
              $('.quotes_container').animate({ backgroundColor: newColor }, 0);
          } else if ( scroll_pos > animation_end_pos ) {
               $('.quotes_container').animate({ backgroundColor: ending_color }, 0);
          } else if ( scroll_pos < animation_begin_pos ) {
               $('.quotes_container').animate({ backgroundColor: beginning_color }, 0);
          } else { }
      });
   
	  //text color .quotesh1_pan
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 610) {
        $(".content-3slide h3").addClass("white_text");
    } else {
        $(".content-3slide h3").removeClass("white_text");
    }
	 if (scroll >= 735) {
        $(".quotesh1_pan").addClass("big_text");
    } else {
        $(".quotesh1_pan").removeClass("big_text");
    }
	 if (scroll >= 980) {
        $(".quotes_container_big h3 ").addClass("quotes_black ");
    } else {
        $(".quotes_container_big h3 ").removeClass("quotes_black ");
    }
});	
  //pastilla last slide vertical
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 1800) {
        $("#pastilla").addClass("block_vertical_big");
    } else {
        $("#pastilla").removeClass("block_vertical_big");
    }
	
});	   

//run script only when document finishes loading all elements
$(document).ready(function() {


		//------------------------fade in elements on scroll-----------------------------------

    //every time user scrolls, this function will run
    $(window).scroll( function(){

      	//check location of hidden element
        $('.hidden').each( function(i){

            let object_end = $(this).offset().top + $(this).outerHeight();
            let window_end = $(window).scrollTop() + $(window).height();

            /* If the object is completely visible in the window, fade it it */
            if( window_end > object_end ){

                $(this).animate({'opacity':'1'},500);

            }

        });

    });


		//------------------------scroll when start button clicked----------------------

		//START button
		let startButton = document.getElementById('startBtn');
		//function for when we click it
		let scrollFun = function scroll(){
					// we are using jquery because we couldn't find any vanilla js solution,
					// and the only other alternatives are plugins, which we wanted to avoid
			    $('html, body').animate({
		        scrollTop: $("#mainContent_1_div_1").offset().top
		    	}, 1000);
		}
		//event listener for click
		startButton.addEventListener( "click", scrollFun );


});

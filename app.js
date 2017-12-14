
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



    

    // - --------------------------- modal window / picture 

    function openPicture() {
      document.getElementById('gallery_section_2').style.display = "block";
    }

    // Close the Modal
    function closeModal() {
      document.getElementById('gallery_section_2').style.display = "none";
    }

    var slideIndex = 1;
    displaySlide(slideIndex);

    // Next/previous controls
    function changeSlide(n) {
      displaySlide(slideIndex += n);
    }

    // activate when thumnail clicked
    function slideNumber(n) {
      displaySlide(slideIndex = n);
    }

    //logic for changing slides back / forward
    function displaySlide(n) {
      var i;
      var slides = document.getElementsByClassName("modal_image");
      var captionText = document.getElementById("caption");
      
      if (n > slides.length) {slideIndex = 1}
      if (n < 1) {slideIndex = slides.length}
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

      slides[slideIndex-1].style.display = "block";
      
      captionText.innerHTML = dots[slideIndex-1].alt;
    }

});

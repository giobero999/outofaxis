/* Theme Name: Starto - Responsive Landing page template
   Author: Coderthemes
   Author e-mail: coderthemes@gmail.com
   Version: 1.0.0
   Created:Feb 2016
   File Description:Main JS file of the template
*/

/* ==============================================
Smooth Scroll To Anchor
=============================================== */
//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('.navbar-nav a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 0
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
/* ==============================================
Preloader
=============================================== */

$(window).load(function() {
    $('.status').fadeOut();
    $('.preloader').delay(350).fadeOut('slow');
});

/* ==============================================
WOW plugin triggers animate.css on scroll
=============================================== */
jQuery(document).ready(function () {
    wow = new WOW(
        {
            animateClass: 'animated',
            offset: 50,
            mobile: true
        }
    );
    wow.init();

    var a = [];
    a[0] = "images/icons/scala.svg";
    a[1] = "images/icons/scala-black.svg";

    a[2] = "images/icons/akka-black.png";
    a[3] = "images/icons/akka.png";

    a[4] = "images/icons/bootstrap.svg";
    a[5] = "images/icons/bootstrap-black.svg";

    a[7] = "images/icons/android-black.svg";
    a[8] = "images/icons/android.svg";

    a[9] = "images/icons/react.svg";
    a[10] = "images/icons/react-black.svg";

    a[11] = "images/icons/js-black.png";
    a[12] = "images/icons/js.png";

    a[13] = "images/icons/ios-black.png";
    a[14] = "images/icons/ios.png";

    a[15] = "images/icons/couchbase-black.svg";
    a[16] = "images/icons/couchbase.svg";

    a[17] = "images/icons/play-black.png";
    a[18] = "images/icons/play.png";



    $(document).ready(function() {
      $('#scala').hover(function() {
        $(this).attr('src',a[0]);
      },function() {
        $(this).attr('src',a[1]);
      });
      $('#akka').hover(function() {
        $(this).attr('src',a[3]);
      },function() {
        $(this).attr('src',a[2]);
      });
      $('#bootstrap').hover(function() {
        $(this).attr('src',a[4]);
      },function() {
        $(this).attr('src',a[5]);
      });
      $('#js').hover(function() {
        $(this).attr('src',a[12]);
      },function() {
        $(this).attr('src',a[11]);
      });
      $('#android').hover(function() {
        $(this).attr('src',a[8]);
      },function() {
        $(this).attr('src',a[7]);
      });
      $('#react').hover(function() {
        $(this).attr('src',a[9]);
      },function() {
        $(this).attr('src',a[10]);
      });
      $('#ios').hover(function() {
        $(this).attr('src',a[14]);
      },function() {
        $(this).attr('src',a[13]);
      });
      $('#couchbase').hover(function() {
        $(this).attr('src',a[16]);
      },function() {
        $(this).attr('src',a[15]);
      });
      $('#play').hover(function() {
        $(this).attr('src',a[18]);
      },function() {
        $(this).attr('src',a[17]);
      });
    });

    $(".title-box a").click(function (){
      $(".title-box a").removeClass("text-colored");
      $(".join-us-title").removeClass("active");
      $(this).addClass("text-colored");
    });
    $(".join-us-title").click(function (){
      $(".join-us-title").removeClass("active");
      $(".title-box a").removeClass("text-colored");

      $(this).addClass("active");
    });

}); //end ready


//sticky header on scroll
$(window).load(function() {
    $(".sticky").sticky({topSpacing: 0});
});


$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('.back-to-top').fadeIn();
    } else {
        $('.back-to-top').fadeOut();
    }
});

$('.back-to-top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 1000);
    return false;
});


/* ==============================================
Contact App
=============================================== */

//var $ = jQuery.noConflict(); //Relinquish jQuery's control of the $ variable.

/*global jQuery */
jQuery(function ($) {
    'use strict';

    /**
     * Contact Form Application
     */
    var ContactFormApp = {
        $contactForm: $("#ajax-form"),
        $contactFormBtn: $("#send"),
        $contactFormName: $("#name2"),
        $contactFormEmail: $("#email2"),
        $contactFormMessage: $("#message2"),
        $confirmMessage: $("#ajaxsuccess"),
        $errorMessages: $(".error"),
        $errorName: $("#err-name"),
        $errorEmail: $("#err-emailvld"),
        $errorMessage: $("#err-message"),
        $errorForm: $("#err-form"),
        $errorTimeout: $("#err-timedout"),
        $errorState: $("#err-state"),

        //Validate Contact Us Data
        validate: function () {
            var error = false; // we will set this true if the form isn't valid

            var name = this.$contactFormName.val(); // get the value of the input field
            if(name == "" || name == " " || name == "Name") {
                this.$errorName.show(500);
                this.$errorName.delay(4000);
                this.$errorName.animate({
                    height: 'toggle'
                }, 500, function() {
                    // Animation complete.
                });
                error = true; // change the error state to true
            }


            var email_compare = /^([a-z0-9_.-]+)@([da-z.-]+).([a-z.]{2,6})$/; // Syntax to compare against input
            var email = this.$contactFormEmail.val().toLowerCase(); // get the value of the input field

            if (email == "" || email == " " || email == "E-mail") { // check if the field is empty
                this.$contactFormEmail.fadeIn('slow'); // error - empty
                error = true;
            }
            else if (!email_compare.test(email)) { // if it's not empty check the format against our email_compare variable
                this.$errorEmail.show(500);
                this.$errorEmail.delay(4000);
                this.$errorEmail.animate({
                    height: 'toggle'
                }, 500, function() {
                    // Animation complete.
                });
                error = true;
            }

            var message = this.$contactFormMessage.val(); // get the value of the input field

            if(message == "" || message == " " || message == "Message") {
                this.$errorMessage.show(500);
                this.$errorMessage.delay(4000);
                this.$errorMessage.animate({
                    height: 'toggle'
                }, 500, function() {
                    // Animation complete.
                });
                error = true; // change the error state to true
            }

            if(error == true) {
                this.$errorForm.show(500);
                this.$errorForm.delay(4000);
                this.$errorForm.animate({
                    height: 'toggle'
                }, 500, function() {
                    // Animation complete.
                });
            }

            return error;
        },
        //contact form submit handler
        contactFormSubmit: function (obj) {
            this.$errorMessages.fadeOut('slow'); // reset the error messages (hides them)

            if(this.validate() == false) {

                var data_string = $('#ajax-form').serialize(); // Collect data from form

                var $this = this;
                $.ajax({
                    type: "POST",
                    url: $this.$contactForm.attr('action'),
                    data: data_string,
                    timeout: 6000,
                    cache: false,
                    crossDomain: false,
                    error: function(request,error) {
                        if (error == "timeout") {
                            $this.$errorTimeout.slideDown('slow');
                        }
                        else {
                            $this.$errorState.slideDown('slow');
                            $this.$errorState.html('An error occurred: ' + error + '');
                        }
                    },
                    success: function() {
                        $this.$confirmMessage.show(500);
                        $this.$confirmMessage.delay(4000);
                        $this.$confirmMessage.animate({
                            height: 'toggle'
                            }, 500, function() {
                        });

                        $this.$contactFormName.val('');
                        $this.$contactFormEmail.val('');
                        $this.$contactFormMessage.val('');
                    }
                });
            }
            return false;
        },
        bindEvents: function () {
            //binding submit event
            this.$contactFormBtn.on('click', this.contactFormSubmit.bind(this));
        },
        init: function () {
            //initializing the contact form
            console.log('Contact form is initialized');
            this.bindEvents();
            return this;
        }
    };



    //Initializing the app
    ContactFormApp.init({});

});


    var inputs = document.querySelectorAll( '.inputfile' );
    Array.prototype.forEach.call( inputs, function( input )
    {
    	var label	 = input.nextElementSibling,
    		labelVal = label.innerHTML;

    	input.addEventListener( 'change', function( e )
    	{
    		var fileName = '';
    		if( this.files && this.files.length > 1 )
    			fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
    		else
    			fileName = e.target.value.split( '\\' ).pop();

    		if( fileName )
    			label.querySelector( 'span' ).innerHTML = fileName;
    		else
    			label.innerHTML = labelVal;
    	});
    });

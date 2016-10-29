$(window).load(function(){
	$('html').addClass('css3');

	$("#status").fadeOut();
	$("#preloader").delay(350).fadeOut("slow");

	if( $.browser.msie && $.browser.version <= 9){

		$('html').removeClass('css3');
	}
});


$(document).ready(function(){

	/* Scroll to Sections
	================================================== */
	$('.navigation a[href*=#] , #slider-text a[href*=#]').click( function(event) {
		//event.preventDefault();
		$.scrollTo( $(this).attr('href') , 1500, { easing: 'easeOutQuint' , offset: 0 , 'axis':'y' } );
	});

	$('#to-top').click(function(event) {
		event.preventDefault();
		$('body,html').animate({ scrollTop:0 } , 1000);
	});



	/* Paralax_background
	================================================== */
	function parallax ()
	{
		if( !device.tablet() && !device.mobile() )
		{
			if ( $().parallax )
			{
				$('section[data-type="background"]').each(function(){
					$(this).parallax("50%", 0.5);
				});
			}
		};
	};

	parallax();


	 /* Placeholder for IE
	================================================== */
	if($.browser.msie) { // Условие для вызова только в IE
		$("form").find("input[type='text'], textarea").each(function() {
			var tp = $(this).attr("placeholder");
			$(this).attr('value',tp).css('color','#b2b2b2');
		}).focusin(function() {
			var val = $(this).attr('placeholder');
			if($(this).val() == val) {
				$(this).attr('value','').css('color','#b2b2b2');
			}
		}).focusout(function() {
			var val = $(this).attr('placeholder');
			if($(this).val() == "") {
				$(this).attr('value', val).css('color','#b2b2b2');
			}
		});

		/* Protected send form */
		$("form").submit(function() {
			$(this).find("input[type='text']").each(function() {
				var val = $(this).attr('placeholder');
				if($(this).val() == val) {
					$(this).attr('value','');
				}
			})
		});
	}



	/* prettyPhoto
	================================================== */
	$("a[rel^='prettyPhoto']").prettyPhoto();



	/* Tablet and mobile menu
	================================================== */
	var oMenuLink = $('#menu_link');

	oMenuLink.on('touchend click', function(e) {
		e.preventDefault();

		var $this = $(this);

		$this.toggleClass('active');

		$this.next('#navigation').stop().slideToggle();
	});

	$('#navigation a').on('click', function() {

		if ( oMenuLink.hasClass('active')) {
			oMenuLink.removeClass('active');

			$('#navigation').slideUp();
		};
	});


	var H_footer = $('footer').outerHeight(true);

	$('#contact-section').css("margin-bottom", H_footer);



	/* Contact form
	================================================== */
	$("#contact-form").validate({
		submitHandler: function(form) {

			$(form).ajaxSubmit({
				target: '#contact-form-result',
				success: function() {
					$("#contact-form").fadeOut(500, function(){
						$('#contact-form-result').fadeIn(500);
					});
				},
				error: function() {
					$('#contact-form-result').fadeIn(500);
				}
			});

		}
	});



	/* reflect scrolling in navigation
	================================================== */
	$('.nav-waypoint').each(function() {
		$(this).waypoint( function( direction ) {

			if( direction === 'down' ) {

				var containerID = $(this).find('section:first').attr('id');

				/* update navigation */
				$('#navigation a').removeClass('current');
				$('#navigation a[href*=#'+containerID+']').addClass('current');
			
			}

		} , { offset: '20px' } );
		
		$(this).waypoint( function( direction ) {
			
			if( direction === 'up' ) {
			
				var containerID = $(this).find('section:first').attr('id');
				
				/* update navigation */
				$('#navigation a').removeClass('current');
				$('#navigation a[href*=#'+containerID+']').addClass('current');
			
			}

		} , { offset: function() { return -$(this).height() + 20; } });
	});


	/* Milestone Counter
	================================================== */
	$('#counter-section').waypoint(function(direction) {
							
		if( direction === 'down' ) {
			
			$('.counter').each(function(){
										
				var counter = $(this).data('counter');
				
				if( !$(this).find('.count').hasClass('animated') ) {
										
					$(this).find('.count').countTo({
						from: 0,
						to: counter,
						speed: 2000,
						refreshInterval: 100,
						onComplete: function() {
							$(this).addClass('animated');
						}
					});
				
				}
				
			});
			
		}
			
	} , { offset: '50%' } );


	/* Scroll Animations
	================================================== */

	/* about link */
	function animate_about_link() {
		
		$('#profile-category a').each(function( k ) {
			
			var el = $(this);
			
			setTimeout ( function () {
				el.animate({opacity: 1 , top: "0px"} , 300 , "easeOutCubic" );
			},  k * 100 );
			
		});

	};


	/* post item */
	function animate_post_item() {

		$('#blog-section .post-item').each(function( k ) {
		
			var el = $(this);
			
			$(this).waypoint(function(direction) {
				
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout ( function () {
						el.animate({opacity: 1 , top: "0px"} , 800 , "easeOutCubic");
					}, k * 50 );
					
				}
			
			}, { offset: '80%' } );
			
		});

	};


	/* counter section */
	function animate_counter() {
			
		$('.counter-box').each(function( k ) {
			
			var el = $(this);
			
			setTimeout ( function () {
				el.animate({opacity: 1} , 800 , "easeOutCubic" );
			},  k * 150 );
			
		});
	
	};


	/* comment section */
	function animate_comment() {
			
		$('#comments-list li').each(function( k ) {
			
			var el = $(this);
			
			setTimeout ( function () {
				el.animate({opacity: 1 , left: "0px"} , 800 , "easeOutCubic");
			},  k * 150 );
			
		});
	
	};


	function animate_sections() {

		/* about */
		$('#about-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {

				setTimeout( animate_about_link , 400);


				$(this).addClass('animated');

			}

		} , { offset: '80%' } );


		/* portfolio */
		$('#portfolio-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {

				setTimeout ( function () {
						$('#portfolio-section').find('.section-title.opacity-box').animate({ opacity: 1 });
				}, 200 );

				setTimeout ( function () {
						$('#portfolio-slider-wrapper').animate({ opacity: 1 , top: "0px" } , 600 , "easeOutCubic");
				}, 600 );

				setTimeout ( function () {
						$('#portfolio-carousel-wrapper').animate({ opacity: 1 , top: "0px" } , 600 , "easeOutCubic");
				}, 1000 );


				$(this).addClass('animated');

			}

		} , { offset: '95%' } );


		/* parallax-section-2 */
		$('#parallax-section-2').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {

				setTimeout ( function () {
						$('#parallax-section-2 h3').animate({ opacity: 1 } , 1000);
				}, 200 );

				setTimeout ( function () {
						$('#parallax-section-2').find('.form-subscribe').animate({ opacity: 1 }, 1000);
				}, 600 );


				$(this).addClass('animated');

			}

		} , { offset: '80%' } );


		/* blog */
		$('#blog-section').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {

				setTimeout ( function () {
						$('#blog-section').find('.section-title.opacity-box').animate({ opacity: 1 });
				}, 200 );

				setTimeout( animate_post_item , 600);

				$(this).addClass('animated');

			}

		} , { offset: '95%' } );


		/* counter-section */
		$('#counter-section').waypoint( function( direction ) {
			
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				
				setTimeout ( function () {
						$('#counter-section').find('h3').animate({ opacity: 1 });
				}, 200 );
				
				setTimeout( animate_counter , 600);
				
				$(this).addClass('animated');
				
			}
		
		} , { offset: '70%' } );


		/* contact-section */
		$('#contact-section').waypoint( function( direction ) {
			
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				
				setTimeout ( function () {
						$('#contact-section').find('.section-title.opacity-box').animate({ opacity: 1 });
				}, 200 );

				setTimeout ( function () {
						$('#contact-section').find('#contact-form').animate({ opacity: 1 }, 2000 , "easeOutCubic");
				}, 600 );
				
				$(this).addClass('animated');
				
			}
		
		} , { offset: '80%' } );


		/* comment-section */
		$('#comment-section').waypoint( function( direction ) {
			
			if( direction === 'down' && !$(this).hasClass('animated') ) {
				
				setTimeout ( function () {
						$('#comment-section').find('.section-title.opacity-box').animate({ opacity: 1 });
				}, 200 );

				setTimeout( animate_comment , 600);
				
				$(this).addClass('animated');
				
			}
		
		} , { offset: '80%' } );


	};

	/* no animation for mobile */
	if( !device.tablet() && !device.mobile()) {
		animate_sections();
	};


	$(window).on('resize',function(){
		parallax();
	});

});

$.fn.countTo = function (options) {
	options = options || {};
	
	return $(this).each(function () {
		// set options for current element
		var settings = $.extend({}, $.fn.countTo.defaults, {
			from:            $(this).data('from'),
			to:              $(this).data('to'),
			speed:           $(this).data('speed'),
			refreshInterval: $(this).data('refresh-interval'),
			decimals:        $(this).data('decimals')
		}, options);
		
		// how many times to update the value, and how much to increment the value on each update
		var loops = Math.ceil(settings.speed / settings.refreshInterval),
			increment = (settings.to - settings.from) / loops;
		
		// references & variables that will change with each update
		var self = this,
			$self = $(this),
			loopCount = 0,
			value = settings.from,
			data = $self.data('countTo') || {};
		
		$self.data('countTo', data);
		
		// if an existing interval can be found, clear it first
		if (data.interval) {
			clearInterval(data.interval);
		}
		data.interval = setInterval(updateTimer, settings.refreshInterval);
		
		// initialize the element with the starting value
		render(value);
		
		function updateTimer() {
			value += increment;
			loopCount++;
			
			render(value);
			
			if (typeof(settings.onUpdate) == 'function') {
				settings.onUpdate.call(self, value);
			}
			
			if (loopCount >= loops) {
				// remove the interval
				$self.removeData('countTo');
				clearInterval(data.interval);
				value = settings.to;
				
				if (typeof(settings.onComplete) == 'function') {
					settings.onComplete.call(self, value);
				}
			}
		}
		
		function render(value) {
			var formattedValue = settings.formatter.call(self, value, settings);
			$self.html(formattedValue);
		}
	});
};

$.fn.countTo.defaults = {
	from: 0,               // the number the element should start at
	to: 0,                 // the number the element should end at
	speed: 1000,           // how long it should take to count between the target numbers
	refreshInterval: 100,  // how often the element should be updated
	decimals: 0,           // the number of decimal places to show
	formatter: formatter,  // handler for formatting the value before rendering
	onUpdate: null,        // callback method for every time the element is updated
	onComplete: null       // callback method for when the element finishes updating
};

function formatter(value, settings) {
	return value.toFixed(settings.decimals);
}
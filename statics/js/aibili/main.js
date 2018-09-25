// MAIN.JS
//--------------------------------------------------------------------------------------------------------------------------------
//This is main JS file that contains custom JS scipts and initialization used in this template*/
// -------------------------------------------------------------------------------------------------------------------------------
// Template Name: Roker.
// Author: Iwthemes.
// Version 1.4 - Updated on 01 / 04 / 2015
// Website: http://www.iwthemes.com 
// Email: support@iwthemes.com
// Copyright: (C) 2015 
// -------------------------------------------------------------------------------------------------------------------------------

$(document).ready(function($) {

	'use strict';
	
 	//=================================== Sticky nav ===================================//
	$("header").sticky({topSpacing:0});

	//=================================== Nav Responsive ==============================//
    $('#menu').tinyNav({
       active: 'selected'
    });

  	//=================================== Loader =====================================//
	jQuery(window).load(function() {
		jQuery(".status").fadeOut();
	    jQuery(".preloader").delay(10).fadeOut("normal");
	})

    //=================================== Nav Superfish ===============================//
	$('ul.sf-menu').superfish();

  	//=================================== Accordion  =================================//
	$('.accordion-container').hide(); 
	$('.accordion-trigger:first').addClass('active').next().show();
	$('.accordion-trigger').click(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.accordion-trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		return false;
	});
   	
   	//=================================== jBar  =============================================//
	$('.jBar').hide();
	$('.jRibbon').show().removeClass('up', 500);
	$('.jTrigger').click(function(){
		$('.jRibbon').toggleClass('up', 500);
		$('.jBar').slideToggle();
	});

	//=================================== Simple slide  ====================================//
	$('.carousel').carousel();

	//=================================== Carousel Works  ==================================//
 	$("#works").owlCarousel({	
		autoPlay: 3200,      
		items : 5,
		navigation: true,
		itemsDesktop : [1600,4],
		itemsDesktopSmall : [1024,3],
		itemsMobile : [500,1],
		pagination: true
	});

	$(".news_list").owlCarousel({	
		autoPlay: 3200,      
		items : 8,
		navigation: true,
		itemsDesktop : [1600,1],
		itemsDesktopSmall : [1024,1],
		itemsMobile : [500,1],
		pagination: false,
		goToFirst: false,
		goToFirstNav: false
	});

	//=================================== Totop  ==========================================//
  	$().UItoTop({
		scrollSpeed:500,
		easingType:'linear'
	});	

});	
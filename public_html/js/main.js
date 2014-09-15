"use strict";
/* jshint globalstrict: true */
/* global $:false */

function prettyPhotoBind(){
	 $("a[rel^='prettyPhoto']").prettyPhoto({
			theme: 'dark_rounded', 
			social_tools: false,
		});
}

	$(document).ready(function(){							   
							   
		prettyPhotoBind();
	
			$('#nav').tinyNav({
				active:'home'
			});
			
				
		// get the action filter option item on page load
		var $filterType = $('#filterOptions li.active a').attr('class');
		
		// get and assign the ourHolder element to the
		// $holder varible for use later
		var $holder = $('ul.ourHolder');
		
		// clone all items within the pre-assigned $holder element
		var $data = $holder.clone();
		
		// attempt to call Quicksand when a filter option
		// item is clicked
		$('#filterOptions li a').click(function(e) {
			// reset the active class on all the buttons
			$('#filterOptions li').removeClass('active');
			
			// assign the class of the clicked filter option
			// element to our $filterType variable
			var $filterType = $(this).attr('class');
			$(this).parent().addClass('active');
			
			if ($filterType == 'all') {
				// assign all li items to the $filteredData var when
				// the 'All' filter option is clicked
				var $filteredData = $data.find('li');
			} 
			else {
				// find all li elements that have our required $filterType
				// values for the data-type element
				// var $filteredData = $data.find('li[data-type=' + $filterType + ']');
				var $filteredData = $data.find('li[data-type~=' + $filterType + ']');
			}
			
			// call quicksand and assign transition parameters
			$holder.quicksand($filteredData, {
				duration: 800,
				easing: 'easeInOutQuad'
			}, function(){prettyPhotoBind();});
			return false;
		});
		
		
		// GRID JS
		
        $(function() {
            Grid.init();
        });
		
		// CSS SWITCHER
		
		$("#css_switch_a, #css_box").mouseover(function(){
			$("#css_box").css("left", "0");
		});
		$("#css_box").mouseout(function(){
			$("#css_box").css("left", "-185px");
		});
		
		// ELEMENTS
		
		$("#css_el_dark_red").click(function(){
									   
			$('head').append('<link href="css/colors/dark/red.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/dark/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_dark_blue").click(function(){
									   
			$('head').append('<link href="css/colors/dark/blue.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/dark/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_dark_green").click(function(){
									   
			$('head').append('<link href="css/colors/dark/green.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/dark/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_dark_orange").click(function(){
									   
			$('head').append('<link href="css/colors/dark/orange.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/dark/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_dark_beige").click(function(){
									   
			$('head').append('<link href="css/colors/dark/beige.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/dark/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_dark_gray").click(function(){
									   
			$('head').append('<link href="css/colors/dark/gray.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/dark/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		//
		
		$("#css_el_light_red").click(function(){
									   
			$('head').append('<link href="css/colors/light/red.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/light/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_light_blue").click(function(){
									   
			$('head').append('<link href="css/colors/light/blue.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/light/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_light_green").click(function(){
									   
			$('head').append('<link href="css/colors/light/green.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/light/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_light_orange").click(function(){
									   
			$('head').append('<link href="css/colors/light/orange.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/light/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_light_beige").click(function(){
									   
			$('head').append('<link href="css/colors/light/beige.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/light/styles.css" rel="stylesheet" type="text/css" />');
			
		});
		
		$("#css_el_light_gray").click(function(){
									   
			$('head').append('<link href="css/colors/light/gray.css" rel="stylesheet" type="text/css" />');
			$('head').append('<link href="css/bg/light/styles.css" rel="stylesheet" type="text/css" />');
			
		});
					
		// SUB MENU
		
		$("#nav li").mouseover(function(){
			$(this).children(".sub_menu").slideDown();							
		});
		$("#nav li .sub_menu").mouseover(function(){
			$(this).show();					
		});
		$("#nav li .sub_menu").mouseout(function(){
			$(this).hide();
		});
		
		
	
		
		
		
		$("#contactForm").submit(function(e){
			e.preventDefault();
			dataString = $("#contactForm").serialize();
				$.ajax({
					type: "POST",
					url: "mail.php",
					data: dataString,
					dataType: "json",
					success: function(data) {
					if (data.valid == "true")	{
						$("#contactMsg").html('<span style="color:green;">'+data.msg+'</span>');
						$('#contactForm')[0].reset();
					} else
					{
						$("#contactMsg").html('<span style="color:red;">'+data.msg+'</span>');
					} 
					
					}
				});				
			});
		});
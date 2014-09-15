$(document).ready(function(){
	
	$('#nav li a').click(function(){
	
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,140);
		
		return false;
	
	});
	
	$('.goto a, #goup a').click(function(){
	
		var el = $(this).attr('href');
		var elWrapped = $(el);
		
		scrollToDiv(elWrapped,140);
		
		return false;
	
	});

	
	function scrollToDiv(element,navheight){
	
		
	
		var offset = element.offset();
		var offsetTop = offset.top;
		var totalScroll = offsetTop-navheight;
		
		$('body,html').animate({
				scrollTop: totalScroll
		}, 500);
	
	}
	
	
	
});
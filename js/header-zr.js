$('#header').load('header.html',function(){
	$(".header_box2").hover(
	function(){
		$(".header_lj_box").removeClass("yc");	
	},
	function(){
		$(".header_lj_box").addClass("yc");	
	});
});
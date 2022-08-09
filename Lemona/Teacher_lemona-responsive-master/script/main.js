$(function(){

	$("#toggle-btn").click(function(){
		$("#main-header nav").toggleClass("on");
	});


	// AOS 초기화
	AOS.init();

	
}); // $

$(function(){
	// modal
	$(".modal .btn-close").click(function(){
		$(".modal .box").removeClass("on");
	});
	console.log();
});
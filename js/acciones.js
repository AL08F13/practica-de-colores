// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	$('#uno').on('click',function(){
		$('#principal').append('1');
	});
	$('#dos').on('click',function(){
		$('#principal').append('2');
	});
	$('#tres').on('click',function(){
		$('#principal').append('3');
	});
	$('#cuatro').on('click',function(){
		$('#principal').append('4');
	});
//});
}); 
});


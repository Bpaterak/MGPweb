$(document).ready(function(){
  
  
 
$('#bg1').on('hover',function(){
	//mousehover
	$('#bg1').addClass('featactive');
} , function(){
	//mouseout
	$('#bg1').removeClass('featactive');
});

$('#bg1').on('click',function(){

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('calc');
	$('#bg1 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg1').addClass('featactive');
});

$('#bg2').on('click',function(){
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('meter');
	$('#bg2 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg2').addClass('featactive');
});

$('#bg3').on('click',function(){
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('meter');
	$('#bg3 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg3').addClass('featactive');
});

$('#bg4').on('click',function(){
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('meter');
	$('#bg4 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg4').addClass('featactive');
});

$('#bg5').on('click',function(){
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('meter');
	$('#bg5 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg5').addClass('featactive');
});

$('#bg6').on('click',function(){
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('meter');
	$('#bg6 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg6').addClass('featactive');
});

$('#bg7').on('click',function(){
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('sum');
	$('#bg7 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg7').addClass('featactive');
});

$('#bg8').on('click',function(){
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('meter');
	$('#bg8 i').removeClass('fa-square').addClass('fa-check-square');
	$('#bg8').addClass('featactive');
});


});

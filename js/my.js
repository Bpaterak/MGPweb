$(document).ready(function(){
 //if($('.product_section').find('.secondtext').length = 1)
 		//$('.secondtext').hide();



$('#bg1').on('click',function(e){
	$("#inhere").load('../html/mgp/sections.html #collegecalc > *');
	
	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('calc');
	$('#bg1 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg1').addClass('featactive');
	e.preventDefault();
});

$('#bg2').on('click',function(){
$("#inhere").load('../html/mgp/sections.html #healthc > *');

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('healthc');
	$('#bg2 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg2').addClass('featactive');
	e.preventDefault();
});

$('#bg3').on('click',function(){
	$("#inhere").load('../html/mgp/sections.html #playz > *');

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('playz');
	$('#bg3 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg3').addClass('featactive');
	e.preventDefault();
});

$('#bg4').on('click',function(){
	$("#inhere").load('../html/mgp/sections.html #afraid > *');

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('afraid');
	$('#bg4 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg4').addClass('featactive');
	e.preventDefault();
});

$('#bg5').on('click',function(){
	$("#inhere").load('../html/mgp/sections.html #smartcal > *');

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('smartcal');
	$('#bg5 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg5').addClass('featactive');
	e.preventDefault();
});

$('#bg6').on('click',function(){
	$("#inhere").load('../html/mgp/sections.html #supers > *');

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('supers');
	$('#bg6 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg6').addClass('featactive');
	e.preventDefault();
});

$('#bg7').on('click',function(){
	$("#inhere").load('../html/mgp/sections.html #results > *');

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('sum');
	$('#bg7 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg7').addClass('featactive');
	e.preventDefault();
});

$('#bg8').on('click',function(){
	$("#inhere").load('../html/mgp/sections.html #yodlee > *');

	$('.award li').removeClass('featactive');
	$('#mbg').removeClass().addClass('yodlee');
	$('#bg8 i').removeClass('fa-square').addClass('fa-check-square grico');
	$('#bg8').addClass('featactive');
	e.preventDefault();
});


});

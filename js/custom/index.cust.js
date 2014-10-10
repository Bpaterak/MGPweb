$(document).ready(function(){
   
//FLEX SLIDER//

   $(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshowSpeed: 9000, 
    keyboard: false,   

  });
});

// FUN BOX //


     jQuery('.fun-wrap .fun-box').each(function () {
        jQuery(this).fappear(function() {
            jQuery('.fun').countTo();
        }); 
    });

// COUNT UP //	



});

	
	$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".img1").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).animate({ 'width' : "100%",'opacity':'1'},300);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).animate({ 'width' : "0px",'opacity':'0'},300);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

/*	 
$(window).resize(function() {
  // This will execute whenever the window is resized
  var h=$(window).height(); // New height
  var w=$(window).width(); // New width
  $(".img1").css("width":w,"height",h);
});

*/
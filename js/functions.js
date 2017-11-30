// JavaScript Document

$("#slider").on("scroll", function() {
  $(".slides").css({
    "background-position": $(this).scrollLeft()/6-600+ "px 0"
  });  
});


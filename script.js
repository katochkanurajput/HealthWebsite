$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 60) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

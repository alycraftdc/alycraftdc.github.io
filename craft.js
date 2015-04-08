$(function() {
  var collapse    = $('button.lines-button');
      menu        = $('nav');
      menuHeight  = menu.height();

  $(collapse).on('click', function(e){
    e.preventDefault();
    menu.slideToggle();
    collapse.toggleClass('close');
  });

  $(window).resize(function() {
    var w = $(window).width();
    if(w >= 992 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
    if(w <= 992) {
      menu.removeAttr('style');
      collapse.removeClass('close');
    }
  });

  //open popup
  $('.popup-trigger').on('click', function(event){
    event.preventDefault();
    $('.popup').addClass('visible');
  });
  
  //close popup
  $('.popup').on('click', function(event){
    if( $(event.target).is('.popup-close') || $(event.target).is('.popup') ) {
      event.preventDefault();
      $(this).removeClass('visible');
    }
  });
  //close popup when clicking the esc keyboard button
  $(document).keyup(function(event){
      if(event.which=='27'){
        $('.popup').removeClass('visible');
      }
  });
});
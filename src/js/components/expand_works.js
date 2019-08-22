$(document).ready(function(){

  $('.section-work .button-expand').on('click', function () {
    if ($('.section-work .col.display-toggle').hasClass('hidden')) {
      $('.section-work .col.display-toggle').removeClass('hidden');
      setTimeout(function () {
          $('.section-work .col.display-toggle').removeClass('visuallyhidden');
      }, 20);
    } else {
      $('.section-work .col.display-toggle').addClass('visuallyhidden');
      $('.section-work .col.display-toggle').one('transitionend', function(e) {
          $('.section-work .col.display-toggle').addClass('hidden');
      });
    };
    $('.section-work .icon-rotate').toggleClass('rotate')
  });
  
})
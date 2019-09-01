var lastScrollTop = 0;
        $(window).scroll(function(event){
           var st = $(this).scrollTop();

           if (st > lastScrollTop){
               $('.global-nav').addClass('fixed');
           } 
           if (st == 0) {
              $('.global-nav').removeClass('fixed');
           }
           lastScrollTop = st;
        });

$(document).ready(function(){
  $('#hamburguer').click(function(){
    $('menu').addClass('show');
  });
});
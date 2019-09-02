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
  $( function() {
    $('#button').click( function() {
      $('.mobile-menu-items').toggleClass('show');
      $('.hamburguer-button').toggleClass('close');
    });
  });
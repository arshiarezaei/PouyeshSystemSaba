(function ($) {

  "use strict";

  // Window Resize Mobile Menu Fix
  mobileNav();


  // Scroll animation init
  window.sr = new scrollReveal();

  if ($('.menu-trigger').length) {
    $(".menu-trigger").on('click', function () {
      $(this).toggleClass('active');
      $(".nav").toggleClass('menu-list');
      $(".main-nav").toggleClass('sc-white');
      $("div.bg").toggleClass('sc-white');
      $('body').toggleClass('-overflow-');
      $('.nav').slideToggle(200);
    });
  }

  // Menu elevator animation
  $('a[href*=\\#]:not([href=\\#])').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var width = $(window).width();
        if (width < 991) {
          $('.menu-trigger').removeClass('active');
          $('.nav').slideDown(200);
        }
        $('html,body').animate({
          scrollTop: (target.offset().top) - 130
        }, 7000);
        return false;
      }
    }
  });


  $(document).ready(function () {
    window.scrollTo(0,0)

    $(document).on("scroll", onScroll);

    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();

      $(document).off("scroll");

      $('body').removeClass('-overflow-');
      $(".nav").removeClass('menu-list');
      $(".main-nav").removeClass('sc-white');
      $("div.bg").removeClass('sc-white');
      $('.nav').slideUp(200);

      $('a').each(function () {

        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = $(this.hash);
      $('html, body').stop().animate({
        scrollTop: (target.offset().top) - 130
      }, 500, 'swing', function () {
        $(document).on("scroll", onScroll);
      });
    });
  });

  function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $('.nav li a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));

      if (refElement.position().top <= scrollPos + 150 && refElement.position().top + refElement.height() > scrollPos + 150) {
        $('.nav li a').removeClass("active");
        currLink.addClass("active");
      }
      else {
        currLink.removeClass("active");
      }
    });
  }


  // Page loading animation
  $(window).on('load', function () {
    if ($('.cover').length) {
      $('.cover').parallax({
        imageSrc: $('.cover').data('image'),
        zIndex: '1'
      });
    }
    
    $("#preloader").animate({
      'opacity': '0'
    }, 600, function () {
      setTimeout(function () {
        $("#preloader").css("visibility", "hidden").fadeOut();
      }, 300);
    });
  });

  
  // Window Resize Mobile Menu Fix
  $(window).on('resize', function () {
    mobileNav();
  });

  // Window Resize Mobile Menu Fix
  function mobileNav() {
    var width = $(window).width();
    $('.submenu').on('click', function () {
      if (width < 992) {
        $('.submenu ul').removeClass('active');
        $(this).find('ul').toggleClass('active');
      }
    });
  }
})(window.jQuery);
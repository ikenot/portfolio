$(function (){

  //humbergerMenu 
  $( document ).ready(function() {
    $( ".hamburger__list" ).hide();
    $( ".hamburger" ).click(function() {
      $( ".hamburger__list" ).slideToggle();
      $('.hamburger__line--one').toggleClass('cross__animation--one');
      $('.hamburger__line--two').toggleClass('cross__animation--two');
      $('.hamburger__line--three').toggleClass('cross__animation--three');      
    });
  });

  // hambergerFadein
  $(window).scroll(function () {
      var scrollH = $(window).scrollTop();
      var windowHeightH = 500;
      if (scrollH > windowHeightH) {
        $('.header').addClass('scrollin__header');
      } else {
        $('.header').removeClass('scrollin__header');
      }
  });   
  $('.hamburger__list--child').click(function () {
    $(this).removeClass('scrollin__header');
  })

  // モーダルで表示する
  $(function () {
    $('.service__main--hover').hover(
      function () {
        $(this).addClass('hover__fade');
      },
      function () {
        $(this).removeClass('hover__fade');
      }
    );
  });

  //slider
  $('.product__main').slick({
    autoplay: true,
    dots: false,
    infinite: true,
    autoplayspeed: 200,
    arrows: true,
    slidesToShow: 3,
  });

  // fadein
  $(window).scroll(function () {
    $('.main__title, .concept__title, .concept__content, .service, .product, .profile, .contact').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  }) 

  
})
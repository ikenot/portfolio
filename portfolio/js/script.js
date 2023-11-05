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
    centerMode: true,
    centerPadding: 0,
  });

  // fadein
  $(window).scroll(function () {
    $('.concept__title, .concept__content, .service, .product, .section__title, .contact').each(function () {
      var targetElement = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > targetElement - windowHeight + 150) {
        $(this).addClass('scrollin');
      }
    });
  }) 

  $(window).scroll(function () {
    var scrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
  
    // タイトル要素のアニメーション
    $('.section__title--profile').each(function () {
      var targetElement = $(this).offset().top + 100; // 遅延を追加
      if (scrolled > targetElement - windowHeight && !$(this).hasClass('scrollin')) {
        $(this).addClass('scrollin').animate({ opacity: 1 }, 500, function() {
          // タイトル要素のアニメーションが終了したら、次の要素に対してアニメーションを開始
          // ここで次の要素に対するアニメーションコードを追加
        });
      }
    });
  
    // バックグラウンド要素のアニメーション
    $('.profile__background').each(function () {
      var targetElement = $(this).offset().top + 200; // 遅延を追加
      if (scrolled > targetElement - windowHeight && !$(this).hasClass('scrollin')) {
        $(this).addClass('scrollin').animate({ opacity: 1 }, 500, function() {
          // バックグラウンド要素のアニメーションが終了したら、次の要素に対してアニメーションを開始
          // ここで次の要素に対するアニメーションコードを追加
        });
      }
    });
  
    // メイン要素のアニメーション
    $('.profile__main').each(function () {
      var targetElement = $(this).offset().top + 300; // 遅延を追加
      if (scrolled > targetElement - windowHeight && !$(this).hasClass('scrollin')) {
        $(this).addClass('scrollin').animate({ opacity: 1 }, 500, function() {
          // メイン要素のアニメーションが終了したら、次の要素に対してアニメーションを開始
          // ここで次の要素に対するアニメーションコードを追加
        });
      }
    });
  });
  

  // 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".main__title");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });
  // アニメーション用の関数
  $('.main__title').each(function () {
    $(this).addClass("appeartext");
  });
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


})
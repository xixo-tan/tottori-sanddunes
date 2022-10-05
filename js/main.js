$(document).ready(function () {

  $('ul li a').click(function () {
    var headerVal = $("header").outerHeight(true);
    var scroll = $(window).scrollTop();
    var adjust = 0
    if (scroll <= headerVal) {
      adjust = 70;
    }
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top - headerVal - adjust;
    $('body,html').animate({
      scrollTop: pos
    }, 1000);
    return false;
  });

  $('.fuwat').css('visibility', 'hidden');
  $(window).scroll(function () {
    var windowHeight = $(window).height(),
      topWindow = $(window).scrollTop();
    $('.fuwat').each(function () {
      var objectPosition = $(this).offset().top;
      if (topWindow > objectPosition - windowHeight + 200) {
        $(this).addClass("fuwatAnime");
      }
    });
  });

  $(".btn-gnavi").on("click", function () {
    // ハンバーガーメニューの位置を設定
    var rightVal = 0;
    if ($(this).hasClass("open")) {
      // 位置を移動させメニューを開いた状態にする
      rightVal = -300;
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).removeClass("open");
    } else {
      // メニューを開いたら次回クリック時は閉じた状態になるよう設定
      $(this).addClass("open");
    }
    $("#global-navi").stop().animate({
      right: rightVal
    }, 200);
  });

  $('.slick').slick({
    autoplay: true,
    slidesToShow: 1,
    infinite: true,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    centerPadding: '0'
  });

  $('.bg-switcher').bgSwitcher({
    images: [
      '../images/sv-colorful.jpeg',
      '../images/sv-sunakuro.jpeg',
      '../images/sv-sunanooka.jpeg'
    ],
    interval: 4000,
    loop: true,
  })
});
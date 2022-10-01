$(document).ready(function () {
  var headerH = $("header").outerHeight(true);
  function FixedAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) {
      $('header').addClass('HeightMin');
    } else {
      $('header').removeClass('HeightMin');
    }
  }
  // 画面をスクロールをしたら動かしたい場合の記述
  $(window).scroll(function () {
    FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
  });
  // ページが読み込まれたらすぐに動かしたい場合の記述
  $(window).on('load', function () {
    FixedAnime();//スクロール途中からヘッダーの高さを変化させる関数を呼ぶ
  });

  $('ul li a').click(function () {
    var headerVal = $("header").outerHeight(true);
    var scroll = $(window).scrollTop();
    var adjust = 0
    if(scroll <= headerVal ){
      adjust = 70;
    }
    var elmHash = $(this).attr('href');
    var pos = $(elmHash).offset().top-headerVal-adjust;
    $('body,html').animate({scrollTop: pos}, 1000);
    return false;
  });

  $('.fuwat').css('visibility','hidden');
  $(window).scroll(function(){
    var windowHeight = $(window).height(),
    topWindow = $(window).scrollTop();
    $('.fuwat').each(function(){
      var objectPosition = $(this).offset().top;
      if (topWindow > objectPosition - windowHeight + 200) {
        $(this).addClass("fuwatAnime");
      }
    });
  });

  $('.bg-switcher').bgSwitcher({
    images: [
      '../images/sv-colorful.jpeg',
      '../images/sv-sunakuro.jpeg',
      '../images/sv-sunanooka.jpeg'
    ],
    interval: 4000,
    loop: true
  })
});
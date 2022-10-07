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

  const ham = $('#js-hamburger'); //js-hamburgerの要素を取得し、変数hamに格納
  const nav = $('#js-nav'); //js-navの要素を取得し、変数navに格納
  ham.on('click', function () { //ハンバーガーメニューをクリックしたら
    ham.toggleClass('active'); // ハンバーガーメニューにactiveクラスを付け外し
    nav.toggleClass('active'); // ナビゲーションメニューにactiveクラスを付け外し
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
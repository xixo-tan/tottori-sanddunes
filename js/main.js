$(document).ready(function(){
  $('.bg-switcher').bgSwitcher({
    images: [
      '../images/sv-colorful.jpeg',
      '../images/sv-sunakuro.jpeg',
      '../images/sv-sunanooka.jpeg'
    ],
    interval: 4000,
    loop: true
  })

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
});
$('.menu-btn').on('click', function() {
  $(this).toggleClass('close');
  $('.menu').toggleClass('show');
  $('.menu-nav').toggleClass('show');
  $('.menu-branding').toggleClass('show');
  $('.nav-item').each(function() {
    $(this).toggleClass('show');
  });
});

// pic and title
var title = new ScrollMagic.Controller();

var titleSlide = new ScrollMagic.Scene({
  triggerElement: '.title',
  triggerHook: 0.3
})
  .setClassToggle('.title', 'title-appear')

  .addTo(title);

var img = new ScrollMagic.Controller();

var imgSlide = new ScrollMagic.Scene({
  triggerElement: '.title',
  triggerHook: 0.3
})
  .setClassToggle('.image', 'image-appear')

  .addTo(img);

var asset = new ScrollMagic.Controller();

$('.a-block').each(function() {
  var aBlockSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1.1
  })
    .setClassToggle(this, 'a-block-appear')

    .addTo(asset);
});

var fpList = new ScrollMagic.Controller();

$('.fp-list').each(function() {
  var fpSlide = new ScrollMagic.Scene({
    triggerElement: this,
    reverse: false
  })
    .setClassToggle(this, 'fp-list-appear')

    .addTo(fpList);
});

var fiBlock = new ScrollMagic.Controller();

$('.fi-block').each(function() {
  var fpSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 1
  })
    .setClassToggle(this, 'fi-block-appear')

    .addTo(fiBlock);
});

var rpLeftBlock = new ScrollMagic.Controller();

$('.left').each(function() {
  var rpLeftSlide = new ScrollMagic.Scene({
    triggerElement: this
  })
    .setClassToggle(this, 'rp-appear')
    .addIndicators()
    .addTo(rpLeftBlock);
});

var rpRightBlock = new ScrollMagic.Controller();

$('.right').each(function() {
  var rpRightSlide = new ScrollMagic.Scene({
    triggerElement: this
  })
    .setClassToggle(this, 'rp-appear')
    .addIndicators()
    .addTo(rpRightBlock);
});

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

// table animation

var table = new ScrollMagic.Controller();

var tableSlide = new ScrollMagic.Scene({
  triggerElement: 'table',
  triggerHook: 0.9,
  reverse: false
})
  .setClassToggle('table', 'table-appear')

  .addTo(table);

// examples animation

var examples = new ScrollMagic.Controller();

$('.examples').each(function() {
  var examplesSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.9
  })
    .setClassToggle(this, 'examples-appear')

    .addTo(examples);
});

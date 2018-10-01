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

// scroll spy fixed top

var scrollSpy = new ScrollMagic.Controller();

var spy = new ScrollMagic.Scene({
  triggerElement: '#scroll-spy',
  triggerHook: 0.1
})

  .setPin('#scroll-spy')
  .setClassToggle('#scroll-spy', 'appear')

  .addTo(scrollSpy);

// init controller
var controller = new ScrollMagic.Controller();

// build tween
var tween = TweenMax.from('#animate', 0.5, { autoAlpha: 0, scale: 0.7 });

// build scene
var scene = new ScrollMagic.Scene({
  triggerElement: '#scroll-spy',
  duration: 500,
  triggerHook: 0.8
})
  .setTween(tween)

  .addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function(newpos) {
  TweenMax.to(window, 0.5, { scrollTo: { y: newpos } });
});

//  bind scroll to anchor links
$(document).on('click', "a[href^='#']", function(e) {
  var id = $(this).attr('href');
  if ($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // if supported by the browser we can even update the URL.
  }
});

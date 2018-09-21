$(".menu-btn").on( "click", function() {
  $(this).toggleClass("close");
  $(".menu").toggleClass("show");
  $(".menu-nav").toggleClass("show");
  $(".menu-branding").toggleClass("show");
  $(".nav-item").each(function(){
  $(this).toggleClass("show");
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

// text appear
var text = new ScrollMagic.Controller();

$('.text').each(function () {
  
  var textSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook:0.9
    
  })
  .setClassToggle(this, 'text-appear')
  
  .addTo(text);

});

// headings
var heading = new ScrollMagic.Controller();

$('.heading').each(function () {
  
  var headingSlide = new ScrollMagic.Scene({
    triggerElement: this,
    
  })
  .setClassToggle(this, 'heading-appear')
  
  .addTo(heading);

});

var list = new ScrollMagic.Controller();

  var listSlide = new ScrollMagic.Scene({
    triggerElement: '.list',
    
  })
  .setClassToggle('.list', 'list-appear')
  
  .addTo(list);


// Biopic and title
var bioImg = new ScrollMagic.Controller();
  
  var bioImgSlide = new ScrollMagic.Scene({
    triggerElement: '.block',
    
    
  })
  .setClassToggle('.image', 'bio-img-appear')
  
  .addTo(bioImg);

  var bioHeadings = new ScrollMagic.Controller();
  
  var bioHeadingSlide = new ScrollMagic.Scene({
    triggerElement: '.block',
    
    
  })
  .setClassToggle('.bio-headings', 'bio-headings-appear')
  
  .addTo(bioHeadings);


  // proccess steps slide

  var leftsteps = new ScrollMagic.Controller();

$('.left').each(function () {
  
  var headingSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.7
    
    
  })
  .setClassToggle(this, 'step-appear')
  
  .addTo(leftsteps);

});

var rightsteps = new ScrollMagic.Controller();

$('.right').each(function () {
  
  var headingSlide = new ScrollMagic.Scene({
    triggerElement: this,
    triggerHook: 0.5
    
    
  })
  .setClassToggle(this, 'step-appear')
  
  .addTo(rightsteps);

});
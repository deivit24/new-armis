$(".menu-btn").on( "click", function() {
  $(this).toggleClass("close");
  $(".menu").toggleClass("show");
  $(".menu-nav").toggleClass("show");
  $(".menu-branding").toggleClass("show");
  $(".nav-item").each(function(){
  $(this).toggleClass("show");
  });
});

var text = new ScrollMagic.Controller();

$('.text').each(function () {
  
  var textSlide = new ScrollMagic.Scene({
    triggerElement: this,
    
  })
  .setClassToggle(this, 'text-appear')
  
  .addTo(text);

});
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





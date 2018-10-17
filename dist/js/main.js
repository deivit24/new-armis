$('.menu-btn').on('click', function() {
  $(this).toggleClass('close');
  $('.menu').toggleClass('show');
  $('.menu-nav').toggleClass('show');
  $('.menu-branding').toggleClass('show');
  $('.nav-item').each(function() {
    $(this).toggleClass('show');
  });
});

// // select DOM Items

// const menuBtn = document.querySelector('.menu-btn');
// const menu = document.querySelector('.menu');
// const menuNav = document.querySelector('.menu-nav');
// const menuBranding = document.querySelector('.menu-branding');
// const navItem = document.querySelectorAll('.nav-item');

// // set initial state of Menu

// let showMenu = false;

// menuBtn.addEventListener('click', toggleMenu);

// function toggleMenu() {
//   if (!showMenu) {
//     menuBtn.classList.add('close');
//     menu.classList.add('show');
//     menuNav.classList.add('show');
//     menuBranding.classList.add('show');
//     navItem.forEach(item => item.classList.add('show'));

//     // set menu state
//     showMenu = true;
//   } else {
//     menuBtn.classList.remove('close');
//     menu.classList.remove('show');
//     menuNav.classList.remove('show');
//     menuBranding.classList.remove('show');
//     navItem.forEach(item => item.classList.remove('show'));

//     // set menu state
//     showMenu = false;

//   }
// }

// $(window).on('scroll', function () {
//   if ($(window).scrollTop()) {
//     $('.navbar').addClass('black');
//     $('.navbar-nav .nav-item .nav-link').addClass('color');

//   }
//   else
//   {
//     $('.navbar').removeClass('black');
//     $('.navbar-nav .nav-item .nav-link').removeClass('color');

//   }
// });

// init Scroll Magic
var nav = new ScrollMagic.Controller();
var scene = new ScrollMagic.Controller();
var navLink = new ScrollMagic.Controller();

// build a scene
var ourScene = new ScrollMagic.Scene({
  triggerElement: '.btn',
  triggerHook: 0.4
})
  .setClassToggle('#project01', 'fade-in')

  .addTo(scene);

var navScroll = new ScrollMagic.Scene({
  triggerElement: '.btn',
  triggerHook: 0.4
})

  .setClassToggle('.navbar', 'black')

  .addTo(nav);

var linkScroll = new ScrollMagic.Scene({
  triggerElement: '.btn',
  triggerHook: 0.4
})
  .setClassToggle('.nav-link', 'color')

  .addTo(navLink);

// wrapper animations

// transparent block
var picblock = new ScrollMagic.Controller();

$('.picblock').each(function() {
  var blockSlide = new ScrollMagic.Scene({
    triggerElement: this,
    reverse: false
  })
    .setClassToggle(this, 'slide')

    .addTo(picblock);
});

// gold text

var picgold = new ScrollMagic.Controller();

$('.gold').each(function() {
  var goldSlide = new ScrollMagic.Scene({
    triggerElement: this
  })
    .setClassToggle(this, 'gold-appear')

    .addTo(picgold);
});

// slide text appear

var blocktext = new ScrollMagic.Controller();

$('.textblock').each(function() {
  var textSlide = new ScrollMagic.Scene({
    triggerElement: this,
    reverse: false
  })
    .setClassToggle(this, 'text-appear')

    .addTo(blocktext);
});

// // gold text
// var gold1 = new ScrollMagic.Controller();

// var goldAppear1 = new ScrollMagic.Scene({
//   triggerElement: '#transstraight'
// })
// .setClassToggle('.gold', 'appear')
//
// .addTo(gold1);

// // slide text appear
// var text1 = new ScrollMagic.Controller();

// var textAppear1 = new ScrollMagic.Scene({
//   triggerElement: '#transstraight'
// })
// .setClassToggle('.transtext', 'appear2')
//
// .addTo(text1);

const TypeWriter = function(txtElement, words, wait = 3000) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = '';
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

// Type Method
TypeWriter.prototype.type = function() {
  // Current Index of Word
  const current = this.wordIndex % this.words.length;
  // Get Full Text od Current Word
  const fullTxt = this.words[current];

  // CHeck if deleting
  if (this.isDeleting) {
    // Remove Character
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    // Add Character
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  // Insert txt into Element
  this.txtElement.innerHTML = `<span class="text">${this.txt}</span>`;

  // Initial Type Speed
  let typeSpeed = 200;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  // If word is complete
  if (!this.isDeleting && this.txt === fullTxt) {
    // this will make pause
    typeSpeed = this.wait;
    // Set delete to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    // move to next word
    this.wordIndex++;
    // Pause before start typing
    typeSpeed = 200;
  }

  setTimeout(() => this.type(), typeSpeed);
};
// Init on DOM Load

document.addEventListener('DOMContentLoaded', init);

// Init App

function init() {
  const txtElement = document.querySelector('.txt-type');
  const words = JSON.parse(txtElement.getAttribute('data-words'));
  const wait = txtElement.getAttribute('data-wait');
  // Init TypeWriter
  new TypeWriter(txtElement, words, wait);
}

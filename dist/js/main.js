$(".menu-btn").on( "click", function() {
  $(this).toggleClass("close");
  $(".menu").toggleClass("show");
  $(".menu-nav").toggleClass("show");
  $(".menu-branding").toggleClass("show");
  $(".nav-item").each(function(){
  $(this).toggleClass("show");
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

$(window).on('scroll', function () {
  if ($(window).scrollTop()) {
    $('.navbar').addClass('black');
    $('.navbar-nav .nav-item .nav-link').addClass('color');
    $('.logo').addClass('remove1');
  }
  else
  {
    $('.navbar').removeClass('black'); 
    $('.navbar-nav .nav-item .nav-link').removeClass('color');
    
    $('.logo').removeClass('remove1');
  }
});

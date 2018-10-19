var countdown = document.querySelector('.countdown');

// Set launch date

var launchDate = new Date('Nov 20, 2018 00:00:00').getTime();

// Update every second

var intvl = setInterval(function() {
  // Get today date and timeout
  var now = new Date().getTime();

  // distance from now to launch Date

  var distance = launchDate - now;

  // Time calculations

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the Result

  countdown.innerHTML = `
<div>${days}<span>Days</span></div>
<div>${hours}<span>Hours</span></div>
<div>${mins}<span>Minutes</span></div>
<div>${seconds}<span>Seconds</span></div>
`;

  // if launch date passed
  if (distance < 0) {
    // stop countdown
    clearInterval(intvl);
    // style and output text
    countdown.style.color = '#17a2b8';
    countdown.innerHTML = 'Launched!';
  }
}, 1000);

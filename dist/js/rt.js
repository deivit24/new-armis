var inputs = document.getElementsByTagName('input');

// progress bar
var inputProgress = document.querySelector('#input-progress');

var progress = document.querySelector('#progress-bar');
// start button quiz

var currentQuestion = 2;

function startQuiz() {
  document.getElementById('question-1').className = 'question';
  var startBtn = document.getElementById('startQuizBtn');
  startBtn.parentNode.removeChild(startBtn);
  inputProgress.style.width = 10 + '%';
  setTimeout(deleteSecOne, 1000);
  var riskContact = document.getElementById('risk-contact');
  riskContact.parentNode.removeChild(riskContact);
  var phone = document.getElementById('inputPhone');
  phone.parentNode.removeChild(phone);
}

function startQuizGuest() {
  document.getElementById('question-1').className = 'question';
  var startBtn = document.getElementById('startQuizBtn');
  startBtn.parentNode.removeChild(startBtn);
  inputProgress.style.width = 10 + '%';
  setTimeout(deleteSecOne, 1000);
  var ClientRiskContact = document.getElementById('client-risk-contact');
  ClientRiskContact.parentNode.removeChild(ClientRiskContact);
  var account = document.getElementById('inputAccountType');
  account.parentNode.removeChild(account);
}

// delete section 1
function deleteSecOne() {
  var secOne = document.getElementById('sec1');
  secOne.parentNode.removeChild(secOne);
}

// get the number of questions
function getNumberOfQuestions() {
  //QuerySelectorAll has better browser support in exchange for being slightly slower than gEBCN.
  var totalQuestions = document.querySelectorAll('.question').length;

  return totalQuestions;
}

// next question
function nextQuestion() {
  hideQuestion(currentQuestion);
  hideAnswerButton();

  showQuestion(currentQuestion);
  currentQuestion++;
}

function setAnswerButton() {
  //yes, that's correct. this is my lazy way of input validation without annoyning users
  //(e.g. transition on-click events) on the radio buttons...
  document.getElementById('confirm_answer').className = '';
  document.getElementById('reset').className = '';
}

function hideAnswerButton() {
  document.getElementById('confirm_answer').className = 'invisible';
  document.getElementById('reset').className = 'invisible';
}

function hideQuestion(id) {
  var totalQuestions = getNumberOfQuestions();
  for (var i = 1; i <= totalQuestions; i++) {
    if (i !== id) {
      document.getElementById('question-' + i).className = 'question invisible';
    }
  }
}

function showQuestion(id) {
  var totalQuestions = getNumberOfQuestions();
  if (id <= totalQuestions) {
    document.getElementById('question-' + id).className = 'question';
    inputProgress.style.width = (currentQuestion / totalQuestions) * 100 + '%';
  } else {
    hideAnswerButton(); //begins the end screen process if id is above total question
    inputProgress.className = 'invisible';
    progress.className = 'invisible';
  }
}

// listen for submit
document.getElementById('quiz').addEventListener('submit', function(e) {
  // hide results
  document.getElementById('answer').style.display = 'none';
  // show loader
  document.getElementById('loading').style.display = 'block';

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

// function to calculate the result of the survey
// initialize variables for each choice's score
// If you add more choices and outcomes, you must add another variable here.
function calculateResults() {
  let c1score = 0;
  let c2score = 0;
  let c3score = 0;
  let c4score = 0;
  let c5score = 0;

  // get a list of the radio inputs on the page
  let choices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i = 0; i < choices.length; i++) {
    // if the radio is checked..
    if (choices[i].checked) {
      // add 1 to that choice's score
      if (choices[i].value == 'c1') {
        c1score = c1score + 0;
      }
      if (choices[i].value == 'c2') {
        c2score = c2score + 3;
      }
      if (choices[i].value == 'c3') {
        c3score = c3score + 5;
      }
      if (choices[i].value == 'c4') {
        c4score = c4score + 8;
      }
      if (choices[i].value == 'c5') {
        c5score = c5score + 10;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }

  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the letiable here.
  let maxscore = c1score + c2score + c3score + c4score + c5score;

  // Display answer corresponding to that choice
  let answerbox = document.getElementById('answer');
  if (maxscore <= 20) {
    // If user chooses the first choice the most, this outcome will be displayed.
    // answerbox.innerHTML = `<p><span class="redd">Very Conservative</span> As a very conservative investor, your portfolio will be invested in the most risk-averse areas such as cash and fixed income securities. This approach offers a high degree of stability and should minimize the chances of substantial short-term volatility. Your main goal is preservation of wealth. The overall return, while not guaranteed, should fall within a narrow range of possibilities. However, particularly for time periods greater than five years, these returns may underperform the returns achievable from a higher-risk approach.</p>`;
    // document.getElementById('reset').className = 'show';
  }
  if (maxscore > 20) {
    // If user chooses the second choice the most, this outcome will be displayed.
    // answerbox.innerHTML =
    // '<p><span class="redd">Conservative</span> As a conservative investor, your portfolio will be invested primarily in risk-averse areas such as cash and fixed-income securities with only a modest exposure to equities. This approach concentrates on stability rather than maximizing return and should limit the chances of substantial short-term volatility. The overall return, while not guaranteed, should fall within a relatively narrow range of possibilities. However, particularly for time periods greater than five years, these returns may underperform the returns achievable from a higher-risk approach. </p>';
    // document.getElementById('reset').className = 'show';
  }
  if (maxscore > 40) {
    // If user chooses the third choice the most, this outcome will be displayed.
    // answerbox.innerHTML =
    // '<p><span class="redd">Moderate</span>As a moderate investor, your portfolio will include investment in equities, balanced by exposure to more risk-averse areas of the market such as cash, fixed-income securities, and real estate. This approach aims to achieve a balance between stability and return but is likely to involve at least some short-term volatility. The overall return is not guaranteed, although the range of possible outcomes should not be extreme. In most circumstances, particularly for time periods greater than five years, these returns should outperform the returns achievable from a more conservative approach but may underperform the returns achievable from a higher-risk approach.</p>';
    // document.getElementById('reset').className = 'show';
  }
  if (maxscore > 60) {
    // If user chooses the fourth choice the most, this outcome will be displayed.
    // answerbox.innerHTML =
    // '<p><span class="redd">Moderately Aggressive</span>As an moderately aggressive investor, your portfolio will be invested primarily in equities. This approach concentrates on achieving a good overall return on your investment while avoiding the most speculative areas of the market. Significant short-term fluctuations in value can be expected. The eventual return for the time period over which you invest could fall within a relatively wide range of possibilities. In most circumstances, particularly for time periods greater than five years, these returns should outperform the returns achievable from a more conservative approach.</p>';
    // document.getElementById('reset').className = 'show';
  }

  if (maxscore > 80) {
    // If user chooses the Fifth choice the most, this outcome will be displayed.
    // answerbox.innerHTML =
    // '<p><span class="redd">Very Aggressive</span>As a very aggressive investor, your portfolio will be invested in equities and will include exposure to more speculative areas of the market. The aim is to maximize return while accepting the possibility of large short-term fluctuations in value and even the possibility of longer-term losses. The eventual return for the time period over which you invest could fall within a wide range of possibilities. In most circumstances, the return should outperform the returns achievable from a more conservative approach.</p>';
    // document.getElementById('reset').className = 'show';
  }
  // If you add more choices, you must add another response below.

  document.getElementById('answer').style.display = 'block';

  document.getElementById('loading').style.display = 'none';

  document.getElementById('calc').style.display = 'none';

  inputProgress.style.display = 'none';
  progress.style.display = 'none';
  var showTable = document.getElementById('table');
  showTable.classList.remove('invisible');

  caclRiskProfile();
}

// program the reset button
function resetAnswer() {
  window.scrollTo(0, 0);
  window.location.reload();
}

// Scroll Magic Scroll Spy

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
  triggerElement: '#startQuizBtn',
  duration: 500
}).addTo(controller);

// change behaviour of controller to animate scroll instead of jump
controller.scrollTo(function(newpos) {
  TweenMax.to(window, 0.5, {
    scrollTo: {
      y: newpos
    }
  });
});

//  bind scroll to anchor links
$(document).on('click', "[href^='#']", function(e) {
  var id = $(this).attr('href');
  if ($(id).length > 0) {
    e.preventDefault();

    // trigger scroll
    controller.scrollTo(id);

    // if supported by the browser we can even update the URL.
  }
});

function caclRiskProfile() {
  let rc1score = 0;
  let rc2score = 0;
  let rc3score = 0;
  let rc4score = 0;
  let rc5score = 0;

  // get a list of the radio inputs on the page
  let rcchoices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i = 0; i <= 25; i++) {
    // if the radio is checked..
    if (rcchoices[i].checked) {
      // add 1 to that choice's score
      if (rcchoices[i].value == 'c1') {
        rc1score = rc1score + 0;
      }
      if (rcchoices[i].value == 'c2') {
        rc2score = rc2score + 3;
      }
      if (rcchoices[i].value == 'c3') {
        rc3score = rc3score + 5;
      }
      if (rcchoices[i].value == 'c4') {
        rc4score = rc4score + 8;
      }
      if (rcchoices[i].value == 'c5') {
        rc5score = rc5score + 10;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }

  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the letiable here.
  let maxrcscore = rc1score + rc2score + rc3score + rc4score + rc5score;

  if (maxrcscore <= 10) {
    // If user chooses the first choice the most, this outcome will be displayed.
    let riskCvc = document.getElementById('risk-capacity');
    riskCvc.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <label for="risk-capacity" class="vc">
    <input
              type="radio"
              name="risk-capacity"
              value="very Conservative"
              checked
            /> Very Conservative</label>
    `;
  }
  if (maxrcscore > 10 && maxrcscore <= 20) {
    // If user chooses the second choice the most, this outcome will be displayed.
    let riskCc = document.getElementById('risk-capacity');
    riskCc.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <label for="risk-capacity" class="c">
    <input
              type="radio"
              name="risk-capacity"
              value="Conservative"
              checked
            /> Conservative</label>
    `;
  }
  if (maxrcscore > 20 && maxrcscore <= 30) {
    // If user chooses the third choice the most, this outcome will be displayed.
    let riskCm = document.getElementById('risk-capacity');
    riskCm.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <label for="risk-capacity" class="m">
    <input
              type="radio"
              name="risk-capacity"
              value="Moderate"
              checked
            /> Moderate</label>
    `;
  }
  if (maxrcscore > 30 && maxrcscore <= 40) {
    // If user chooses the fourth choice the most, this outcome will be displayed.
    let riskCma = document.getElementById('risk-capacity');
    riskCma.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <label for="risk-capacity" class="ma">
    <input
              type="radio"
              name="risk-capacity"
              value="Moderately Aggressive"
              checked
            /> Moderately Aggressive</label>
    `;
  }

  if (maxrcscore > 40) {
    // If user chooses the Fifth choice the most, this outcome will be displayed.
    let riskCa = document.getElementById('risk-capacity');
    riskCa.innerHTML = `
    <h2> Your Risk Capacity</h2>
    <label for="risk-capacity" class="a">
    <input
              type="radio"
              name="risk-capacity"
              value="Very Aggressive"
              checked
            />Very Aggressive</label>
    `;
  }

  // time to calculate the risk tolerance of the risk profile!!

  let rt1score = 0;
  let rt2score = 0;
  let rt3score = 0;
  let rt4score = 0;
  let rt5score = 0;

  // get a list of the radio inputs on the page
  let rtchoices = document.getElementsByTagName('input');
  // loop through all the radio inputs
  for (i = 26; i < rtchoices.length; i++) {
    // if the radio is checked..
    if (rtchoices[i].checked) {
      // add 1 to that choice's score
      if (rtchoices[i].value == 'c1') {
        rt1score = rt1score + 0;
      }
      if (rtchoices[i].value == 'c2') {
        rt2score = rt2score + 3;
      }
      if (rtchoices[i].value == 'c3') {
        rt3score = rt3score + 5;
      }
      if (rtchoices[i].value == 'c4') {
        rt4score = rt4score + 8;
      }
      if (rtchoices[i].value == 'c5') {
        rt5score = rt5score + 10;
      }
      // If you add more choices and outcomes, you must add another if statement below.
    }
  }

  // Find out which choice got the highest score.
  // If you add more choices and outcomes, you must add the letiable here.
  let maxrtscore = rt1score + rt2score + rt3score + rt4score + rt5score;

  if (maxrtscore <= 10) {
    // If user chooses the first choice the most, this outcome will be displayed.
    let riskTvc = document.getElementById('risk-tolerance');
    riskTvc.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <label for="risk-tolerance" class="vc">
    <input
              type="radio"
              name="risk-tolerance"
              value="very Conservative"
              checked
            /> Very Conservative</label>
    `;
  }
  if (maxrtscore > 10 && maxrtscore <= 20) {
    // If user chooses the second choice the most, this outcome will be displayed.
    let riskTc = document.getElementById('risk-tolerance');
    riskTc.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <label for="risk-tolerance" class="c">
    <input
              type="radio"
              name="risk-tolerance"
              value="Conservative"
              checked
            />Conservative</label>
    `;
  }
  if (maxrtscore > 20 && maxrtscore <= 30) {
    // If user chooses the third choice the most, this outcome will be displayed.
    let riskTm = document.getElementById('risk-tolerance');
    riskTm.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <label for="risk-tolerance" class="m">
    <input
              type="radio"
              name="risk-tolerance"
              value="Moderate"
              checked
            />Moderate</label>
    `;
  }
  if (maxrtscore > 30 && maxrtscore <= 40) {
    // If user chooses the fourth choice the most, this outcome will be displayed.
    let riskTma = document.getElementById('risk-tolerance');
    riskTma.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <label for="risk-tolerance" class="ma">
    <input
              type="radio"
              name="risk-tolerance"
              value="Moderately Aggressive"
              checked
            />Moderately Aggressive</label>
    `;
  }

  if (maxrtscore > 40) {
    // If user chooses the Fifth choice the most, this outcome will be displayed.
    let riskTa = document.getElementById('risk-tolerance');
    riskTa.innerHTML = `
    <h2>Your Risk Tolerance</h2>
    <label for="risk-tolerance" class="a">
    <input
              type="radio"
              name="risk-tolerance"
              value="Very Aggressive"
              checked
            />Very Aggressive</label>
    `;
  }

  let totalScore = maxrcscore + maxrtscore;

  if (totalScore <= 20) {
    let riskPvc = document.getElementById('risk-profile');
    riskPvc.innerHTML = `
    <h2>Your Risk Profile</h2>
    <label for="Very Conservative" class="ma">Very Conservative</label>
    <input
              type="radio"
              name="risk-profile"
              value="Very Conservative"
              checked
            />
    `;
    let vcRisk = document.getElementById('vc');
    vcRisk.classList = 'chosen';
  }

  if (totalScore > 20 && totalScore <= 40) {
    let riskPc = document.getElementById('risk-profile');
    riskPc.innerHTML = `
    <h2>Your Risk Profile</h2>
    <label for="Conservative" class="c">Conservative</label>
    <input
              type="radio"
              name="risk-profile"
              value="Conservative"
              checked
            />
    `;
    let cRisk = document.getElementById('c');
    cRisk.classList = 'chosen';
  }
  if (totalScore > 40 && totalScore <= 60) {
    let riskPm = document.getElementById('risk-profile');
    riskPm.innerHTML = `
    <h2>Your Risk Profile</h2>
    <label for="Moderate" class="m">Moderate</label>
    <input
              type="radio"
              name="risk-profile"
              value="Moderate"
              checked
            />
    `;
    let mRisk = document.getElementById('m');
    mRisk.classList = 'chosen';
  }
  if (totalScore > 60 && totalScore <= 80) {
    let riskPma = document.getElementById('risk-profile');
    riskPma.innerHTML = `
    <h2>Your Risk Profile</h2>
    <label for="Moderately Aggressive" class="ma">Moderately Aggressive</label>
    <input
              type="radio"
              name="risk-profile"
              value="Moderately Aggressive"
              checked
            />
    `;
    let maRisk = document.getElementById('ma');
    maRisk.classList = 'chosen';
  }
  if (totalScore > 80) {
    let riskPa = document.getElementById('risk-profile');
    riskPa.innerHTML = `
    <h2>Your Risk Profile</h2>
    <label for="Very Aggressive" class="a">Very Aggressive</label>
    <input
              type="radio"
              name="risk-profile"
              value="Very Aggressive"
              checked
            />
    `;
    let vaRisk = document.getElementById('va');
    vaRisk.classList = 'chosen';
  }
}

// side swipe panels

/* delcaring variables */
/* question number */
let questionNum = 0;
let timeLeftNum = 90;

/* buttons */
const startButtonEl = document.querySelector(`#startButton`);
const highscoreButtonEl = document.querySelector(`#highscoreButton`);
const homeButtonEl = document.querySelector(`#homeButton`);
const timeLeft = document.querySelector(`#timeLeft`);

/* answer buttons */
const answer0 = document.querySelector(`#answer0`);
const answer1 = document.querySelector(`#answer1`);
const answer2 = document.querySelector(`#answer2`);
const answer3 = document.querySelector(`#answer3`);
const answerArray = [answer0, answer1, answer2, answer3];

/* main container elements */
const questionBoxEl = document.querySelector(`question-box`);
const highscoreBoxEl = document.querySelector(`highscore-box`);
const titleScreenEl = document.querySelector(`.titleScreen`);

/* headerbar elements */
const headerBoxEl = document.querySelector(`.topBar`); 
const topBarTitleEl = document.querySelector(`.topBarTitle`);
const topBarPEl = document.querySelector(`.topBarP`);

/* questions page elements */
const questionTitleEl = document.querySelector(`.questionTitle`);
const answerBoxEl = document.querySelector(`.answerBox`);

/* question list */
let questions = [
  {
    question: `what is javascript?`,
    answers: [`overconsumtion until death`,`finding oneself`,`a sequence of statements to be executed by the browser`,`yes`],
    rightAnswer: `2`
  },
  {
    question: `how are single line comments started?`,
    answers: [`n\\`,`//`,`||`,`..`],
    rightAnswer: `1`
  },
  {
    question: `what does the for loop do?`,
    answers: [`loops through a block of code a specified number of times`,`it checks what we're here for`,`it isn't actually a loop`,`i need water`],
    rightAnswer: `0`
  },
  {
    question: `which of the following is a real js pop-up?`,
    answers: [`alert`,`caution`,`pop-up`,`organic milk`],
    rightAnswer: `0`
  },
  {
    question: `how many holes are there in a coffe mug`,
    answers: [`0`,`1`,`2`,`3`],
    rightAnswer: `1`
  }
];

/* this is the list of highscores for testing */ // TODO: save highscore locally
let highscoreList = [
  {
    name: `bob`,
    points: `69`
  },
  {
    name: `jerry`,
    points: `12`
  },
  {
    name: `steven`,
    points: `sleep`
  },
  {
    name: ``,
    points: ``
  },
];

/* (how to ) function ( as a normal human being?) */
/* starts on button click */
function startButtonFunc() {
  hideElements();
  homeButtonEl.setAttribute("invisible-cloak", "false");
  timeLeft.setAttribute(`invisible-cloak`, `false`);
  insertQuestionData();
  startTimer();
}

/* this starts the timer */
function startTimer() {
  timeLeft.innerHTML = `Time left: ${timeLeftNum}`;
  const timeInterval = setInterval(function() {
    timeLeftNum--;
    // console.log(`number: ${timeLeftNum}`);
    if (timeLeftNum > 0) {
      timeLeft.innerHTML = `Time left: ${timeLeftNum}`;
    } else if (timeLeftNum === 0) {
      // hideElements();
      clearInterval(timeInterval);
      alert('sorry, out of time');
    }
  }, 1000);
}

/* inserts the questions */
function insertQuestionData() {
  questionBoxEl.setAttribute(`invisible-cloak`, `false`);
  /* 
  let newpEl = document.createElement(`p`);
  
  newpEl.innerText = questions[i].question;
  
  questionBoxEl.append(newpEl); 
  */
  console.log(`questionNum has been called and is ${questionNum}`);
  questionTitleEl.insertAdjacentHTML(`afterbegin`, `
  <h1>${questions[questionNum].question}</h1>
  `);


  for (let j = 0; j < questions[questionNum].answers.length; j++) {
    answerArray[j].innerHTML = `${questions[questionNum].answers[j]}`;
  }
}

/* just hides all the elements */
function hideElements() {
  let visible = document.querySelectorAll(`[invisible-cloak="false"]`);
  for (let i = 0; i < visible.length; i++) {
    visible[i].setAttribute("invisible-cloak", "true");
  }
}

/* brings in the highscore */
function addHighscoreBoard() {
  highscoreBoxEl.setAttribute("invisible-cloak", "false");
  homeButtonEl.setAttribute("invisible-cloak", "false");
  highscoreBoxEl.insertAdjacentHTML(`afterbegin`, `
  <h1>highscores!</h1>
  `);

  /* iterates through the highscore array to print them all */
  for (let i = 0; i < highscoreList.length; i++) {
    let highscoreListEl = document.createElement(`h2`);
    highscoreListEl.innerText = `${highscoreList[i].name} has ${highscoreList[i].points}`;
    highscoreBoxEl.append(highscoreListEl);
  }
}
/* function to bring user to highscore screen */
function highscoreButtonFunc() {
  hideElements();
  addHighscoreBoard();
}

/* brings back home elements */
function phoneHome() {
  titleScreenEl.setAttribute(`invisible-cloak`, `false`);
  topBarTitleEl.setAttribute(`invisible-cloak`, `false`);
  topBarPEl.setAttribute(`invisible-cloak`, `false`);
}
/* function to bring the user back to the homescreen */
function homeButtonFunc() {
  hideElements();
  phoneHome();
}

/* test answer functions */
function testAnswerFunc0() {
  if (questionNum >= questions.length - 1) {
    endGame();
  } else {
    if (0 == questions[0].rightAnswer) {
      timeLeftNum += 5;
    } else {
      timeLeftNum -= 10;
    }
    questionNum++;
    insertQuestionData();
  }
}
function testAnswerFunc1() {
  if (questionNum >= questions.length - 1) {
    endGame();
  } else {
    if (1 == questions[1].rightAnswer) {
      timeLeftNum += 5;
    } else {
      timeLeftNum -= 10;
    }
    questionNum++;
    insertQuestionData();
  }
}
function testAnswerFunc2() {
  if (questionNum >= questions.length - 1) {
    endGame();
  } else {
    if (2 == questions[2].rightAnswer) {
      timeLeftNum += 5;
    } else {
      timeLeftNum -= 10;
    }
    questionNum++;
    insertQuestionData();
  }
}
function testAnswerFunc3() {
  if (questionNum >= questions.length - 1) {
    endGame();
  } else {
    if (3 == questions[3].rightAnswer) {
      timeLeftNum += 5;
    } else {
      timeLeftNum -= 10;
    }
    questionNum++;
    insertQuestionData();
  }
}

/* ends life as we know it */
function endGame() {
  hideElements();
  userName = prompt(`Please enter your name:`);
  highscoreList[3].name = userName;
  highscoreList[3].points = timeLeftNum;
  addHighscoreBoard();
}

// /* would be cool to look into */

// /* saves some stuff to the local storage */
// localStorage.setItem(`highscore`, highscoreInput.value);

// /* this will pull the data from the local storage */
// highscores = localStorage.getItem(`highscore`);

// if (highscores) {
//   highscores += `, ${highscore.value} ${score.value}`
// }


/* 

if (questionList[i]..)

*/

/* spencer did all this */

/* main.js lol */
startButtonEl.addEventListener(`click`, startButtonFunc);
highscoreButtonEl.addEventListener(`click`, highscoreButtonFunc);
homeButtonEl.addEventListener(`click`, homeButtonFunc);

/* button clicks for answer testing */
answer0.addEventListener(`click`, testAnswerFunc0);
answer1.addEventListener(`click`, testAnswerFunc1);
answer2.addEventListener(`click`, testAnswerFunc2);
answer3.addEventListener(`click`, testAnswerFunc3);
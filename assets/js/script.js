/* delcaring variables */
const startButtonEl = document.querySelector(`#startButton`);
const highscoreButtonEl = document.querySelector(`#highscoreButton`);
let questionBoxEl = document.querySelector(`question-box`);
let questions = [
  {
    question: `meaning of life?`,
    answer: `42`
  },
  {
    question: `why is gungun so handsum`,
    answer: ``
  },
  {
    question: `how do you pee`,
    answer: ``
  },
  {
    question: `are fish thirsty for water`,
    answer: ``
  },
  {
    question: `how many holes are there in a coffe mug`,
    answer: ``
  },
  {
    question: ``,
    answer: ``
  },
];

/* (how to ) function ( as a normal human being?) */
/* starts on button click */
function startButtonFunc() {
  insertQuestionData();
  startTimer();
}

/* this starts the timer */
function startTimer() {
  let i = 15;
  setInterval( function() {
    i--;
    count = document.getElementById("timeLeft");
    if (i > 0) {
      count.innerHTML = i;
    } else if (i === 0) {
      alert('sorry, out of time');
    }
  }, 1000);
}

/* inserts the questions */
function insertQuestionData() {
  for (let i = 0; i < questions.length; i++) {
    /* 
    let newpEl = document.createElement(`p`);
    
    newpEl.innerText = questions[i].question;
    
    questionBoxEl.append(newpEl); 
    */
   
   questionBoxEl.insertAdjacentHTML(`afterbegin`, `
   <h1>${questions[i].question}</h1>
   `);
   questionBoxEl.insertAdjacentHTML(`afterbegin`, `
   <p>answers?</p>
   <p>answers?</p>
   <p>answers?</p>
   <p>answers?</p>
   `);
  }
}

function hideElements() {
  let visible = document.querySelectorAll(`[invisible-cloak="false"]`);
  for (let i = 0; i < visible.length; i++) {
    visible[i].setAttribute("invisible-cloak", "true");
    visible[i].style.display = `none`;
  }
}



/* main.js lol */
startButtonEl.addEventListener(`click`, startButtonFunc);
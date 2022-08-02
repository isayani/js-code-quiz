var timer = document.querySelector('.timer');
var countdown = document.querySelector('#timerCountdown');
var time = 75;
var questionEl = document.querySelector('#question');
var parentQuestionEl = document.querySelector('.question');
var answerEl = document.querySelector('.answers');
var btn = document.createElement("button");
var options = [btn, btn, btn, btn];
var card = document.querySelector('.card-body');
var shuffledQuestions, currentQuestionIndex

// object array for questions, multiple choice options, and corresponding answers
var questions = [
    
    {question: "Commonly used data types DO NOT include:", 
    options: ["strings", "booleans", "alerts", "numbers"], 
    answer: "alerts"},

    {question: "The condition in an 'if/else' statement is enclosed within ______.", 
    options: ["quotes", "curly brackets", "parentheses", "square brackets"], 
    answer: "parentheses"},

    {question: "Arrays in Javascript can be used to store ______.", 
    options: ["numbers & strings", "other arrays", "booleans", "all of the above"],
    answer: "all of the above"},

    {question: "String values must be enclosed within ______ when being assigned to variables.", 
    options: ["commas", "curly brackets", "quotes", "parantheses"], 
    answer: "quotes"},

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    options: ["Javascript", "terminal/bash", "for loops", "console.log"], 
    answer: "console.log"}
]

// event listener on click startButton
var startButton = document.querySelector('.start-btn');
startButton.addEventListener('click', startQuestion);


// when start button is clicked
function startQuestion () {
    // hide all elements in instr card
    card.classList.add('hide');
    // start the clock
    var countdownInt = setInterval(function(){
        if (time === 0) {
            clearInterval(countdownInt);
            endQuiz();
        } else if ((questions.length-1) === currentQuestionIndex) {
            clearInterval(countdownInt);
            endQuiz();
        }
        else {
            countdown.textContent = time;
            time--;
        }
    }, 1000)  
    // pull the questions in and make display (might be easier to make sample question hidden on html)
    parentQuestionEl.classList.remove('hide');
    // shuffle questions
    shuffledQuestions = questions.sort(()=> Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion()
};

function setNextQuestion() {
    if((questions.length-1) === currentQuestionIndex) {
        endQuiz();
    } else {
        showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
};

function showQuestion(question) {
    answerEl.innerHTML = '';
    questionEl.innerText = question.question;
    question.options.forEach(options => {
        var button = document.createElement("button");
        button.innerText = options;
        button.classList.add('btn');
        button.addEventListener('click', checkAnswer);
        answerEl.appendChild(button);
        answerEl.appendChild(document.createElement('br'));
        
    });
};

// check whether option clicked is correct and if there is time left go to next question else end quiz
function checkAnswer () {
    console.log('test');

    var textBtn = this.innerText;
    if (textBtn === shuffledQuestions[currentQuestionIndex].answer) {
        alert('correct')
    } else {
        alert('incorrect')
        time -= 10;
    };
    currentQuestionIndex++
    setNextQuestion();
    // create right/wrong indicaton (apply css here)
    // pull from questions array and match answer
    // check if text content matches answer content else false
    // if false and all answers finished call endQuiz function
    // if option is false subtract 10 seconds from time
};

function endQuiz () {
    answerEl.innerHTML = '';
    questionEl.innerText = 'All done!';
    // setting the title to "All done!"
    // time on the clock and make equal to score (final score)
};

function logScore () {
    // new element perhaps for text box
    // clear screen and add in all elements for high score
    // link to 'View Highscores' on click
    // log answers to storage
};

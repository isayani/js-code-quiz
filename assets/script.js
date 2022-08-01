var timer = $('.timer');
var score
var questionEl = $('#question');
var parentQuestionEl = $('.question');
var answerEl = $('.answers');
var options = [$("<button>"), $("<button>"), $("<button>"), $("<button>")];
var card = $('.card-body');
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


var startButton = $('.start-btn');
$(startButton).on('click', startQuestion);

// answer key format (quiz.method)
// var quiz = {

// when start button is clicked
function startQuestion () {
    // hide all elements in instr card
    $(card).addClass('hide');
    // start the clock
    // pull the questions in and make display (might be easier to make sample question hidden on html)
    $(parentQuestionEl).removeClass('hide');
    // shuffle questions
    shuffledQuestions = questions.sort(()=> Math.random() - .5);
    currentQuestionIndex = 0;
    setNextQuestion()
    // start populating board (questions and answers)
    // append to card-body div
};

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

function showQuestion(question) {
    $(questionEl).text(question.question);
    answerEl.empty();
    question.options.forEach(options => {
        var button = $('<button>') 
        button.text(options)
        console.log(options)
        button.addClass('btn')
    // if (options.answer) {
    //     button.dataset.answer = options.answer
    // }
    // button.on('click', checkAnswer)
    answerEl.append(button, '<br/>');
    })
    $('.btn').on('click', checkAnswer);
};

// check whether option clicked is correct and if there is time left go to next question else end quiz
function checkAnswer () {
    var textBtn = $(this).text();

    if (textBtn === shuffledQuestions[currentQuestionIndex].answer) {
        alert('correct')
    } else {
        alert('incorrect')
    };
    currentQuestionIndex++
    setNextQuestion();
    // if alert($(this).text()) === questions. 
    // create right/wrong indicaton (apply css here)
    // pull from questions array and match answer
    // check if text content matches answer content else false
    // if false and all answers finished call endQuiz function
    // if option is false subtract 10 seconds from time
};

function endQuiz () {
    // setting the title to "All done!"
    // time on the clock and make equal to score (final score)
};

function logScore () {
    // new element perhaps for text box
    // clear screen and add in all elements for high score
    // link to 'View Highscores' on click
    // log answers to storage
};


// };

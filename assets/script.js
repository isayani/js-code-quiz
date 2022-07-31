var timer = $('#timer');
var score
var questions = $('.questions');
var answers = $('#answers');
var options = [$("<button>"), $("<button>"), $("<button>"), $("<button>")];



var startButton = $('#start-btn');
$(startButton).on('click', startQuestion);

// answer key format (quiz.method)
var quiz = {

// when start button is clicked
startQuestion () {
    // start the clock, and hide all elements in instr card
    // pull the questions in and make display
    // start populating board (questions and answers)
    // append to card-boy div
    setNextQuestion(questions);
},

// check whether option clicked is correct and if there is time left go to next question else end quiz
checkAnswer () {
    // create right/wrong indicaton (apply css here)
    // pull from questions array and match answer
    // check if text content matches answer content else false
    // if false and all answers finished call gameOver function
    // if option is false subtract 10 seconds from time
},

endQuiz () {
    // setting the title to "All done!"
    // time on the clock and make equal to score (final score)
},

logScore () {
    // new element perhaps for text box
    // clear screen and add in all elements for high score
    // link to 'View Highscores' on click
    // log answers to storage
},

// object array for questions, multiple choice options, and corresponding answers
questions: [
    
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
};

//defining the variables for the game
//variable for set interval time
var number = 10;
// variable for un answered questions
var unanswered = 0;
//variable for total questions
var total;
// variable  for correct questions
var score;
// variable for wrong answers
var wrongAnswers = 0;
// variable for interval time
var intervalId;


// function to display the results
function displayResults() {

    $("section").html("<p>" + "Correct Answers:   " + score + "</p>");
    $("section").append("<p>" + "Incorrect Answers:   " + wrongAnswers + "</p>");
    $("section").append("<p>" + "Unanswered :" + unanswered + "</p>");
};




// function for timer
function run() {


    intervalId = setInterval(decrement, 1000);

}

// function to countdown timer

function decrement() {


    number--;
//placing the timer in counter id
    $("#counter").html("<h2>" + "Time Remaining :    " + number + "</h2>");
// if the time runs out the form gets submitted automatically    

    if (number === 0) {

        $("#quizForm").submit();
// stoping the timer 
        stop();
// calling the displayResults function        
        displayResults();
      }
}
// stop function to stop the time
function stop() {

// clearing the timer
    clearInterval(intervalId);
    $("#counter").html("");
// calling the displayResults function        

    displayResults();
}

// function to submit answers
function submitAnswers(event) {
// preventing the default action of form    
    event.preventDefault();
// Intializing the total and score variables
    total = 4;
    score = 0;

    // get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;

    //set correct Answers
    var answers = ["b", "c", "a", "c"];
    
// for loop to chceck if correct answers ,wrong answers and unanswered questions
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            // alert("you missed a question " + i);
            unanswered++;
            console.log(unanswered);
        }
        else if (eval('q' + i) == answers[i - 1]) {

            score++;

        } else {
            wrongAnswers++;
        }

    }
// calling stop function after form is submitted    
    stop();
}


$(document).ready(function () {

    $("#quizForm").submit(submitAnswers);

    run();
});





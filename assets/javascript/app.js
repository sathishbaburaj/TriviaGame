
// function timeOut() {
// answerTime== setTimeout(function() {
 
//   }, 10000);
// }
var answerTime;
var number = 10;
var unanswered=0;

var intervalId;

// $("#stop").on("click", stop);

// $("#resume").on("click", run);

function run() {
    

    intervalId = setInterval(decrement, 1000);
    
}

function decrement() {

    number--;

    $("#counter").html("<h2>" +"Time Remaining :    " +number + "</h2>");

    if (number === 0) {

        submitAnswers();

        stop();
        //  event.preventDefault();

        
    }
}

function stop() {
    // event.preventDefault();

    clearInterval(intervalId);
    $("#counter").html("");
}


function submitAnswers() {
    
    var total = 4;
    var score = 0;
    
    // get user input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    //validation

    for (i = 1; i <= total; i++) {
        if (eval('q' + i) == null || eval('q' + i) == '') {
            // alert("you missed a question " + i);
            unanswered++;
            
            return unanswered;
            
        }
        
    }

    //set correct Answers
    var answers = ["b", "c", "a", "c"];

    //check Answers
    for (i = 1; i <= answers.length; i++) {
        if (eval('q' + i) == answers[i - 1]) {
            score++;
            console.log(score);
        }


    }

    

    // event.preventDefault();

    //Display results
    // var results = $("#results");
    // console.log(results);
    //$("#counter").html("");
    var wrongAnswers= total - score -unanswered;
    $("section").html("<p>"+"Correct Answers:   "+score+"</p>");
    $("section").append("<p>"+"Incorrect Answers:   "+wrongAnswers+"</p>");
    $("section").append("<p>"+"Unanswered :"+unanswered+"</p>");
    // results.html = '<h3> You Scored <span>' + score + '</span> out of<span>' + total + '</span></h3>';
    // alert('You scored ' + score + " out of " + total);

    stop();
}

run();
// }





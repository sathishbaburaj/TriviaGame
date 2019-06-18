// var number =30;
// var inntervalId;
// function run(){
//     inntervalId =setInterval(decrement,1000);
// }

// function decrement(){
//     number--;
//     $("#timeLeft").innerHTML("<h2>"+ "Total time Remaining"+number+"</h2>");
//     if(number ===0){
//         stop();
//         alert("time up!");
//     }
//     run();
var number = 30;

    var intervalId;

    // $("#stop").on("click", stop);

    // $("#resume").on("click", run);

    function run() {
      intervalId = setInterval(decrement, 1000);
    }

    function decrement() {

      number--;

      $("#counter").html("<h2>" + number + "</h2>");

      if (number === 0) {

        stop();

        alert("Time Up!");
      }
    }

    function stop() {

      clearInterval(intervalId);
    }

    run();
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
            alert("you missed a question " + i);
            return false;
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

    //Display results
    var results = $("#results");
    console.log(results);
    results.html = '<h3> You Scored <span>' + score + '</span> out of<span>' + total + '</span></h3>';
    alert('You scored ' + score + " out of " + total);
}
// }





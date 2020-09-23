$(document).ready(function(){

    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["Nope.", "Yes.", "Not sure.", "Of Course.", "100%", "No way."];
    $("#answer").hide();
	$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
    
    //picking random answer part using math.random
    
    magic8Ball.askQuestion = function(question) {
        $("#answer").fadeIn(3000);
        var randomNumber = Math.random();
        var randomAnswersArray = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomAnswersArray);
        var answer = this.listOfAnswers[randomIndex];
       
        $("#answer").text( answer );

        console.log(question);
        console.log(answer);
    };
    //when you click the button, this happens
    
    var onClick = function() {
		$("#answer").hide();
        var question = prompt("Ask me anything..");
        magic8Ball.askQuestion(question);
		$("#8ball").effect("shake");
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
    };
    $("#questionButton").click( onClick );
    

});
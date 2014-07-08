$(document).ready(function() {
    //Init Variable
    var SecretNum = Math.floor(Math.random() * 100) + 1;
    console.log(SecretNum);
    var StartCount = 1;
    var TheGuess;
    var GuessArray = [];
    var GuessBox = document.getElementById('guesslist');

    //New Game function

    function NewGame() {
        // Reset everything!
        SecretNum = Math.floor(Math.random() * 100) + 1;
        console.log(SecretNum); 
        StartCount = 1;
        GuessArray = [];
        document.getElementById('feedback').innerHTML = "Make your Guess!";
        document.getElementById('resfeed').innerHTML = "";
        document.getElementById('count').innerHTML = 0;
        $('#userGuess').val('');
        // Check and remove any previous guesses
        while (GuessBox.hasChildNodes()) {
            GuessBox.removeChild(GuessBox.lastChild);
        }


    }

    $("#reset").click(function() {
        /* Act on the event */
        // e.preventDefault();
        NewGame();

    });

    $("#guessform").on('submit', function(e) {
        e.preventDefault();
        $("#guessbtn").trigger('click');
    });

    $("#guessbtn").click(function(event) {
        //Store and Convert User Input
        var TheGuess = parseInt(document.getElementById('userGuess').value);

        //Validation
        if (isNaN(TheGuess)) {
            document.getElementById('feedback').innerHTML = "Please Enter a number!";

        }
        if (GuessBox.hasChildNodes() && GuessArray.indexOf(TheGuess) >= 0) {
            document.getElementById('feedback').innerHTML = "Try a new number!";
        } else {
            if (isNaN(TheGuess) === false) {
                var AddGuess = document.createElement('li')
        		
                AddGuess.innerHTML = TheGuess;

                document.getElementById('resfeed').innerHTML = "Result";
                GuessBox.appendChild(AddGuess);


                document.getElementById('count').innerHTML = StartCount++;
                $('li').addClass('animated bounceIn')
                GuessArray.push(TheGuess);

                // console.log(GuessArray);

                var diff = Math.abs(TheGuess - SecretNum);
                var feed = document.getElementById('feedback');

                if (TheGuess === SecretNum) {
                    feed.innerHTML = "Awesome! You Got it!";
                   
                }

                if (diff >= 50) {
                    feed.innerHTML = "Ice Cold! Try again!";
                  
                }
                if (diff >= 30 && diff < 50) {
                    feed.innerHTML = "Cold! Try again!";
                   
                }
                if (diff >= 20 && diff < 30) {
                    feed.innerHTML = "Hot! Getting close!";
                 
                }
                if (diff >= 1 && diff < 10) {
                    feed.innerHTML = "Super Hot! You're Very Close!";
    
                }

            }


        }
        $('#userGuess').val('');
    });

})

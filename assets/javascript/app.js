$(document).ready(function() {

    // hide some things initially
    $(".js-results").hide();
    $(".js-stop").hide();

    // global variables
    let questions = [
        {
            "question": "What is Marges maiden name?",
            "answers": ["Smith", "Buvier", "Bubble"],
            "correctAnswer": "Buvier",
        },
        {
            "question": "What is Homers favorite snack?",
            "answers": ["Beer", "Donuts", "Salad", "Hummus"],
            "correctAnswer": "Donuts",
        },
        {
            "question": "What instrument does Lisa play?",
            "answers": ["Violin", "Sax", "Oboe", "Cowbell"],
            "correctAnswer": "Sax",
        },
        {
            "question": "What's the name of the town the show takes place in?",
            "answers": ["Springfield", "Chicago", "Hartford", "South Bend"],
            "correctAnswer": "Springfield",
        }
    ]
    
    let userAnswer = null;
    let userQuestion = null;
    let gameReady = true;
    let gameStopped = false;

    let count = 30;
    let counter = null;

    let userCorrect = 0;
    let userInCorrect = 0;
    

    // functions

    function timer() {
        count--;

        if (count <= 0) {
            if (gameStopped !== true) {
                alert("Time's up!");
            }
            clearInterval(counter);
            stopGame();
        } else {
            $(".js-timer").text(count + " seconds left!");
        }
    }

    function startGame () {

        let counter = setInterval(timer, 1000);

        // 30-second timer
        $(".js-timer").show().text(count + " seconds left!");

        // show the stop button, hide the start button
        $(".js-stop").show();
        $(".js-start").hide();

        // show questions
        for (let i = 0; i < questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].question + '</p>');

            for (let j = 0; j < questions[i].answers.length; j++) {
                $('.js-questions').append('<input type="radio" checked="checked" value="' + questions[i].answers[j] + '" name="' + i + '">' + questions[i].answers[j] + '</input>');
            }

            $('.js-questions').append('<br>');
        }

        // uncheck the checkboxes
        $('.js-questions input').removeAttr("checked");

        // while playing, game is not ready to start
        gameReady = false;
        
    }

    function stopGame () {
        
        gameStopped = true;
        clearInterval(counter);
        $(".js-timer").hide();

        $('.js-questions input:checked').each(function() {
            userAnswer = $(this).val();
            userQuestion = $(this).attr('name');
            
            if (userAnswer === questions[userQuestion].correctAnswer) {
                userCorrect++;
            } else {
                userInCorrect++;
            }
        });

        $(".js-results").fadeIn();
        $("#correct").text(userCorrect);
        $("#incorrect").text(userInCorrect);

        userCorrect = 0;
        userInCorrect = 0;
    }


    // events
    // click start button, will start the game
    $('.js-start').on('click', function () {
        if (gameReady) {
            startGame();
        }
    });

    // click stop button to see score
    $('.js-stop').on('click', function () {
        stopGame();
        gameReady = true;
    });

    // click this button to reload and try again
    $('.js-reload').on('click', function () {
        location.reload();
    });

});
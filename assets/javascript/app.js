$(document).ready(function() {

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
        }
    ]
    
    let userAnswer = null;
    let userQuestion = null;
    

    // functions

    function startGame () {
        for (let i = 0; i < questions.length; i++) {
            $('.js-questions').append('<p>' + questions[i].question + '</p>');

            for (let j = 0; j < questions[i].answers.length; j++) {
                $('.js-questions').append('<input type="radio" checked="checked" value="' + questions[i].answers[j] + '" name="' + i + '">' + questions[i].answers[j] + '</input>');
            }

            $('.js-questions').append('<br>');
        }
    }

    function stopGame () {
        $('.js-questions input:checked').each(function() {
            userAnswer = $(this).val();
            userQuestion = $(this).attr('name');
            
            if (userAnswer === questions[userQuestion].correctAnswer) {
                console.log("you are correct!");
            } else {
                console.log("D'oh!");
            }
        });
    }

    // events
    // click start button, will start the game
    $('.js-start').on('click', function () {
        startGame();
    });

    // click stop button to see score
    $('.js-stop').on('click', function () {
        stopGame();
    });

    // timer runs out to end game and show score
    var count=30;

    var counter=setInterval(timer, 1000); //1000 will  run it every 1 second

    function timer() {
        count=count-1;
        if (count <= 0) {
            clearInterval(counter);
            return;
        }

        $(".js-timer").text(count + " secs");
    }

});
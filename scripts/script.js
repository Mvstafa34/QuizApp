let currentQuestionsArray;
let currentQuestion = 0;
let finishedQuestions = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('./audio/right.mp3');
let AUDIO_FAIL = new Audio('./audio/wrong.mp3');
AUDIO_SUCCESS.volume = 0.75;
AUDIO_FAIL.volume = 0.75;


function init(array) {
    currentQuestionsArray = array;
    document.getElementById('start_screen').classList.add('d-none');
    showQuestionBody();
    startGame();
}


function startGame() {
    let questions = currentQuestionsArray;

    if (currentQuestion >= questions.length) {
        // Show End Screen
        hideQuestionBody();
        document.getElementById('end_screen').classList.remove('d-none');
        document.getElementById('amount_of_questions').innerHTML = questions.length;
        document.getElementById('right_answers').innerHTML = rightAnswers;

    } else { // Show Question

        let question = questions[currentQuestion];

        document.getElementById('question').innerHTML = question['question'];
        document.getElementById('answer_1').innerHTML = question['answer_1'];
        document.getElementById('answer_2').innerHTML = question['answer_2'];
        document.getElementById('answer_3').innerHTML = question['answer_3'];
        document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}


function answer(answerNum) {
    let questions = currentQuestionsArray;

    questions[currentQuestion]['chosen_answer'] = answerNum;
    let question = questions[currentQuestion];
    let rightAnswer = document.getElementById(`answer_${question['right_answer']}`).parentNode;
    let clickedAnswer = document.getElementById(`answer_${answerNum}`).parentNode;

    if (answerNum == question['right_answer']) {
        clickedAnswer.classList.add('bg-success');
        rightAnswers++;
        AUDIO_SUCCESS.play();
        disableAnswers();
    } else {
        clickedAnswer.classList.add('bg-danger');
        rightAnswer.classList.add('bg-success');
        AUDIO_FAIL.play();
        disableAnswers();
    }

    finishedQuestions++;
    document.getElementById('right_button').disabled = false;
    document.getElementById('next_button').classList.remove('disabled');
}


function nextQuestion() {
    currentQuestion++;

    if (currentQuestion == finishedQuestions) {
        renderProgressBar();
        enableAnswers();
        document.getElementById('right_button').disabled = true;
        document.getElementById('next_button').classList.add('disabled');
    }

    resetButtons();

    if (currentQuestion != finishedQuestions) {
        displayQuestionResult();
    }
    document.getElementById('left_button').disabled = false;
    document.getElementById('previous_button').classList.remove('disabled');
    startGame();
}


function previousQuestion() {
    currentQuestion--;
    disableAnswers();
    document.getElementById('right_button').disabled = false;
    document.getElementById('next_button').classList.remove('disabled');

    if (currentQuestion == 0) {
        document.getElementById('left_button').disabled = true;
        document.getElementById('previous_button').classList.add('disabled');
    }
    resetButtons();
    displayQuestionResult();
    startGame();
}


function resetButtons() {
    for (let i = 1; i < 5; i++) {
        let button = document.getElementById(`answer_${i}`).parentNode;
        button.classList.remove('bg-danger');
        button.classList.remove('bg-success');
    }
}


function renderProgressBar() {

    let percent = currentQuestion / currentQuestionsArray.length;
    percent = percent * 100;
    document.getElementById('progress_bar').style.width = `${percent}%`;
}


function restartGame() {
    finishedQuestions = 0;
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('end_screen').classList.add('d-none'); // Hide End Screen
    showQuestionBody();
    document.getElementById('left_button').disabled = true;
    document.getElementById('previous_button').classList.add('disabled');
    renderProgressBar();
    startGame();
}


function disableAnswers() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.parentNode.disabled = true;
    }
}


function enableAnswers() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.parentNode.disabled = false;
    }
}


function displayQuestionResult() {
    let questions = currentQuestionsArray;
    let rightAnswer = questions[currentQuestion]['right_answer'];
    let chosenAnswer = questions[currentQuestion]['chosen_answer'];

    if (rightAnswer == chosenAnswer) {
        document.getElementById(`answer_${chosenAnswer}`).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(`answer_${chosenAnswer}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success');
    }
}


function hideQuestionBody() {
    document.getElementById('question').classList.add('d-none');
    document.getElementById('answer_cards').classList.add('d-none');
    document.getElementById('buttons').classList.add('d-none');
}


function showQuestionBody() {
    document.getElementById('question').classList.remove('d-none');
    document.getElementById('answer_cards').classList.remove('d-none');
    document.getElementById('buttons').classList.remove('d-none');
}


function showStartScreen(theme) {
    finishedQuestions = 0;
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('left_button').disabled = true;
    document.getElementById('previous_button').classList.add('disabled');
    document.getElementById('end_screen').classList.add('d-none');
    
    enableAnswers();
    resetButtons();
    hideQuestionBody();

    let coding = document.getElementById('coding');
    let fitness = document.getElementById('fitness');
    let bitcoin = document.getElementById('bitcoin');

    if (theme == 'coding') {
        document.getElementById('theme').innerHTML = 'Coding';
        document.getElementById('finish_theme').innerHTML = 'CODING';
        document.getElementById('start_button').setAttribute('onclick','init(questionsCoding)');
        fitness.classList.remove('selected');
        bitcoin.classList.remove('selected');
        coding.classList.add('selected');
    } else if (theme == 'fitness') {
        document.getElementById('theme').innerHTML = 'Fitness';
        document.getElementById('finish_theme').innerHTML = 'FITNESS';
        document.getElementById('start_button').setAttribute('onclick','init(questionsFitness)');
        fitness.classList.add('selected');
        bitcoin.classList.remove('selected');
        coding.classList.remove('selected');
    } else if (theme == 'bitcoin') {
        document.getElementById('theme').innerHTML = 'Bitcoin';
        document.getElementById('finish_theme').innerHTML = 'BITCOIN';
        document.getElementById('start_button').setAttribute('onclick','init(questionsBitcoin)');
        fitness.classList.remove('selected');
        bitcoin.classList.add('selected');
        coding.classList.remove('selected');
    }

    document.getElementById('start_screen').classList.remove('d-none');
}
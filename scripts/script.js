let currentQuestionsArray;
let currentQuestion = 0;
let finishedQuestions = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('./audio/right.mp3');
let AUDIO_FAIL = new Audio('./audio/wrong.mp3');
AUDIO_SUCCESS.volume = 0.75;
AUDIO_FAIL.volume = 0.75;


function showStartScreen(theme) {
    finishedQuestions = 0;
    currentQuestion = 0;
    rightAnswers = 0;
    disableBackButton();
    document.getElementById('end_screen').classList.add('d-none'); // Hide End Screen
    enableAnswers();
    resetButtons();
    hideQuestionBody();
    changeStartScreenTheme(theme);
    document.getElementById('start_screen').classList.remove('d-none'); // Show Start Screen
}


function changeStartScreenTheme(theme) {
    let themeElement = document.getElementById('theme');
    let finishTheme = document.getElementById('finish_theme');
    let startButton = document.getElementById('start_button');
    let coding = document.getElementById('coding');
    let fitness = document.getElementById('fitness');
    let bitcoin = document.getElementById('bitcoin');
    coding.classList.remove('selected');
    fitness.classList.remove('selected');
    bitcoin.classList.remove('selected');

    if (theme == 'coding') {
        themeCoding(themeElement, finishTheme, startButton);
    } else if (theme == 'fitness') {
        themeFitness(themeElement, finishTheme, startButton);
    } else if (theme == 'bitcoin') {
        themeBitcoin(themeElement, finishTheme, startButton);
    }
}


function init(array) {
    currentQuestionsArray = array;
    document.getElementById('start_screen').classList.add('d-none'); // Hide Start Screen
    showQuestionBody();
    startGame();
}


function startGame() {
    if (gameIsOver()) {
        hideQuestionBody();
        showEndScreen();
    } else {
        updateToNextQuestion();
    }
}


function gameIsOver() {
    return currentQuestion >= currentQuestionsArray.length;
}


function updateToNextQuestion() {
    let question = currentQuestionsArray[currentQuestion];

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function answer(answerNum) {
    let question = currentQuestionsArray[currentQuestion];
    question['chosen_answer'] = answerNum; // Save answered Questions

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
    enableNextButton();
}


function nextQuestion() {
    currentQuestion++;

    if (currentQuestion == finishedQuestions) {
        renderProgressBar();
        enableAnswers();
        disableNextButton();
    }

    resetButtons();

    if (currentQuestion != finishedQuestions) {
        displayQuestionResult();
    }

    enableBackButton();
    startGame();
}


function previousQuestion() {
    currentQuestion--;
    disableAnswers();
    enableNextButton();

    if (currentQuestion == 0) {
        disableBackButton();
    }
    resetButtons();
    displayQuestionResult();
    startGame();
}


function themeCoding(themeElement, finishTheme, startButton) {
    themeElement.innerHTML = 'Coding';
    finishTheme.innerHTML = 'CODING';
    startButton.setAttribute('onclick', 'init(questionsCoding)');
    document.getElementById('coding').classList.add('selected');
}


function themeFitness(themeElement, finishTheme, startButton) {
    themeElement.innerHTML = 'Fitness';
    finishTheme.innerHTML = 'FITNESS';
    startButton.setAttribute('onclick', 'init(questionsFitness)');
    document.getElementById('fitness').classList.add('selected');
}


function themeBitcoin(themeElement, finishTheme, startButton) {
    themeElement.innerHTML = 'Bitcoin';
    finishTheme.innerHTML = 'BITCOIN';
    startButton.setAttribute('onclick', 'init(questionsBitcoin)');
    document.getElementById('bitcoin').classList.add('selected');
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
    disableBackButton();
    renderProgressBar();
    startGame();
}


function showEndScreen() {
    document.getElementById('end_screen').classList.remove('d-none');
    document.getElementById('amount_of_questions').innerHTML = currentQuestionsArray.length;
    document.getElementById('right_answers').innerHTML = rightAnswers;
}


function showQuestionBody() {
    document.getElementById('question').classList.remove('d-none');
    document.getElementById('answer_cards').classList.remove('d-none');
    document.getElementById('buttons').classList.remove('d-none');
}


function hideQuestionBody() {
    document.getElementById('question').classList.add('d-none');
    document.getElementById('answer_cards').classList.add('d-none');
    document.getElementById('buttons').classList.add('d-none');
}


function enableAnswers() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.parentNode.disabled = false;
    }
}


function disableAnswers() {
    for (let i = 1; i < 5; i++) {
        document.getElementById(`answer_${i}`).parentNode.parentNode.disabled = true;
    }
}


function enableNextButton() {
    document.getElementById('right_button').disabled = false;
    document.getElementById('next_button').classList.remove('disabled');
}


function disableNextButton() {
    document.getElementById('right_button').disabled = true;
    document.getElementById('next_button').classList.add('disabled');
}


function enableBackButton() {
    document.getElementById('left_button').disabled = false;
    document.getElementById('previous_button').classList.remove('disabled');
}


function disableBackButton() {
    document.getElementById('left_button').disabled = true;
    document.getElementById('previous_button').classList.add('disabled');
}
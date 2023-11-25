let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3,
        "chosen_answer": 0
    },
    {
        "question": "Wie bindet man eine Website in eine Website ein?",
        "answer_1": "&lt;iframe&gt;, &lt;frame&gt;, und &lt;frameset&gt;",
        "answer_2": "&lt;iframe&gt;",
        "answer_3": "&lt;frame&gt;",
        "answer_4": "&lt;frameset&gt;",
        "right_answer": 2,
        "chosen_answer": 0
    },
    {
        "question": "Wie stellt man Text am BESTEN fett dar?",
        "answer_1": "&lt;strong&gt;",
        "answer_2": "CSS nutzen",
        "answer_3": "&lt;bold&gt;",
        "answer_4": "&lt;b&gt;",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Welches Attribut kann man NICHT für Textarea verwenden?",
        "answer_1": "readonly",
        "answer_2": "max",
        "answer_3": "from",
        "answer_4": "spellcheck",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Wie wählst du alle Elemente vom Typ &lt;a&gt; mit dem attribut title aus?",
        "answer_1": "a[title] {...}",
        "answer_2": "a > title {...}",
        "answer_3": "a.title {...}",
        "answer_4": "a=title {...}",
        "right_answer": 1,
        "chosen_answer": 0
    },
    {
        "question": "Wie definiert man in Javascript eine Variable?",
        "answer_1": "let 100 = rate",
        "answer_2": "100 = let rate",
        "answer_3": "rate = 100",
        "answer_4": "let rate = 100",
        "right_answer": 4,
        "chosen_answer": 0
    }
];

let currentQuestion = 0;
let finishedQuestions = 0;
let rightAnswers = 0;
let AUDIO_SUCCESS = new Audio('./audio/right.mp3');
let AUDIO_FAIL = new Audio('./audio/wrong.mp3');
AUDIO_SUCCESS.volume = 0.75;
AUDIO_FAIL.volume = 0.75;

function loadHTML() {

    if (currentQuestion >= questions.length) {
        // Show End Screen
        document.getElementById('question').classList.add('d-none');
        document.getElementById('answer_cards').classList.add('d-none');
        document.getElementById('buttons').classList.add('d-none');
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
    loadHTML();
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
    loadHTML();
}


function resetButtons() {
    for (let i = 1; i < 5; i++) {
        let button = document.getElementById(`answer_${i}`).parentNode;
        button.classList.remove('bg-danger');
        button.classList.remove('bg-success');
    }
}


function renderProgressBar() {
    let percent = currentQuestion/ questions.length;
    percent = percent * 100;
    document.getElementById('progress_bar').style.width = `${percent}%`;
}


function restartGame() {
    finishedQuestions = 0;
    currentQuestion = 0;
    rightAnswers = 0;
    document.getElementById('end_screen').classList.add('d-none'); // Hide End Screen
    document.getElementById('question').classList.remove('d-none'); // Show Question Body
    document.getElementById('answer_cards').classList.remove('d-none');
    document.getElementById('buttons').classList.remove('d-none'); 
    renderProgressBar();
    loadHTML();
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
    let rightAnswer = questions[currentQuestion]['right_answer'];
    let chosenAnswer = questions[currentQuestion]['chosen_answer'];

    if (rightAnswer == chosenAnswer) {
        document.getElementById(`answer_${chosenAnswer}`).parentNode.classList.add('bg-success');
    } else {
        document.getElementById(`answer_${chosenAnswer}`).parentNode.classList.add('bg-danger');
        document.getElementById(`answer_${rightAnswer}`).parentNode.classList.add('bg-success');
    }
}
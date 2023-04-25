const questions =[
    {
        question:"Which is largest animal in the world?",
        answers:[
           {text:"shark", correct:false},
            {text:"Blue whale", correct:true},
            {text:"Elephant", correct:false},
            {text:"giraffe", correct:false}
        ]
    },
    {
        question:"Which is country in the world?",
        answers:[
           {text:"vatican city", correct:false},
            {text:"Bhutan", correct:false},
            {text:"Nepal", correct:true},
            {text:"Shri Lanka", correct:false}
        ]
    },
    {
        question:"Which is largest desert in the world?",
        answers:[
           {text:"Kalahari", correct:false},
            {text:"Gobi", correct:false},
            {text:"sahara", correct:true},
            {text:"Antarctica", correct:false}
        ]
    },
    {
        question:"Which is largest continent in the world?",
        answers:[
           {text:"Asia", correct:false},
            {text:"Australia", correct:true},
            {text:"Arctic", correct:false},
            {text:"Africa", correct:false}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if (isCorrect) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.innerHTML = "Finish";
    }
}




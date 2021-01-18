const startBtn = document.getElementById("start-btn")
const nextButton = document.getElementById("next-btn")
const questionContainerElement = document.getElementById('question-container')
const questionElement= document.getElementById("question")
const answerButtonsElement = document.getElementById('answer-button')

let shuffledQuestions, currentQuestionIndex

startBtn.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('boobies')
    startBtn.classList.add('hide')
    shuffledQuestions = questions.sort(()=> Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}



function setNextQuestion(){
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else {
        startBtn.innerText = 'restart'
        startBtn.classList.remove('hide')

    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: '1+1', 
        answer: [
            {text: '2', correct: true},
            {text: '3', correct: false},
            {text: '4', correct: false},
            {text: '5', correct: false},
        ] 
    },   {
        question: '2+2', 
        answer: [
            {text: '4', correct: true},
            {text: '8', correct: false},
            {text: '16', correct: false},
            {text: '32', correct: false},
        ] 
    },   {
        question: '4+4', 
        answer: [
            {text: '8', correct: true},
            {text: '16', correct: false},
            {text: '32', correct: false},
            {text: '64', correct: false},
        ] 
    },   {
        question: '8+8', 
        answer: [
            {text: '16', correct: true},
            {text: '32', correct: false},
            {text: '64', correct: false},
            {text: '128', correct: false},
        ] 
    }
]

const forma = document.querySelector('.quiz-form');
const displayScoreText = document.querySelector('#display-score');
const scored = document.querySelector('#scored');
const start = document.querySelector('.start-quiz-button');
const quiz = document.querySelector('.quiz-form');
const questions = document.querySelector('.welcome-display-toggled');
const display = document.querySelector('#display-score');

let answers = ['B', 'A', 'B']
let correctAnswers = [];
let score = 0;


start.addEventListener('click', (e) => {
    score = 0;
    scored.innerText = '';
    display.innerText = '';
    quiz.classList.toggle('quiz-form')
    questions.classList.toggle('.welcome-display-toggled')
    /*window.scrollTo({
        top: 600,
        behavior: 'smooth',
    });*/
    quiz.scrollIntoView({
        behavior: 'smooth'
    });
});

forma.addEventListener('submit', e => {
    e.preventDefault();

    correctAnswers.push(forma.first.value)
    correctAnswers.push(forma.snd.value)
    correctAnswers.push(forma.trd.value)

    correctAnswers.forEach((answer, index) => {
        if(answer == answers[index]) return score += 1;
    });

    displayScoreText.classList.toggle('visibility-block');
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });

    correctAnswers = [];
    
    displayScore(score);
    score = 0;
});


const displayScore = (score) => {
    if(score == 1) return display.innerText = `You have scored 33.3%`;
    if (score == 2) return display.innerText = `You have scored 66.6%`;
    if (score == 3) return display.innerText = `You have scored 100%`;

  
}



const forma = document.querySelector('.quiz-form');
const displayScoreText = document.querySelector('#display-score');
const scored = document.querySelector('#scored');

let answers = ['B', 'A', 'B']
let correctAnswers = [];
let score = 0;

forma.addEventListener('submit', e => {
    e.preventDefault();

    correctAnswers.push(forma.first.value)
    correctAnswers.push(forma.snd.value)
    correctAnswers.push(forma.trd.value)

    correctAnswers.forEach((answer, index) => {
        if(answer == answers[index]) return score += 1;
    });

    displayScoreText.classList.toggle('visibility-block');
    scrollTo(0,0);

    correctAnswers = [];
    
    displayScore(score);
    score = 0;
});


const displayScore = (score) => {
    if(score == 1) return scored.innerText = `33.3%`;
    if (score == 2) return scored.innerText = `66.6%`;
    if(score == 3) return scored.innerText = `100%`;

}



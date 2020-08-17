const forma = document.querySelector('.quiz-form');

let answers = ['B', 'A', 'B']
let correctAnswers = [];


forma.addEventListener('submit', e => {
    e.preventDefault();

    correctAnswers.push(forma.first.value)
    correctAnswers.push(forma.snd.value)
    correctAnswers.push(forma.trd.value)

    correctAnswers.forEach((answer, index) => {

    });

    correctAnswers = [];
});
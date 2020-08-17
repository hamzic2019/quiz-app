const forma = document.querySelector('.quiz-form');
const answers = document.querySelectorAll('.option-input')

//const answers = ['', '', ''];


forma.addEventListener('submit', e => {
    e.preventDefault();
    //console.log(e.target[0]);
    //console.log(e.target);

    console.log(forma.first.value)
});
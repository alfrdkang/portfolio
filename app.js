const sections = document.querySelectorAll('.section'); 
const sectBtns = document.querySelectorAll('.controls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

 
function PgTransitions(){
    for (let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            console.log(currentBtn[0].className)
            currentBtn[0].className = currentBtn[0].className.replace(' active-btn', '');
            console.log(currentBtn[0].className)
            this.className += ' active-btn';
            console.log(this.className)
        })
    }
}
PgTransitions();
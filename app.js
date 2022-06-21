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

    //sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id){
            //remove from other btns
            sectBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PgTransitions();


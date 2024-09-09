let plus=document.querySelectorAll('.img-plus');
let answers=document.querySelectorAll('.answer')
let minus=document.querySelectorAll('.minus-img')
console.log(plus)
console.log(answers)
for(let i=0;i<plus.length;i++){
    plus[i].addEventListener('click',function() {
        answers[i].classList.toggle('d-none')
        plus[i].classList.toggle('d-none')
minus[i].classList.toggle('d-none')
    }
    )}
for(let i=0;i<minus.length;i++){
    minus[i].addEventListener('click',function() {
        answers[i].classList.toggle('d-none')
        plus[i].classList.toggle('d-none')
minus[i].classList.toggle('d-none')
    }
    )}
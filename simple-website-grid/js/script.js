const menTog = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menTog.addEventListener('click', function(){
       nav.classList.toggle('slide');
})
burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventlistener('click', ()=>{
   rightNav.classList.toggle('v-class-resp');
   navList.classList.toggle('v-class-resp');
   navbar.classList.toggle('h-nav-resp');
})
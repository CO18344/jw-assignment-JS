console.log('Selfie');

let minusButton = document.querySelector('.nav-container > img')
let plusButton = document.querySelector('.toggled-bar > img')
let toggledBar = document.querySelector('.toggled-bar');
let navContainer = document.querySelector('.nav-container');

plusButton.addEventListener('click',function(event){
    navContainer.style.width="30%";
    toggledBar.classList.toggle('toggled-bar-hide'); 
})

minusButton.addEventListener('click',function(event){
    navContainer.style.width="0%";
    toggledBar.classList.toggle('toggled-bar-hide');
})


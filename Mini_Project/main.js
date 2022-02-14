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

async function getImage(url){
    let response = await fetch(url);
    let blob = await response.blob(); // download as Blob object
    document.getElementById('fetched-image').src = URL.createObjectURL(blob);
}

getImage('https://upload.wikimedia.org/wikipedia/commons/f/fb/Facebook_icon_2013.svg')
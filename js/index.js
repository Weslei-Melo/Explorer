//import { Display } from "./display.js"

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutsStop = minutesDisplay.textContent;
let secondsStop = secondsDisplay.textContent;
let contclick=0;
let contCloud=0;
let contFire=0;
let contTree=0;
let contStore=0;

let play = document.querySelector('.play');
let stopp = document.querySelector('.stop');
let most = document.querySelector('.most');
let less = document.querySelector('.less');
let cardTree = document.querySelector('.cardTree');
let cardCloud = document.querySelector('.cardCloud');
let cardStore = document.querySelector('.cardStore');
let cardFire = document.querySelector('.cardFire');

let contourTree = document.querySelector('.contourTree');
let contourCloud = document.querySelector('.contourCloud');
let contourStore = document.querySelector('.contourStore');
let contourFire = document.querySelector('.contourFire');

let timerOut;

// const display = Display({
//     minutesDisplay,
//     secondsDisplay,
//     minutsStop,
//     secondsStop,
//     stopp,
//     timerOut,
//     contclick
// })
function countDown (){
    if(contclick%2==0){
        return
    }
    timerOut= setTimeout(function(){
        let minutes =  Number(minutesDisplay.textContent);
        let seconds =  Number(secondsDisplay.textContent);
    
        if(seconds!= 0){
            updateDisplay(minutes,seconds-1)
        }else{
            
            if(minutes!=0){
                updateDisplay(minutes-1,59);
            }else{
                updateDisplay(0,0);
                return
            }
        }
        countDown();
        
    } , 1000)
}

function updateDisplay(minutes, seconds){
    minutesDisplay.textContent=String(minutes).padStart(2,'0');
    secondsDisplay.textContent=String(seconds).padStart(2,'0');
}

function resetDisplay(){
    updateDisplay(minutsStop,secondsStop);
    stopp.classList.remove('altera')
}


play.addEventListener('click' , function(event){
    event.target.classList.toggle('setColorTimer')
    contclick++
    if(contclick%2==1){
        countDown();
    }else{
        clearTimeout(timerOut);
        play.classList.remove('altera')
        return
    }
    
})

stopp.addEventListener('click' , function(event){
    contclick=2;
    // console.log(event.currentTarget.parentElement.firstChild.nextElementSibling)
    // event.currentTarget.parentElement.firstChild.nextElementSibling.classList.remove('setcolorTimer');
    event.target.classList.toggle('setColorTimer')
    resetDisplay()
    play.classList.remove('altera')
    clearTimeout(timerOut);
    
})

most.addEventListener('click' , function(){
    updateDisplay(Number(minutesDisplay.textContent)+5,Number(secondsDisplay.textContent));
})

less.addEventListener('click' , function(){
    if((Number(minutesDisplay.textContent)-5)<0){
        updateDisplay(0,0);
        play.classList.remove('altera');
    }else{
        updateDisplay(Number(minutesDisplay.textContent)-5,Number(secondsDisplay.textContent));
    }
    
})

let aux=document.querySelector('.timer')
aux.addEventListener('click', function(){
    let xx = Number(prompt('Digite o valor para cronometrar: ')) || 0
    minutsStop = String(xx).padStart(2,'0');
    secondsStop = secondsDisplay.textContent
});

const musicTree = new Audio('Floresta.wav');
const musicCloud = new Audio('Chuva.wav');
const musicStore = new Audio('Cafeteria.wav');
const musicFire = new Audio('Lareira.wav');



cardTree.addEventListener('click' , function(event){
    // const firstPath = cardTree.querySelector('path')
    contTree++
    console.log(event.currentTarget.nextElementSibling.nextElementSibling)
    event.currentTarget.firstChild.classList.toggle('setcolor')
    if(contTree%2==0) {
        musicTree.pause();
        // cardTree.classList.remove('altera')
        
    } else{
        musicTree.play();
        musicTree.loop = true; 
        // cardTree.classList.add('altera')
    }
})

cardCloud.addEventListener('click' , function(event){
    contCloud++ 
    event.currentTarget.firstChild.classList.toggle('setcolor')
    if(contCloud%2==0) {
        musicCloud.pause();
        // cardCloud.classList.remove('altera')
    } else{
        musicCloud.play();
        musicCloud.loop = true; 
        // cardCloud.classList.add('altera')
    }
    
})


cardStore.addEventListener('click' , function(event){
    contStore++ 
    event.currentTarget.firstChild.classList.toggle('setcolor')
    if(contStore%2==0) {
        musicStore.pause();
        // cardStore.classList.remove('altera')
    } else{
        musicStore.play();
        musicStore.loop = true; 
        // cardStore.classList.add('altera')
    }
    
})

cardFire.addEventListener('click' , function(event){
    contFire++ 
    event.currentTarget.firstChild.classList.toggle('setcolor')
    if(contFire%2==0) {
        musicFire.pause();
        // cardFire.classList.remove('altera')
    } else{
        musicFire.play();
        musicFire.loop = true; 
        // cardFire.classList.add('altera')
    }
    
})
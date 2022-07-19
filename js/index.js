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

let dark = document.querySelector('#lua');
let light = document.querySelector('#sol');
let body = document.querySelector('#bodyy');
let controls = document.querySelector('.controls')
let timer = document.querySelector('.timer')

let timerOut;

const musicTree = new Audio('Floresta.wav');
const musicCloud = new Audio('Chuva.wav');
const musicStore = new Audio('Cafeteria.wav');
const musicFire = new Audio('Lareira.wav');

const inputrangeTree = document.querySelector('.inputrangeTree')
const inputrangeCloud = document.querySelector('.inputrangeCloud')
const inputrangeFire = document.querySelector('.inputrangeFire')
const inputrangeStore = document.querySelector('.inputrangeStore')


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

function setVolume(audio,value) {
    audio.volume = value;
    
}

function playMusic( music){
    
    music.play();
    music.loop = true; 
}

function stopMusic( music){
    console.log("Parouuu")
    music.pause();
    
}

play.addEventListener('click' , function(event){
    event.currentTarget.classList.toggle('setColorTimer')
    console.log(event.currentTarget)
    contclick++
    if(contclick%2==1){
        countDown();
    }else{
        clearTimeout(timerOut);
        return
    }
})

stopp.addEventListener('click' , function(event){
    contclick=2;
    // console.log(event.currentTarget.parentElement.firstChild.nextElementSibling)
    // event.currentTarget.parentElement.firstChild.nextElementSibling.classList.remove('setcolorTimer');
    // console.log(play)
    play.classList.remove('setColorTimer')
    // event.currentTarget.classList.toggle('setColorTimer')
    
    // setTimeout(function(){
    //     console.log("Oiiii")
    // },1000)
    event.currentTarget.classList.add('classAmimation')
    resetDisplay()
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
    updateDisplay(minutsStop,secondsStop)
});



inputrangeTree.addEventListener('input', () => {
    setVolume(musicTree,inputrangeTree.value)
})
inputrangeFire.addEventListener('input', () => {
    setVolume(musicFire,inputrangeFire.value)
})
inputrangeStore.addEventListener('input', () => {
    setVolume(musicStore,inputrangeStore.value)
})
inputrangeCloud.addEventListener('input', () => {
    setVolume(musicCloud,inputrangeCloud.value)
})

cardTree.addEventListener('click' , function(event){
    
    // const firstPath = cardTree.querySelector('path')
    contTree++
    console.log(event.currentTarget.nextElementSibling.nextElementSibling)
    if(cardTree.classList.contains('setColorDark')){
        event.currentTarget.firstChild.classList.toggle('setColorDarkSelect')
    }else{
        event.currentTarget.firstChild.classList.toggle('setcolor')
    }
    // setVolume(musicTree,0.5)
    contTree%2==0 ? stopMusic(musicTree) :playMusic(musicTree)
})

cardCloud.addEventListener('click' , function(event){
    contCloud++ 
    if(cardCloud.classList.contains('setColorDark')){
        event.currentTarget.firstChild.classList.toggle('setColorDarkSelect')
    }else{
        event.currentTarget.firstChild.classList.toggle('setcolor')
    }
    // setVolume(musicCloud,0.5)
    console.log(event.currentTarget)
    contCloud%2==0 ? stopMusic(musicCloud) :playMusic(musicCloud)
})


cardStore.addEventListener('click' , function(event){
    contStore++ 
    if(cardStore.classList.contains('setColorDark')){
        event.currentTarget.firstChild.classList.toggle('setColorDarkSelect')
    }else{
        event.currentTarget.firstChild.classList.toggle('setcolor')
    }
    // setVolume(musicStore,0.5)
    contStore%2==0 ? stopMusic(musicStore) :playMusic(musicStore)
    
})

cardFire.addEventListener('click' , function(event){
    contFire++ 
    if(cardFire.classList.contains('setColorDark')){
        event.currentTarget.firstChild.classList.toggle('setColorDarkSelect')
    }else{
        event.currentTarget.firstChild.classList.toggle('setcolor')
    }
    // setVolume(musicFire,0.5)
    contFire%2==0 ? stopMusic(musicFire) :playMusic(musicFire)
    
})

dark.addEventListener('click', function(){
    dark.classList.add('hide');
    light.classList.remove('hide')
    boddy.classList.remove('setBackgroud')
    cardCloud.classList.remove('setColorDark')
    cardTree.classList.remove('setColorDark')
    cardFire.classList.remove('setColorDark')
    cardStore.classList.remove('setColorDark')
    controls.classList.remove('setColorDarkTimer')
    timer.classList.remove('setColorTimer')
    cardTree.classList.remove('setColorCirculoDark')
    cardTree.classList.remove('setColorRetanguloDark')
    cardFire.classList.remove('setColorCirculoDark')
    cardFire.classList.remove('setColorRetanguloDark')
    cardStore.classList.remove('setColorCirculoDark')
    cardStore.classList.remove('setColorRetanguloDark')
    cardCloud.classList.remove('setColorCirculoDark')
    cardCloud.classList.remove('setColorRetanguloDark')
    

})

light.addEventListener('click', function(){
    light.classList.add('hide');
    dark.classList.remove('hide');
    boddy.classList.add('setBackgroud');
    cardCloud.classList.add('setColorDark')
    cardTree.classList.add('setColorDark')
    cardFire.classList.add('setColorDark')
    cardStore.classList.add('setColorDark')
    controls.classList.add('setColorDarkTimer')
    timer.classList.add('setColorTimer')
    cardTree.classList.add('setColorCirculoDark')
    cardTree.classList.add('setColorRetanguloDark')
    cardFire.classList.add('setColorCirculoDark')
    cardFire.classList.add('setColorRetanguloDark')
    cardStore.classList.add('setColorCirculoDark')
    cardStore.classList.add('setColorRetanguloDark')
    cardCloud.classList.add('setColorCirculoDark')
    cardCloud.classList.add('setColorRetanguloDark')
    
})
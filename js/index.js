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

const play = document.querySelector('.play');
const stopp = document.querySelector('.stop');
const most = document.querySelector('.most');
const less = document.querySelector('.less');
const cardTree = document.querySelector('.cardTree svg');
const buttonTree = document.querySelector('.cardTree svg');
const cardCloud = document.querySelector('.cardCloud svg');
const cardStore = document.querySelector('.cardStore svg');
const cardFire = document.querySelector('.cardFire svg');
const buttonSun = document.querySelector('#sol');
const buttonMoon = document.querySelector('#lua');
const buttonTimer=document.querySelector('.timer')

const contourTree = document.querySelector('.contourTree');
const contourCloud = document.querySelector('.contourCloud');
const contourStore = document.querySelector('.contourStore');
const contourFire = document.querySelector('.contourFire');


const dark = document.querySelector('#lua');
const light = document.querySelector('#sol');
const boddy = document.querySelector('body');
const controls = document.querySelector('.controls')
const timer = document.querySelector('.timer')

let timerOut;

const musicTree = new Audio('Floresta.wav');
const musicCloud = new Audio('Chuva.wav');
const musicStore = new Audio('Cafeteria.wav');
const musicFire = new Audio('Lareira.wav');

const inputrangeTree = document.querySelector('.inputrangeTree')
const inputrangeCloud = document.querySelector('.inputrangeCloud')
const inputrangeFire = document.querySelector('.inputrangeFire')
const inputrangeStore = document.querySelector('.inputrangeStore')


function resetAudio(audios){
    for( let audio of audios){
        audio.pause();
    }
    // function restAudio (audio){
    //     audio.pause();
    // audios.forEach(restAudio) ;
}

function setColor(cards){
    for( let card of cards){
        card.classList.remove('setColorDarkSelect')
        card.classList.remove('setColorSelect')
    }
}

function fReset(){
    stopp.classList.remove('classButton');
    most.classList.remove('classButton');
    less.classList.remove('classButton');
}

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
                stopMusic(musicCloud)
                return
            }
        }
        fReset();
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
    music.pause();
}


play.addEventListener('click' , function(event){
    event.currentTarget.classList.toggle('setColorTimer')
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
    stopp.classList.remove('classButton');
    setTimeout(() => {
        stopp.classList.add('classButton');
    },10)
    
    play.classList.remove('setColorTimer')
    event.currentTarget.classList.add('classAmimation')
    resetAudio([musicCloud,musicFire,musicStore,musicTree])
    setColor([cardCloud,cardFire,cardStore,cardTree])
    resetDisplay()
    clearTimeout(timerOut);
})

most.addEventListener('click' , function(){
    updateDisplay(Number(minutesDisplay.textContent)+5,Number(secondsDisplay.textContent));
    most.classList.remove('classButton');
    setTimeout(() => {
        most.classList.add('classButton');
    },10)
})

less.addEventListener('click' , function(){
    if((Number(minutesDisplay.textContent)-5)<0){
        updateDisplay(0,0);
        play.classList.remove('setColorTimer');
    }else{
        updateDisplay(Number(minutesDisplay.textContent)-5,Number(secondsDisplay.textContent));
    }
    
    less.classList.remove('classButton');
    setTimeout(() => {
        less.classList.add('classButton');
    },10)
    
    
})


buttonTimer.addEventListener('click', function(){
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

function setColorDark(cards){
    for(let card of cards){
        if(card.classList.contains('setColorSelect')){
            card.classList.add('setColorDarkSelect');
            card.classList.remove('setColorSelect');
        }else{
            card.classList.add('setColorDark');
        } 
    }
}

function setColorLight(cards){
    for(let card of cards){
        if(card.classList.contains('setColorDarkSelect')){
            card.classList.add('setColorSelect');
            card.classList.remove('setColorDarkSelect');
        }else{
            card.classList.remove('setColorDark');
            card.classList.remove('setColorDarkSelect') ;
        }
    }
}
buttonSun.addEventListener('click',function(){ //modo dark
    setColorDark([cardCloud,cardStore,cardFire,cardTree])
})

buttonMoon.addEventListener('click',function(){ //mod light
    setColorLight([cardCloud,cardStore,cardFire,cardTree])
})

cardTree.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){
        cardTree.classList.contains('setColorDark') ? cardTree.classList.toggle('setColorDarkSelect') : cardTree.classList.toggle('setColorDark')
    }else{
        cardTree.classList.contains('setColorSelect') ? cardTree.classList.remove('setColorSelect') : cardTree.classList.toggle('setColorSelect')
    }
    if(musicTree.paused){
        playMusic(musicTree)
        resetAudio([musicCloud,musicFire,musicStore]);
        setColor([cardCloud,cardStore,cardFire])
    }else{
        stopMusic(musicTree)
    }
})

cardFire.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){//dark
        cardFire.classList.contains('setColorDark') ? cardFire.classList.toggle('setColorDarkSelect') : cardFire.classList.toggle('setColorDark')
    }else{//light
        cardFire.classList.contains('setColorSelect') ? cardFire.classList.remove('setColorSelect') : cardFire.classList.add('setColorSelect')
    }
    if(musicFire.paused){
        playMusic(musicFire)
        resetAudio([musicCloud,musicTree,musicStore])
        setColor([cardCloud,cardStore,cardTree]);
    }else{
        stopMusic(musicFire)
    }
})

cardStore.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){
        cardStore.classList.contains('setColorDark') ? cardStore.classList.toggle('setColorDarkSelect') : cardStore.classList.toggle('setColorDark')
    }else{
        cardStore.classList.contains('setColorSelect') ? cardStore.classList.remove('setColorSelect') : cardStore.classList.toggle('setColorSelect')
    }

    if(musicStore.paused){
        playMusic(musicStore)
        resetAudio([musicCloud,musicFire,musicTree]);
        setColor([cardCloud,cardFire,cardTree]);
    }else{
        stopMusic(musicStore)
    }
    
})

cardCloud.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){
        cardCloud.classList.contains('setColorDark') ? cardCloud.classList.toggle('setColorDarkSelect') : cardCloud.classList.toggle('setColorDark')
    }else{
        cardCloud.classList.contains('setColorSelect') ? cardCloud.classList.remove('setColorSelect') : cardCloud.classList.toggle('setColorSelect')
    }
    
    if(musicCloud.paused){
        playMusic(musicCloud)
        resetAudio([musicTree,musicFire,musicStore]);
        setColor([cardFire,cardStore,cardTree]);
    }else{
        stopMusic(musicCloud)
    }
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
})

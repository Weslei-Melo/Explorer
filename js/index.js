import { Display } from "./display.js"
import { Controls } from "./controls.js"
import { Cards } from "./cards.js"
 
const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');
let minutsStop = minutesDisplay.textContent;
let secondsStop = secondsDisplay.textContent;
let contclick=0;

const play = document.querySelector('.play');
const pausee = document.querySelector('#pause');
const stopp = document.querySelector('.stop');
const most = document.querySelector('.most');
const less = document.querySelector('.less');
const cardTree = document.querySelector('.cardTree svg');
const cardCloud = document.querySelector('.cardCloud svg');
const cardStore = document.querySelector('.cardStore svg');
const cardFire = document.querySelector('.cardFire svg');
const buttonSun = document.querySelector('#sol');
const buttonMoon = document.querySelector('#lua');
const buttonTimer=document.querySelector('.timer')
let timerOut;

const dark = document.querySelector('#lua');
const light = document.querySelector('#sol');
const boddy = document.querySelector('body');
const timer = document.querySelector('.timer')


const musicTree = new Audio('Floresta.wav');
const musicCloud = new Audio('Chuva.wav');
const musicStore = new Audio('Cafeteria.wav');
const musicFire = new Audio('Lareira.wav');

const inputrangeTree = document.querySelector('.inputrangeTree')
const inputrangeCloud = document.querySelector('.inputrangeCloud')
const inputrangeFire = document.querySelector('.inputrangeFire')
const inputrangeStore = document.querySelector('.inputrangeStore')

const controlss = Controls({
    stopp,
    most,
    less
});

const cards = Cards()

const display = Display({
    minutesDisplay,
    secondsDisplay,
    timerOut,
    stopMusic: cards.stopMusic,
    fReset: controlss.fReset,
    musicCloud,
    musicFire,
    musicStore,
    musicTree,
    stopp,
    minutsStop,
    secondsStop
});




play.addEventListener('click' , function(event){
    play.classList.toggle('hide')
    pausee.classList.toggle('hide')
    most.classList.add('hide')
    less.classList.add('hide')

    display.countDown();
})

pause.addEventListener('click' , function(event){
    play.classList.toggle('hide')
    pausee.classList.toggle('hide')
    
    clearTimeout(timerOut);
})

clearTimeout(display.timerOut);

stopp.addEventListener('click' , function(event){
    play.classList.remove('hide')
    pausee.classList.add('hide')
    most.classList.remove('hide')
    less.classList.remove('hide')
    
    cards.resetAudio([musicCloud,musicFire,musicStore,musicTree])
    cards.setColor([cardCloud,cardFire,cardStore,cardTree])
    display.resetDisplay()
    clearTimeout(timerOut);
})

most.addEventListener('click' , function(){
    display.updateDisplay(Number(minutesDisplay.textContent)+5,Number(secondsDisplay.textContent));
    most.classList.remove('classButton');
    setTimeout(() => {
        most.classList.add('classButton');
    },10)
})

less.addEventListener('click' , function(){
    if((Number(minutesDisplay.textContent)-5)<0){
        display.updateDisplay(0,0);
        play.classList.remove('setColorPlay');
    }else{
        display.updateDisplay(Number(minutesDisplay.textContent)-5,Number(secondsDisplay.textContent));
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
    cards.setVolume(musicTree,inputrangeTree.value)
})
inputrangeFire.addEventListener('input', () => {
    cards.setVolume(musicFire,inputrangeFire.value)
})
inputrangeStore.addEventListener('input', () => {
    cards.setVolume(musicStore,inputrangeStore.value)
})
inputrangeCloud.addEventListener('input', () => {
    cards.setVolume(musicCloud,inputrangeCloud.value)
})

cardTree.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){
        cardTree.classList.contains('setColorDark') ? cardTree.classList.toggle('setColorDarkSelect') : cardTree.classList.toggle('setColorDark')
    }else{
        cardTree.classList.contains('setColorSelect') ? cardTree.classList.remove('setColorSelect') : cardTree.classList.toggle('setColorSelect')
    }
    if(musicTree.paused){
        cards.playMusic(musicTree)
        cards.resetAudio([musicCloud,musicFire,musicStore]);
        cards.setColor([cardCloud,cardStore,cardFire])
    }else{
        cards.stopMusic(musicTree)
    }
})

cardFire.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){//dark
        cardFire.classList.contains('setColorDark') ? cardFire.classList.toggle('setColorDarkSelect') : cardFire.classList.toggle('setColorDark')
    }else{//light
        cardFire.classList.contains('setColorSelect') ? cardFire.classList.remove('setColorSelect') : cardFire.classList.add('setColorSelect')
    }
    if(musicFire.paused){
        cards.playMusic(musicFire)
        cards.resetAudio([musicCloud,musicTree,musicStore])
        cards.setColor([cardCloud,cardStore,cardTree]);
    }else{
        cards.stopMusic(musicFire)
    }
})

cardStore.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){
        cardStore.classList.contains('setColorDark') ? cardStore.classList.toggle('setColorDarkSelect') : cardStore.classList.toggle('setColorDark')
    }else{
        cardStore.classList.contains('setColorSelect') ? cardStore.classList.remove('setColorSelect') : cardStore.classList.toggle('setColorSelect')
    }

    if(musicStore.paused){
        cards.playMusic(musicStore)
        cards.resetAudio([musicCloud,musicFire,musicTree]);
        cards.setColor([cardCloud,cardFire,cardTree]);
    }else{
        cards.stopMusic(musicStore)
    }
    
})

cardCloud.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){
        cardCloud.classList.contains('setColorDark') ? cardCloud.classList.toggle('setColorDarkSelect') : cardCloud.classList.toggle('setColorDark')
    }else{
        cardCloud.classList.contains('setColorSelect') ? cardCloud.classList.remove('setColorSelect') : cardCloud.classList.toggle('setColorSelect')
    }
    
    if(musicCloud.paused){
        cards.playMusic(musicCloud)
        cards.resetAudio([musicTree,musicFire,musicStore]);
        cards.setColor([cardFire,cardStore,cardTree]);
    }else{
        cards.stopMusic(musicCloud)
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
    most.classList.remove('setColorDarkTimer')
    less.classList.remove('setColorDarkTimer')
    stopp.classList.remove('setColorDarkTimer')
    
    timer.classList.remove('setColorTimer')
    cards.setColorLight([cardCloud,cardStore,cardFire,cardTree])
})

light.addEventListener('click', function(){
    light.classList.add('hide');
    dark.classList.remove('hide');
    boddy.classList.add('setBackgroud');
    cardCloud.classList.add('setColorDark')
    cardTree.classList.add('setColorDark')
    cardFire.classList.add('setColorDark')
    cardStore.classList.add('setColorDark')
    most.classList.add('setColorDarkTimer')
    less.classList.add('setColorDarkTimer')
    stopp.classList.add('setColorDarkTimer')
    if(!play.classList.contains('setColorPlay')){
        play.classList.add('setColorDarkTimer')
    }
    timer.classList.add('setColorTimer')
    cards.setColorDark([cardCloud,cardStore,cardFire,cardTree])
})

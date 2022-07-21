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

const contourTree = document.querySelector('.contourTree');
const contourCloud = document.querySelector('.contourCloud');
const contourStore = document.querySelector('.contourStore');
const contourFire = document.querySelector('.contourFire');

const dark = document.querySelector('#lua');
const light = document.querySelector('#sol');
const body = document.querySelector('#bodyy');
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
                cardCloud.classList.remove('setColorDarkSelect');
                cardCloud.classList.remove('setColorSelect');
                stopMusic(musicTree)
                cardTree.classList.remove('setColorDarkSelect');
                cardTree.classList.remove('setColorSelect');
                stopMusic(musicFire)
                cardFire.classList.remove('setColorDarkSelect');
                cardFire.classList.remove('setColorSelect');
                stopMusic(musicStore)
                cardStore.classList.remove('setColorDarkSelect');
                cardStore.classList.remove('setColorSelect');
                play.classList.remove('setColorTimer')
                return
            }
        }
        stopp.classList.remove('classButton');
        most.classList.remove('classButton');
        less.classList.remove('classButton');
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
    stopp.classList.add('classButton');
    
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
    most.classList.add('classButton');
})

less.addEventListener('click' , function(){
    if((Number(minutesDisplay.textContent)-5)<0){
        updateDisplay(0,0);
        play.classList.remove('altera');
    }else{
        updateDisplay(Number(minutesDisplay.textContent)-5,Number(secondsDisplay.textContent));
    }
    less.classList.add('classButton');
    
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

buttonSun.addEventListener('click',function(){ //modo dark
    if(cardTree.classList.contains('setColorSelect')){
        cardTree.classList.add('setColorDarkSelect');
        cardTree.classList.remove('setColorSelect');
    }else{
        cardTree.classList.add('setColorDark');
    } 
    if(cardFire.classList.contains('setColorSelect')){
        cardFire.classList.add('setColorDarkSelect');
        cardFire.classList.remove('setColorSelect');
    }else{
        cardFire.classList.add('setColorDark');
    }
    if(cardCloud.classList.contains('setColorSelect')){
        cardCloud.classList.add('setColorDarkSelect');
        cardCloud.classList.remove('setColorSelect');
    }else{
        cardCloud.classList.add('setColorDark');
    }
    if(cardStore.classList.contains('setColorSelect')){
        cardStore.classList.add('setColorDarkSelect');
        cardStore.classList.remove('setColorSelect');
    }else{
        cardStore.classList.add('setColorDark');
    }
})

buttonMoon.addEventListener('click',function(){ //mod light
    if(cardTree.classList.contains('setColorDarkSelect')){
        cardTree.classList.add('setColorSelect');
        cardTree.classList.remove('setColorDarkSelect');
    }else{
        cardTree.classList.remove('setColorDark');
        cardTree.classList.remove('setColorDarkSelect') ;
    }
    if(cardFire.classList.contains('setColorDarkSelect')){
        cardFire.classList.add('setColorSelect');
        cardFire.classList.remove('setColorDarkSelect');
    }else{
        cardFire.classList.remove('setColorDark');
        cardFire.classList.remove('setColorDarkSelect') ;
    }
    if(cardStore.classList.contains('setColorDarkSelect')){
        cardStore.classList.add('setColorSelect');
        cardStore.classList.remove('setColorDarkSelect');
    }else{
        cardStore.classList.remove('setColorDark');
        cardStore.classList.remove('setColorDarkSelect') ;
    }
    if(cardCloud.classList.contains('setColorDarkSelect')){
        cardCloud.classList.add('setColorSelect');
        cardCloud.classList.remove('setColorDarkSelect');
    }else{
        cardCloud.classList.remove('setColorDark');
        cardCloud.classList.remove('setColorDarkSelect') ;
    }
})

cardTree.addEventListener('click', function(){
    if(!buttonMoon.classList.contains('hide')){
        cardTree.classList.contains('setColorDark') ? cardTree.classList.toggle('setColorDarkSelect') : cardTree.classList.toggle('setColorDark')
    }else{
        cardTree.classList.contains('setColorSelect') ? cardTree.classList.remove('setColorSelect') : cardTree.classList.toggle('setColorSelect')
    }
    if(musicTree.paused){
        playMusic(musicTree)
        stopMusic(musicFire)
        cardFire.classList.remove('setColorDarkSelect')
        cardFire.classList.remove('setColorSelect')
        stopMusic(musicStore)
        cardStore.classList.remove('setColorDarkSelect')
        cardStore.classList.remove('setColorSelect')
        stopMusic(musicCloud)
        cardCloud.classList.remove('setColorDarkSelect')
        cardCloud.classList.remove('setColorSelect')
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
        stopMusic(musicCloud)
        cardCloud.classList.remove('setColorDarkSelect')
        cardCloud.classList.remove('setColorSelect')
        stopMusic(musicStore)
        cardStore.classList.remove('setColorDarkSelect')
        cardStore.classList.remove('setColorSelect')
        stopMusic(musicTree)
        cardTree.classList.remove('setColorDarkSelect')
        cardTree.classList.remove('setColorSelect')
    }else{
        stopMusic(musicFire)
        console.log('Parou fogo')
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
        stopMusic(musicFire)
        cardFire.classList.remove('setColorDarkSelect')
        cardFire.classList.remove('setColorSelect')
        stopMusic(musicTree)
        cardTree.classList.remove('setColorDarkSelect')
        cardTree.classList.remove('setColorSelect')
        stopMusic(musicCloud)
        cardCloud.classList.remove('setColorDarkSelect')
        cardCloud.classList.remove('setColorSelect')
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
        stopMusic(musicFire)
        cardFire.classList.remove('setColorDarkSelect')
        cardFire.classList.remove('setColorSelect')
        stopMusic(musicStore)
        cardStore.classList.remove('setColorDarkSelect')
        cardStore.classList.remove('setColorSelect')
        stopMusic(musicTree)
        cardTree.classList.remove('setColorDarkSelect')
        cardTree.classList.remove('setColorSelect')
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

while((minutesDisplay==0) && (secondsDisplay==0)){
    
    console.log('Oii')
}
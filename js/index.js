import { Display } from "./display.js"
import { Controls } from "./controls.js"
import { Cards } from "./cards.js"
import { Timer } from "./timer.js"
import { Dark } from "./dark.js"
import { Light } from "./light.js"
import {minutesDisplay, secondsDisplay, stopp, most, less, musicCloud, musicFire, musicStore,musicTree, light, dark, cardCloud, cardFire, cardTree, cardStore, pausee, play, timer, buttonTimer, inputrangeCloud,inputrangeFire, inputrangeStore, inputrangeTree } from "./elements.js"


let minutsStop = minutesDisplay.textContent;
let secondsStop = secondsDisplay.textContent;
let timerOut;

const controlss = Controls({
    stopp,
    most,
    less
});

const cards = Cards()

const timerr = Timer({
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
    secondsStop,
    most,
    less
});

const display = Display({
    minutesDisplay,
    secondsDisplay
});

const darkk = Dark({
    light,
    dark,
    boddy,
    cardCloud,
    cardFire,
    cardStore,
    cardTree,
    most,
    pausee,
    less,
    stopp,
    play,
    timer
})

const lightt = Light({
    dark,
    light,
    boddy,
    cardCloud,
    cardFire,
    cardStore,
    cardTree,
    pausee,
    most,
    less,
    stopp,
    timer,
    play
})


play.addEventListener('click' , function(event){
    play.classList.toggle('hide')
    pausee.classList.toggle('hide')
    most.classList.add('hide')
    less.classList.add('hide')

    timerr.countDown();
})

pause.addEventListener('click' , function(event){
    play.classList.toggle('hide')
    pausee.classList.toggle('hide')
    timerr.pause()
})



stopp.addEventListener('click' , function(event){
    play.classList.remove('hide')
    pausee.classList.add('hide')
    most.classList.remove('hide')
    less.classList.remove('hide')
    
    cards.resetAudio([musicCloud,musicFire,musicStore,musicTree])
    cards.setColor([cardCloud,cardFire,cardStore,cardTree])
    timerr.pause()
    timerr.resetDisplay()
    
    clearTimeout(timerOut);
})

most.addEventListener('click' , function(){
    timerr.plus5minutes();
})

less.addEventListener('click' , function(){
    timerr.minus5minutes();
})

buttonTimer.addEventListener('click', function(){
    let xx = Number(prompt('Digite o valor para cronometrar: ')) || 0
    minutsStop = String(xx).padStart(2,'0');
    secondsStop = secondsDisplay.textContent
    display.updateDisplay(minutsStop,secondsStop)
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
    if(!dark.classList.contains('hide')){
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
    if(!dark.classList.contains('hide')){//dark
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
    if(!dark.classList.contains('hide')){
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
    if(!dark.classList.contains('hide')){
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
    lightt.modeLight()
    cards.setColorLight([cardCloud,cardStore,cardFire,cardTree])
})

light.addEventListener('click', function(){
    darkk.modeDark()
    cards.setColorDark([cardCloud,cardStore,cardFire,cardTree])
})

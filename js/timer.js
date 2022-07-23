import { Display } from './display.js'
import { Cards } from './cards.js'
import { cardCloud, cardFire, cardStore, cardTree, pausee,  most, less ,playy, } from './elements.js'
export function Timer({
    minutesDisplay,
    secondsDisplay,
    timerOut,
    stopMusic,
    fReset,
    musicCloud,
    musicFire,
    musicStore,
    musicTree,
    stopp,
    minutsStop,
    secondsStop,
    most,
    less
}){
    const cards = Cards()
    const display = Display({
        minutesDisplay,
        secondsDisplay
    })
    function countDown (){

            timerOut= setTimeout(function(){
            let minutes =  Number(minutesDisplay.textContent);
            let seconds =  Number(secondsDisplay.textContent);
            if(seconds!= 0){
                display.updateDisplay(minutes,seconds-1)
            }else{
                
                if(minutes!=0){
                    display.updateDisplay(minutes-1,59);
                }else{
                    display.updateDisplay(0,0);
                    cards.stopMusic(musicCloud)
                    cards.stopMusic(musicTree)
                    cards.stopMusic(musicFire)
                    cards.stopMusic(musicStore)
                    cards.setColor([cardCloud,cardFire,cardStore,cardTree])
                    resetControls()
                    return
                }
            }
            fReset();
            countDown();;
        } , 1000)
    }

    function pause (){
        clearTimeout(timerOut);
    }

    function play(){
        countDown();
    }

    function plus5minutes(){
        display.updateDisplay(Number(minutesDisplay.textContent)+5,Number(secondsDisplay.textContent));
        most.classList.remove('classButton');
        setTimeout(() => {
            most.classList.add('classButton');
        },10)
    }

    function minus5minutes(){
        if((Number(minutesDisplay.textContent)-5)<0){
            display.updateDisplay(0,0);
            playy.classList.remove('setColorPlay');
        }else{
            display.updateDisplay(Number(minutesDisplay.textContent)-5,Number(secondsDisplay.textContent));
        }
        
        less.classList.remove('classButton');
        setTimeout(() => {
            less.classList.add('classButton');
        },10)
    }
    
    function resetDisplay(){
        display.updateDisplay(minutsStop,secondsStop);
    }

    function resetControls(){
        pausee.classList.add('hide')
        playy.classList.remove('hide')
        less.classList.remove('hide')
        most.classList.remove('hide')
    }

    return {
        countDown,
        resetDisplay,
        play,
        pause,
        plus5minutes,
        minus5minutes,
        resetControls
    }
}
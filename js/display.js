export function Display({
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
    secondsStop
}){
    function updateDisplay(minutes, seconds){
        minutesDisplay.textContent=String(minutes).padStart(2,'0');
        secondsDisplay.textContent=String(seconds).padStart(2,'0');
    }
    function countDown (){

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
                    stopMusic([musicCloud,musicTree,musicFire,musicStore])
                    return
                }
            }
            fReset();
            countDown();;
        } , 1000)
    }
    
    function resetDisplay(){
        updateDisplay(minutsStop,secondsStop);
        stopp.classList.remove('altera')
    }

    return {
        countDown,
        resetDisplay,
        updateDisplay,
        timerOut
    }
}
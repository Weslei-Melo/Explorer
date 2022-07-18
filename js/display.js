export function Display({
    minutesDisplay,
    secondsDisplay,
    minutsStop,
    secondsStop,
    stopp,
    timerOut,
    contclick
}){
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
                    updateDisplay(minutes-1,3);
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
    return{
        countDown,
        updateDisplay,
        resetDisplay
    }
    
}
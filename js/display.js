export function Display({
    minutesDisplay,
    secondsDisplay
}){
    function updateDisplay(minutes, seconds){
        minutesDisplay.textContent=String(minutes).padStart(2,'0');
        secondsDisplay.textContent=String(seconds).padStart(2,'0');
    }

    return {
        updateDisplay
    }
}
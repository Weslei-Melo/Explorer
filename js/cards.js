export function Cards(){
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
    
    return{resetAudio,setColor,setVolume,playMusic,stopMusic,setColorDark,setColorLight}
}
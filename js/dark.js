export function Dark({
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
}){
    function modeDark(){
        light.classList.add('hide');
        dark.classList.remove('hide');
        boddy.classList.add('setBackgroud');
        cardCloud.classList.add('setColorDark')
        cardTree.classList.add('setColorDark')
        cardFire.classList.add('setColorDark')
        cardStore.classList.add('setColorDark')
        most.classList.add('setColorDarkTimer')
        pausee.classList.add('setColorDarkTimer')
        less.classList.add('setColorDarkTimer')
        stopp.classList.add('setColorDarkTimer')
        if(!play.classList.contains('setColorPlay')){
            play.classList.add('setColorDarkTimer')
        }
        timer.classList.add('setColorTimer')
    }
    



    return {modeDark}
}
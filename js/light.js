export function Light({
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
    timer
}){
    function modeLight(){
        dark.classList.add('hide');
        light.classList.remove('hide')
        boddy.classList.remove('setBackgroud')
        cardCloud.classList.remove('setColorDark')
        cardTree.classList.remove('setColorDark')
        cardFire.classList.remove('setColorDark')
        cardStore.classList.remove('setColorDark')
        pausee.classList.remove('setColorDarkTimer')
        most.classList.remove('setColorDarkTimer')
        less.classList.remove('setColorDarkTimer')
        stopp.classList.remove('setColorDarkTimer')
        timer.classList.remove('setColorTimer')
        }


    return {modeLight}
}
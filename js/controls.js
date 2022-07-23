
export function Controls ({
    stopp,
    most,
    less
}){
    function fReset(){//animacao dos botoes
        stopp.classList.remove('classButton');
        most.classList.remove('classButton');
        less.classList.remove('classButton');
    }
    return {fReset}
}

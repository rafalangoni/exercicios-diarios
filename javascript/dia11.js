const EXPECTED_MINUTES_IN_OVEN = 40;


function remainingMinutesInOven(tempoPassado){
    return EXPECTED_MINUTES_IN_OVEN - tempoPassado; 
}

function preparationTimeInMinutes(camadasDeLasanha){
    return camadasDeLasanha * 2;
}

function actualMinutesInOven (camadasDeLasanha, tempoAtual){
    return (camadasDeLasanha * 2) + tempoAtual;
}

console.log(actualMinutesInOven(1,20))
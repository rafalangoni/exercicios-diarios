const EXPECTED_MINUTES_IN_OVEN = 40;

function remainingMinutesInOven(tempoPassado){
    return EXPECTED_MINUTES_IN_OVEN - tempoPassado; 
}

function preparationTimeInMinutes(camadasDeLasanha){
    return camadasDeLasanha * 2;
}

function actualMinutesInOven (camadasDeLasanha, tempoAtual){
    return preparationTimeInMinutes(camadasDeLasanha) + remainingMinutesInOven(tempoAtual);
}

console.log(actualMinutesInOven(4,20))
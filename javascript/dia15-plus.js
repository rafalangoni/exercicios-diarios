// const knightIsAwake = true;
// function canExecuteFastAtack(knightIsAwake){
//     if(knightIsAwake){
//         return false
//     }
//     return true
// }

// canExecuteFastAtack(knightIsAwake)

/** ===================================*/

// const knightIsAwake = false;
// const archerIsAwake = true;
// const prisonerIsAwake = false;

// function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
//   if (knightIsAwake || archerIsAwake || prisonerIsAwake) {
//     return true;
//   }
//   return false;
// }
// canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake);

/** ===================================*/
// const archerIsAwake = true;
// const prisonerIsAwake = true;

// function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
//   if (!archerIsAwake && prisonerIsAwake) {
//     return true;
//   }
//   return false;
// }
// canSignalPrisoner(archerIsAwake, prisonerIsAwake);
/** ===================================*/
const knightIsAwake = false;
const archerIsAwake = true;
const prisonerIsAwake = false;
const petDogIspresent = false;

function canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIspresent){
    if( (!petDogIspresent && !archerIsAwake) ){
        return true
    }else if(petDogIspresent && knightIsAwake && !archerIsAwake && !prisonerIsAwake){
        return false
    }else if(knightIsAwake && !archerIsAwake && petDogIspresent && prisonerIsAwake){
        return false
    }
    return false
}
canFreePrisoner(knightIsAwake, archerIsAwake, prisonerIsAwake, petDogIspresent)


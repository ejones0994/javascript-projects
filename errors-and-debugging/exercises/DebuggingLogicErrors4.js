// Now consider both if/else blocks together (keeping the added console.log lines). 
// Run the code and examine the output. 

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
// Is the program behaving as expected?
// The program is behaving as it should because its set up with the specific values to cause both blocks to contradict each other. If one is saying false and the other is saying true then i would say its not ready for launch. I would only launch if both are true.
let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
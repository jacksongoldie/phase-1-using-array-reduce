const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

let totalBatteries = batteryBatches.reduce(function(accum, currentValue){ return currentValue += accum}, 0);


//WORKING CODE - took this to rework^
/* const callback = (accumulator, currentValue) => accumulator + currentValue;

let totalBatteries = batteryBatches.reduce(callback, 0);
 */

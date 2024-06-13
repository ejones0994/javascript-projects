// Declare and assign the variables below
let shuttlename = 'determination';
let shuttlespeed = 17500;
let distatance_to_mars = 225000000;
let distance_to_the_moon = 384400;
const miles_per_kilometer = 0.621;
// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof(shuttlename));
console.log(typeof(shuttlespeed));
console.log(typeof(distatance_to_mars));
console.log(typeof(distance_to_the_moon));
console.log(typeof(miles_per_kilometer));
// Calculate a space mission below
let miles_to_mars = distatance_to_mars*miles_per_kilometer;
// Print the results of the space mission calculations below
let hours_to_mars = miles_to_mars/shuttlespeed;
// Calculate a trip to the moon below
let days_to_reach_mars = distatance_to_mars*miles_per_kilometer/shuttlespeed/24;
// Print the results of the trip to the moon below
console.log(days_to_reach_mars);
console.log(shuttlename, "will take", days_to_reach_mars, "days to reach Mars.");
// Calculate a space mission below
let miles_to_moon = distance_to_the_moon*miles_per_kilometer;
// Print the results of the space mission calculations below
let hours_to_moon = miles_to_moon/shuttlespeed;
// Calculate a trip to the moon below
let days_to_reach_moon = distance_to_the_moon*miles_per_kilometer/shuttlespeed/24;
// Print the results of the trip to the moon below
console.log(days_to_reach_moon);
console.log(shuttlename, "will take", days_to_reach_moon, "days to reach Moon.");
const readlineSync = require("readline-sync");

//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.

let fuel = 0;
let astronautsnum = 0;
let shuttlealtitude = 0;



/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
while (fuel < 5000 || fuel > 30000) {
  fuel = readlineSync.question("Enter fuel level: ");
}


//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (astronautsnum < 1 || astronautsnum > 7) {
  astronautsnum = readlineSync.question("Enter number of astronauts: ");
}
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while(fuel - (100 * astronautsnum) >= 0) {
  shuttlealtitude += 50;
  fuel -= 100 * astronautsnum;

}

/*Exercise #5: Output the result withz the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/

let result = "The shuttle gained an altitude of " + shuttlealtitude + "km.";
if(shuttlealtitude >= 2000) {
  result = result + " Orbit achieved!";
} else {
  result = result + " Failed to reach orbit.";
}
console.log(result);

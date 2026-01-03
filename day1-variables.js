console.log("------------------------------------------  ");
console.log("          60 DAYS GDG PREP TRACKER          ");
console.log("--------------------------------------------");

const tracker =
{
  name : "Endeley Lucy A.",
  school: "The Regional Maritime University",
  program : "BSc. Information Technology",
  timeCommitment : "60 days",
  level : "200",
  currentDay : 1,
  totalNumDays : 60,
  topics: 
  {
    setup : true,
    variables : true,
    arrowFunctions : false,
    arrayMethods : false,
  }
};

let hours = 3;
let energyLevel = 8;

tracker.currentDay++;

const completionPercent = Math.round
(
    (tracker.currentDay / tracker.totalNumDays) * 100
);

console.log("----------------");
console.log(" Current Status ");
console.log("----------------");

console.log 
(`
    Hii Again
    I am ${tracker.name} a student at ${tracker.school} currently enrolled in ${tracker.program} Program.

    Today is day ${tracker.currentDay} out of ${tracker.totalNumDays} i have on this 60 day Journey.
    I am ${completionPercent}% there.

    I studied for ${hours} today and my energy level is at ${energyLevel} out of 10.

Progress:
- Setup : ${tracker.topics.setup ? "Completed" : "Not Started"}
- Variables : ${tracker.topics.variables ? "Completed" : "Not Started"}
- Arrow Functions : ${tracker.topics.arrowFunctions ? "Completed" : "Not Started"}
- Array Methods : ${tracker.topics.arrayMethods ? "Completed" : "Not Started"}
`);

if (completionPercent < 10)
{
    console.log("Just getting started! 🚀");
}

else if (completionPercent > 50)
{
    console.log("Making solid progress! 💪");
}

else 
{
    console.log("You're crushing it! 🔥")
}
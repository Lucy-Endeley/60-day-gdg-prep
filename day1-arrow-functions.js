console.log("===================================");
console.log("    ARROW FUNCTIONS - PRACTICE     ");
console.log("===================================");

let number = 5;

const double = (number) => number * 2;
console.log(`Double of ${number} is ${double(number)}`);

const isEven = (number) => number % 2 === 0; 
    if (isEven(number))
    {
        console.log(`${number} is an Even Number`);
    }
    else
    {
        console.log(`${number} is an odd Number`);
    }

const progressTracker = 
{
    currentDay : 2,
    totalDays : 60,
};

const percentLevel = Math.round
    (
        (progressTracker.currentDay / progressTracker.totalDays) * 100
    );
        if (percentLevel <= 50 )
        {
            console.log ("Keep it Up, You have got this");
        }

        else if (percentLevel > 50 )
        {
            console.log("You are Almost there Just Keep Pushing");
        }

const motivate = (name) => `${name}, Don't Let The Sky Be Your Limit`;
console.log(motivate("Lucy"));


day1AM();
day1PM();

function setup() {
    createCanvas(640, 480);
}

function draw() {
    noStroke();
    fill(0, 255, 0);
    rect(320, 240, 20, 20);

    fill(255, 0, 0);
    circle(500, 100, 20);

    stroke(0, 0, 0);
    strokeWeight(3);
    line(0, 40, 640, 40);
}


function day1AM() {      // declares function you make
    var fullName = "Kristine Bullock";
    var age = 33;
    var weight = 130;
    var heightInInches = 69;
    var feet = Math.floor(heightInInches / 12); //Math library can create random #'s, sin, cosine, tan, math.floor (rounds down), math.ceil (rounds up)
    var inches = heightInInches % 12; //% sign instead of divide sign gives you back the remainder (also known as modules)
    var address = "3971 Roberts Rdg NE";
    var middleName; //don't need to define a variable

    console.log("Hello World");
    console.log(address); //check to see that the console prints the correct info
    console.log(typeof (address)); //tells you the type of this variable
    console.log(typeof (age)); //tells you the type of this variable; in JS, age and weight are # event though one is a decimal
    var likesPizza = true; //Boolean # that could be true or false
    var hasTatoos = false; //true or false must be lowercase
    console.log(typeof (likesPizza));
    console.log(age); //prints age in console before adding the 1
    age = age + 1;
    heightInInches -= 1; //operators -=, +=, *= add or subtract or multiple whatever # follows
    console.log(heightInInches);
    console.log(age); //confirms that adding to the age worked

    console.log(fullName + " is " + age + " years old."); //the + sign means concatenate or connect together
    console.log("Do you like pizza? " + likesPizza);
    console.log(fullName + " is " + feet + " feet " + inches + " inches tall.") //this helps you confirm your formulas worked  
}

function print(input) {
    console.log(input);
}

//Converts Fahrenheit to Celsius
//Input: temperature in Fahrenheit 
function f2c(tempF) {
    return ((tempF - 32) * (5 / 9)); //returns the answer to f2c
}

function bmiConverter(weight, heightInInches) {
    return ((weight / heightInInches) * 703);
}

function canIGoToTheCasino(age, location) {
    return age >= 21 && location == "IA" || age >= 18 && location == "MN"; //combine two conditions together and both sides have to be two; || means or statement
}



function day1PM() {
    var convertedTemp = f2c(212); //calls f2c function which then prints the conversion
    print(convertedTemp);
    var age = 19;
    var bmiConverterOutput = bmiConverter(130, 69);
    print(bmiConverterOutput);
    print(canIGoToTheCasino(age, "IA"));
    print(canIGoToTheCasino(19, "MN"));
    print("Kristine's Choice");
    print(canISleepIn("Sunday", 18));
    print("Abby's Choice");
    print(canISleepIn("Monday", 14));
    print("Mark's Choice");
    print(canISleepIn("Tuesday", 10));
    print("Tempertature is 35 degrees so wear " + whatShouldIWear(35));
    print("Tempertature is 95 degrees so wear " + whatShouldIWear(95));


}

function canISleepIn(day, hour) {
    var day;
    var hour;
    return day == "Saturday" || day == "Sunday" || hour <= 8 && hour >= 17;
}


function whatShouldIWear(temp) {
    if (temp >= 75) {
        return "bathing suit";
    }
    else if (temp >= 45) {
        return "Light Jacket";
    }
    else if (temp >= 10) {
        return "Winter Jacket";
    }
    else {
        return "Down Jacket"
    }
}








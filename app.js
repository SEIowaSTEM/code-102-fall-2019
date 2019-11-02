

//day1AM();
//day1PM();

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


function day2AM() {
    console.log(1); //prints number 1 to console
    print(2); //calls print function to print 2 to console
    print(3);
    var count = 1;
    while (count <= 10) {
        print(count); //calls print function to print count to console
        count++;
    }

    //Function to ask the user for numbers and then find the average of the numbers
    // var sum = 0;
    // var count2 = 0;
    // while (true) {
    //     var input = parseInt(prompt('Enter a number, please. Type 0 to end. '));  //parseInt is expecting an integar from user; prompts creates dialog box
    //     if (input === 0) {    //three equal signs makes sure the data type is a number
    //         break;
    //     }
    //     else {
    //         sum += input; //Adds the user input number to the sum
    //         count2++; //increases the count each time a number is entered
    //     }
    // } 
    // console.log('The average of your numbers is ' + sum / count2);

    for(var count = 0; count <= 100; count+=5) {
        console.log(count);
      } 
      
      var months =['January', 'February', 'March', 'April', 'May'];
      print(months[0]); //0 is the index which gives the position in the array
      print(months[1]);

      for(var i = 0; i < 5; i++){   //i stands for iteration; there are 5 elements but since it starts w/0, count up to 4
          print(months[i]); //prints the information at the applicable position for i
      }

      for(var i = 0; i < months.length; i++){   //months.length takes the variable 'months' and uses the built in 'length' function to input the length of the array 'months'
        print(months[i]); //prints the information at the applicable position for i
    }

    var states = ['Alabama', 'Alaska', 'Arizona'];
    for(var i = 0; i < states.length; i++){
        print(states[i]);
    }

    var peanutButter = ['Arkansas', 'California', 'Colorado'];
    peanutButter.forEach(function(jelly) {  //forEach is a method that executes a function on each element of the array
        print(jelly);
    });

    

}
//day2AM();

function day2PM(){
    var kristine = {            //object exclusive to Kristine's details
        firstName: "Kristine",  //comma not semi-colon
        middleName: "Marie",
        lastName: "Bullock",
        dob: [10, 23, 1986],  //create array for birthday mm/dd/yyyy
        heightInches: 69,
        fullName: function() {    //function stored as a key is known as a method
            return this.firstName + ' ' + this.middleName + ' ' + this.lastName;  //the word 'this' refers to the property of the current object and tries to find firstName
          },
          age: function() {
            var today = new Date(); //built in JS object that gets today's date
            var year = today.getFullYear(); //gets year for today's date
            
            // getMonth will result in 0 for January, 1 for February, etc.    
            var month = today.getMonth() +1; //list of months starts at 0 in the array so you have to add 1 to get 1-12
            var day = today.getDate();
            
            // The birth year is at index position 2 of the DOB array
            var myAge = year - this.dob[2];
            
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {  //dob[0] pulls the month position from my dob array
              // Subtract one from the age if you haven't had your birthday this year.
              myAge--;
            }
            return(myAge);
          }

    }; 

    var marc = {
        firstName: "Marc",  //object exclusive to Marc's details
        middleName: "Leo",
        lastName: "Hauschildt",
        dob: [2, 6, 1981],  //create array for birthday mm/dd/yyyy rather than a static number that should change
        heightInches: 75,
        fullName: function() {
           return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
         },
         age: function() {
            var today = new Date(); //built in JS object that gets today's date
            var year = today.getFullYear(); //gets year for today's date
            
            // getMonth will result in 0 for January, 1 for February, etc.    
            var month = today.getMonth() +1; //list of months starts at 0 in the array so you have to add 1 to get 1-12
            var day = today.getDate();
            
            // The birth year is at index position 2 of the DOB array
            var myAge = year - this.dob[2];
            
            if(month < this.dob[0] || month === this.dob[0] && day < this.dob[1]) {  //dob[0] pulls the month position from my dob array
              // Subtract one from the age if you haven't had your birthday this year.
              myAge--;
            }
            return(myAge);
          },
    }; 

    print (kristine.firstName + " " + kristine.middleName + " " + kristine.lastName );
    print (marc.firstName + " " + marc.middleName + " " + marc.lastName );
    print (kristine.fullName()); //need parenthesis after fullName since it is a function
    print (marc.fullName());
    print (kristine.age());
    print (marc.age());

}

day2PM();






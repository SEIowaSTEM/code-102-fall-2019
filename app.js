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
    console.log("Hello World");
    var fullName = "Kristine Bullock";
    var age = 33;
    var weight = 130;
    var heightInInches = 69;
    var address = "3971 Roberts Rdg NE";
    var middleName; //don't need to define a variable
    console.log(address); //check to see that the console prints the correct info
    console.log(typeof (address)); //tells you the type of this variable
    console.log(typeof (age)); //tells you the type of this variable; in JS, age and weight are # event though one is a decimal
    var likesPizza = true; //Boolean # that could be true or false
    var hasTatoos = false; //true or false must be lowercase
    console.log(typeof (likesPizza));

}

day1AM(); //calls function you've previously made
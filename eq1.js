//the equation is:
//(v - u)/t

var a;
var v, vInput;
var u, uInput;
var t, tInput;
var calculateButton, calculatePressed;


function setup (){
    createCanvas(diplayWidth, diplayHeight);
    vInput = createInput("Final Velocity");
    uInput = createInput("Initial Velocity");
    tInput = createInput("Time");
    calculateButton = createButton("CALCULATE");

    vInput.position(80, 300);
    uInput.position(80, 350);
    tInput.position(80, 400);
    calculateButton.position(8, 500);


    vInput.size(100, 50);
    uInput.size(100, 50);
    tInput.size(100, 50);

    calculateButton.size(250,100);
    calculatePressed = "no";
}

function draw () {
    background(0, 255, 255);
    textSize(15)

    text("Speed should be entered in m/s.", 0 , 30)
    text("Time should be entered in s.", 0 , 60)
    text("Acceleration will be returned in m/s/s.", 0 , 90)

    calculateButton.mousePressed(() => {
        v = vInput.value();
        u = uInput.value();
        t = tInput.value();
        calculatePressed = "yes";
    })
    if (calculatePressed == "yes"){
        if (isNaN(v) || isNaN(u) || isNaN(t)) {
            text("Please enter numerical values", 0 , 150);
        }
        if (!isNaN(v) && !isNaN(u) && !isNaN(t)) {
            a = (v-u)/t;
            console.log(a)
            text("If you want to enter different data,", 0, 120);
            text("enter it and press calculate", 0, 135)
            text("Else, your current data is:", 0, 155);
            text("Final velocity  : " + v + " m/s", 0, 175);
            text("Initial velocity: " + u + " m/s", 0, 190);
            text("Time: " + t + "s", 0, 205);
            text("The equation being used is (v-u)/t", 0, 225);
            text("The answer is " + a + " m/s/s", 0, 245);
        }
    }
}

//the equation is:
//(v - u)/t

var a;
var v, vInput;
var u, uInput;
var t, tInput;
var calculateButton, calculatePressed;


function setup (){
    createCanvas(displayWidth, displayHeight);
    vInput = createInput("Final Velocity");
    uInput = createInput("Initial Velocity");
    tInput = createInput("Time");
    calculateButton = createButton("CALCULATE");

    vInput.position(displayWidth/2 - 100, displayHeight/10 * 4);
    uInput.position(displayWidth/2 - 100, displayHeight/10 * 5);
    tInput.position(displayWidth/2 - 100, displayHeight/10 * 6);
    calculateButton.position(displayWidth/2 - 100, displayHeight/10 * 8);


    vInput.size(200, 100);
    uInput.size(200, 100);
    tInput.size(200, 100);

    calculateButton.size(200,100);
    calculatePressed = "no";
}

function draw () {
    background(0, 255, 255);
    textSize(50)

    text("Speed should be entered in m/s.", 10 , 45)
    text("Time should be entered in s.", 10 , 90)
    text("Acceleration will be returned in m/s/s.", 10 , 135)

    calculateButton.mousePressed(() => {
        v = vInput.value();
        u = uInput.value();
        t = tInput.value();
        calculatePressed = "yes";
    })
    if (calculatePressed == "yes"){
        if (isNaN(v) || isNaN(u) || isNaN(t)) {
            text("Please enter numerical values", 10 , 225);
        }
        if (!isNaN(v) && !isNaN(u) && !isNaN(t)) {
            a = (v-u)/t;
            console.log(a)
            text("If you want to enter different data, enter it and press calculate", 10 , 225);
            text("Else, your current data is:", 10 , 270);
            text("Final velocity  : " + v + " m/s", 10 , 315);
            text("Initial velocity: " + u + " m/s", 10 , 360);
            text("Time: " + t + "s", 10 , 405);
            text("The equation being used is (v-u)/t", 10 , 450);
            text("The answer is " + a + " m/s/s", 10 , 495);
        }
    }
}

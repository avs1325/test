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

    vInput.position(50, 280);
    uInput.position(50, 340);
    tInput.position(50, 400);
    calculateButton.position(50,500);


    vInput.size(100, 50);
    uInput.size(100, 50);
    tInput.size(100, 50);

    calculateButton.size(100,50);
    calculatePressed = "no";
}

function draw () {
    background(255);
    textSize(20)

    text("Speed should be entered in m/s.", 10 , 20)
    text("Time should be entered in s.", 10 , 40)
    text("Acceleration will be returned in m/s/s.", 10 , 60)

    calculateButton.mousePressed(() => {
        v = vInput.value();
        u = uInput.value();
        t = tInput.value();
        calculatePressed = "yes";
    })
    if (calculatePressed == "yes"){
        if (isNaN(v)) {
            if (isNaN(u)) {
                if (isNaN(t)) {
                    text("Please enter numerical values", 10 , 100);
                }
            }
        }
        else {
            if (!isNaN(u)) {
                if (!isNaN(t)) {
                    a = (v-u)/t;
                    console.log(a)
                    text("If you want to enter different data, enter it and press calculate", 10 , 100);
                    text("Else, your current data is:", 10 , 120);
                    text("Final velocity  : " + v + " m/s", 10 , 140);
                    text("Initial velocity: " + u + " m/s", 10 , 160);
                    text("Time: " + t + "s", 10 , 180);
                    text("The equation being used is (v-u)/t", 10 , 200);
                    text("The answer is " + a + " m/s/s", 10 , 220);
                }
            }
        }
    }
}
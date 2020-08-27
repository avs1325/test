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

    vInput.position(displayWidth/2 - 50, displayHeight/2 - (displayHeight/16)*3);
    uInput.position(displayWidth/2 - 50, displayHeight/2 - (displayHeight/16)*2);
    tInput.position(displayWidth/2 - 50, displayHeight/2 - displayHeight/16);
    calculateButton.position(displayWidth-50, displayHeight- 25);


    vInput.size(100, 50);
    uInput.size(100, 50);
    tInput.size(100, 50);

    calculateButton.size(100,50);
    calculatePressed = "no";
}

function draw () {
    background(255);
    textSize(20)

    if (calculatePressed == "no"){
        text("Speed should be entered in m/s.", displayWidth/4, displayHeight/2)
        text("Time should be entered in s.", displayWidth/4, displayHeight/2 + 20)
        text("Acceleration will be returned in m/s/s.", displayWidth/4, displayHeight/2 + 40)
    }
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
                    text("please enter numerical values", displayWidth/4, displayHeight/2);
                }
            }
        }
        else {
            if (!isNaN(u)) {
                if (!isNaN(t)) {
                    a = (v-u)/t;
                    console.log(a)
                    text("if you want to enter different data, enter it and press calculate", displayWidth/4, displayHeight/2);
                    text("else, your current data is:", displayWidth/4, displayHeight/2 + 20);
                    text("final velocity:" + v + " m/s", displayWidth/4, displayHeight/2 + 40);
                    text("initial velocity:" + u + " m/s", displayWidth/4, displayHeight/2 + 60);
                    text("time:" + t + "s", displayWidth/4, displayHeight/2 + 80);
                    text("The equation being used is (v-u)/t", displayWidth/4, displayHeight/2 + 100);   
                    text("The answer is " + a + " m/s/s", displayWidth/4, displayHeight/2 + 120);   
                }
            }
        }
    }
}

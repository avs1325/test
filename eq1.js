function calculate() {
    var v = document.getElementById("v").value;
    var u = document.getElementById("u").value;
    var t = document.getElementById("t").value;
    var ans = (v-u)/t
    if (!Number.isNaN(ans)){
        document.getElementById("ans").innerHTML = "The answer is " + ans;
        console.log("is number")
    }
    else {
        console.log("is not number")
        document.getElementById("ans").innerHTML = "Please enter numerical values";
    }
    
}
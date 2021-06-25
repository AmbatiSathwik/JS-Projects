var btn = document.getElementById("btn");
var color = document.querySelector(".color")

btn.addEventListener("click", function () {
    var col = ''
    a = random();
    b = random();
    c = random();
    col = "rgb(" + String(a) + ',' + String(b) + ',' + String(c) + ')'
    console.log(col)
    document.body.style.backgroundColor = col;
    color.textContent = col;
});

function get(){
    return Math.floor(Math.random()*colors.length);
}

function random(){
    return Math.floor(Math.random()*255);
}
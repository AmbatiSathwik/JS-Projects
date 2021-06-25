
const colors= ["green", "red","white" ,"yellow","blue","wheat"]

var btn = document.getElementById("btn");
var color = document.querySelector(".color")

btn.addEventListener("click", function () {
    const randomNumber = get();
    console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function get(){
    return Math.floor(Math.random()*colors.length);
}

function random(){
    return Math.floor(Math.random()*255);
}
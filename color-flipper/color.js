
var btn = document.getElementById("btn");
var color = document.getElementById("color");
var bod = document.getElementById("body");

function change()
{
    var a,b,c,col;
    a = random();
    b = random();
    c = random();
    col = "rgb("+ a + ',' + b + ',' + ',' + c+ ')';
    body.style.backgroundColor = col;
    console.log(col);
}
function random()
{
    return Math.floor(Math.random()*256);
}
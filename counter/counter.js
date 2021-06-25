number = document.getElementById("number")
decrease = document.getElementById("dec")
reset = document.getElementById("reset")
increase = document.getElementById("inc")

decrease.addEventListener("click", function(){
    var k = number.innerHTML;
    k -= 1;
    number.innerHTML = String(k)
})
reset.addEventListener("click", function(){
    var k = number.innerHTML;
    k = 0;
    number.innerHTML = String(k)
})
increase.addEventListener("click", function(){
    var k = number.innerHTML;
    k = parseInt(k)
    k += 1;
    number.innerHTML = String(k)
})
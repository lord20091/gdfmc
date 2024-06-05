let soat = document.getElementById("hour");
let daqiqa = document.getElementById("minut");
let soniya = document.getElementById("second");
let div = document.getElementById(`div`)
let div2 = document.getElementById(`div2`)
div.style.display = `flex`
div.style.gap = `20px`
div.style.justifyContent = `center`
div.style.alignItems = `center`
div2.style.display = `flex`
div2.style.justifyContent = `center`
div2.style.alignItems = `center`
div2.style.gap = `10px`
div2.style.marginTop = `-20px`




let hour = 0
let minut = 0
let second = 0

setInterval(() => {
    second++
    soniya.innerHTML = second
    if(second == 59){
        second = 0
        minut++
    }
    daqiqa.innerHTML = minut
    if(minut == 59){
        minut = 0
        hour++
    }
    soat.innerHTML = hour
    if(hour == 23){
        hour = 0
    }
}, 1000 );

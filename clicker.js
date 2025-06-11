let clicked = 0;

function apple() {
    clicked+=1;
    document.getElementById("banana").textContent=(`You have clicked this button ${clicked} times.`)
}
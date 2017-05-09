var counterDisplay = document.getElementById('counter');
var counterNumber = 0;

function counter() {
  if (counterNumber === 100) {
    // Stop counter
    endStyle();
    clearInterval(startCounter);
  }
  else {
    // Increase
    counterNumber++;
    counterDisplay.innerHTML = counterNumber;
  }
}
function setStartStyle() {
  counterDisplay.style.backgroundColor = "#2c3e50";
  // counterDisplay.style.width = "";
  counterDisplay.style.padding = "1em";
  counterDisplay.style.fontSize = "1em";
  // counterDisplay.style.height = "";
  counterDisplay.style.position = "absolute";
  counterDisplay.style.top = "50%";
  counterDisplay.style.left = "50%";
  counterDisplay.style.color = "#fff";
  counterDisplay.style.textAlign = "center";
  counterDisplay.style.borderRadius = "50%";
}
function endStyle() {
  document.body.style.backgroundColor = "#2c3e50";
}

setStartStyle();
var startCounter = setInterval(counter, 50);

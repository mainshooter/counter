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
  // Set the style
  counterDisplay.style.backgroundColor = "#2c3e50";
  counterDisplay.style.width = "1em";
  counterDisplay.style.padding = "1em";
  counterDisplay.style.fontSize = "1em";
  counterDisplay.style.height = "1em";
  counterDisplay.style.position = "absolute";
  counterDisplay.style.top = "0";
  counterDisplay.style.left = "0";
  counterDisplay.style.bottom = "0";
  counterDisplay.style.right = "0";
  counterDisplay.style.margin = "auto";
  counterDisplay.style.color = "#fff";
  counterDisplay.style.textAlign = "center";
  counterDisplay.style.borderRadius = "50%";
}
function endStyle() {
  document.body.style.backgroundColor = "#2c3e50";
}

setStartStyle();
var startCounter = setInterval(counter, 50);

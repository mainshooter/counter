var counter;
var counttimer = 0;
var counterInterval;

(function() {
  counter = {
    count: function() {
      counttimer++;
    },
    startStyle: function() {
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
    },
    endStyle: function() {
      document.body.style.backgroundColor = "#2c3e50";
    },
    start: function() {
      counterInterval = setInterval(counter, 50);
      counter.startStyle();
    },
    end: function() {
      clearInterval(counterInterval);
      counter.endStyle();
    }
    check: function() {
      if (counttimer === 100) {
        counter.end();
      }
      else {
        counter.count();
      }
    }
  }
})();
counter.start();

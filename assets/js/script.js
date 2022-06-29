


$("#startButton").click( function() {
  let i = 15;
  setInterval( function() {
    i--;
     if (i >= 0) {
        count = document.getElementById("timeLeft");
        count.innerHTML = i;
     }
     if (i === 0) {
        alert('sorry, out of time');
        /* clearInterval(i); */
      }
    }, 1000);
});
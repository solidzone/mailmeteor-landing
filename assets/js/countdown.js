document.addEventListener("DOMContentLoaded", (e) => {
  var countdowns = document.getElementsByClassName("promo-code-countdown");

  // Countdown to next midnight
  var countDownDate = new Date(new Date().setHours(24, 0, 0, 0));

  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;

    // Display the result in the element with id="demo"
    for (countdown of countdowns) {
      countdown.innerHTML = hours + ":" + minutes + ":" + seconds;
    }

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      for (countdown of countdowns) {
        countdown.innerHTML = "00:00:00";
      }
    }
  }, 1000);
});

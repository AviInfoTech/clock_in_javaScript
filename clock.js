
//clock function starts from here.....
let clkElement = document.querySelector("#analogClock");
let set = -90;

function timer() {
  let date = new Date();

  let milliseconds = date.getMilliseconds();
  let seconds = date.getSeconds();
  let hours = date.getHours();
  let minutes = date.getMinutes();

  seconds += milliseconds / 1000;
  minutes += seconds / 60;
  hours += minutes / 60;

 
  if (hours > 12) {
    hours -= 12;
  }

  clkElement.style.setProperty("--seconds", set + 6 * seconds+"deg" );
  clkElement.style.setProperty("--hours", set + 30 * hours+"deg" );
  clkElement.style.setProperty("--minutes", set + 6 * minutes+"deg");

  requestAnimationFrame(timer);
}
timer();

//Clock function ends here.....

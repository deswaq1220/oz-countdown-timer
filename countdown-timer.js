let intervalId;
let future;

function updateTimer() {
  const now = new Date();
  const diff = future - now;

  if (diff <= 0) {
    document.querySelector(".d").textContent = '00';
    document.querySelector(".h").textContent = '00';
    document.querySelector(".m").textContent = '00';
    document.querySelector(".s").textContent = '00';
    document.querySelector("p").style.display = "block";

    
  } else {
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    document.querySelector(".d").textContent = days;
    document.querySelector(".h").textContent = hours;
    document.querySelector(".m").textContent = mins;
    document.querySelector(".s").textContent = secs;
  }
}

document.getElementById('start').addEventListener('click', function () {
  const userInput = document.getElementById('user-input').value;
  future = new Date(userInput);
  intervalId = setInterval(updateTimer, 1000);
});

document.getElementById('stop').addEventListener('click', function () {
  clearInterval(intervalId);
});

document.getElementById('reset').addEventListener('click', function () {
  clearInterval(intervalId);
  document.querySelector(".d").textContent = '00';
  document.querySelector(".h").textContent = '00';
  document.querySelector(".m").textContent = '00';
  document.querySelector(".s").textContent = '00';

  document.querySelector("p").style.display = "none";
});



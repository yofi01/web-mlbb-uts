const navBar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) { 
    navBar.classList.add("scrolling-active");
  } else {
    navBar.classList.remove("scrolling-active");
  }
});

const backgroundMusic = document.getElementById("backgroundMusic");
const playButton = document.getElementById("playButton");
const pauseButton = document.getElementById("pauseButton");

playButton.addEventListener("click", () => {
  backgroundMusic.play();
  playButton.style.display = "none";
  pauseButton.style.display = "inline-block";
});

pauseButton.addEventListener("click", () => {
  backgroundMusic.pause();
  playButton.style.display = "inline-block";
  pauseButton.style.display = "none";
});


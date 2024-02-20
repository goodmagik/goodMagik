const audio = document.getElementById("myAudio");
const audioControl = document.getElementById("audioControl");
const playIcon = '<i class="fa fa-play fa-xl"></i>'; // Font Awesome play icon
const pauseIcon = '<i class="fa fa-pause fa-xl"></i>'; // Font Awesome pause icon
audio.volume = 0.5;

audioControl.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    audioControl.innerHTML = pauseIcon;
  } else {
    audio.pause();
    audioControl.innerHTML = playIcon;
  }
});

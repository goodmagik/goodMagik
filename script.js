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

// Place this code at the end of your script.js file
// Text to be typed
var textToType = [
  "<p>We were fools, my Kindred,</p>",
  "<p>We allowed ourselves to be led astray.</p>",
  "<p>But have we not paid our debts tenfold, my Kindred?</p>",
  "<p>Must our eternal tomorrows continue to be sacrificed as penance</p>",
  "<p>for these long-since passed transgressions?</p>",
  "<p>Will there be no end to this eternal suffering?</p>",
  "<p>Have our names been forgotten by the All-knowing?</p>",
  "<p>I say no, my Kindred.</p>",
  "<p>No.</p>",
  "<p>If we are to escape Hell...</p>",
  "<p>we must begin to dig.</p>",
];

// Function to simulate typing effect
function typeText(text, index, interval) {
  if (index < text.length) {
    document.getElementById("typing-container").innerHTML += text.charAt(index);
    index++;
    setTimeout(function () {
      typeText(text, index, interval);
    }, interval);
  }
}

// Call the typing function with appropriate interval
var typingInterval = 100; // Adjust typing speed as needed
for (var i = 0; i < textToType.length; i++) {
  setTimeout(
    function (index) {
      typeText(textToType[index], 0, typingInterval);
    },
    i * typingInterval * textToType[i].length,
    i
  );
}

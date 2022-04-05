window.addEventListener('load', function(){
    var minAudio = document.getElementById("minAudio");

    minAudio.onplaying = function() {
      isPlaying = true;
    };
    minAudio.onpause = function() {
      isPlaying = false;
    };
});

var isPlaying = false;

function togglePlay() {
    if (isPlaying) {
        minAudio.pause()
    } else {
        minAudio.play();
    }
}
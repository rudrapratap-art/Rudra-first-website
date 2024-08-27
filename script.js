

// script.js
document.getElementById('loadVideo').addEventListener('click', function() {
    const videoURL = document.getElementById('videoURL').value;
    const videoPlayer = document.getElementById('videoPlayer');

    if (videoURL) {
        videoPlayer.src = videoURL;
        videoPlayer.load();
        videoPlayer.play();
    } else {
        alert("Please enter a valid video link.");
    }
});
console.log("hello world")

var elem = document.documentElement; 

video = document.querySelector("#video");
sourceVideo = document.querySelector("#SourceVideo");

addEventListener('click', openDoor);

function openDoor() {
    fullscreen();
    removeEventListener('click', openDoor);
    console.log("door opened");
    console.log(sourceVideo.src);
    sourceVideo.src = "../assets/loopV1/Part 2.mp4";
    console.log(sourceVideo.src);
    video.load();
    setTimeout(introduction, 25000);
}

function introduction() {
    console.log("door opened");
    console.log(sourceVideo.src);
    sourceVideo.src = "../assets/loopV1/Part 1.mp4";
    console.log(sourceVideo.src);
    video.load();
    setTimeout(waiting, 9000)
}

function waiting() {
    addEventListener('click', openDoor);
    sourceVideo.src = "../assets/loopV1/Loop.mp4";
    video.load();
}

function fullscreen() {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.webkitRequestFullscreen) { /* Safari */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE11 */
        video.msRequestFullscreen();
    }
}
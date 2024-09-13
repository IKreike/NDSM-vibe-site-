console.log("hello world")

var elem = document.documentElement; 

video = document.querySelector("#video");
sourceVideo = document.querySelector("#SourceVideo");

video.addEventListener('click', openDoor);

function openDoor() {
    // fullscreen(); 
    video.removeEventListener('click', openDoor);
    console.log("door opened");
    console.log(sourceVideo.src);
    sourceVideo.src = "assets/Part_2.mp4";
    console.log(sourceVideo.src);
    video.load();
    video.play();
    setTimeout(introduction, 31000);
}

function introduction() {
    console.log("door opened");
    console.log(sourceVideo.src);
    sourceVideo.src = "assets/Part_1.mp4";
    console.log(sourceVideo.src);
    video.load();
    video.play();
    setTimeout(waiting, 9000)
}

function waiting() {
    video.addEventListener('click', openDoor);
    sourceVideo.src = "assets/Loop.mp4";
    video.load();
    video.play();
}

// function fullscreen() {
//     if (elem.requestFullscreen) {
//         elem.requestFullscreen();
//     } else if (elem.webkitRequestFullscreen) { /* Safari */
//         elem.webkitRequestFullscreen();
//     } else if (elem.msRequestFullscreen) { /* IE11 */
//         elem.msRequestFullscreen();
//     }
// }
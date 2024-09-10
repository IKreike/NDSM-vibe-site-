console.log ("hello world")

video = document.querySelector("#video");
sourceVideo = document.querySelector("#SourceVideo");

addEventListener ('click', openDoor);

function openDoor(){
    removeEventListener ('click', openDoor);
    console.log("door opened");
    console.log(sourceVideo.src);
    sourceVideo.src = "./assets/randomvideo2.mp4";
    console.log(sourceVideo.src);
    video.load();
    setTimeout(introduction, 2000)
}

function introduction (){
    console.log("door opened");
    console.log(sourceVideo.src);
    sourceVideo.src = "./assets/randomvideo3.mp4";
    console.log(sourceVideo.src);
    video.load();
    setTimeout(waiting, 2000)
}

function waiting(){
    addEventListener ('click', openDoor);
    sourceVideo.src = "./assets/randomvideo1.mp4";
    video.load();
}
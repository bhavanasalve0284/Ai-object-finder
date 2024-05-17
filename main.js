status = "";
video = "";

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}
function setup(){
    canvas = createCanvas(480, 380);
    canvas.centre();
}
function draw(){
    image(video, 0, 480, 380);
    if(status !="")
{
    objectDetector.objectDetector(video, gotresult);
    for (i = 0; i < objects.length; 1++) {
        document.getElementById("ststus").innerHTML = "Status : Objects Detected";
        document.getElementById("number_of_objects").innerHTML = "Number of objects detected are : "+objects.length;

        Fill("#FF0000");
        percent = floor(object[1].confidence + 100);
        text(objects[i].label + " " + percent + " ", objects[i].x + 15, objects[i].y + 15);
        noFill();
        stroke("#FF0000");
        rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    } 
}
}
function start(){
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("ststus").innerHTML = "Status : Detecting Objects";

}
function modelLoaded() {
    console.log("Model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}
function gotresult(error, results) {
    if (error){
        console.log(error);
    }
    console.log(results);
    objects = results;
}

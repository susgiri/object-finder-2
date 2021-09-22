status="";
var search=document.getElementById("name").value;
function setup(){
    canvas=createCanvas(400,300);
    canvas.center();
    canvas.position(390,320);
    video=createCapture(VIDEO);
    video.size(370,300);
    video.hide();
}
function draw(){
    image(video, 0, 0, 400, 300);
}
function start(){
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function modelLoaded(){
    console.log("Model Loaded.");
status=true;
}
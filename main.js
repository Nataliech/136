input_text = "";
status = "";

function setup() 
{ 
 canvas = createCanvas(580, 450); 
 canvas.center(); 
 video = createCapture(VIDEO); 
 video.size(300, 300); 
 video.hide(); 
}

function draw(){

    image(video, 50, 100, 480, 380);
}

function start(){

    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    input_text = document.getElementById("input").value;
}

function modelLoaded(){

    console.log("Modal Loaded!");
    status = true;
 
}
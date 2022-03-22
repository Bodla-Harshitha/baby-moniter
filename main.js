
status ="";
objects="";
function preload(){
    
    
}

function setup(){
   canvas= createCanvas(400,400);
   canvas.center();
   video=createCapture(VIDEO);
   video.hide();
   video.size(400,400);
   objectDetector=ml5.objectDetector('cocossd',modelloaded);
   document.getElementById("status").innerHTML="Object Detecting";
}
function modelloaded(){
console.log("model is loaded");
status=true;

}
function gotresults(error,results){
    if (error){
        console.log(error);
    }
    console.log(results);
    objects=results;
}
function draw() {
    image(video, 0, 0, 400, 400);
  
        if(status != "")
        {
          objectDetector.detect(video,gotresults);
          r = random(255);
          g = random(255);
          b = random(255);
          for (var i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number").innerHTML="Number of objects Detected :"+objects.length;
      
            fill(r,g,b);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke(r,g,b);
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
          }
        }
  }
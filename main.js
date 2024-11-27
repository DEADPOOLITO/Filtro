nariz_x=0;
nariz_y=0;


function preload(){
headphones=loadImage("https://i.postimg.cc/TwV0tmWt/CP-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded(){
    console.log("poseNet está inicializado");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("Nariz X= "+results[0].pose.nose.x);
        console.log("Nariz Y= "+results[0].pose.nose.y);
        nariz_x=results[0].pose.nose.x-120;
        nariz_y=results[0].pose.nose.y-150;
    }
}
function draw(){
    image(video, 0, 0, 300, 300);
    /*fill("red");
    stroke("blue");
    circle(nariz_x, nariz_y, 20);*/
    image(headphones, nariz_x, nariz_y, 250, 200);
}
function take_snapshot(){
    save("photo.png");
}

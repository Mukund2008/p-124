noseX=0;
noseY=0;
leftWristX=0;
rightWristX=0;
difference=0;
function setup()
{
    video=createCapture(VIDEO);
    video.size(400,330);
    video.position(100,150)

    canvas=createCanvas(450,450);
    canvas.position(600,100);

    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on("pose",gotPoses)
}

function draw()
{
 background("#808080");
 document.getElementById("square_side").innerHTML="Width and Height of the square will be= "+difference;
 fill("#FF1493");
 stroke("#FF1493");
 square(noseX,noseY,difference);
}


function modelLoaded()
{
    console.log("poseNet is Initialised" )
}

function gotPoses(results)
{
 if(results.length>0)
 {
    console.log(results)
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nose x ="+noseX+"nose y ="+noseY);

    leftWristX=results[0].pose.leftWrist.x;
    rightWristX=results[0].pose.rightWrist.x;
    difference=floor(leftWristX-rightWristX);
    console.log("leftWrist x ="+leftWristX+"rightWrist x ="+rightWristX+"difference="+difference);
 }
}

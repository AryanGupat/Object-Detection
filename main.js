var img = "" ;
var status="";
var objectdetecter="";
var object=[];
function preload()
{
img=loadImage("dog_cat.jpg");
}
function setup()
{
canvas=createCanvas(600 , 400)
canvas.center()
objectdetecter=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("Status").innerHTML="Status : Detecting Object please Wait";
}
function draw()
{
image(img, 0 ,  0 , 600 , 400 )
if (status != "" );
{
for (i=0; i<object.length; i++)
{
    document.getElementById("Status").innerHTML="Status : Object Detected";
    fill("red")
    percent= floor(object[i].confidence * 100)

    text(object[i].label+percent+"%" ,object[i].x  ,object[i].y )
    noFill()
    rect(object[i].x,object[i].y,object[i].width,object[i].height)
}
}


}
function modelLoaded()
{
console.log("Model is not got the object");
status=true
objectdetecter.detect(img , gotResult);
}
function gotResult(error , result)
{
if(error)
{
    console.log(error);
}
else
{
    console.log(result);
    object=result;
}
}
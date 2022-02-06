quick_draw_data_set=["airpods","apple","alarm clock","raccoon","basketball","magic","bracelet","watch","butterfly","envelope","umbrella","controller"];
randomnumber=Math.floor((Math.random()*quick_draw_data_set.length)+1);
sketch=quick_draw_data_set[randomnumber];
document.getElementById("Sketch_Name").innerHTML="sketch to be drawn: "+sketch;
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
}
function preload()
{
    classifier=ml5.imageClassifier('DoodleNet');
}
function clearCanvas()
{
    background("white");
}
function draw()
{
    strokeWeight(13);
    stroke("black");
    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
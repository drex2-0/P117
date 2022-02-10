quick_draw_data_set=["airpods","apple","alarm clock","raccoon","basketball","magic","bracelet","watch","angel","envelope","umbrella","controller"];
randomnumber=Math.floor((Math.random()*quick_draw_data_set.length)+1);
sketch=quick_draw_data_set[randomnumber];
document.getElementById("Sketch_Name").innerHTML="sketch to be drawn: "+sketch;
counter=0;
timercheck="";
drawnsketch="";
answer="";
score=0;
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyCanvas);
}
function preload()
{
    classifier=ml5.imageClassifier('DoodleNet');
}
function clearCanvas()
{
    background("white");
    randomnumber=Math.floor((Math.random()*quick_draw_data_set.length)+1);
sketch=quick_draw_data_set[randomnumber];
document.getElementById("Sketch_Name").innerHTML="sketch to be drawn: "+sketch;


}
function draw()
{
    strokeWeight(13);
    stroke("black");
    if(mouseIsPressed)
    {
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
    checksketch();
    if(drawnsketch==sketch)
    {
        answer="set";
        score++;
        document.getElementById("score").innerHTML="score: "+score
    }
}  
function classifyCanvas()
{
    classifier.classify(canvas,gotresult);
}
function gotresult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    drawnsketch=results[0].label;
    document.getElementById("label").innerHTML="Your Sketch: "+drawnsketch;
    document.getElementById("confidence").innerHTML="Confidence: "+ Math.round(results[0].confidence*100)+"%";
   
}
function checksketch()
{
    counter=counter+1;
    document.getElementById("time").innerHTML="Timer: "+counter;
    if(counter>2000)
    {
        counter=0;
        timercheck="completed";
    }
    if(timercheck=="completed"|| answer=="set")
    {
        timercheck="";
        answer="";
        clearCanvas();
    }
}
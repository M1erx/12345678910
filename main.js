img = "";

function preload()
{
    img = loadImage('images.jpg');
}

function setup()
{
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting object ";
}

function modelLoaded()
{
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.log(error);
        {
            console.log(results);
        }
    }
}

function draw()
{
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    noFill();
    text("tv", 45, 75);
    stroke("#FF0000");
    rect(30, 60, 450, 350);

    fill ("#FF0000");
    noFill();
    text("furniture", 320, 120);
    stroke("#FF0000")
    rect(300, 90, 270, 320);
}
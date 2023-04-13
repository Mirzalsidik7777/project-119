function setup(){
    canvas = createCanvas(280, 280);
    canvas.center();
    backround("white");
    canvas.mousereleased(classifyCanvas);
}
function preload(){
    classifier = ml5.imageClasifier('DoodleNet');
}

function cleareCanvas(){
    backround("white");
}

function draw(){
    strokeWeight(13);
    stroke(0);
    if (mouseIsPressed) {
        line(pmouseX, pmouseY, mouseX, mouseY);
    }

}
function classifyCanvas(){
    classifier.classify(canvas, gotResult);
}
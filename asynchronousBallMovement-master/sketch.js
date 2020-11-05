var ball;
var database
var dbPosition

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database = firebase.database()
    var ballPosition = database.ref('ball/position')
    ballPosition.on("value",readPosition, showError)
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
        'x': dbPosition.x+x,
        'y': dbPosition.y+y
    })

}

function readPosition(data){
    dbPosition = data.val()
    ball.x = dbPosition.x
    ball.y = dbPosition.y
}

function showError(){
    console.log("Error in the databse")
}
var canva,contestant;

function setup(){
  canvas = createCanvas(400,400);
  database=firebase.database();
  q=new quiz;
  q.getState();
  q.start();
}


function draw(){
  background("pink");
if(allContestants===4){
  gameState=1
}
if(gameState===1){
  q.play();
}
  
}

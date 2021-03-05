class quiz{
    getState(){
      var gamestate=database.ref('gameState')
       gamestate.on('value',function(data){
            gameState=data.val();
        })
    }
    updateState(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState===0){
            contestant=new Contestant();
            var contestantCountRef=await database.ref('contestantCount').once("value")
            if(contestantCountRef.exists()){
                contestantCount=contestantCountRef.val();
                contestant.getCount();
        }
        question=new Question();
        question.display();
    }
}
play(){
    question.hide();
    background("yellow");
    text("Result(Green=correct)",200,250)
    Contestant.getContestantInfo();
    if(allContestants!==undefind){
        for(var plr in allContestants){
            var correct="2"
            if(correct===allcontestants[plr].answer){
                fill("green")
            }else{
                fill("red")
            }
        }
    }

}
}
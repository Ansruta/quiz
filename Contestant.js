class Contestant {
    constructor(){
      this.index = null;
    this.name = null;
    }
  
    getCount(){
      var ContestantCountRef = database.ref('contestantCount');
      ContestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(){
      var playerIndex = "contestants/contestant" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
      });
    }
  
    static getContestantInfo(){
      var contestantInfoRef = database.ref('players');
     contestantInfoRef.on("value",(data)=>{
        allContestants = data.val();
      })
    }
}
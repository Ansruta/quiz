class Question{
    constructor(){
        this.input=createInput("Name");
        this.button=createButton("Submit");
        this.question=createElement('h2');
        this.title=createElement('h2');
        this.ans=createInput("answer")
        this.o1=createElement('h2');
        this.o2=createElement('h2');
        this.o3=createElement('h2');
        this.o4=createElement('h2');
    }
    hide(){
        this.input.hide();
        this.button.hide();
      
        this.title.hide();
    }
    display(){
        this.title.html(" Lets the Quiz Start");
        this.title.position(350,0);
        this.question.html("What starts and ends with 'e' and has only one letter?")
        this.question.position(150,80);
        this.o1.html("1.Everyone");
        this.o1.position(150,100)
        this.o1.html("1.Envelope");
        this.o1.position(150,120)
        this.o1.html("1.Estimate");
        this.o1.position(150,140)
        this.o1.html("1.Example");
        this.o1.position(150,160)

        this.ans.position(350,230)
        this.input.position(150,230)
        this.button.position(350,300)
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            contestant.name=this.input.value();
            contestantCount+=1
            contestant.index=contestantCount;
            contestant.answer=this.ans.value();
            player.update();
            player.updateCount(contestantCount)
           
        })

    }
    
}
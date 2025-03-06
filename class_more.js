class Player{
    constructor(name,runs,wickets){
        this.name = name;
        this.runs = runs;
        this.wickets  = wickets;
    }

    getRun(){
        return `Your Run is ${this.runs}`;
    }
    increamentRun(run){
        this.runs+= run;
    }
}

const player1 = new Player("Atik",300,4)


player1.name = "Atki Ullah"
console.log(player1)
player1.increamentRun(6);

const Player1Run = player1.getRun()
console.log(Player1Run)

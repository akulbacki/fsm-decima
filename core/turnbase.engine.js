class TurnBaseEngine {
    constructor(players, timer) {
        this.players = players;
        this.playerCount = this.players.length - 1;
        this.turn = Math.round(Math.random() * this.playerCount);
        this.playerTurn = players[this.turn];

        this.curTurnTime = 0;
        this.maxTurnTime = timer;
        //this.checkTimer();
    }

    setTurn(t){
        this.turn = t;
    }

    setPlayerTurn(){
        this.playerTurn = this.players[this.turn];
    }

    nextTurn(repeat = false){

        if( !repeat ){
            const nextPlayerTurn = (this.playerCount <= this.turn) ? 0 : this.turn + 1;
            this.turn = nextPlayerTurn;
        }

        this.setPlayerTurn();
        this.dropTimer();
        this.startTurn();
    }

    checkTimer(){
        this.dropTimer();
        this.startTurn();

        setInterval(() => {
            const time = performance.now();
            if( this.curTurnTime < time) {
                this.nextTurn();
            }
        }, this.maxTurnTime);
    }

    startTurn(){
        this.curTurnTime = performance.now();
    }

    dropTimer(){
        this.curTurnTime = 0;
    }
}
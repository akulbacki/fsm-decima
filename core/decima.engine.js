class DecisionMaker {
    constructor(defaultBehavior, actions = {}) {
        this.actions = actions;

        this.looseChance = 0;
        this.winChance = 0;
        this.defaultBehavior = defaultBehavior;

        this.say("Привет мир!");
    }

    
    say(txt) {
        console.log('Decima:', txt);
    }

    think(inputData) {
        this.looseChance = 0;
        this.winChance = 0;

        // Считаем количество атак до поражения и победы
        for (var i = 0; i < inputData.length; i++) {

            if( inputData[i].owner == "human" ) {
                // Потому что мы не уверены сколько будет врагов
                this.looseChance +=  inputData[i].health / 10;
            } else {
                // Потому что мы не уверены сколько будет врагов
                this.winChance +=  inputData[i].health / 10;
            }
        }

        this.say(`Шансы проиграть ${this.looseChance} и выиграть ${this.winChance}`);

        this.behavior(this.defaultBehavior);
    }

    behavior(whatToDo) {
        whatToDo(this.winChance, this.looseChance);
    }
}
export default class Player {


    constructor(name) {

        this.Cards = [];
        this.CardValues = [];
        this.CardsInHand = 0;
        this.name = name;
        this.turn = true;
        this.busted = false;
        this.wins = 0;
        this.losses = 0;
        this.ties = 0;

    }

    HandTotal() {
        let total = 0;
        for (let i = 0; i < this.CardValues.length; i++) {
            total += this.CardValues[i];
        }
        return total;
    }
    ResetHand() {
        this.Cards = [];
        this.CardValues = [];
        this.CardsInHand = 0;
        this.busted = false;
    }

    CheckAce() {
        let blnAce = false;
        let numLoops = 0;
        do {
            if (this.CardValues[numLoops] == 11) {
                this.CardValues[numLoops] = 1;
                blnAce = true;
            }
            numLoops++;
        } while (!blnAce && numLoops <= (this.CardsInHand) && numLoops < 5); //Do this for only one ace
        return blnAce;
    }
}
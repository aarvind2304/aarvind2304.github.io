import Deck from "./deck.js"
import Player from "./player.js"

export default class Game {

    constructor(player, dealer, deck) {

        this.deck = deck;
        this.player = player;
        this.dealer = dealer;
        this.gamestate = {
            playerhand: new Array(),
            dealerhand: new Array(),
            playerState: -1,
            playerAction: 0,
            end: false


        };

        this.deck.Shuffle();
        this.Deal(this.player);
        this.Deal(this.dealer);
        this.Deal(this.player);
        this.Deal(this.dealer);

        console.log("Your cards :" + this.player.Cards[0] + " and " +this.player.Cards[1]);
        console.log("Dealer cards :" + this.dealer.Cards[0] );
        console.log(player);
        console.log(dealer);

    }

    NewHands()
    {
        this.player.ResetHand();
        this.dealer.ResetHand();
        this.Deal(this.player);
        this.Deal(this.dealer);
        this.Deal(this.player);
        this.Deal(this.dealer);

    }

    endofDeck()
    {
        this.deck.ResetDeck();
        this.deck.Shuffle();
        this.player.ResetHand();
        this.dealer.ResetHand();
        this.Deal(this.player);
        this.Deal(this.dealer);
        this.Deal(this.player);
        this.Deal(this.dealer);
    }

    Deal(user) {
        var strOutput = "";
        if (this.deck.intCardNumber < 42 && user.CardsInHand < 5) {



            user.Cards[user.CardsInHand] = this.deck.shuffledDeck[this.deck.intCardNumber][0];
            user.CardValues[user.CardsInHand] = parseInt(this.deck.shuffledDeck[this.deck.intCardNumber][1]);
            if (user.HandTotal() > 21)
                user.CheckAce();
            strOutput = "You get a " + user.Cards[user.CardsInHand] + " -- You have " + user.HandTotal();
            this.deck.intCardNumber++;
            user.CardsInHand++;


            if (user.name.localeCompare("Dealer") == 0) {
                this.gamestate.dealerhand = user.Cards;
            }
            else {

                this.gamestate.playerhand = user.Cards;
            }


            //check WLP


        }
        else {
            this.gamestate.end = true;
        }


    }

    Play() {
        let strOutput = "";
        if (this.player.turn) {
            let playerAction = this.gamestate.playerAction;

            if (playerAction == 1) {
                console.log('before hit');
                this.Hit(this.player, this.dealer);
            }
            else if (playerAction == 0) {
                this.player.turn = false;
                this.dealer.turn = true;
                strOutput = "You stand with " + this.player.HandTotal();
                
                console.log("player chose stand");
                console.log(this.player.HandTotal())
                console.log(this.player);
                console.log(this.dealer);

                //stand message
                console.log(strOutput);
                console.log("Press enter when ready for the dealer to play.");
                console.log();
                this.Play();
            }
            if (this.player.HandTotal() == 21) {
                console.log();

                //blackjack for user
                this.player.turn = false;
                this.dealer.turn = true;



                console.log("dealer's Turn.");
                console.log();
            }
            else if (this.player.HandTotal() > 21) {
                if (!this.player.CheckAce()) {
                    console.log("Busted");
                    this.player.busted = true;
                    console.log();
                    this.player.turn = false;
                    this.dealer.turn = true;
                    console.log("dealer's Turn.");
                    console.log();
                }
                this.Play();
            }
            if (this.player.CardsInHand == 5) {
                this.player.turn = false;
                this.dealer.turn = true;
                strOutput = "That was your 5th Card. It's dealer's Turn. ";
                console.log(strOutput);
                console.log();
                this.Play();
            }

        }//End of 'if (playersTurn)'
        else if (!this.player.turn) {
            if (this.dealer.CardsInHand == 2) {
                //Turn over the hole card
                strOutput = "dealer has " + this.dealer.Cards[0] + " " + this.dealer.Cards[1];
                console.log(strOutput);
                if (this.dealer.HandTotal() < 17) {
                    strOutput = "dealer will hit...";
                    console.log(strOutput);
                    this.Hit(this.player, this.dealer);
                    this.Play();
                }
                else {
                    strOutput = "dealer stands with " + this.dealer.HandTotal();
                    console.log(strOutput);
                    strOutput = this.WinLoseTie(this.player, this.dealer);
                    console.log(strOutput);
                    this.player.turn = true;
                    this.dealer.turn = false;

                    //win condition
                }
            }//End of 'first two cards of the dealer'
            else if (this.dealer.CardsInHand == 5) {
                if (this.dealer.HandTotal() > 21)
                    this.dealer.busted = true;
                strOutput = this.WinLoseTie(this.player, this.dealer);
                console.log(strOutput);
                this.player.turn = true;
                this.dealer.turn = false;

                //win condition

            }
            else if (this.dealer.CardsInHand > 2 && this.dealer.HandTotal() < 17) {
                strOutput = "dealer will Hit.";
                console.log(strOutput);
                this.Hit(this.player, this.dealer);
                this.Play();
            }
            else if (this.dealer.CardsInHand > 2 && this.dealer.HandTotal() >= 17 && this.dealer.HandTotal() <= 21) {
                strOutput = this.WinLoseTie(this.player, this.dealer);
                console.log(strOutput);
                this.player.turn = true;
                this.dealer.turn = false;


                //win condition

            }
            else if (this.dealer.CardsInHand > 2 && this.dealer.HandTotal() > 21) {
                if (!this.dealer.CheckAce()) {
                    strOutput = "dealer Busts with " + this.dealer.HandTotal();
                    console.log(strOutput);
                    this.dealer.busted = true;
                    strOutput = this.WinLoseTie(this.player, this.dealer);
                    console.log(strOutput);

                    this.player.turn = true;
                    this.dealer.turn = false;
                }

            }
        }// End of the else If (!playersTurn)
        // The dealer Stands...

        this.gamestate.playerhand = this.player.Cards;
        this.gamestate.dealerhand = this.dealer.Cards;


    }

  

    Hit(player, dealer) {
        console.log("in hit");
        let strOutput = "";
        if (player.turn) {
            player.Cards[player.CardsInHand] = this.deck.shuffledDeck[this.deck.intCardNumber][0];
            player.CardValues[player.CardsInHand] = parseInt(this.deck.shuffledDeck[this.deck.intCardNumber][1]);
            if (player.HandTotal() > 21)
                player.CheckAce();
            strOutput = "You get a " + player.Cards[player.CardsInHand] + " -- You have " + player.HandTotal();
            this.deck.intCardNumber++;
            player.CardsInHand++;
            this.gamestate.playerhand = this.player.Cards;
            console.log(strOutput);
        }
        else {
            if (dealer.CardsInHand < 5) {
                dealer.Cards[dealer.CardsInHand] = this.deck.shuffledDeck[this.deck.intCardNumber][0];
                dealer.CardValues[dealer.CardsInHand] = parseInt(this.deck.shuffledDeck[this.deck.intCardNumber][1]);
                if (dealer.HandTotal() > 21)
                    dealer.CheckAce();
                strOutput = "dealer takes a " + dealer.Cards[dealer.CardsInHand] + " -- dealer has " +
                    dealer.HandTotal();
                this.deck.intCardNumber++;
                dealer.CardsInHand++;
                this.gamestate.dealerhand = this.dealer.Cards;
            }
        }
    }

    WinLoseTie(player, dealer) {
        let strResult = "";
        if (player.busted && dealer.busted) {
            strResult = "You and the dealer have busted -- Push";
            player.ties++;
            this.gamestate.playerState = 2;
        }
        else if (player.busted && !dealer.busted) {
            strResult = "The dealer wins this hand.";
            player.losses++;
            this.gamestate.playerState = 0;

        }
        else if (!player.busted && dealer.busted) {
            strResult = "You win this hand!";
            player.wins++;
            this.gamestate.playerState = 1;

        }
        else if (!player.busted && player.HandTotal() == dealer.HandTotal()) {
            strResult = "This hand is a tie.";
            player.ties++;
            this.gamestate.playerState = 2;

        }
        else if (!player.busted && player.HandTotal() < dealer.HandTotal()) {
            strResult = "The dealer wins this hand.";
            player.losses++;
            this.gamestate.playerState = 0;

        }
        else if (!player.busted && player.HandTotal() > dealer.HandTotal()) {
            strResult = "You win this hand.";
            player.wins++;
            this.gamestate.playerState = 1;

        }
    
        player.turn = true;
        dealer.turn = false;
        return strResult;
    }

}
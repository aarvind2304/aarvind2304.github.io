import Deck from "./deck.js"
import Player from "./player.js"
import Game from "./game.js"

function display(cards, id) {
    console.log(cards);
    for (let i = 0; i < cards.length; i++) {
        let card = "";
        if (cards[i].localeCompare("Ace of Diamonds") == 0) {
            card = "AD"
        }
        else if (cards[i].localeCompare("Two of Diamonds") == 0) {
            card = "2D"
        }
        else if (cards[i].localeCompare("Three of Diamonds") == 0) {
            card = "3D"
        }
        else if (cards[i].localeCompare("Four of Diamonds") == 0) {
            card = "4D"
        }
        else if (cards[i].localeCompare("Five of Diamonds") == 0) {
            card = "5D"
        }
        else if (cards[i].localeCompare("Six of Diamonds") == 0) {
            card = "6D"
        }
        else if (cards[i].localeCompare("Seven of Diamonds") == 0) {
            card = "7D"
        }
        else if (cards[i].localeCompare("Eight of Diamonds") == 0) {
            card = "8D"
        }
        else if (cards[i].localeCompare("Nine of Diamonds") == 0) {
            card = "9D"
        }
        else if (cards[i].localeCompare("Ten of Diamonds") == 0) {
            card = "10D"
        }
        else if (cards[i].localeCompare("Jack of Diamonds") == 0) {
            card = "JD"
        }
        else if (cards[i].localeCompare("Queen of Diamonds") == 0) {
            card = "QD"
        }
        else if (cards[i].localeCompare("King of Diamonds") == 0) {
            card = "KD"
        }
        else if (cards[i].localeCompare("Ace of Hearts") == 0) {
            card = "AH"
        }
        else if (cards[i].localeCompare("Two of Hearts") == 0) {
            card = "2H"
        }
        else if (cards[i].localeCompare("Three of Hearts") == 0) {
            card = "3H"
        }
        else if (cards[i].localeCompare("Four of Hearts") == 0) {
            card = "4H"
        }
        else if (cards[i].localeCompare("Five of Hearts") == 0) {
            card = "5H"
        }
        else if (cards[i].localeCompare("Six of Hearts") == 0) {
            card = "6H"
        }
        else if (cards[i].localeCompare("Seven of Hearts") == 0) {
            card = "7H"
        }
        else if (cards[i].localeCompare("Eight of Hearts") == 0) {
            card = "8H"
        }
        else if (cards[i].localeCompare("Nine of Hearts") == 0) {
            card = "9H"
        }
        else if (cards[i].localeCompare("Ten of Hearts") == 0) {
            card = "10H"
        }
        else if (cards[i].localeCompare("Jack of Hearts") == 0) {
            card = "JH"
        }
        else if (cards[i].localeCompare("Queen of Hearts") == 0) {
            card = "QH"
        }
        else if (cards[i].localeCompare("King of Hearts") == 0) {
            card = "KH"
        }
        else if (cards[i].localeCompare("Ace of Spades") == 0) {
            card = "AS"
        }
        else if (cards[i].localeCompare("Two of Spades") == 0) {
            card = "2S"
        }
        else if (cards[i].localeCompare("Three of Spades") == 0) {
            card = "3S"
        }
        else if (cards[i].localeCompare("Four of Spades") == 0) {
            card = "4S"
        }
        else if (cards[i].localeCompare("Five of Spades") == 0) {
            card = "5S"
        }
        else if (cards[i].localeCompare("Six of Spades") == 0) {
            card = "6S"
        }
        else if (cards[i].localeCompare("Seven of Spades") == 0) {
            card = "7S"
        }
        else if (cards[i].localeCompare("Eight of Spades") == 0) {
            card = "8S"
        }
        else if (cards[i].localeCompare("Nine of Spades") == 0) {
            card = "9S"
        }
        else if (cards[i].localeCompare("Ten of Spades") == 0) {
            card = "10S"
        }
        else if (cards[i].localeCompare("Jack of Spades") == 0) {
            card = "JS"
        }
        else if (cards[i].localeCompare("Queen of Spades") == 0) {
            card = "QS"
        }
        else if (cards[i].localeCompare("King of Spades") == 0) {
            card = "KS"
        }
        else if (cards[i].localeCompare("Ace of Clubs") == 0) {
            card = "AC"
        }
        else if (cards[i].localeCompare("Two of Clubs") == 0) {
            card = "2C"
        }
        else if (cards[i].localeCompare("Three of Clubs") == 0) {
            card = "3C"
        }
        else if (cards[i].localeCompare("Four of Clubs") == 0) {
            card = "4C"
        }
        else if (cards[i].localeCompare("Five of Clubs") == 0) {
            card = "5C"
        }
        else if (cards[i].localeCompare("Six of Clubs") == 0) {
            card = "6C"
        }
        else if (cards[i].localeCompare("Seven of Clubs") == 0) {
            card = "7C"
        }
        else if (cards[i].localeCompare("Eight of Clubs") == 0) {
            card = "8C"
        }
        else if (cards[i].localeCompare("Nine of Clubs") == 0) {
            card = "9C"
        }
        else if (cards[i].localeCompare("Ten of Clubs") == 0) {
            card = "10C"
        }
        else if (cards[i].localeCompare("Jack of Clubs") == 0) {
            card = "JC"
        }
        else if (cards[i].localeCompare("Queen of Clubs") == 0) {
            card = "QC"
        }
        else if (cards[i].localeCompare("King of Clubs") == 0) {
            card = "KC"
        }

        let hand = $(id);
        hand.append(`
        
          
            <img src="/Cards/${card}.png">
           
        
        `)

    }

}



var game;
var player;
var dealer;
export const submitUsernameEvent = function (event) {
    event.preventDefault();

    let username = $('#username_field').val();
    player = new Player(username);
    dealer = new Player("Dealer");
    dealer.turn = false;
    let deck = new Deck();
    $('#username_section').css('display', 'none')
    $('#blackjackContainer').css('display', 'block')

    game = new Game(player, dealer, deck);

    let playerCards = game.gamestate.playerhand;
    let dealerhand = game.gamestate.dealerhand;

    let hand = $('#dealerCards');
    hand.append(`
        
            
            <img src="/Cards/back.png">
           
           
        
        `)

    let array = [];
    array[0] = dealerhand[1];


    display(playerCards, "#userCards");
    display(array, '#dealerCards');



}
function checkState() {
    if (game.gamestate.end) {
        let resetbtn = $('#resetDeck_button');
        resetbtn.css("display", "block")
        let hitbtn = $('#hit_button');
        hitbtn.css("display", "none")
        let standbtn = $('#stand_button');
        standbtn.css("display", "none")
        alert("You have reached the end of the Deck. Press reset to re shuffle. " + "Wins: " + game.player.wins + " Losses: " + game.player.losses + " Ties: " + game.player.ties);
    }
    else if (game.gamestate.playerState == 0) {
        let resetbtn = $('#reset_button');
        resetbtn.css("display", "block")
        let hitbtn = $('#hit_button');
        hitbtn.css("display", "none")
        let standbtn = $('#stand_button');
        standbtn.css("display", "none")
          alert("You lose this Hand");
    }
    else if (game.gamestate.playerState == 1) {
        let resetbtn = $('#reset_button');
        resetbtn.css("display", "block")
        let hitbtn = $('#hit_button');
        hitbtn.css("display", "none")
        let standbtn = $('#stand_button');
        standbtn.css("display", "none")
          alert("You win this Hand!!!");
    }
    else if (game.gamestate.playerState == 2) {
        let resetbtn = $('#reset_button');
        resetbtn.css("display", "block")
        let hitbtn = $('#hit_button');
        hitbtn.css("display", "none")
        let standbtn = $('#stand_button');
        standbtn.css("display", "none")
        alert("Tie, this is a push");

    }
}
export const hitEvent = function (event) {
    event.preventDefault();

    game.gamestate.playerAction = 1;
    game.Play();
    let playerCards = game.gamestate.playerhand;
    let dealerCards = game.gamestate.dealerhand;

    let hand = $('#userCards');
    hand.empty();
    display(playerCards, '#userCards');

    let dHand = $('#dealerCards');
    dHand.empty();
    display(dealerCards, '#dealerCards');
    console.log("Player State: " + game.gamestate.playerState);

    checkState();

}





export const standEvent = function (event) {
    event.preventDefault();

    game.gamestate.playerAction = 0;
    game.Play();
    let dealercards = game.gamestate.dealerhand;
    let hand = $('#dealerCards');
    hand.empty();
    display(dealercards, '#dealerCards');
    checkState();



}

export const resetEvent = function (event) {
    event.preventDefault();

    game.NewHands();
    $('#dealerCards').empty();
    $("#userCards").empty();
    let playerCards = game.gamestate.playerhand;
    let dealerCards = game.gamestate.dealerhand;

    let hand = $('#dealerCards');
    hand.append(`
        
            
            <img src="/Cards/back.png">
           
           
        
        `)

    let array = [];
    array[0] = dealerCards[1];


    display(playerCards, "#userCards");
    display(array, '#dealerCards');
    let resetbtn = $('#reset_button');
    resetbtn.css("display", "none")
    let hitbtn = $('#hit_button');
    hitbtn.css("display", "block")
    let standbtn = $('#stand_button');
    standbtn.css("display", "block")


}

export const resetDeckEvent = function (event) {
    event.preventDefault();

    game.endofDeck();
    $('#dealerCards').empty();
    $("#userCards").empty();
    let playerCards = game.gamestate.playerhand;
    let dealerCards = game.gamestate.dealerhand;

    let hand = $('#dealerCards');
    hand.append(`                  
            <img src="/Cards/back.png">        
        `)
    let array = [];
    array[0] = dealerCards[1];
    console.log(array);

    display(playerCards, "#userCards");
    display(array, '#dealerCards');
    let resetbtn = $('#resetDeck_button');
    resetbtn.css("display", "none")
    let hitbtn = $('#hit_button');
    hitbtn.css("display", "block")
    let standbtn = $('#stand_button');
    standbtn.css("display", "block")

}


$(document).ready(function () {

    let body = $('body');



    body.on('click', '#submit_username', submitUsernameEvent);

    body.on('click', '#hit_button', hitEvent);
    body.on('click', '#stand_button', standEvent);
    body.on('click', '#reset_button', resetEvent);
    body.on('click', '#resetDeck_button', resetDeckEvent);



    $(".navbar-burger").click(function () {

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");


    });
});
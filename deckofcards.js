class Card {
    constructor(suit, num, val) {
        this.suit = suit;
        this.num = num;
        this.val = val;
    }
    cardInfo() {
        console.log('Card Name: '+this.num+', Suit: '+this.suit+', Value: '+this.val)
    }
}

class Deck {
    constructor() {
        this.cards = this.makeCards();
    }
    makeCards() {
        let mydeck = [];
        const suit = ["Hearts", "Spades", "Diamonds", "Clubs"];
        const num = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
        for (let i = 0; i < suit.length; i++){
            for (let j = 0; j < num.length; j++){
                mydeck.push(new Card(suit[i], num[j], (j+1)));
            }
        }
        return mydeck;
    }
    shuffleCards() {
        function shuffle(array) {
            var m = array.length, t, i;
            while (m) {
                i = Math.floor(Math.random() * m--);
                t = array[m];
                array[m] = array[i];
                array[i] = t;
            }
            return array;
        }
        this.cards = shuffle(this.cards);
        return this;
    }
    reset() {
        this.cards = this.makeCards();
        return this
    }
    readRandomCard() {
        let num = Math.floor(Math.random() * (this.cards.length-1));
        let card = this.cards[num]
        console.log(card.cardInfo())
    }
    randomCard() {
        let num = Math.floor(Math.random() * (this.cards.length-1));
        let card = this.cards[num]
        this.removeCard(num)
        return card
    }
    removeCard(num) {
        this.cards.splice(num, 1);
    }
}

const thedeck = new Deck();
//console.log(thedeck.cards);
//thedeck.randomCard();
//thedeck.shuffleCards();
//thedeck.reset();
//console.log(thedeck.cards);

class Player {
    constructor(name, deck) {
        this.name = name;
        this.deck = deck;
        this.hand = this.makeHand();
    }
    makeHand(thedeck) {
        let hand = [];
        for (var i = 1; i <= 5; i++){
            hand.push(this.deck.randomCard())
        }
        console.log(hand);
        return hand;
    }
    takeCard() {
        this.hand.push(this.deck.randomCard())
        console.log(this.hand);
        return this;
    }
    discardCard(num) {
        this.hand.splice(num, 1);
        //console.log(this.hand);
        return this;
    }
}
const player1 = new Player("Charles", thedeck);
//player1.takeCard()
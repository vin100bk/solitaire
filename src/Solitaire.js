import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Alert } from 'react-native';

import LeftBar from './LeftBar/LeftBar';
import Playground from './Playground/Playground';
import RightBar from './RightBar/RightBar';

/**
 * Solitaire game
 */
class Solitaire extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = null;

        // Handlers
        this.handleSelectCard = this.handleSelectCard.bind(this);
        this.handlePressDeck = this.handlePressDeck.bind(this);
        this.handlePressDeck = this.handlePressDeck.bind(this);
        this.handleResetDeck = this.handleResetDeck.bind(this);
        this.handleNewGame = this.handleNewGame.bind(this);
        this.handleUndo = this.handleUndo.bind(this);

        // Store the deck of the card selected
        this.deckCardSelected = null;

        // Style
        this.style = this.getStyle();
    }

    /**
     * Get the component style
     * @returns {*}
     */
    getStyle() {
        return StyleSheet.create({
            view: {
                flex: 1,
                flexDirection: 'row'
            }
        });
    }

    /**
     * Get the initial status
     * @param mode
     */
    getInitStatus(mode) {
        // Compute the stacks
        let cards = this.getCards();
        const column1 = cards.splice(0, 1);
        const column2 = cards.splice(0, 2);
        const column3 = cards.splice(0, 3);
        const column4 = cards.splice(0, 4);
        const column5 = cards.splice(0, 5);
        const column6 = cards.splice(0, 6);
        const column7 = cards.splice(0, 7);

        return {
            deck: cards,
            trash: [],
            column1: column1,
            column2: column2,
            column3: column3,
            column4: column4,
            column5: column5,
            column6: column6,
            column7: column7,
            nbHiddenCards: {
                column1: 0,
                column2: 1,
                column3: 2,
                column4: 3,
                column5: 4,
                column6: 5,
                column7: 6
            },
            hearts: [],
            diamonds: [],
            clubs: [],
            spades: [],
            cardSelected: null,
            lastState: null,
            mode: mode
        };
    }

    /**
     * Return the shuffled cards
     * @returns {Array}
     */
    getCards() {
        let fullDeck = [
            '1H', '1D', '1C', '1S',
            '2H', '2D', '2C', '2S',
            '3H', '3D', '3C', '3S',
            '4H', '4D', '4C', '4S',
            '5H', '5D', '5C', '5S',
            '6H', '6D', '6C', '6S',
            '7H', '7D', '7C', '7S',
            '8H', '8D', '8C', '8S',
            '9H', '9D', '9C', '9S',
            '10H', '10D', '10C', '10S',
            '11H', '11D', '11C', '11S',
            '12H', '12D', '12C', '12S',
            '13H', '13D', '13C', '13S'
        ];

        return this.shuffle(fullDeck);
    }

    /**
     * Randomize array element order in-place.
     * Using Durstenfeld shuffle algorithm.
     */
    shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    /**
     * Select a card
     * @param card
     * @param deck
     */
    selectedCard(card, deck) {
        this.setState((prevState, props) => {
            prevState.cardSelected = card;
            this.deckCardSelected = deck;

            return prevState;
        });
    }

    /**
     * Unselect the card
     */
    unSelectCard() {
        this.setState((prevState, props) => {
            prevState.cardSelected = null;

            return prevState;
        });
    }

    /**
     * Is the move valid for playground?
     * @param card1
     * @param card2
     * @returns {boolean}
     */
    isValidPlayground(card1, card2) {
        if (card2 === null) {
            // Empty column
            return /^13/.test(card1);
        } else {
            const color1 = ['H', 'D'].indexOf(card1.substr(-1, 1)) !== -1 ? 'r' : 'b';
            const color2 = ['H', 'D'].indexOf(card2.substr(-1, 1)) !== -1 ? 'r' : 'b';

            const subCard1 = parseInt(card1.slice(0, -1));
            const subCard2 = parseInt(card2.slice(0, -1));

            return color1 !== color2 && subCard1 === subCard2 - 1;
        }
    }

    /**
     * Is the move valid for AS columns?
     * @param card1
     * @param card2
     * @param deck
     * @returns {boolean}
     */
    isValidAs(card1, card2, deck) {
        const deckColor = deck.substr(0, 1);
        if (new RegExp(deckColor + '$', 'i').test(card1)) {
            if (card2 === null) {
                // Empty stack
                return /^1[DHCS]$/.test(card1);
            } else {
                const subCard1 = parseInt(card1.slice(0, -1));
                const subCard2 = parseInt(card2.slice(0, -1));

                return subCard1 - 1 === subCard2;
            }
        } else {
            return false;
        }
    }

    /**
     * Is the game finished?
     * @returns {boolean}
     */
    isFinished() {
        return (this.state.deck.length +
            this.state.trash.length +
            this.state.nbHiddenCards.column1 +
            this.state.nbHiddenCards.column2 +
            this.state.nbHiddenCards.column3 +
            this.state.nbHiddenCards.column4 +
            this.state.nbHiddenCards.column5 +
            this.state.nbHiddenCards.column6 +
            this.state.nbHiddenCards.column7) === 0;
    }

    /**
     * Move card1 under card2
     * @param card1
     * @param deck1
     * @param card2
     * @param deck2
     */
    moveCard(card1, deck1, card2, deck2) {
        this.setState((prevState, props) => {
            // Unselect the card
            prevState.cardSelected = null;
            // Store the last state
            prevState.lastState = null;
            prevState.lastState = JSON.stringify(prevState);
            // Move the cards
            let deck1Copy = prevState[deck1].slice();
            const cards = deck1Copy.splice(prevState[deck1].indexOf(card1), prevState[deck1].length);
            prevState[deck1] = deck1Copy;
            prevState[deck2] = prevState[deck2].concat(cards);

            // Flip the card if necessary
            if (prevState.nbHiddenCards[deck1] > 0 && prevState.nbHiddenCards[deck1] === prevState[deck1].length) {
                prevState.nbHiddenCards[deck1] = prevState.nbHiddenCards[deck1] - 1;
            }

            return prevState;
        }, () => {
            if (this.isFinished()) {
                Alert.alert(
                    'Congratulations!',
                    'You finished the game! Play again?',
                    [
                        {text: 'Easy', onPress: () => this.setState(this.getInitStatus(Solitaire.EASY_MODE))},
                        {text: 'Hard', onPress: () => this.setState(this.getInitStatus(Solitaire.HARD_MODE))}
                    ]
                );
            }
        });
    }

    /**
     * Start a new game
     * @param mode
     */
    newGame(mode) {
        this.setState(this.getInitStatus(mode));
    }

    /**
     * When you selected a card
     * @param card
     * @param deck
     */
    handleSelectCard(card, deck) {
        if (this.state.cardSelected) {
            if (deck === 'trash') {
                // Deck
                this.selectedCard(card, deck);
            } else if (/^column[1-7]$/.test(deck)) {
                // Playground
                if (this.isValidPlayground(this.state.cardSelected, card)) {
                    this.moveCard(this.state.cardSelected, this.deckCardSelected, card, deck);
                }

                this.unSelectCard();
            } else if (['hearts', 'diamonds', 'clubs', 'spades'].indexOf(deck) !== -1) {
                // AS
                if (this.isValidAs(this.state.cardSelected, card, deck)) {
                    this.moveCard(this.state.cardSelected, this.deckCardSelected, card, deck);
                }

                this.unSelectCard();
            } else {
                throw new Error('Error during the game, unknown target deck=' + deck);
            }
        } else {
            // No card selected
            this.selectedCard(card, deck);
        }
    }

    /**
     * When you press on the deck
     * @param value
     */
    handlePressDeck(value) {
        this.setState((prevState, props) => {
            // Unselect the card
            prevState.cardSelected = null;
            // Store the last state
            prevState.lastState = null;
            prevState.lastState = JSON.stringify(prevState);
            let deck = prevState.deck.slice();
            let values = deck.splice(-prevState.mode, prevState.mode);
            prevState.deck = deck;
            prevState.trash = prevState.trash.concat(values);
        });
    }

    /**
     * Reset the deck
     */
    handleResetDeck() {
        this.setState((prevState, props) => {
            prevState.deck = prevState.trash.reverse();
            // Pick the first card(s)
            let v = prevState.deck.splice(-prevState.mode, prevState.mode).reverse();
            prevState.trash = v;
        });
    }

    /**
     * When you click on new game
     */
    handleNewGame() {
        Alert.alert(
            'New game?',
            'Do you confirm to start a new game?',
            [
                {
                    text: 'Cancel', onPress: () => {
                }, style: 'cancel'
                },
                {text: 'Easy', onPress: () => this.setState(this.getInitStatus(Solitaire.EASY_MODE))},
                {text: 'Hard', onPress: () => this.setState(this.getInitStatus(Solitaire.HARD_MODE))}
            ]
        )
    }

    /**
     * Undo the last action
     */
    handleUndo() {
        this.setState((prevState, props) => {
            return JSON.parse(prevState.lastState);
        });
    }

    render() {
        if (!this.state) {
            Alert.alert(
                'Difficulty',
                'Choose your difficulty',
                [
                    {text: 'Easy', onPress: () => this.setState(this.getInitStatus(Solitaire.EASY_MODE))},
                    {text: 'Hard', onPress: () => this.setState(this.getInitStatus(Solitaire.HARD_MODE))}
                ]
            );

            return null;
        }

        return (
            <View style={this.style.view}>
                <LeftBar cards={this.state.deck}
                         trash={this.state.trash}
                         cardSelected={this.state.cardSelected}
                         lastState={this.state.lastState}
                         mode={this.state.mode}
                         onPress={this.handleSelectCard}
                         onPressDeck={this.handlePressDeck}
                         onResetDeck={this.handleResetDeck}
                         onNewGame={this.handleNewGame}
                         onUndo={this.handleUndo}/>

                <Playground column1={this.state.column1}
                            column2={this.state.column2}
                            column3={this.state.column3}
                            column4={this.state.column4}
                            column5={this.state.column5}
                            column6={this.state.column6}
                            column7={this.state.column7}
                            nbHiddenCards={this.state.nbHiddenCards}
                            cardSelected={this.state.cardSelected}
                            onPress={this.handleSelectCard}/>

                <RightBar hearts={this.state.hearts}
                          diamonds={this.state.diamonds}
                          clubs={this.state.clubs}
                          spades={this.state.spades}
                          cardSelected={this.state.cardSelected}
                          onPress={this.handleSelectCard}/>
            </View>
        );
    }
}

Solitaire.EASY_MODE = 1;
Solitaire.HARD_MODE = 3;

export default Solitaire;
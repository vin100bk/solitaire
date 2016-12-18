import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import LeftBar from './LeftBar/LeftBar';
import Playground from './Playground/Playground';
import RightBar from './RightBar/RightBar';

class Solitaire extends Component {
    constructor(props) {
        super(props);

        let cards = this.getCards();
        const column1 = cards.splice(0, 1);
        const column2 = cards.splice(0, 2);
        const column3 = cards.splice(0, 3);
        const column4 = cards.splice(0, 4);
        const column5 = cards.splice(0, 5);
        const column6 = cards.splice(0, 6);
        const column7 = cards.splice(0, 7);

        this.state = {
            deck: cards,
            column1: column1,
            column2: column2,
            column3: column3,
            column4: column4,
            column5: column5,
            column6: column6,
            column7: column7,
            hearts: [],
            diamonds: [],
            clubs: [],
            spades: []
        };
    }

    /**
     * Return the shuffled cards
     * @returns {Array}
     */
    getCards() {
        let fullDeck = [
            '2H', '2D', '2C', '2S',
            '3H', '3D', '3C', '3S',
            '4H', '4D', '4C', '4S',
            '5H', '5D', '5C', '5S',
            '6H', '6D', '6C', '6S',
            '7H', '7D', '7C', '7S',
            '8H', '8D', '8C', '8S',
            '9H', '9D', '9C', '9S',
            '10H', '10D', '10C', '10S',
            'JH', 'JD', 'JC', 'JS',
            'QH', 'QD', 'QC', 'QS',
            'KH', 'KD', 'KC', 'KS',
            'AH', 'AD', 'AC', 'AS'
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

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row'}}>
                <LeftBar cards={this.state.deck}/>
                <Playground column1={this.state.column1}
                            column2={this.state.column2}
                            column3={this.state.column3}
                            column4={this.state.column4}
                            column5={this.state.column5}
                            column6={this.state.column6}
                            column7={this.state.column7}/>
                <RightBar hearts={this.state.hearts}
                          diamonds={this.state.diamonds}
                          clubs={this.state.clubs}
                          spades={this.state.spades}/>
            </View>
        );
    }
}

export default Solitaire;
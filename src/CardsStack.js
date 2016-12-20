import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import Card from './Card';

/**
 * Represent a cards stack
 */
class CardsStack extends Component {
    constructor(props) {
        super(props);

        // Set the number of cards to hide
        this.nbHiddenCards = this.props.cards.length - 1;

        // Style
        this.style = this.getStyle();
    }

    componentWillUpdate(nextProps, nextState) {
        // Flip the last card if hidden
        if (this.props.cards.length !== nextProps.cards.length && this.nbHiddenCards === nextProps.cards.length) {
            this.nbHiddenCards--;
        }
    }

    /**
     * Get the component style
     * @returns {*}
     */
    getStyle() {
        return StyleSheet.create({
            view: {
                width: 50
            }
        });
    }

    /**
     * Get the next card. Recursive method
     * @param index
     * @returns {XML}
     */
    getNextCard(index) {
        if (this.props.cards[index]) {
            return <Card key={this.props.cards[index]}
                         value={this.props.cards[index]}
                         hidden={this.props.allHidden || (!this.props.allShown && index < this.nbHiddenCards)}
                         offset={this.props.offset}
                         isSelected={this.props.cards[index] === this.props.cardSelected}
                         onPress={this.props.onPress}>
                {this.getNextCard(index + 1)}
            </Card>;
        } else {
            return;
        }
    }


    render() {
        return (
            <View style={[this.style.view, this.props.style]}>
                {this.getNextCard(0)}
            </View>
        );
    }
}

export default CardsStack;
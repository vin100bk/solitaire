import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import CardsStack from '../CardsStack';
import EmptyStack from './EmptyStack';

/**
 * The right bar
 */
class RightBar extends Component {
    constructor(props) {
        super(props);

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
                justifyContent: 'space-around',
                alignItems: 'center',
                backgroundColor: '#2B7B3B'
            },
            stacks: {
                width: 50,
                height: 73
            }
        });
    }

    render() {
        // Hearts
        let hearts;
        if (this.props.hearts.length == 0) {
            hearts = <EmptyStack kind="hearts"
                                 onPress={(card) => this.props.onPress(card, 'hearts')}/>;
        } else {
            hearts = <CardsStack key="hearts"
                                 cards={this.props.hearts}
                                 style={this.style.stacks}
                                 allShown={true}
                                 cardSelected={this.props.cardSelected}
                                 onPress={(card) => this.props.onPress(card, 'hearts')}/>;
        }

        // Diamonds
        let diamonds;
        if (this.props.diamonds.length == 0) {
            diamonds = <EmptyStack kind="diamonds"
                                   onPress={(card) => this.props.onPress(card, 'diamonds')}/>;
        } else {
            diamonds = <CardsStack key="diamonds"
                                   cards={this.props.diamonds}
                                   style={this.style.stacks}
                                   allShown={true}
                                   cardSelected={this.props.cardSelected}
                                   onPress={(card) => this.props.onPress(card, 'diamonds')}/>;
        }

        // Clubs
        let clubs;
        if (this.props.clubs.length == 0) {
            clubs = <EmptyStack kind="clubs"
                                onPress={(card) => this.props.onPress(card, 'clubs')}/>;
        } else {
            clubs = <CardsStack key="clubs"
                                cards={this.props.clubs}
                                style={this.style.stacks}
                                allShown={true}
                                cardSelected={this.props.cardSelected}
                                onPress={(card) => this.props.onPress(card, 'clubs')}/>;
        }

        // Spades
        let spades;
        if (this.props.spades.length == 0) {
            spades = <EmptyStack kind="spades"
                                 onPress={(card) => this.props.onPress(card, 'spades')}/>;
        } else {
            spades = <CardsStack key="spades"
                                 cards={this.props.spades}
                                 style={this.style.stacks}
                                 allShown={true}
                                 cardSelected={this.props.cardSelected}
                                 onPress={(card) => this.props.onPress(card, 'spades')}/>;
        }

        return (
            <View style={this.style.view}>
                {hearts}
                {diamonds}
                {clubs}
                {spades}
            </View>
        );
    }
}

export default RightBar;
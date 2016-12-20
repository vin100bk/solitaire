import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import CardsStack from '../CardsStack';
import EmptyDeck from './EmptyDeck';

/**
 * Left bar
 */
class LeftBar extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = {
            hidden: this.props.cards,
            shown: []
        };

        // Handlers
        this.handlePress = this.handlePress.bind(this);
        this.handleResetDeck = this.handleResetDeck.bind(this);

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
                alignItems: 'center',
                backgroundColor: '#2B7B3B',
                paddingTop: 10
            },
            stacks: {
                marginTop: 10,
                flex: 1
            }
        });
    }

    /**
     * When you press on the deck
     * @param value
     */
    handlePress(value) {
        if (this.props.onPressDeck) {
            this.props.onPressDeck();
        }
        this.setState((prevState, props) => {
            let v = prevState.hidden.splice(-1, 1)[0];

            // Check the values match
            if (v !== value) {
                throw new Error('Error during the game, mismatching values (v=' + v + ', value=' + value + ')');
            }

            prevState.shown.push(value);
        });
    }

    /**
     * Reset the deck
     */
    handleResetDeck() {
        this.setState((prevState, props) => {
            prevState.hidden = prevState.shown.reverse();
            // Pick the first card
            let v = prevState.hidden.splice(-1, 1)[0];
            prevState.shown = [v];
        });
    }

    render() {
        return (
            <View style={this.style.view}>
                {this.state.hidden.length > 0 ? (
                    <CardsStack key="hidden"
                                cards={this.state.hidden}
                                allHidden={true}
                                style={this.style.stacks}
                                offset={1}
                                cardSelected={this.props.cardSelected}
                                onPress={this.handlePress}/>
                ) : (
                    <EmptyDeck style={this.style.stacks}
                               disabled={this.state.shown.length <= 1}
                               onPress={this.handleResetDeck}/>
                )}

                <CardsStack key="shown"
                            cards={this.state.shown}
                            allShown={true}
                            style={this.style.stacks}
                            cardSelected={this.props.cardSelected}
                            onPress={(card) => this.props.onPress(card, 'deck')}/>
            </View>
        );
    }
}

export default LeftBar;
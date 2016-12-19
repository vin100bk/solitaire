import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import CardsStack from '../CardsStack';
import EmptyDeck from './EmptyDeck';

class LeftBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: this.props.cards,
            shown: []
        };

        this.handlePress = this.handlePress.bind(this);
        this.handleResetDeck = this.handleResetDeck.bind(this);
    }

    /**
     * When you press on the deck
     * @param value
     */
    handlePress(value) {
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
        const style = {
            marginTop: 10,
            flex: 1
        };
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: '#2B7B3B', paddingTop: 10}}>
                {this.state.hidden.length > 0 ? (
                    <CardsStack key="hidden"
                                cards={this.state.hidden}
                                allHidden={true}
                                style={style}
                                offset={1}
                                onPress={this.handlePress}/>
                ) : (
                    <EmptyDeck style={style}
                               disabled={this.state.shown.length <= 1}
                               onPress={this.handleResetDeck}/>
                )}

                <CardsStack key="shown"
                            cards={this.state.shown}
                            style={style}/>
            </View>
        );
    }
}

export default LeftBar;
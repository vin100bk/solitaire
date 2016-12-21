import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import CardsStack from '../CardsStack';
import EmptyDeck from './EmptyDeck';
import Buttons from './Buttons';

/**
 * Left bar
 */
class LeftBar extends Component {
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

    render() {
        return (
            <View style={this.style.view}>
                {this.props.cards.length > 0 ? (
                    <CardsStack key="hidden"
                                cards={this.props.cards}
                                allHidden={true}
                                style={this.style.stacks}
                                offset={1}
                                cardSelected={this.props.cardSelected}
                                onPress={this.props.onPressDeck}/>
                ) : (
                    <EmptyDeck style={this.style.stacks}
                               disabled={this.props.shownCards.length <= 1}
                               onPress={this.props.onResetDeck}/>
                )}

                <CardsStack key="shown"
                            cards={this.props.shownCards}
                            allShown={true}
                            style={this.style.stacks}
                            cardSelected={this.props.cardSelected}
                            onPress={(card) => this.props.onPress(card, 'shownDeck')}/>

                <Buttons onNewGame={this.props.onNewGame}/>
            </View>
        );
    }
}

export default LeftBar;
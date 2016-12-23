import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import CardsStack from '../CardsStack';
import EmptyDeck from './EmptyDeck';
import Buttons from './Buttons';
import Trash from './Trash/Trash';

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
            },
            buttons: {
                flex: 1,
                alignSelf: 'stretch'
            }
        });
    }

    render() {
        return (
            <View style={this.style.view}>
                {this.props.cards.length > 0 ? (
                    <CardsStack cards={this.props.cards}
                                allHidden={true}
                                style={this.style.stacks}
                                offset={1}
                                cardSelected={this.props.cardSelected}
                                onPress={this.props.onPressDeck}/>
                ) : (
                    <EmptyDeck style={this.style.stacks}
                               disabled={this.props.trash.length <= this.props.mode}
                               onPress={this.props.onResetDeck}/>
                )}

                <Trash cards={this.props.trash}
                       style={this.style.stacks}
                       cardSelected={this.props.cardSelected}
                       mode={this.props.mode}
                       onPress={(card) => this.props.onPress(card, 'trash')}/>

                <Buttons lastState={this.props.lastState}
                         style={this.style.buttons}
                         onNewGame={this.props.onNewGame}
                         onUndo={this.props.onUndo}/>
            </View>
        );
    }
}

export default LeftBar;
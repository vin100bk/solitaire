import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Button, Alert } from 'react-native';

import CardsStack from '../CardsStack';
import EmptyDeck from './EmptyDeck';

/**
 * Buttons
 */
class Buttons extends Component {
    constructor(props) {
        super(props);

        // Handlers
        this.handleNewGame = this.handleNewGame.bind(this);

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
                justifyContent: 'flex-end'
            },
            stacks: {
                marginTop: 10,
                flex: 1
            }
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
                    text: 'No', onPress: () => {
                }, style: 'cancel'
                },
                {text: 'Yes', onPress: () => this.props.onNewGame()}
            ]
        )
    }

    render() {
        return (
            <View style={this.style.view}>
                <Button
                    onPress={this.handleNewGame}
                    title="New game"
                    color="#000"
                    accessibilityLabel="Start a new game"/>
            </View>
        );
    }
}

export default Buttons;
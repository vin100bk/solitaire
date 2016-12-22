import React, { Component } from 'react';
import { AppRegistry, View, Alert, StyleSheet } from 'react-native';

import ButtonIcon from '../ButtonIcon';

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
                justifyContent: 'flex-end',
                alignItems: 'stretch'
            },
            button: {
                marginBottom: 5
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
            <View style={[this.style.view, this.props.style]}>
                {this.props.lastState &&
                <ButtonIcon
                    onPress={this.props.onUndo}
                    title="Undo"
                    icon="undo"
                    backgroundActive="#3B8B4B"
                    style={this.style.button}/>
                }

                <ButtonIcon
                    onPress={this.handleNewGame}
                    title="New"
                    icon="star"
                    backgroundActive="#3B8B4B"
                    style={this.style.button}/>
            </View>
        );
    }
}

export default Buttons;
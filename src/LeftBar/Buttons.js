import React, { Component } from 'react';
import { AppRegistry, View, Alert, StyleSheet } from 'react-native';

import ButtonIcon from '../ButtonIcon';

/**
 * Buttons
 */
class Buttons extends Component {
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
                justifyContent: 'flex-end',
                alignItems: 'stretch'
            },
            button: {
                marginBottom: 10
            }
        });
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
                    onPress={this.props.onNewGame}
                    title="New"
                    icon="star"
                    backgroundActive="#3B8B4B"
                    style={this.style.button}/>
            </View>
        );
    }
}

export default Buttons;
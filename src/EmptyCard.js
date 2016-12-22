import React, { Component } from 'react';
import { AppRegistry, View, TouchableWithoutFeedback, StyleSheet } from 'react-native';

/**
 * Represent am empty card. It allows the user toc lick on an empty column
 */
class EmptyCard extends Component {
    constructor(props) {
        super(props);

        // Handlers
        this.handlePress = this.handlePress.bind(this);

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
                width: 50,
                height: 73
            }
        });
    }

    /**
     * When you press
     */
    handlePress() {
        this.props.onPress(null);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <View style={[this.style.view, this.props.style]}/>
            </TouchableWithoutFeedback>
        );
    }
}

export default EmptyCard;
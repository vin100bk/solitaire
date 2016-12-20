import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';

/**
 * When a stack is empty
 */
class EmptyStack extends Component {
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
            image: {
                width: 50,
                height: 73,
                opacity: 0.1
            }
        });
    }

    /**
     * When you press on it
     */
    handlePress() {
        this.props.onPress(null);
    }

    render() {
        let picture;
        switch (this.props.kind) {
            case 'hearts':
                picture = require('../../assets/img/cards/1H.png');
                break;
            case 'diamonds':
                picture = require('../../assets/img/cards/1D.png');
                break;
            case 'clubs':
                picture = require('../../assets/img/cards/1C.png');
                break;
            case 'spades':
                picture = require('../../assets/img/cards/1S.png');
                break;
            default:
                throw new Error(this.props.kind + ' unknown');
        }

        return (
            <TouchableWithoutFeedback onPress={this.handlePress}>
                <Image source={picture} style={[this.style.image, this.props.style]}/>
            </TouchableWithoutFeedback>
        );
    }
}

export default EmptyStack;
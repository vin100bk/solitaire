import React, { Component } from 'react';
import { AppRegistry, Animated, View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

/**
 * Represent a card
 */
class Card extends Component {
    constructor(props) {
        super(props);

        // Store the back card. Performance reasons
        this.back = require('../assets/img/cards/back.png');

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
                position: 'absolute',
                top: this.props.offset ? Number(this.props.offset) : 0,
                left: 0
            },
            image: {
                width: 50,
                height: 73
            },
            imageSelected: {
                opacity: 0.8
            }
        });
    }

    /**
     * Get the require associated to the card
     * @param card
     * @returns {*}
     */
    getRequire(card) {
        let ret;
        switch (card) {
            case '1C':
                ret = require('../assets/img/cards/1C.png');
                break;
            case '1D':
                ret = require('../assets/img/cards/1D.png');
                break;
            case '1H':
                ret = require('../assets/img/cards/1H.png');
                break;
            case '1S':
                ret = require('../assets/img/cards/1S.png');
                break;
            case '2C':
                ret = require('../assets/img/cards/2C.png');
                break;
            case '2D':
                ret = require('../assets/img/cards/2D.png');
                break;
            case '2H':
                ret = require('../assets/img/cards/2H.png');
                break;
            case '2S':
                ret = require('../assets/img/cards/2S.png');
                break;
            case '3C':
                ret = require('../assets/img/cards/3C.png');
                break;
            case '3D':
                ret = require('../assets/img/cards/3D.png');
                break;
            case '3H':
                ret = require('../assets/img/cards/3H.png');
                break;
            case '3S':
                ret = require('../assets/img/cards/3S.png');
                break;
            case '4C':
                ret = require('../assets/img/cards/4C.png');
                break;
            case '4D':
                ret = require('../assets/img/cards/4D.png');
                break;
            case '4H':
                ret = require('../assets/img/cards/4H.png');
                break;
            case '4S':
                ret = require('../assets/img/cards/4S.png');
                break;
            case '5C':
                ret = require('../assets/img/cards/5C.png');
                break;
            case '5D':
                ret = require('../assets/img/cards/5D.png');
                break;
            case '5H':
                ret = require('../assets/img/cards/5H.png');
                break;
            case '5S':
                ret = require('../assets/img/cards/5S.png');
                break;
            case '6C':
                ret = require('../assets/img/cards/6C.png');
                break;
            case '6D':
                ret = require('../assets/img/cards/6D.png');
                break;
            case '6H':
                ret = require('../assets/img/cards/6H.png');
                break;
            case '6S':
                ret = require('../assets/img/cards/6S.png');
                break;
            case '7C':
                ret = require('../assets/img/cards/7C.png');
                break;
            case '7D':
                ret = require('../assets/img/cards/7D.png');
                break;
            case '7H':
                ret = require('../assets/img/cards/7H.png');
                break;
            case '7S':
                ret = require('../assets/img/cards/7S.png');
                break;
            case '8C':
                ret = require('../assets/img/cards/8C.png');
                break;
            case '8D':
                ret = require('../assets/img/cards/8D.png');
                break;
            case '8H':
                ret = require('../assets/img/cards/8H.png');
                break;
            case '8S':
                ret = require('../assets/img/cards/8S.png');
                break;
            case '9C':
                ret = require('../assets/img/cards/9C.png');
                break;
            case '9D':
                ret = require('../assets/img/cards/9D.png');
                break;
            case '9H':
                ret = require('../assets/img/cards/9H.png');
                break;
            case '9S':
                ret = require('../assets/img/cards/9S.png');
                break;
            case '10C':
                ret = require('../assets/img/cards/10C.png');
                break;
            case '10D':
                ret = require('../assets/img/cards/10D.png');
                break;
            case '10H':
                ret = require('../assets/img/cards/10H.png');
                break;
            case '10S':
                ret = require('../assets/img/cards/10S.png');
                break;
            case '11C':
                ret = require('../assets/img/cards/11C.png');
                break;
            case '11D':
                ret = require('../assets/img/cards/11D.png');
                break;
            case '11H':
                ret = require('../assets/img/cards/11H.png');
                break;
            case '11S':
                ret = require('../assets/img/cards/11S.png');
                break;
            case '12C':
                ret = require('../assets/img/cards/12C.png');
                break;
            case '12D':
                ret = require('../assets/img/cards/12D.png');
                break;
            case '12H':
                ret = require('../assets/img/cards/12H.png');
                break;
            case '12S':
                ret = require('../assets/img/cards/12S.png');
                break;
            case '13C':
                ret = require('../assets/img/cards/13C.png');
                break;
            case '13D':
                ret = require('../assets/img/cards/13D.png');
                break;
            case '13H':
                ret = require('../assets/img/cards/13H.png');
                break;
            case '13S':
                ret = require('../assets/img/cards/13S.png');
                break;
            default:
                throw new Error(card + ' does not exist');
        }

        return ret;

    }

    /**
     * Get the total height of the stack
     * @returns {number}
     */
    getHeight() {
        let nextCard = this.props.children;
        let height = 73;
        while (nextCard) {
            height += 20;
            nextCard = nextCard.props.children;
        }

        return height;
    }

    /**
     * When you press on a card
     */
    handlePress() {
        this.props.onPress(this.props.value);
    }

    render() {
        // Card
        let source;
        if (this.props.hidden) {
            // Hidden card
            source = this.back;
        } else {
            // Shown card
            source = this.getRequire(this.props.value);
        }

        // If selected
        const style = this.props.isSelected ? [this.style.view, this.style.imageSelected] : this.style.view;

        return (
            <TouchableWithoutFeedback
                disabled={!this.props.onPress || (this.props.hidden && Boolean(this.props.children))}
                onPress={this.handlePress}>
                <View style={[style, {height: this.getHeight()}]}>
                    <Image source={source} style={this.style.image}/>
                    {this.props.children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default Card;
import React, { Component } from 'react';
import { AppRegistry, Animated, View, Image, TouchableWithoutFeedback, StyleSheet } from 'react-native';

var imgStyle = {
    width: 50,
    height: 73
};

/**
 * Represent a card
 */
class Card extends Component {
    constructor(props) {
        super(props);

        // Store the back card. Performance reasons
        this.back = <Image source={require('../assets/img/cards/back.png')} style={imgStyle}/>;

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
     * Get the image
     * @param card
     * @returns {*}
     */
    getImage(card) {
        if (card in Card.images) {
            return Card.images[card];
        } else {
            throw new Error(card + ' does not exist');
        }
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
        let img;
        if (this.props.hidden) {
            // Hidden card
            img = this.back;
        } else {
            // Shown card
            img = this.getImage(this.props.value);
        }

        // If selected
        const style = this.props.isSelected ? [this.style.view, this.style.imageSelected] : this.style.view;

        return (
            <TouchableWithoutFeedback
                disabled={!this.props.onPress || (this.props.hidden && Boolean(this.props.children))}
                onPress={this.handlePress}>
                <View style={[style, {height: this.getHeight()}]}>
                    {img}
                    {this.props.children}
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

/**
 * Store it for performance reasons
 */
Card.images = {
    '1C': <Image source={require('../assets/img/cards/1C.png')} style={imgStyle}/>,
    '1D': <Image source={require('../assets/img/cards/1D.png')} style={imgStyle}/>,
    '1H': <Image source={require('../assets/img/cards/1H.png')} style={imgStyle}/>,
    '1S': <Image source={require('../assets/img/cards/1S.png')} style={imgStyle}/>,
    '2C': <Image source={require('../assets/img/cards/2C.png')} style={imgStyle}/>,
    '2D': <Image source={require('../assets/img/cards/2D.png')} style={imgStyle}/>,
    '2H': <Image source={require('../assets/img/cards/2H.png')} style={imgStyle}/>,
    '2S': <Image source={require('../assets/img/cards/2S.png')} style={imgStyle}/>,
    '3C': <Image source={require('../assets/img/cards/3C.png')} style={imgStyle}/>,
    '3D': <Image source={require('../assets/img/cards/3D.png')} style={imgStyle}/>,
    '3H': <Image source={require('../assets/img/cards/3H.png')} style={imgStyle}/>,
    '3S': <Image source={require('../assets/img/cards/3S.png')} style={imgStyle}/>,
    '4C': <Image source={require('../assets/img/cards/4C.png')} style={imgStyle}/>,
    '4D': <Image source={require('../assets/img/cards/4D.png')} style={imgStyle}/>,
    '4H': <Image source={require('../assets/img/cards/4H.png')} style={imgStyle}/>,
    '4S': <Image source={require('../assets/img/cards/4S.png')} style={imgStyle}/>,
    '5C': <Image source={require('../assets/img/cards/5C.png')} style={imgStyle}/>,
    '5D': <Image source={require('../assets/img/cards/5D.png')} style={imgStyle}/>,
    '5H': <Image source={require('../assets/img/cards/5H.png')} style={imgStyle}/>,
    '5S': <Image source={require('../assets/img/cards/5S.png')} style={imgStyle}/>,
    '6C': <Image source={require('../assets/img/cards/6C.png')} style={imgStyle}/>,
    '6D': <Image source={require('../assets/img/cards/6D.png')} style={imgStyle}/>,
    '6H': <Image source={require('../assets/img/cards/6H.png')} style={imgStyle}/>,
    '6S': <Image source={require('../assets/img/cards/6S.png')} style={imgStyle}/>,
    '7C': <Image source={require('../assets/img/cards/7C.png')} style={imgStyle}/>,
    '7D': <Image source={require('../assets/img/cards/7D.png')} style={imgStyle}/>,
    '7H': <Image source={require('../assets/img/cards/7H.png')} style={imgStyle}/>,
    '7S': <Image source={require('../assets/img/cards/7S.png')} style={imgStyle}/>,
    '8C': <Image source={require('../assets/img/cards/8C.png')} style={imgStyle}/>,
    '8D': <Image source={require('../assets/img/cards/8D.png')} style={imgStyle}/>,
    '8H': <Image source={require('../assets/img/cards/8H.png')} style={imgStyle}/>,
    '8S': <Image source={require('../assets/img/cards/8S.png')} style={imgStyle}/>,
    '9C': <Image source={require('../assets/img/cards/9C.png')} style={imgStyle}/>,
    '9D': <Image source={require('../assets/img/cards/9D.png')} style={imgStyle}/>,
    '9H': <Image source={require('../assets/img/cards/9H.png')} style={imgStyle}/>,
    '9S': <Image source={require('../assets/img/cards/9S.png')} style={imgStyle}/>,
    '10C': <Image source={require('../assets/img/cards/10C.png')} style={imgStyle}/>,
    '10D': <Image source={require('../assets/img/cards/10D.png')} style={imgStyle}/>,
    '10H': <Image source={require('../assets/img/cards/10H.png')} style={imgStyle}/>,
    '10S': <Image source={require('../assets/img/cards/10S.png')} style={imgStyle}/>,
    '11C': <Image source={require('../assets/img/cards/11C.png')} style={imgStyle}/>,
    '11D': <Image source={require('../assets/img/cards/11D.png')} style={imgStyle}/>,
    '11H': <Image source={require('../assets/img/cards/11H.png')} style={imgStyle}/>,
    '11S': <Image source={require('../assets/img/cards/11S.png')} style={imgStyle}/>,
    '12C': <Image source={require('../assets/img/cards/12C.png')} style={imgStyle}/>,
    '12D': <Image source={require('../assets/img/cards/12D.png')} style={imgStyle}/>,
    '12H': <Image source={require('../assets/img/cards/12H.png')} style={imgStyle}/>,
    '12S': <Image source={require('../assets/img/cards/12S.png')} style={imgStyle}/>,
    '13C': <Image source={require('../assets/img/cards/13C.png')} style={imgStyle}/>,
    '13D': <Image source={require('../assets/img/cards/13D.png')} style={imgStyle}/>,
    '13H': <Image source={require('../assets/img/cards/13H.png')} style={imgStyle}/>,
    '13S': <Image source={require('../assets/img/cards/13S.png')} style={imgStyle}/>
};

export default Card;
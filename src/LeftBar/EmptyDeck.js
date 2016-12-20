import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Image, StyleSheet } from 'react-native';

/**
 * When the deck is empty
 */
class EmptyDeck extends Component {
    constructor(props) {
        super(props);

        // Picture
        this.picture = require('../../assets/img/reset.png');

        // Style
        this.style = this.getStyle();
    }

    /**
     * Get the component style
     * @returns {*}
     */
    getStyle() {
        return StyleSheet.create({
            touchable: {
                width: 50,
                height: 72.6,
                justifyContent: 'center',
                alignItems: 'center',
                opacity: 1,
                borderStyle: 'solid',
                borderWidth: 1,
                borderColor: '#000',
                backgroundColor: '#4B9B5B'
            }
        });
    }

    render() {
        return (
            <View style={this.props.style}>
                <TouchableOpacity style={this.style.touchable}
                                  disabled={this.props.disabled}
                                  onPress={this.props.onPress}
                                  activeOpacity={0.6}>
                    <Image source={this.picture}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default EmptyDeck;
import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, StyleSheet } from 'react-native';

import Icon from 'react-native-fontawesome';

/**
 * When the deck is empty
 */
class EmptyDeck extends Component {
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
            },
            icon: {
                fontSize: 20
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
                    <Icon style={this.style.icon}>refresh</Icon>
                </TouchableOpacity>
            </View>
        );
    }
}

export default EmptyDeck;
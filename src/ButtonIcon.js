import React, { Component } from 'react';
import { AppRegistry, View, TouchableHighlight, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-fontawesome';

/**
 * Represent a generic button with an icon
 */
class ButtonIcon extends Component {
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
            button: {
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5
            },
            icon: {
                marginRight: 5,
                fontSize: 16,
                color: '#fff'
            },
            text: {
                fontSize: 16,
                color: '#fff'
            }
        });
    }

    render() {
        return (
            <TouchableHighlight underlayColor={this.props.backgroundActive} onPress={this.props.onPress}>
                <View style={this.style.button}>
                    <Icon style={this.style.icon}>{this.props.icon}</Icon>
                    <Text style={this.style.text}>{this.props.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }
}

export default ButtonIcon;
import React, { Component } from 'react';
import { AppRegistry, View, TouchableOpacity, Image } from 'react-native';

class EmptyDeck extends Component {
    render() {
        const picture = require('../../assets/img/reset.png');
        const style = {
            width: 50,
            height: 72.6,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: 1,
            borderStyle: 'solid',
            borderWidth: 1,
            borderColor: '#000',
            backgroundColor: '#4B9B5B'
        };

        return (
            <View style={this.props.style}>
                <TouchableOpacity style={style}
                                  disabled={this.props.disabled}
                                  onPress={this.props.onPress}
                                  activeOpacity={0.6}>
                    <Image source={picture}/>
                </TouchableOpacity>
            </View>
        );
    }
}

export default EmptyDeck;
import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

class EmptyStack extends Component {
    render() {
        let picture;
        switch (this.props.kind) {
            case 'hearts':
                picture = require('../assets/img/cards/AH.png');
                break;
            case 'diamonds':
                picture = require('../assets/img/cards/AD.png');
                break;
            case 'clubs':
                picture = require('../assets/img/cards/AC.png');
                break;
            case 'spades':
                picture = require('../assets/img/cards/AS.png');
                break;
            default:
                throw new Error(this.props.kind + ' unknown');
        }

        const style = {width: 50, height: 72.6, opacity: 0.1};
        return (
            <Image source={picture} style={style}/>
        );
    }
}

export default EmptyStack;
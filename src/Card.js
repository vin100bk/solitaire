import React, { Component } from 'react';
import { AppRegistry, View, Image } from 'react-native';

class Card extends Component {
    /**
     * Get the require associated to the card
     * @param card
     * @returns {*}
     */
    getRequire(card) {
        let ret;
        switch (card) {
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
            case 'JC':
                ret = require('../assets/img/cards/JC.png');
                break;
            case 'JD':
                ret = require('../assets/img/cards/JD.png');
                break;
            case 'JH':
                ret = require('../assets/img/cards/JH.png');
                break;
            case 'JS':
                ret = require('../assets/img/cards/JS.png');
                break;
            case 'QC':
                ret = require('../assets/img/cards/QC.png');
                break;
            case 'QD':
                ret = require('../assets/img/cards/QD.png');
                break;
            case 'QH':
                ret = require('../assets/img/cards/QH.png');
                break;
            case 'QS':
                ret = require('../assets/img/cards/QS.png');
                break;
            case 'KC':
                ret = require('../assets/img/cards/KC.png');
                break;
            case 'KD':
                ret = require('../assets/img/cards/KD.png');
                break;
            case 'KH':
                ret = require('../assets/img/cards/KH.png');
                break;
            case 'KS':
                ret = require('../assets/img/cards/KS.png');
                break;
            case 'AC':
                ret = require('../assets/img/cards/AC.png');
                break;
            case 'AD':
                ret = require('../assets/img/cards/AD.png');
                break;
            case 'AH':
                ret = require('../assets/img/cards/AH.png');
                break;
            case 'AS':
                ret = require('../assets/img/cards/AS.png');
                break;
            default:
                throw new Error(card + ' does not exist');
        }

        return ret;

    }

    render() {
        let source;
        if (this.props.hidden) {
            // Hidden card
            source = require('../assets/img/cards/back.png');
        } else {
            // Shown card
            source = this.getRequire(this.props.value);
        }

        return (
            <Image source={source} style={Object.assign({width: 50, height: 72.6}, this.props.style)}>
                {this.props.children}
            </Image>
        );
    }
}

export default Card;
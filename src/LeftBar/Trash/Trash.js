import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Solitaire from '../../Solitaire';
import TrashEasy from './TrashEasy';
import TrashHard from './TrashHard';

/**
 * Trash
 */
class Trash extends Component {
    render() {
        let trash;
        if (this.props.mode === Solitaire.EASY_MODE) {
            trash = <TrashEasy cards={this.props.cards}
                               style={this.props.style}
                               cardSelected={this.props.cardSelected}
                               onPress={this.props.onPress}/>;
        } else {
            trash = <TrashHard cards={this.props.cards}
                               style={this.props.style}
                               cardSelected={this.props.cardSelected}
                               onPress={this.props.onPress}/>;
        }

        return trash;
    }
}

export default Trash;
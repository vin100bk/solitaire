import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import CardsStack from '../../CardsStack';

/**
 * Hard trash
 */
class TrashHard extends Component {
    render() {
        return (
            <CardsStack cards={this.props.cards.slice(-3)}
                        allShown={true}
                        style={this.props.style}
                        offset={10}
                        cardSelected={this.props.cardSelected}
                        enableOnlyLast={true}
                        onPress={this.props.onPress}/>
        );
    }
}

export default TrashHard;
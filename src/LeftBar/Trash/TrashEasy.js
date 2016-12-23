import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import CardsStack from '../../CardsStack';

/**
 * Easy trash
 */
class TrashEasy extends Component {
    render() {
        return (
            <CardsStack cards={this.props.cards}
                        allShown={true}
                        style={this.props.style}
                        cardSelected={this.props.cardSelected}
                        onPress={this.props.onPress}/>
        );
    }
}

export default TrashEasy;
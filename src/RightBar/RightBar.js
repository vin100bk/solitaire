import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import CardsStack from '../CardsStack';
import EmptyStack from '../EmptyStack';

class RightBar extends Component {
    render() {
        // Hearts
        let hearts;
        if (this.props.hearts.length == 0) {
            hearts = <EmptyStack kind="hearts"/>;
        } else {
            hearts = <CardsStack key="hearts" cards={this.props.hearts}/>;
        }

        // Diamonds
        let diamonds;
        if (this.props.diamonds.length == 0) {
            diamonds = <EmptyStack kind="diamonds"/>;
        } else {
            diamonds = <CardsStack key="diamonds" cards={this.props.diamonds}/>;
        }

        // Clubs
        let clubs;
        if (this.props.clubs.length == 0) {
            clubs = <EmptyStack kind="clubs"/>;
        } else {
            clubs = <CardsStack key="clubs" cards={this.props.clubs}/>;
        }

        // Spades
        let spades;
        if (this.props.spades.length == 0) {
            spades = <EmptyStack kind="spades"/>;
        } else {
            spades = <CardsStack key="spades" cards={this.props.spades}/>;
        }

        const style = {
            flex: 1,
            justifyContent: 'space-around',
            alignItems: 'center',
            backgroundColor: '#2B7B3B'
        };

        return (
            <View style={style}>
                {hearts}
                {diamonds}
                {clubs}
                {spades}
            </View>
        );
    }
}

export default RightBar;
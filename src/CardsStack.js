import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import Card from './Card';

class CardsStack extends Component {
    constructor(props) {
        super(props);
    }

    /**
     * Get the next card. Recursive method
     * @param index
     * @returns {XML}
     */
    getNextCard(index) {
        if (this.props.cards[index]) {
            return <Card key={this.props.cards[index]}
                         value={this.props.cards[index]}
                         hidden={(this.props.allHidden) || (this.props.hiddenCards && this.props.hiddenCards[this.props.cards[index]])}
                         offset={this.props.offset}
                         onPress={this.props.onPress}>
                {this.getNextCard(index + 1)}
            </Card>;
        } else {
            return;
        }
    }


    render() {
        return (
            <View style={Object.assign({width: 50}, this.props.style)}>
                {this.getNextCard(0)}
            </View>
        );
    }
}

export default CardsStack;
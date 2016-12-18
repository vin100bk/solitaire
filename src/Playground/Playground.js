import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import CardsStack from '../CardsStack';

class Playground extends Component {
    constructor(props) {
        super(props);

        /*
         * Define the hidden cards
         */
        let hiddenCards = {};
        for (let i = 1; i <= 7; i++) {
            let column = this.props['column' + i].slice(0);
            column.splice(-1, 1);
            column.reduce(function (result, item) {
                result[item] = 1;
                return result;
            }, hiddenCards);
        }

        this.state = {
            hiddenCards: hiddenCards
        };
    }

    render() {
        let columns = [];
        for (let i = 1; i <= 7; i++) {
            columns.push(<CardsStack key={i} cards={this.props['column' + i]} hiddenCards={this.state.hiddenCards}
                                     cardStyle={{paddingTop: 20}}/>);
        }

        const style = {
            flex: 7,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#34A249',
            paddingTop: 10
        };

        return (
            <View style={style}>
                {columns}
            </View>
        );
    }
}

export default Playground;
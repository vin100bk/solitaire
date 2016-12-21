import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet } from 'react-native';

import CardsStack from '../CardsStack';

/**
 * The playground
 */
class Playground extends Component {
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
            view: {
                flex: 7,
                flexDirection: 'row',
                justifyContent: 'space-around',
                backgroundColor: '#34A249'
            }
        });
    }

    render() {
        let columns = [];
        for (let i = 1; i <= 7; i++) {
            columns.push(<CardsStack key={i}
                                     cards={this.props['column' + i]}
                                     nbHiddenCards={this.props.nbHiddenCards['column' + i]}
                                     offset={20}
                                     cardSelected={this.props.cardSelected}
                                     onPress={(card) => this.props.onPress(card, 'column' + i)}/>);
        }

        return (
            <View style={this.style.view}>
                {columns}
            </View>
        );
    }
}

export default Playground;
import React, { Component } from 'react';
import { AppRegistry, View, StyleSheet, Dimensions } from 'react-native';

import Card from './Card';
import EmptyCard from './EmptyCard';

/**
 * Represent a cards stack
 */
class CardsStack extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = {
            offset: this.props.offset
        };

        // Handlers
        this.handleLayout = this.handleLayout.bind(this);

        // Style
        this.style = this.getStyle();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.adjustableOffset && this.props.cards.length !== nextProps.cards.length) {
            this.setState({
                offset: Math.floor(Math.min((this.height - 73) / nextProps.cards.length, nextProps.offset))
            });
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.props.cards !== nextProps.cards) {
            return true;
        }

        if (this.props.cardSelected !== nextProps.cardSelected) {
            return nextProps.cards.indexOf(this.props.cardSelected) !== -1 || nextProps.cards.indexOf(nextProps.cardSelected) !== -1;
        } else {
            return false;
        }
    }

    /**
     * Get the component style
     * @returns {*}
     */
    getStyle() {
        return StyleSheet.create({
            view: {
                width: 50
            }
        });
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
                         hidden={this.props.allHidden || (!this.props.allShown && index < this.props.nbHiddenCards)}
                         offset={this.state.offset}
                         isSelected={this.props.cards[index] === this.props.cardSelected}
                         onPress={this.props.onPress}>
                {this.getNextCard(index + 1)}
            </Card>;
        } else if (index === 0) {
            return <EmptyCard onPress={this.props.onPress}/>;
        } else {
            return;
        }
    }

    /**
     * When then view layout is set
     * @param event
     */
    handleLayout(event) {
        // Store the height of the view
        var {x, y, width, height} = event.nativeEvent.layout;
        this.height = height;
    }

    render() {
        return (
            <View style={[this.style.view, this.props.style]} onLayout={this.handleLayout}>
                {this.getNextCard(0)}
            </View>
        );
    }
}

export default CardsStack;
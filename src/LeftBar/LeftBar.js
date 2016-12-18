import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';

import CardsStack from '../CardsStack';

class LeftBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hidden: this.props.cards,
            shown: []
        };
    }

    render() {
        const style = {
            marginTop: 10
        };
        const hiddenStyle = {
            paddingTop: 1
        };
        const shownStyle = {
            paddingTop: 0
        };
        return (
            <View style={{flex: 1, alignItems: 'center', backgroundColor: '#2B7B3B'}}>
                <CardsStack key="hidden"
                            cards={this.state.hidden}
                            allHidden={true}
                            style={style}
                            cardStyle={hiddenStyle}/>

                <CardsStack key="shown"
                            cards={this.state.shown}
                            style={style}
                            cardStyle={shownStyle}/>
            </View>
        );
    }
}

export default LeftBar;
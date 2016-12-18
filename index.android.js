import React, { Component } from 'react';
import { AppRegistry } from 'react-native';

import Solitaire from './src/Solitaire';

class App extends Component {
    render() {
        return (
            <Solitaire />
        );
    }
}

AppRegistry.registerComponent('solitaire', () => App);
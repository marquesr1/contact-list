import React, {Component} from 'react';
import {Platform, Text, View} from 'react-native';

import Header from './src/components/Header';

export default class App extends Component {
  render() {
    return (
      <View>
        <Header label={'Contatos'} />
      </View>
    );
  }
}

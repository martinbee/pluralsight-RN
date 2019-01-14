import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class EventForm extends Component {
  handleAddPress = () => {
    this.props.navigation.navigate('list');
  };

  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.handleAddPress}
        >
          <Text>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


import React, { Component } from 'react';
import { Text, FlatList, StyleSheet } from 'react-native';
import ActionButton from 'react-native-action-button';

import EventCard from './EventCard';

const styles = StyleSheet.create({
  list: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#f3f3f3',
  },
});

export default class EventList extends Component {
  state = {
    events: [],
  }

  componentDidMount() {
    const events = require('./db.json').events
      .map(({ date, ...rest }) => ({
        ...rest,
        date: new Date(date),
      }));

    this.setState({ events });

    setInterval(() => {
      this.setState({
        events: this.state.events.map(evt => ({
          ...evt,
          timer: Date.now(),
        })),
      });
    }, 1000)
  }

  handleAddEvent = () => this.props.navigation.navigate('form');

  render() {
    return [
      <FlatList
        key="flatList"
        style={styles.list}
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={item => item.id}
      />,
      <ActionButton
        key="fab"
        onPress={this.handleAddEvent}
        buttonColor="rgba(231, 76, 60, 1)"
      />
    ];
  }
}

import React, { Component } from 'react';
import { Text, FlatList } from 'react-native';

import EventCard from './EventCard';

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
  }

  render() {
    return (
      <FlatList
        data={this.state.events}
        renderItem={({ item }) => <EventCard event={item} />}
        keyExtractor={item => item.id}
      />
    );
  }
}

import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableHighlight,
  TextInput,
  StyleSheet,
} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import { formatDateTime } from './api';

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    backgroundColor: '#f3f3f3',
  },
  fieldContainer: {
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  text: {
    height: 40,
    margin: 0,
    marginRight: 7,
    paddingLeft: 10,
  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  borderTop: {
    borderColor: '#edeeef',
    borderTopWidth: 1,
  },
});

export default class EventForm extends Component {
  state = {
    title: null,
    date: '',
    showDatePicker: false,
  }

  handleChangeTitle = value => this.setState({ title: value });

  handleDatePicked = value => {
    this.setState({ date: value });

    this.handleDatePickerHide();
  }

  handleDatePickerHide = () => this.setState({ showDatePicker: false });

  handleDatePress = () => this.setState({ showDatePicker: true });

  handleAddPress = () => this.props.navigation.navigate('list');

  render() {
    const {
      title,
      date,
      showDatePicker,
    } = this.state;
    debugger

    return (
      <View style={styles.formWrapper}>
        <View style={styles.fieldContainer}>
          <TextInput
            onChangeText={this.handleChangeTitle}
            value={title}
            style={styles.text}
            placeholder="Event Title"
            spellCheck={false}
          />
          <TextInput
            style={[styles.text, styles.borderTop]}
            placeholder="Event Date"
            spellCheck={false}
            value={formatDateTime(date)}
            editable={!showDatePicker}
            onFocus={this.handleDatePress}
          />
          <DateTimePicker
            isVisible={showDatePicker}
            mode="datetime"
            onConfirm={this.handleDatePicked}
            onCancel={this.handleDatePickerHide}
          />
        </View>
        <TouchableHighlight
          style={styles.button}
          onPress={this.handleAddPress}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableHighlight>
      </View>
    );
  }
}


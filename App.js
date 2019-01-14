import { createStackNavigator, createAppContainer } from 'react-navigation';

import EventList from './EventList';
import EventForm from './EventForm';

const AppNavigator = createStackNavigator({
  list: {
    screen: EventList,
    navigationOptions: () => ({
      title: 'Your Events',
    }),
  },
  form: {
    screen: EventForm,
    navigationOptions: () => ({
      title: 'Add an event',
    }),
  },
});

export default createAppContainer(AppNavigator);

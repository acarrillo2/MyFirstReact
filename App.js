import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import Add from './Add';
import AddDetails from './AddDetails';
import Items from './Items';
import Lists from './Lists';
import Plans from './Plans';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" headerMode="none">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="AddDetails" component={AddDetails} />
        <Stack.Screen name="Plans" component={Plans} />
        <Stack.Screen name="Lists" component={Lists} />
        <Stack.Screen name="Items" component={Items} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

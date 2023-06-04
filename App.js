import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AppView from './AppView';
import SecondView from './SecondView';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AppView" headerMode="none">
        <Stack.Screen name="AppView" component={AppView} />
        <Stack.Screen name="SecondView" component={SecondView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

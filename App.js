import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Test from './Component';
import Test2 from './Component2';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Test}
          options={{title: 'Welcome'}}
        />
        <Stack.Screen
          name="Home2"
          component={Test2}
          options={{title: 'Welcome'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

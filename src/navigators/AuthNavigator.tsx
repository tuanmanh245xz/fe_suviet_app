import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen, StartScreen } from '../screens';

const AuthNavigator = () => {

const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{headerShown :false}}>
        <Stack.Screen name="StartScreen" component={StartScreen}/>
        <Stack.Screen name="LoginScreen" component={LoginScreen}/>
    </Stack.Navigator>
  );
};

export default AuthNavigator;

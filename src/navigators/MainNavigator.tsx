import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import TabNavigator from './TabNavigator';

const MainNavigator = () => {
// khi ma co man hinh nao bi che phu cai tab menu thi deo vao day
const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator  screenOptions={{headerShown :false}}>
    <Stack.Screen name="Main" component={TabNavigator}/>
    </Stack.Navigator>
  );
};

export default MainNavigator;

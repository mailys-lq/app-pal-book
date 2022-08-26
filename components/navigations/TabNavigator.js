import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MainStackNavigator, SearchStackNavigator, ProfilStackNavigator } from './StackNavigator'
import TabTopNavigator from './TabTopNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Library" component={TabTopNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Search" component={SearchStackNavigator} options={{ headerShown: false }}/>
      <Tab.Screen name="Profil" component={ProfilStackNavigator} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator
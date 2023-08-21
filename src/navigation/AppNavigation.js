import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabsNavigator } from "./BottonNavigation";
import DetailsScreen from '../Screens/Details';
const { Navigator, Screen } = createStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          options={{ headerShown: false, headerTintColor: 'white'}}
          name={'TabsNavigation'}
          component={BottomTabsNavigator}
        />
        <Screen
         options={{headerStyle: {height:70, backgroundColor:'#000000c0'}, headerTintColor:'white',}}
          name='Detalhes'
          component={DetailsScreen}
        />
      </Navigator>
    </NavigationContainer>
  )
};
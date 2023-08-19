import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {BottomTabsNavigator} from "./BottonNavigation";
import DetailsScreen from '../Screens/Details';
const {Navigator, Screen} = createStackNavigator();

export const AppNavigator = () => {  
  return (
    <NavigationContainer>
      <Navigator>       
          <>
            <Screen 
              options={{headerShown: false}} 
              name={'TabsNavigation'} 
              component={BottomTabsNavigator}
            />
            <Screen 
              name='Detalhes' 
              component={DetailsScreen}
            />
          </>
      </Navigator>
    </NavigationContainer>
  )
};
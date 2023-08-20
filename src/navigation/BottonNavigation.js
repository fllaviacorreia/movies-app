import React from 'react';
import MoviesScreen from '../Screens/Movies';
import FavoritesScreen from '../Screens/Favorites';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarActiveTintColor: "#004b87",
      tabBarInactiveTintColor: '#777',
      tabBarStyle: { backgroundColor: '#999'},
      headerShown: false,
      headerStyle: {height:70, backgroundColor:'#000000c0'}, 
      headerTintColor:'white',
    }}
  >
    <Tab.Screen
      name="Filmes"
      component={MoviesScreen}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="movie" color={color} size={26} />
        ),
      }}
    />
    <Tab.Screen 
      name="Meus favoritos" 
      component={FavoritesScreen} 
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="heart" color={color} size={26} />
        ),
      }}
    />
  </Tab.Navigator>
);
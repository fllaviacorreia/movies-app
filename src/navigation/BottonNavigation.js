import React from 'react';
import MoviesScreen from '../Screens/Movies';
import FavoritesScreen from '../Screens/Favorites';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export const BottomTabsNavigator = () => (
    <Tab.Navigator>
      <Tab.Screen name="Filmes" component={MoviesScreen} />
      <Tab.Screen name="Meus favoritos" component={FavoritesScreen} />
    </Tab.Navigator>
);
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native'; 
import HomeScreen from '../screens/HomeScreen';
import BrawlerScreen from '../screens/BrawlerScreen';
import EventScreen from '../screens/EventScreen';
import MapScreen from '../screens/MapScreen';
import GameModesScreen from '../screens/GameModeScreen';
import BrawlerDetailScreen from '../screens/BrawlerDetailScreen'; 

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: { backgroundColor: '#0D1630' }
        }}
      >
      <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Image
                source={require('../../assets/home.png')} // Chemin de votre image
                style={{ width: size, height: size, tintColor: color }}
              />
            ),
          }}
        />
        <Tab.Screen name="Brawlers" component={BrawlerScreen} />
        <Tab.Screen name="Events" component={EventScreen} />
        <Tab.Screen name="Maps" component={MapScreen} />
        <Tab.Screen name="GameModes" component={GameModesScreen} />
        {/* <Tab.Screen name="BrawlerDetail" component={BrawlerDetailScreen} /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabNavigator;

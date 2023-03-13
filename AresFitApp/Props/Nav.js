import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextComponent, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import HomePage from './Pages/HomePage';
import MuscleDiagramPage from './Pages/MuscleDiagramPage';
import ProfilePage from './Pages/ProfilePage';

const homeName = 'Home'
const profileName = 'Profile'
const muscleDiagramName = 'Workout'
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();

export default function Nav() {

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
          let iconName
          let rn = route.name

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline'
          } else if (rn === muscleDiagramName) {
            iconName = focused ? 'body' : 'body-outline'
          } else if (rn === profileName) {
            iconName = focused ? 'person' : 'person-outline'
          }
          return <Ionicons name={iconName} size={size} color={color}/>
        }
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'grey',
        paddingTop: 10,
        labelStyle: { paddingBottom: 5, fontSize: 10 },
        style: { padding: 10, height: 70}
      }}>
        <Tab.Screen name={homeName} component={HomePage}/>
        <Tab.Screen name={muscleDiagramName} component={MuscleDiagramPage}/>
        <Tab.Screen name={profileName} component={ProfilePage}/>  
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}
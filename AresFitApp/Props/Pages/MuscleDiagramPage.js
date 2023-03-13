import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import MuscleSvgComponent from './svg/MuscleSvgComponent';
import { createStackNavigator } from '@react-navigation/stack';
import WorkoutInfo from './svg/WorkoutInfo'

const MuscleDiagramPage = ({naviagtion}) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="MuscleSVGComponent" component={MuscleSvgComponent} />
            <Stack.Screen name="WorkoutInfo" component={WorkoutInfo} />
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#FFF',
    },
  });

export default MuscleDiagramPage;
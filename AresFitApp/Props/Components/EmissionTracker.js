import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const EmissionTracker = ({ fname, emissionAmount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{fname}'s Total CO2 Emissions Negated from Carpooling to the Gym!</Text>
      <Text style={styles.text}>{emissionAmount} grams of CO2</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: '90%',
    marginHorizontal: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 1,
    elevation: 5,
    padding: 10,
    margin: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    paddingTop: 10,
    textAlign: 'center',
    fontSize: 16,
  },
});

export default EmissionTracker;

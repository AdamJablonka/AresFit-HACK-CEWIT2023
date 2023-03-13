import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const BoxGrid = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>PR tracker</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Diet</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Set Carpool Schedule</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Progess</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Find Carpoolers</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Saved Workouts</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Body Graph</Text>
      </View>
      <View style={styles.box}>
        <Text style={styles.text}>Ai Chat</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 10,
    margin: 5,
    borderRadius: '80',
  },
  box: {
    width: '45%',
    height: 75,
    backgroundColor: '#0995ff',
    marginBottom: 10,
    borderRadius: 4,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    margin: 5
  }
});

export default BoxGrid;

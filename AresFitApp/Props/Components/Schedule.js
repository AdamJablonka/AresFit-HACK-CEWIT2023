import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Schedule = ({ text }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedule:</Text>
      <Text>• Go Jim</Text>
      <Text>• New PR</Text>
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
    fontSize: 10,
  },
});

export default Schedule;

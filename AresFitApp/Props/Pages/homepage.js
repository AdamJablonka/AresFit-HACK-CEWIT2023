import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Schedule from '../Components/Schedule';
import pfp from './images/pfp.png'
import BoxGrid from '../Components/BoxGrid';


const HomePage = ({navigation}) => {
  let fname = "Jonathan"

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello,</Text>
      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <Text style={styles.name}>{fname}</Text>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
        <Image
                source={pfp}
                style={{ width: 25, height: 25, borderRadius:100, marginRight: 15, marginBottom: 15}}/>
        </View>
      </View>

      <Text style={{marginLeft: 10}}>Ready to get started?</Text>
      <Schedule/>
      <BoxGrid/>
      <Image source={require('./sample_graph.png')}
      style={{ flex: 1, width: 200, height: 200, justifyContent: 'center', alignItems: 'center', marginLeft: 90}}
      resizeMode="contain"
      accessibilityLabel="An example image" />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'left',
    fontSize: 24,
    marginLeft: 10,
    },
  name: {
    marginLeft: 10,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default HomePage;
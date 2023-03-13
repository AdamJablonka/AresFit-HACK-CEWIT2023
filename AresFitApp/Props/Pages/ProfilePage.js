import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import pfp from './images/pfp.png'
import EmissionTracker from '../Components/EmissionTracker';

const ProfilePage = ({naviation}) => {
    let fname = "Jonathan"
    let lname = "Smith"
    let username = "jsmith420"
    let emissionAmount = 5.2
    return (
        <View style={styles.container}>
            <Image
                source={pfp}
                style={{ width: 100, height: 100, borderRadius:100, marginTop: 20}}/>
            <Text style={ {marginTop: 5} }>{username}</Text>
            <Text style={styles.name}>{fname} {lname}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10}}>
                <View style={styles.stats}>
                    <Text>0</Text>
                    <Text>Friends</Text>
                </View>
                <View style={styles.stats}>
                    <Text>0</Text>
                    <Text>Streak</Text>
                </View>
                <View style={styles.stats}>
                    <Text>0</Text>
                    <Text>Carpools</Text>
                </View>
            </View>
            <View style = {styles.lineStyle} />
            <EmissionTracker fname={fname} emissionAmount={emissionAmount}/>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 1,
  },
  stats: {
    margin: 5,
    alignItems: 'center',
  },
  lineStyle:{
    borderWidth: 0.5,
    borderColor:'black',
    margin:10,
    width: "95%",
  },
});

export default ProfilePage;
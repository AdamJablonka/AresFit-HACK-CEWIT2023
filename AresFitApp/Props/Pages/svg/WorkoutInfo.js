import React from 'react';
import { View, Text, StyleSheet, Image, useWindowDimensions } from 'react-native';

const WorkoutInfo = () => {
    const imageUrl = 'https://media.giphy.com/media/xT0xeCCINrlk96yc0w/giphy.gif';
    const { width } = useWindowDimensions();
    return (
    <View>
        <View style={{flex: 1}}>
        <Image style={{flex: 1, maxWidth: width, maxHeight: width}} source={{uri: imageUrl}}/>
        </View>
        <View>
            <Text style={styles.text}>CHEST WORKOUTS TEST:</Text>
            <Text>•LIFT</Text>
            <Text>•WEIGHTS</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({
    text: {
      fontFamily: 'Helvetica', // or any other font family you prefer
      fontSize: 16,
      fontWeight: '400', // can be 'bold', 'normal', etc.
      color: 'black',
    },
  });

export default WorkoutInfo;

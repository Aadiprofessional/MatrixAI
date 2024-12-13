import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';  // For animation

const BotScreen = () => (
  <Animatable.View
    style={styles.container}
    animation="fadeInUpBig"  // Cool animation that makes it appear from the bottom
    duration={1000}
    useNativeDriver={true}
  >
    <Text style={styles.text}>Welcome to BotScreen!</Text>
  </Animatable.View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default BotScreen;

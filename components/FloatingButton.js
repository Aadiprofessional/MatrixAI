import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Image, View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const FloatingButton = () => {
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');

  useEffect(() => {
    // Show the popup animation when the component mounts
    setIsVisible(true);

    // Typing effect simulation
    const targetText = 'Ask Matrix Bot';
    let index = 0;
    const interval = setInterval(() => {
      setText(targetText.slice(0, index + 1));
      index += 1;
      if (index === targetText.length) {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval); // Clear the interval when component unmounts
  }, []);

  const onPress = () => {
    navigation.navigate('BotScreen');  // Navigate to BotScreen when clicked
  };

  return (
    <View style={styles.container}>
      {isVisible && (
        <Animatable.View animation="fadeInUp" duration={800} style={styles.popup}>
          <View style={styles.dialogBox}>
            <Animatable.Text animation="fadeIn" style={styles.typingText}>
              {text}
            </Animatable.Text>
          </View>
        </Animatable.View>
      )}
      
      <TouchableOpacity onPress={onPress} style={styles.floatingButton}>
        <Image
          source={require('../assets/robot.png')} // Replace with your image path
          style={styles.buttonImage}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 90,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,  // Ensures the button is on top of other components
  },
  buttonImage: {
    width: 40,   // Adjust the width of the image
    height: 40,  // Adjust the height of the image
    resizeMode: 'contain', // This ensures the image retains its aspect ratio
  },
  popup: {
    position: 'absolute',
    bottom: 160, // Adjust to show above the button
    right: 20,
    zIndex: 999,
  },
  dialogBox: {
    backgroundColor: '#FFFFFF',
    padding: 10,
    borderRadius: 15,
    maxWidth: 250,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    borderColor: '#ccc',
    borderWidth: 1,
  },
  typingText: {
    fontSize: 14,
    color: '#333',
    fontWeight: 'bold',
  },
});

export default FloatingButton;

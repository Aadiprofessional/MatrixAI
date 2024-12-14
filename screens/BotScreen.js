import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'; // For animation
import Modal from 'react-native-modal'; // For bottom modal slider

const BotScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleModal = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View style={styles.screen}>
      {/* Button to Open Slider */}
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Open Chat Slider</Text>
      </TouchableOpacity>

      {/* Bottom Slider Modal */}
      <Modal
        isVisible={isVisible}
        onBackdropPress={toggleModal} // Close when tapping outside
        style={styles.modal}
        useNativeDriver={true}
        animationIn="slideInUp"
        animationOut="slideOutDown"
      >
        <Animatable.View
          style={styles.container}
          animation="fadeInUpBig"
          duration={1000}
          useNativeDriver
        >
          <Text style={styles.title}>All Chats</Text>

          {/* Mock Chat List */}
          <View style={styles.chatList}>
            {[
              'StarryAI bot',
              'Creative WritingsE',
              'RealVisXL',
              'MrTeacherGPT',
              'Photo CreateE',
              'PsychologicalExpert',
              'Doctorsage',
              'Mrstherapist',
            ].map((chat, index) => (
              <View key={index} style={styles.chatItem}>
                <Text style={styles.chatText}>{chat}</Text>
              </View>
            ))}
          </View>
        </Animatable.View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  button: {
    backgroundColor: '#3B82F6',
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal: {
    margin: 0,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: '60%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chatList: {
    marginTop: 10,
  },
  chatItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#E0E0E0',
  },
  chatText: {
    fontSize: 16,
    color: '#333333',
  },
});

export default BotScreen;

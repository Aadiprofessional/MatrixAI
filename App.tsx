import React, { useState } from 'react';
import { View } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import HomeScreen from './screens/HomeScreen';


const App = () => {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {onboardingCompleted ? (
        <HomeScreen />
      ) : (
        <OnboardingScreen onFinish={() => setOnboardingCompleted(true)} />
      )}
    </View>
  );
};

export default App;

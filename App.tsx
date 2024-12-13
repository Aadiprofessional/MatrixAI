import React, { useState } from 'react';
import { View } from 'react-native';
import OnboardingScreen from './screens/OnboardingScreen';
import AppNavigator from './screens/AppNavigator'; // Correct navigator import


const App = () => {
  const [onboardingCompleted, setOnboardingCompleted] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      {onboardingCompleted ? (
        <AppNavigator />
      ) : (
        <OnboardingScreen onFinish={() => setOnboardingCompleted(true)} />
      )}
    </View>
  );
};

export default App;

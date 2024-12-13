import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { Shadow } from 'react-native-shadow-2';
import { LinearGradient } from 'react-native-svg';


// Custom Tab Bar
const CustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Shadow
      distance={10}
      startColor={'#00000010'}
      offset={[0, 5]}
      style={styles.shadowWrapper}
    >
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const AnimatedTouchable = Animatable.createAnimatableComponent(
            TouchableOpacity
          );

          let iconName;
          if (route.name === 'Home') {
            iconName = isFocused ? 'home' : 'home-outline';
          } else if (route.name === 'AI Shop') {
            iconName = isFocused ? 'grid' : 'grid-outline';
          } else if (route.name === 'Profile') {
            iconName = isFocused ? 'person' : 'person-outline';
          }

          return (
            <AnimatedTouchable
              key={route.name}
              onPress={onPress}
              style={styles.tabBarItem}
              animation={isFocused ? 'pulse' : undefined}
              duration={500}
            >
              <Ionicons
                name={iconName}
                size={24}
                color={isFocused ? '#007BFF' : 'gray'}
              />
              <Text
                style={{
                  color: isFocused ? '#007BFF' : 'gray',
                  fontSize: 12,
                }}
              >
                {label}
              </Text>
            </AnimatedTouchable>
          );
        })}
      </View>
    </Shadow>
  );
};

// Bottom Tab Navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="AI Shop" component={AIShopScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;

// Styles
const styles = StyleSheet.create({
  // Shared fixed header
  screenContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 80, // Leaves space for the fixed header
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  // Tab Bar Styles
  shadowWrapper: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    right: 15,
    borderRadius: 35,
  },
  tabBarContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 35,
    height: 70,
    elevation: 10,
  },
  tabBarItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

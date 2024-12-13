import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Shadow } from 'react-native-shadow-2';
import AIShopScreen from './AiShopScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import * as Animatable from 'react-native-animatable';

const CustomTabBar = ({ state, descriptors, navigation }) => (
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

        // Define images for icons
        const icons = {
          Home: isFocused
            ? require('../assets/home-filled.png')
            : require('../assets/home.png'),
          'AI Shop': isFocused
            ? require('../assets/shop-filled.png')
            : require('../assets/shop.png'),
          Profile: isFocused
            ? require('../assets/profile-filled.png')
            : require('../assets/profile.png'),
        };

        return (
          <AnimatedTouchable
            key={route.name}
            onPress={onPress}
            style={styles.tabBarItem}
            animation={isFocused ? 'pulse' : undefined}
            duration={500}
          >
            <Image
              source={icons[route.name]}
              style={{ width: 24, height: 24 }}
              resizeMode="contain"
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

const styles = StyleSheet.create({
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

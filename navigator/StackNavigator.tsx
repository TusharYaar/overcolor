import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeScreen';
import GameDifficultyScreen from '../screens/GameDifficultyScreen';

export type RootStackParamList = {
  Home: undefined;
  GameDifficulty: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GameDifficulty" component={GameDifficultyScreen} />
    </Stack.Navigator>
  );
};

export default RootStackNavigator;

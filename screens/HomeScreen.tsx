import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Button from '../components/Button';

const HomeScreen = () => {
  const startSinglePlayerGame = () => {
    console.log('startSinglePlayerGame');
  };

  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={startSinglePlayerGame}>Single Player</Button>
      <Button onPress={startSinglePlayerGame}>Multiplayer</Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Button from '../components/Button';

const GameDifficultyScreen = () => {
  const startGame = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        console.log('easy');
        break;
      case 'medium':
        console.log('medium');
        break;
      case 'hard':
        console.log('hard');
        break;
      case 'impossible':
        console.log('impossible');
        break;
    }
  };

  return (
    <View>
      <Text>GameDifficultyScreen</Text>
      <Button onPress={() => startGame('easy')}>Easy </Button>
      <Button onPress={() => startGame('medium')}>Medium </Button>
      <Button onPress={() => startGame('hard')}>Hard </Button>
    </View>
  );
};

export default GameDifficultyScreen;

const styles = StyleSheet.create({});

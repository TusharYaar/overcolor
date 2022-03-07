import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

const Button: React.FC<{onPress: () => void}> = ({children, onPress}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View>
        <Text>{children}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({});

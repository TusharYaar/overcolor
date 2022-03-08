import React from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';

type buttonProps = {
  onPress: () => void;
  // title: string | undefined;
  color?: string;
  backgroundColor?: string;
  disabled?: boolean;
  caption?: string;
  style?: any;
};

const Button: React.FC<buttonProps> = ({
  children,
  onPress,
  color,
  backgroundColor,
  disabled = false,
  caption,
  style,
}) => {
  return (
    <TouchableHighlight onPress={onPress}>
      <View
        style={[
          styles.buttonContainer,
          style,
          disabled ? styles.buttonDisabled : null,
        ]}>
        <Text>{children}</Text>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </TouchableHighlight>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    margin: 5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caption: {
    fontSize: 12,
    color: '#808080',
  },
  buttonDisabled: {
    backgroundColor: '#d3d3d3',
  },
});

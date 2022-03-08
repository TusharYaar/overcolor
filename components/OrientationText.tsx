import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

type props = {
  direction: 'horizontal' | 'vertical';
  style?: any;
  containerStyle?: any;
};

const OrientationText: React.FC<props> = ({
  children,
  direction,
  style,
  containerStyle,
}) => {
  if (typeof children !== 'string') {
    return <View>{children}</View>;
  }

  const displayText = children.split('').map((value, index) => (
    <Text key={index} style={style}>
      {value}
    </Text>
  ));
  return (
    <View
      style={[
        styles.default,
        direction === 'vertical' ? styles.vertical : null,
        containerStyle,
      ]}>
      {displayText}
    </View>
  );
};

export default OrientationText;

const styles = StyleSheet.create({
  default: {
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },

  vertical: {
    flexDirection: 'column',
  },
});

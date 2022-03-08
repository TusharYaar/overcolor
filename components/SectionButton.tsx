import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

import OrientationText from '../components/OrientationText';

type props = {
  direction: 'horizontal' | 'vertical';
  sectionStyle?: any;
  title: string;
  caption?: string;
  onPress: () => void;
};

const SectionButton: React.FC<props> = ({
  onPress,
  direction,
  sectionStyle,
  title,
  caption,
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.colorSection, sectionStyle]}>
        <OrientationText direction={direction}>{title}</OrientationText>
      </View>
    </TouchableOpacity>
  );
};

export default SectionButton;

const styles = StyleSheet.create({
  colorSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

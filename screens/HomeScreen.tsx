import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions, Image} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../navigator/StackNavigator';

import SectionButton from '../components/SectionButton';
import OrientationText from '../components/OrientationText';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SECTION_AREA = [
  {
    percentage: 0.55,
    color: '#d24150',
  },
  {
    percentage: 0.12,
    color: '#87b84e',
  },
  {
    percentage: 0.12,
    color: '#ecb440',
  },
  {
    percentage: 0.12,
    color: '#39a7d1',
  },
  {
    percentage: 0.09,
    color: '#a3abb6',
  },
];

const HomeScreen = ({
  navigation,
}: NativeStackScreenProps<RootStackParamList, 'Home'>) => {
  const startSinglePlayerGame = () => {
    navigation.navigate('GameDifficulty');
  };

  const [sectionsDimensions, setSectionsDimensions] = useState([
    {
      width: windowWidth,
      height: windowHeight,
    },
  ]);

  const [orientation, setOrientation] = useState<'landscape' | 'portrait'>(
    'portrait',
  );
  useEffect(() => {
    const updateDimensions = (width: number, height: number) => {
      setOrientation(width > height ? 'landscape' : 'portrait');
      const updatedDimensions = SECTION_AREA.map((section, index) => {
        if (width > height) {
          return {
            height,
            width: width * section.percentage,
            backgroundColor: section.color,
          };
        } else {
          return {
            width,
            height: height * section.percentage,
            backgroundColor: section.color,
          };
        }
      });
      setSectionsDimensions([...updatedDimensions]);
    };
    updateDimensions(windowWidth, windowHeight);

    const subscription = Dimensions.addEventListener('change', ({window}) => {
      const {width, height} = window;
      updateDimensions(width, height);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View
      style={[
        styles.screen,
        {flexDirection: orientation === 'portrait' ? 'column' : 'row'},
      ]}>
      <View style={[styles.colorSection, sectionsDimensions[0]]}>
        <Image
          style={[styles.image]}
          source={require('../assests/overcolor.png')}
        />
      </View>
      <View style={[styles.colorSection, sectionsDimensions[1]]}>
        <OrientationText
          containerStyle={{padding: 10}}
          style={styles.titleText}
          direction={orientation === 'portrait' ? 'horizontal' : 'vertical'}>
          OVERCOLOR
        </OrientationText>
      </View>
      <SectionButton
        title="SINGLE"
        sectionStyle={sectionsDimensions[2]}
        onPress={() => startSinglePlayerGame()}
        direction={orientation === 'portrait' ? 'horizontal' : 'vertical'}
      />
      <SectionButton
        title="MULTIPLE"
        sectionStyle={sectionsDimensions[3]}
        onPress={() => startSinglePlayerGame()}
        direction={orientation === 'portrait' ? 'horizontal' : 'vertical'}
        caption="Coming soon"
      />
      <View style={[styles.colorSection, sectionsDimensions[4]]}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  colorSection: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth * 0.5,
    height: windowHeight * 0.5,
    resizeMode: 'contain',
  },
  titleText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default HomeScreen;

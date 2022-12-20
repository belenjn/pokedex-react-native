import React from 'react';
import {Image, Text} from 'react-native';
import {globalStyles} from '../theme/appTheme';

export const HomeScreen = () => {
  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <Text>Home</Text>
    </>
  );
};

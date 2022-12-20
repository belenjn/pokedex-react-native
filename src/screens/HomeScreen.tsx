import React from 'react';
import {Image, Text} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <Text
        style={{...globalStyles.title, top: top + 20, ...globalStyles.margin}}>
        Pokedex
      </Text>
    </>
  );
};

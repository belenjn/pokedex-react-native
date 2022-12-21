/* eslint-disable react-native/no-inline-styles */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import {globalStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FlatList} from 'react-native-gesture-handler';
import {FadeInImage} from '../components/FadeInImage';
import {PokemonCard} from '../components/PokemonCard';
import {usePokemonPaginated} from '../hooks/usePokemonPaginated';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const {simplePokemonList, loadPokemons} = usePokemonPaginated();

  return (
    <>
      <Image
        source={require('../assets/pokebola.png')}
        style={globalStyles.pokeballBG}
      />
      <View
        style={{
          alignItems: 'center',
        }}>
        <FlatList
          data={simplePokemonList}
          keyExtractor={(pokemon, index) => pokemon.id + index}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <Text
              style={{
                ...globalStyles.title,
                ...globalStyles.margin,
                top: top + 20,
                marginBottom: top + 20,
                paddingBottom: 10,
              }}>
              Pokedex
            </Text>
          }
          renderItem={({item}) => (
            // <FadeInImage uri={item.picture} style={{width: 100, height: 100}} />
            <PokemonCard pokemon={item} />
          )}
          onEndReached={loadPokemons}
          onEndReachedThreshold={0.4}
          ListFooterComponent={
            <ActivityIndicator style={{height: 100}} size={20} color="grey" />
          }
        />
      </View>
    </>
  );
};

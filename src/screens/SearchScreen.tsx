/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Platform, Text, FlatList, Dimensions} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {globalStyles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';
import {Loading} from '../components/Loading';

const screenWidth = Dimensions.get('window').width;

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  isFetching && <Loading />;
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 20,
      }}>
      <SearchInput
        style={{
          position: 'absolute',
          zIndex: 999,
          width: screenWidth - 40,
          top: Platform.OS === 'ios' ? 10 : top + 10,
        }}
      />
      <FlatList
        data={simplePokemonList}
        keyExtractor={(pokemon, index) => pokemon.id + index}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View
            style={{
              ...globalStyles.title,
              ...globalStyles.margin,
              paddingBottom: 10,
              marginTop: Platform.OS === 'ios' ? top + 10 : top + 55,
            }}
          />
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

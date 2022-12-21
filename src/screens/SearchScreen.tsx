/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Platform,
  ActivityIndicator,
  StyleSheet,
  Text,
  FlatList,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {SearchInput} from '../components/SearchInput';
import {usePokemonSearch} from '../hooks/usePokemonSearch';
import {globalStyles} from '../theme/appTheme';
import {PokemonCard} from '../components/PokemonCard';

export const SearchScreen = () => {
  const {top} = useSafeAreaInsets();
  const {isFetching, simplePokemonList} = usePokemonSearch();
  if (isFetching) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size={50} color="grey" />
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        marginTop: Platform.OS === 'ios' ? top : top + 10,
        marginHorizontal: 20,
      }}>
      <SearchInput />
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
              paddingBottom: 10,
            }}>
            Pokedex
          </Text>
        }
        renderItem={({item}) => <PokemonCard pokemon={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

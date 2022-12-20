/* eslint-disable react/self-closing-comp */
import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SimplePokemon} from '../interfaces/pokemonInterfaces';

interface Props {
  pokemon: SimplePokemon;
}

const windowWidth = Dimensions.get('window').width;

export const PokemonCard = ({pokemon}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.9}>
      <View
        style={{
          ...styles.cardContainer,
          width: windowWidth * 0.4,
        }}>
        <View>
          <Text style={styles.name}>
            {pokemon.name} {'\n#' + pokemon.id}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    marginHorizontal: 10,
    backgroundColor: 'grey',
    height: 120,
    marginBottom: 25,
    borderRadius: 10,
  },
  name: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    top: 20,
    left: 10,
  },
});

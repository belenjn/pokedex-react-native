/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, ScrollView, StyleSheet, View} from 'react-native';
import {PokemonFull} from '../interfaces/pokemonInterfaces';
import {FadeInImage} from './FadeInImage';

interface Props {
  pokemon: PokemonFull;
  color?: string;
}
export const PokemonDetails = ({pokemon, color}: Props) => {
  return (
    <ScrollView
      style={{
        ...StyleSheet.absoluteFillObject,
      }}
      showsVerticalScrollIndicator={false}>
      <View style={{...styles.container, marginTop: 410}}>
        <Text style={styles.title}>Types:</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.types.map(({type}) => (
            <Text key={type.name} style={{...styles.typeText, marginRight: 10}}>
              {type.name}
            </Text>
          ))}
        </View>
        <Text style={styles.title}>Weights:</Text>
        <Text style={styles.typeText}>{pokemon.weight}lb</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Sprites:</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <FadeInImage
          uri={pokemon.sprites.front_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_default}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.front_shiny}
          style={styles.basicSprite}
        />
        <FadeInImage
          uri={pokemon.sprites.back_shiny}
          style={styles.basicSprite}
        />
      </ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Basic skills:</Text>
        <View style={{flexDirection: 'row'}}>
          {pokemon.abilities.map(({ability}) => (
            <Text
              key={ability.name}
              style={{...styles.typeText, marginRight: 10}}>
              {ability.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Movements:</Text>
        <View style={{flexWrap: 'wrap', flexDirection: 'row'}}>
          {pokemon.moves.map(({move}) => (
            <Text key={move.name} style={{...styles.typeText, marginRight: 10}}>
              {move.name}
            </Text>
          ))}
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Stats:</Text>
        <View>
          {pokemon.stats.map((stat, index) => (
            <View key={stat.stat.name + index} style={{flexDirection: 'row'}}>
              <Text style={{...styles.typeText, marginRight: 10, width: 150}}>
                {stat.stat.name}
              </Text>
              <Text
                style={{...styles.typeText, fontWeight: 'bold', color: color}}>
                {stat.base_stat}
              </Text>
            </View>
          ))}
        </View>
        <View
          style={{
            marginBottom: 30,
            alignItems: 'center',
          }}>
          <FadeInImage
            uri={pokemon.sprites.front_default}
            style={styles.basicSprite}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    marginTop: 20,
  },
  typeText: {
    fontSize: 18,
  },
  basicSprite: {
    width: 100,
    height: 100,
  },
});

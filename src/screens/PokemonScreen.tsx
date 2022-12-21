/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {StyleSheet, View, TouchableOpacity, Text, Image} from 'react-native';
import {RootStackParams} from '../navigator/Navigator';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {FadeInImage} from '../components/FadeInImage';

interface Props extends StackScreenProps<RootStackParams, 'PokemonScreen'> {}

export const PokemonScreen = ({navigation, route}: Props) => {
  const {simplePokemon, color} = route.params;
  const {id, name, picture} = simplePokemon;
  const {top} = useSafeAreaInsets();
  return (
    <View>
      <View
        style={{
          ...styles.headerContainer,
          backgroundColor: color,
        }}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          activeOpacity={0.8}
          style={{
            ...styles.backButton,
            top: top + 10,
            backgroundColor: '#494949',
            borderRadius: 100,
            alignItems: 'center',
          }}>
          <Icon name="chevron-back-outline" color="white" size={30} />
        </TouchableOpacity>
        <Text
          style={{
            ...styles.pokemonName,
            top: top + 50,
          }}>
          {name + '\n'}#{id}
        </Text>
        <Image
          source={require('../assets/pokebola-blanca.png')}
          style={styles.pokeball}
        />
        <FadeInImage uri={picture} style={styles.pokemonImage} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    height: 370,
    zIndex: 999,
    borderBottomRightRadius: 1000,
    borderBottomLeftRadius: 1000,
  },
  backButton: {
    position: 'absolute',
    left: 20,
  },
  pokemonName: {
    color: '#494949',
    fontSize: 40,
    alignSelf: 'flex-start',
    left: 20,
  },
  pokeball: {
    width: 230,
    height: 230,
    alignSelf: 'center',
    bottom: -40,
    opacity: 0.4,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    position: 'absolute',
    alignSelf: 'center',
    bottom: -20,
  },
});

import {useEffect, useRef, useState} from 'react';
import {pokemonAPi} from '../api/pokemonApi';
import {
  PokemonPaginatedResponse,
  Result,
  SimplePokemon,
} from '../interfaces/pokemonInterfaces';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const usePokemonPaginated = () => {
  const [simplePokemonList, setSimplePokemonList] = useState<SimplePokemon[]>(
    [],
  );
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokemonAPi.get<PokemonPaginatedResponse>(
      nextPageUrl.current,
    );
    mapPokemonListToSimplePokemon(resp.data.results);
  };

  const mapPokemonListToSimplePokemon = (pokemonList: Result[]) => {
    const newPokemonList: SimplePokemon[] = pokemonList.map(({name, url}) => {
      const urlParts = url.split('/');
      const id = urlParts[urlParts.length - 2];
      const picture = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

      return {id, picture, name};
    });
    setSimplePokemonList([...simplePokemonList, ...newPokemonList]);
  };

  useEffect(() => {
    loadPokemons();
  });

  return {};
};

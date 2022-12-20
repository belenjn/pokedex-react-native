import {useEffect, useRef} from 'react';
import {pokemonAPi} from '../api/pokemonApi';

/* eslint-disable @typescript-eslint/no-unused-vars */
export const usePokemonPaginated = () => {
  const nextPageUrl = useRef('https://pokeapi.co/api/v2/pokemon?limit=40');

  const loadPokemons = async () => {
    const resp = await pokemonAPi.get(nextPageUrl.current);
    console.log(resp.data);
  };

  useEffect(() => {
    loadPokemons();
  }, []);

  return {};
};

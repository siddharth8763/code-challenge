import { useState, useEffect } from "react";
import { List } from "ui";

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  interface Pokemon {
    name: string;
    url: string;
  }

  interface PokemonApiResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Pokemon[];
  }

  const [pokemonData, setPokemonData] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await fetch(api);
        const data: PokemonApiResponse = await response.json();
        setPokemonData(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon data:", error);
      }
    };
    fetchPokemonData();
  }, []);

  return (
    <>
      <h1>Pokémon list:</h1>
      {pokemonData.map(pokemon => (
        <List key={pokemon.name} name={pokemon.name} />
      ))}
    </>
  );
};

export default App;

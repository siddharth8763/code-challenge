import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { fetchPokemonData } from './slices/pokemonSlice';
import { RootState } from '../store';
import { useAppDispatch } from '../src/hooks/hooks';
import { List } from '../../../packages/ui/components/List'; 
import '../../../packages/ui/components/List.css'; 

const App = () => {
  const dispatch = useAppDispatch();
  const pokemonData = useSelector((state: RootState) => state.pokemon.pokemonData);
  const pokemonStatus = useSelector((state: RootState) => state.pokemon.status);
  const error = useSelector((state: RootState) => state.pokemon.error);

  useEffect(() => {
    if (pokemonStatus === 'idle') {
      dispatch(fetchPokemonData());
    }
  }, [pokemonStatus, dispatch]);

  return (
    <>
      <h1>Pokémon list:</h1>
      <div className="list-container">
        {pokemonStatus === 'loading' && <p>Loading...</p>}
        {pokemonStatus === 'succeeded' && pokemonData.map(pokemon => (
          <List key={pokemon.name} name={pokemon.name} />
        ))}
        {pokemonStatus === 'failed' && <p>{error}</p>}
      </div>
    </>
  );
};

export default App;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Pokemon {
  name: string;
  url: string;
}

interface PokemonState {
  pokemonData: Pokemon[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: PokemonState = {
  pokemonData: [],
  status: 'idle',
  error: null,
};

export const fetchPokemonData = createAsyncThunk('pokemon/fetchPokemonData', async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.json();
  return data.results;
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemonData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemonData.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.pokemonData = action.payload;
      })
      .addCase(fetchPokemonData.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || "An error occurred"; 
      });
  },
});

export default pokemonSlice.reducer;

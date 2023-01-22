import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  status: "idle",
  error: null,
};

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const json = await response.json();
    const result = json.results;
    return result;
  }
);

const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.characters = state.characters.concat(action.payload);
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default charactersSlice.reducer;

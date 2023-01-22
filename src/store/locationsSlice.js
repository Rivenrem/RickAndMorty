import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  message: null,
};

const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    fetchLocations(state, action) {
      state.locations = action.locations.results;
    },
  },
});

export default locationsSlice.reducer;

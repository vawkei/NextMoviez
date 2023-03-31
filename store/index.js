import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialFaveState = {
  items: [],
  totalFaves: 0,
};

const faveSlice = createSlice({
  name: "favorite",
  initialState: initialFaveState,
  reducers: {
    toggleFavorites(state, action) {
      const newItem = action.payload;
      let existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          genre: newItem.genre,
          year: newItem.year,
          description: newItem.description,
        });
        state.totalFaves = state.totalFaves + 1;
      } else {
        const existingMovie = action.payload;
        console.log(existingMovie.id);
        existingItem = state.items.find((item) => item.id === existingMovie.id);
        console.log(existingItem);
        state.items = state.items.filter(
          (item) => item.id !== existingMovie.id
        );
        state.totalFaves = state.totalFaves - 1;
      }
    },

    removeFromFavorites(state, action) {
      const id = action.payload;
      console.log(id);
      const existingItem = state.items.find((item) => item.id === id);
      console.log(existingItem);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalFaves = state.totalFaves - 1;
      }
    },
  },
});
export const faveSliceAction = faveSlice.actions;
const store = configureStore({
  reducer: { favorite: faveSlice.reducer },
});
export default store;

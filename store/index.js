import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialFaveState = {
  items: [],
  totalFaves: 0,
};

const faveSlice = createSlice({
  name: "favorite",
  initialState: initialFaveState,
  reducers: {
    addItemToFavorites(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      // state.totalFaves = state.totalFaves + 1;
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          image: newItem.image,
          genre: newItem.genre,
          year:newItem.year,
          description: newItem.description  
        });
        state.totalFaves = state.totalFaves + 1;
      }
    },
    removeFromFavorites(state,action){
       const id = action.payload;
       console.log(id)
       const existingItem = state.items.find((item)=>item.id === id);
       console.log(existingItem)
       if(existingItem){
       state.items= state.items.filter((item)=>item.id !==id)
        state.totalFaves = state.totalFaves - 1
       } ;
    }
  },
});
export const faveSliceAction = faveSlice.actions
const store = configureStore({
    reducer :{ favorite:faveSlice.reducer}
});
export default store;

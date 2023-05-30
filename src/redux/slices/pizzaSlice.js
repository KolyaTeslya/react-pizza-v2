import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzasStatus', async (params) => {
  const { sortBy, order, category, search, currentPage } = params;
  const { data } = await axios.get(
    `https://644fe2f3ba9f39c6ab6f03fb.mockapi.io/items?page=${currentPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}${search}`,
  );
  return data;
});

const initialState = {
  items: [],
};

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state, action) => {
        console.log('Идет отправка');
    },
    [fetchPizzas.fulfilled]: (state, action) => {
        console.log(state, 'ВСЕ ОКЕЙ');
    },
    [fetchPizzas.rejected]: (state, action) => {
        console.log('Была ошибка');
    },
  },
});

export const { setItems } = pizzaSlice.actions;

export default pizzaSlice.reducer;

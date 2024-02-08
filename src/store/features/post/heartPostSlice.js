import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const createProduct = createAsyncThunk(
  'products/createProduct',
  async (productData, { dispatch }) => {
    try {
      const response = await fetch('/user-page/cart-favorites/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(productData),
      });
      if (!response.ok) {
        throw new Error('Error creating product');
      }
      const data = await response.json();
      console.log(data);
      // Вы можете также отправить запрос на получение обновленного списка продуктов
      // dispatch(fetchProducts()); // Возможно, вам нужно это
      return data;
    } catch (error) {
      throw new Error(error.message || 'Error creating product');
    }
  }
);

const postProductSlice = createSlice({
  name: 'products',
  initialState: {
    titleValue: '',
    priceValue: '',
    haractikValue: '',
    inputValue: '',
    isChecked: false,
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(createProduct.fulfilled, (state, action) => {});

    builder.addCase(createProduct.rejected, (state, action) => {
      console.error('Error creating product:', action.error.message);
    });
  },
});

export default postProductSlice.reducer;

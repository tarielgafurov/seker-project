import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApi } from '../../api/fetchData';

// Телефон кошуу учун асинхрондук аракет
export const addPhone = createAsyncThunk(
  'addPhones',
  async (data, thunkAPI) => {
    console.log("TEZT");
    const test = {
      "title": "string",
      "description": "string",
      "characteristics": "string",
      "price": 777,
      "new": true,
      "producer": 1
    }
    try {
      // Выполняем запрос к API для добавления телефона
      const response = await fetchApi({
        url: "admin/product/",
        method: 'POST',
        body: test,
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке данных на сервер');
      }

      // Получаем данные ответа от сервера
      const responseData = await response.json();
      return responseData;
    } catch (error) {
      // Возвращаем сообщение об ошибке в случае неудачи
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Создаем срез для состояния добавления телефона
export const addPhonesSlice = createSlice({
  name: 'addPhones',
  initialState: {
    status: false,
    isModal: false,
    message: ""
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Обрабатываем состояние ожидания запроса
      .addCase(addPhone.pending, (state) => {
        state.status = true;
      })
      // Обрабатываем успешный результат запроса
      .addCase(addPhone.fulfilled, (state) => {
        state.status = true;
        state.isModal = true;
        state.message = "Успешно";

        state.inputValue = "";
        state.titleValue = "";
        state.priceValue = "";
        state.haractikValue = "";
      })
      // Обрабатываем ошибку запроса
      .addCase(addPhone.rejected, (state, action) => {
        state.status = false;
        state.isModal = true;
        state.message = "ERROR";
      });
  },
});







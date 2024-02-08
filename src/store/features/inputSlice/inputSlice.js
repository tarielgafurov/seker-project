import { createSlice } from '@reduxjs/toolkit';
import { fetchData } from '../../fetchData';

export const inputSlice = createSlice({
    name: 'input',
    initialState: {
        titleValue: '',
        priceValue: '',
        haractikValue: '',
        inputValue: '',
        isCheckedNew: false,
        isCheckedUsed: false,
        errorFields: {
            title: false,
            price: false,
            haractik: false,
        },
        isLoading: false,
        error: null,
    },
    reducers: {
        setInputField: (state, action) => {
            console.log(action);
            const { field, value } = action.payload;
            state[field] = value;
            // Устанавливаем ошибку в false при изменении значения поля
            state.errorFields[field] = !value.trim();
        },
        setCheckbox: (state, action) => {
            const { type, value } = action.payload;
            state[type] = value;
        },
        setLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        resetInputState: (state) => {
            // Reset all fields to initial state
            Object.assign(state, inputSlice.initialState);
        },
    },
});

export const { setInputField, setCheckbox, setLoading, setError, resetInputState } = inputSlice.actions;

// Thunk action creator
export const fetchUserData = (data) => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await fetchData({
            endpoint: 'admin/product/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data),
        });
        // Обработка ответа от сервера
        console.log(response);
    } catch (error) {
        // Обработка ошибки
        console.error('Error fetching data:', error);
        dispatch(setError(error.message));
    } finally {
        dispatch(setLoading(false));
    }
};

export default inputSlice.reducer;

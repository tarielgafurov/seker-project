import { TOGGLE_COLOR } from '../actions';

const initialState = {
  colors: [
    { id: 1, name: 'Красный', selected: false },
    { id: 2, name: 'Черный', selected: false },
    { id: 3, name: 'Белый ', selected: false },
    { id: 3, name: 'Синий', selected: false },
    { id: 3, name: 'Голубой', selected: false },
    { id: 3, name: 'Розовый', selected: false },
  ],
};
  
const colorReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_COLOR:
      const updatedColors = state.colors.map(color =>
        color.name === action.payload ? { ...color, selected: !color.selected } : color
      );
      return { ...state, colors: updatedColors };

    default:
      return state;
  }
};

export default colorReducer;

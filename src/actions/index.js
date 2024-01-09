export const TOGGLE_COLOR = 'TOGGLE_COLOR';

export const toggleColor = (color) => {
  return {
    type: TOGGLE_COLOR,
    payload: color,
  };
};

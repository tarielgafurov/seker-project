
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import colorReducer from './reducers';
import HeartSVG from './UI/Heart';

const store = createStore(colorReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
       <HeartSVG/>
      </div>
    </Provider>
  );
};

export default App;




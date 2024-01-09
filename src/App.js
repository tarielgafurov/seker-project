// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Avtandil</h1>


//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import colorReducer from './reducers';
import ColorList from './components/ColorList';

const store = createStore(colorReducer);

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>checkbox</h1>
        <ColorList />
      </div>
    </Provider>
  );
};

export default App;




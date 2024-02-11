import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from './components/registr/Registr';
import AppRoutes from './routes/AppRoutes';
 
function App() {
  return (
    <div className="App">
      <AppRoutes/>
      <Register/>

      <Routes>
        <Route path='test' element={<h1>TEST</h1>} />
      </Routes>
    </div>
  );
}

export default App

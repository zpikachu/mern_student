
import './App.css';
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Form from './pages/Form'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/insert" element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

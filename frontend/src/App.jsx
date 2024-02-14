
import './App.css';
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import StusentForm from './pages/StudentForm'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student_form" element={<StusentForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

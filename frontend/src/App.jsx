
import './App.css';
import {BrowserRouter,  Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import StudentForm from './pages/StudentForm'
import UpdateForm from './pages/Update'
function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/student_form" element={<StudentForm/>}/>
        <Route path="/update/:id" element={<UpdateForm/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

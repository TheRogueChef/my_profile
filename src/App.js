import './App.css';
import  React  from 'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Dashboard from './components/Dashboard';
import Main from './views/Main';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/' element={<Main/>}default/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
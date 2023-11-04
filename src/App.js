import logo from './logo.svg';
import './App.css';
import Home from './home.js';
import { ReactDOM } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import NavBar from './Navbar';
import FAQ from './faq';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar />}>
            <Route index element={<Home />} />
            <Route path='/FAQ' element={<FAQ />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

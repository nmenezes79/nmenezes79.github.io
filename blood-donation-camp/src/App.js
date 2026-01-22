import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Registration from './components/Registration';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path='/registration' element={<Registration/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;

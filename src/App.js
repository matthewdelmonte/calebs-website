import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Nav-Bar';
import Home from './views/Home';
import Animals from './views/Animals';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/animals" element={<Animals />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

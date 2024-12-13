import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Login from './pages/Login/Login';
import Page10 from './pages/Page10/Page10';
import Page11 from './pages/Page11/Page11';
import Page12 from './pages/Page12/Page12';
import Page13 from './pages/Page13/Page13';
import Num14 from './pages/Page14/Num14';
import Num9 from './pages/Page9/Num9';
import Diary from './pages/Page15/Diary';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path='/pages/page9' element={<Num9 />} />
        <Route path='/pages/page10' element={<Page10 />} />
        <Route path='/pages/page11' element={<Page11 />} />
        <Route path='/pages/page12' element={<Page12 />} />
        <Route path='/pages/page13' element={<Page13 />} />
        <Route path="/pages/page14" element={<Num14 />} />
        <Route path="/pages/page15" element={<Diary />} />
      </Routes>
    </Router>
  );
}

export default App;

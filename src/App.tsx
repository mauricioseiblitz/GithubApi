import './assets/styles/custom.scss';
import './App.css';

import Navbar from 'components/Navbar';
import Home from 'pages/HOME';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from 'pages/PROFILESEARCH';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

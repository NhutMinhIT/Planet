import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavbarComponent/Navbar';
import Banner from './Components/BannerComponent/Banner';
import HomePage from './Components/HomeComponent/Home';
import ContactPage from './Components/ContactComponent/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/tree" element={<ContactPage />} />
        <Route path="/benefits" element={<ContactPage />} />
      </Routes>
    </div>

  );
}

export default App;

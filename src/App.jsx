import { Routes, Route, Router } from 'react-router-dom';
import Navbar from './Components/NavbarComponent/Navbar';
import Banner from './Components/BannerComponent/Banner';
import HomePage from './Components/HomeComponent/Home';
import ContactPage from './Components/ContactComponent/Contact';
import './App.css';
import AboutPage from './Components/AboutComponent/About';
import FeedbackPage from './Components/FeedbackComponents/Feedback'

function App() {
  return (
    <div className="App">

      <Navbar />
      <Banner />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/tree" element={<ContactPage />} />
        <Route path="/benefits" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />

      </Routes >
    </div >

  );
}

export default App;

import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/NavbarComponent/Navbar';
import Banner from './Components/BannerComponent/Banner';
import HomePage from './Components/HomeComponent/Home';
import './App.css';
import AboutPage from './Components/AboutComponent/About';
import FeedbackPage from './Components/FeedbackComponents/Feedback';
import TravelPage from './Components/TravelComponent/Travel';
import Footer from './Components/FooterComponent/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      <Banner />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/feedback" element={<FeedbackPage />} />
      </Routes >
      <Footer />
    </div >

  );
}

export default App;

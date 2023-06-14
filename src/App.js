import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import NavBar from './components/NavBar';
import Reviews from './pages/Reviews';
import CreateReview from './pages/CreateReview'
import PopUp from './components/PopUp';


function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/createReview" element={<CreateReview/>}/>
          <Route path="/popup" element={<PopUp/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

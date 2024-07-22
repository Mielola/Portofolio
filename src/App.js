import cardData from './Components/cardData';
import CardSkill from './Components/cardSkill';
import DetailPage from './Page/detailPage';
import HomePage from './Page/homePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:id" element={<DetailPage/>} />
          <Route path="*" element={<h1>Halaman Tidak Tersedia</h1>} />
        </Routes>
      </Router>
    </>

    
  );
}

export default App;

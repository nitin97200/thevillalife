// import { Route } from '@mui/icons-material';
// import Router from 'json-server/lib/server/router';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import BasicGrid from './Pages/Wait';
import Team from './Pages/Team';
import ScrollToTop from './Components/ScrollToTop';
import Forget from './Pages/Forget';

function App() {
  return (
    <div >
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Wait" element={<BasicGrid />} />
        <Route path='/Team' element={<Team />} />
        <Route path='/Forget' element={<Forget/>}/>
      </Routes>
    </div>
  );
}

export default App;

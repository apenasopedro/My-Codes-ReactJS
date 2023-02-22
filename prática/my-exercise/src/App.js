import './App.css';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import Home from './components/pages/Home'
import Contatos from './components/pages/Contatos'
import Sobre from './components/pages/Sobre'
import Navbar from './components/pages/Navbar';
import Footer from './components/pages/layout/Footer';
function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
        <Route path='/home' element={ <Home/>}/>
        
        <Route path='/sobre' element={<Sobre/>}/>
       
        <Route path='/contatos' element={<Contatos/>}/>
        
      </Routes>
      <Footer/>
     </Router>
    </div>
  );
}

export default App;

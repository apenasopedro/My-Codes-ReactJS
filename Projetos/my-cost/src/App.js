import{BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Sobre from './components/pages/Sobre';
import Contato from './components/pages/Contato';
import Projeto from './components/pages/Projeto';
import Projetos from './components/pages/Projetos';
import NovoProjeto from './components/pages/NovoProjeto';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Footer from './components/layout/Footer'
function App() {
  return (
  <Router>
  <Navbar/>
  <Container customClass='min-height'>
    <Routes>   
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/projeto/:id" element={<Projeto/>}/>
          <Route path="/projetos" element={<Projetos/>}/>
          <Route path="/novo_projeto" element={<NovoProjeto/>}/>
    </Routes>
  </Container>  
  <Footer/>
  </Router>
  );
}

export default App;

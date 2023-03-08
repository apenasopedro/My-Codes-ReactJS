import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contatos from "./pages/Contatos";
import Header from "./components/Header";
import Error from "./pages/Error";
import Produto from "./pages/Produto";

export default function NavBar(){
    return(
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contatos" element={<Contatos/>} />
                <Route path="/produto/:id" element={<Produto/>}/>
                <Route path="*" element={<Error/>}/>
            </Routes>
        </BrowserRouter>
    )
}
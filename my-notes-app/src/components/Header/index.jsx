import { Link } from "react-router-dom"
import './styles.css'

export default function Header(){
    return(  
        <header>
            <h2>Teste</h2>
            <div className="menu">
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/contatos">Contatos</Link>
            </div>
                
                
            
        </header>
    )
}
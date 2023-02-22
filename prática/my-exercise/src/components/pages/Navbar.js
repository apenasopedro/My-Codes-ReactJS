import { Link } from "react-router-dom";

import styles from './Navbar.module.css';

function Navbar(){
    return(
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/contatos">Contatos</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar
import { useNavigate } from "react-router-dom"

function Contatos(){
    const navigate = useNavigate()
    function handClick(){
        navigate('/home')
    }
    
    return(
        <div>
            <h1>Contatos</h1>
            <ul>
                <li>okwodk@gmail.com</li>
                <li>438423984934</li>
            </ul>
            <p>Voltar para a <button onClick={handClick}>Home</button></p>
        </div>
    )
}
export default Contatos
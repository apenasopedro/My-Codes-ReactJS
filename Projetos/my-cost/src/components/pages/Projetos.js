import { useLocation } from "react-router-dom"
import Message from "../layout/Message"
import styles from './Projetos.module.css'
import LinkButton from "../layout/LinkButton"
import Loading from "../layout/Loading"
import Container  from "../layout/Container"
import ProjetoCard from "../project/ProjetoCard"
import { useState, useEffect } from "react"

function Projetos(){
    const [projetos, setProjetos]= useState([])
    const [removeLoading, setRemoveLoading]= useState(false)
    const [projetoMessage, setProjetoMessage] = useState('')

    const location = useLocation()
    let message = ''
    if(location.state) {
        message = location.state.message
    }
    useEffect(() => {
        setTimeout(()=> {
        fetch('http://localhost:5000/projetos', {
            method: 'GET',
            headers:{
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProjetos(data)
            setRemoveLoading(true)
        })
        .catch(err => console.log(err))
    
    }, 300)    
    }, [])

    function removeProjeto(id){
        fetch(`http://localhost:5000/projeto/${id}`,{
        method: 'DELETE',
        headers : {
            'Content-Type': 'application/json'
        },
        
    }).then((resp)=> resp.json)
    .then((data) =>{
        setProjetos(projetos.filter((projeto)=> projeto.id !== id))
        setProjetoMessage('Projeto Removido Com Sucesso!')
    })
    .catch(err => console.log(err))

    }
    
    return(
       
        <div className={styles.projetos_container}>
            
           <div className={styles.title_container}>
           <h1>Meus Projetos</h1>
           <LinkButton to='/novo_projeto' text="Criar Projeto"/>
           </div>
           {message && <Message type="sucess" msg={message} />} 
           {projetoMessage && <Message type="sucess" msg={projetoMessage} />} 
           <Container customClass="start"> 
           {projetos.length > 0 &&
            projetos.map((projeto) => (
                <ProjetoCard 
                id={projeto.id} 
                name={projeto.name}
                budget={projeto.budget}
                categories={projeto?.categories?.name}
                key={projeto.id}
                handleRemove={removeProjeto}
                />
            ))}
            {!removeLoading && <Loading/>}
            {removeLoading && projetos.length ===0 && (
                <p>Não Há Projetos Cadastrados</p>
            )
            
            }              
            </Container>
        </div>
    )
}
export default Projetos
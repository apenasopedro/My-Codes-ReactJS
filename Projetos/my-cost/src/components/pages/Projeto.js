import { parse, v4 as uuidv4} from 'uuid'

import styles from './Projeto.module.css'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loading from '../layout/Loading'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'
import Container from '../layout/Container'

function Projeto(){

    const {id} = useParams()
    const [projeto, setProjeto]= useState([])
    const [showProjetoForm, setShowProjetoForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage]= useState()
    const [type, setType]= useState()

useEffect(()=> {
    
fetch(`http://localhost:5000/projetos/${id}`,{
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
         },
})
        .then((resp) => resp.json())
        .then((data)=>{
        setProjeto(data)
        })
        .catch((err) => console.log(err))   
        
},[id])



function editPost(projeto){

    setMessage('')

    if(projeto.budget < projeto.cost){
        setMessage("O orçamento não pode ser menor do que o custo do projeto!")
        setType('error')
        return false
    }
    fetch(`http://localhost:5000/projetos/${id}`,{
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projeto),
    })
    .then((resp)=> resp.json())
    .then((data)=>{
       setProjeto(data) 
       setShowProjetoForm(false)
       setMessage("Projeto Atualizado!")
       setType('sucess')
    })
    .catch((err)=> console.log(err))
}

function createService(projeto){
    setMessage('')

    const lastService= projeto.services[projeto.services.length -1 ]

    lastService.id = uuidv4()

    const lastServiceCost = lastService.cost

    const newCost = parseFloat(projeto.cost) + parseFloat(lastServiceCost)

    if (newCost > parseFloat(projeto.budget)) {
        setMessage('Orcamento ultrapassado, verifique o valor do servico')
        setType('error')
        projeto.services.pop()
        return false
    }
    projeto.cost = newCost

    fetch(`http://localhost:5000/projetos/${projeto.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(projeto),
    })
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)

    })
    .catch((err) => console.log(err))
}

function toggleProjetoForm(){
    setShowProjetoForm(!showProjetoForm)
}
function toggleServiceForm(){
    setShowServiceForm(!showServiceForm)
}

    return(
        <>
        {projeto.name ? (
        <div className={styles.project_details}>
            <Container customClass="column">
                {message && <Message type={type} msg={message} />}
                <div className={styles.details_container}>
                    <h1>Projeto: {projeto.name}</h1>
                    <button className={styles.btn} onClick={toggleProjetoForm}>{!showProjetoForm?'Editar Projeto' : 'Fechar'}
                    </button>
                    {!showProjetoForm ? (
                        <div className={styles.project_info}>
                            <p>
                                <span>Categoria:</span> {projeto.categories.name}
                            </p>
                            <p>
                                <span>Total de Orçamento:</span> R${projeto.budget}
                            </p>
                            <p>
                                <span>Total Utilizado:</span> R${projeto.cost}
                            </p>
                        </div>
                    ) : (
                      <div className={styles.project_info}>
                        <ProjectForm handleSubmit={editPost} submitText="Concluir Edicao" projetoData={projeto}/>
                      </div>  
                    )}
                </div>
                <div className={styles.service_form_container}>
                        <h2>Adicione um servico:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>{!showServiceForm?'Adicionar servico' : 'Fechar'}
                        </button> 
                        <div className={styles.project_info}>
                            {showServiceForm && ( <ServiceForm 
                                handleSubmit={createService}
                                btnText="Adicionar Servico"
                                projectData={projeto}
                            
                            
                            /> )}
                        </div>
                </div>
                <h2>Servicos</h2>
                <Container customClass="start">
                        <p>Itens Serviços</p>
                </Container>
            </Container>
        </div>
        ) : (
            <Loading/>
        )}
        </>
    )
}
export default Projeto
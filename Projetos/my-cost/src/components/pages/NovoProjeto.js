import styles from './NovoProjeto.module.css'
import ProjectForm from '../project/ProjectForm'
import { useNavigate } from 'react-router-dom'


function NovoProjeto(){
    
    const navigate = useNavigate()
    function createPost(projeto){
        
        //initialize cost and services
       projeto.cost=0
       projeto.services = []
       fetch("http://localhost:5000/projetos",{
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(projeto)
       }).then(resp =>resp.json())
       .then((data)=>{console.log(data)
        navigate('/projetos', { message :"Projeto criado com sucesso"})
        })
       .catch(err => console.log(err))

    }
    return(
        <div className={styles.novoprojeto_container}>
            <h1>Novo Projeto</h1>
            <p>Crie seu projeto para adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} submitText="Criar Projeto"/>
        </div>
    )
}
export default NovoProjeto
import styles from '../project/ProjectForm.module.css'
import { useState } from 'react'

import Input from '../form/Input'
import Submit from '../form/Submit'

function ServiceForm ({handleSubmit, btnText, projectData}) {

    const [service, setService] = useState([])

    const submit = (e) =>{
        e.preventDefault()
        
        projectData.services.push(service)
        handleSubmit(projectData)
    }

    function handleChange(e){
        setService({...service,[e.target.name]: e.target.value})
    }


    return(
        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="text"
            text="Nome de servico"
            name="name"
            placeholder="Insira o nome do servico"
            handleOnChange={handleChange}
            
            />
            <Input 
            type="number"
            text="Custo do servico"
            name="cost"
            placeholder="Insira o valor total"
            handleOnChange={handleChange}
            
            />
            <Input 
            type="text"
            text="Descricao de servico"
            name="description"
            placeholder="Descreva o servico"
            handleOnChange={handleChange}
            />
            <Submit text={btnText}/>
        </form>
    )
}
export default ServiceForm
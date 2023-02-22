import { useEffect, useState } from 'react'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import styles from './ProjectForm.module.css'




function ProjectForm({handleSubmit, submitText, projetoData}){
    const [categories, setCategories] = useState([])
    const [projeto, setProjeto] = useState(projetoData || {})

    useEffect(() => {
        fetch(`http://localhost:5000/categories`, {
            method: "GET",
            Headers:{
           'Content-type': 'application/json' 
        },
    })
            .then((resp) => resp.json())
            .then((data) =>{setCategories(data)})
            .catch((err) => console.log(err))
    
    }, [])

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projeto)
        //console.log(projeto)
    }

    function handleCategories(e){
        setProjeto({...projeto, categories:{ id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text, }})
    }
    function handleChange(e){
        setProjeto({...projeto, [e.target.name]: e.target.value})
    }

    return(
        <form onSubmit={submit} className={styles.form}>
        <Input type="text" text="Nome do Projeto" name="name" placeholder="Insira o nome do projeto"
        handleOnchange={handleChange}
        value={projeto.name ? projeto.name : ''}/>
        <Input type="number" text="Valor do orçamento" name="budget" placeholder="Insira o valor do orçamento total"
        handleOnchange={handleChange}
        value={projeto.budget ? projeto.budget : ''}/>
        <Select name="category_id" text="Selecione a categoria" options={categories} 
        handleOnchange={handleCategories}
        value={projeto.categories ? projeto.categories.id : ''}/>
        <Submit text={submitText}/>
        </form>
    )
}
export default ProjectForm
import { useState, useMemo, useCallback } from "react"

export function Estado(){

    const [tasks, setTasks] = useState(['Pay electricity bill', 'Learn React Hooks'])

    
    function handleAdd(){
        setTasks([...tasks, input])
        setInput('')
    }

    const [input, setInput] = useState([])

    const totalTasks = useMemo(()=> tasks.length, [tasks])

    return(
        <div>
            <h2>useState</h2>
            <ul>
                {tasks.map(task =>(
                    <li key={task}>{task}</li>
                ))}
            </ul>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button type="button" onClick={handleAdd}>Adicionar</button> 
            <br/>
            <br/>
            <p>useMemo</p>
            <strong>You have {totalTasks} tasks!</strong>
        </div>
    )
    

}
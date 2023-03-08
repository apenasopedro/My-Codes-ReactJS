import { useEffect, useState } from "react";
import styles from './Dieta.module.css'

export function Dieta (){
    
    const [nutri, setNutri] = useState([])

    useEffect(() => {

        function loadApi(){
            const url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

            fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setNutri(data)
            })
            .catch(error => console.log(error))
        }
        loadApi();


    },[]);
    
    return(
        <div className={styles.container}>
            <header className={styles.header_dieta}>
                <strong>Nutri</strong>
            </header>

            {nutri.map((item)=>{
                return(
                    <article key={item.id} className={styles.post}>
                        <strong className={styles.tittle}>{item.titulo}</strong>
                        <img src={item.capa} alt={item.titulo} className={styles.image}/>
                        <p className={styles.subtittle}>{item.subtitulo}</p>
                        <a className={styles.link}>Acessar</a>
                    </article>
                )
            })}
        </div>
    )
}
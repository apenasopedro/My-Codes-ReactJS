import { Calc } from './Calc'
import styles from './Coin.module.css'
import { Select } from './Select'

export function Coin() {
    return (
        <div className={styles.container}>
            <h1>My Coin</h1>
            <p>Selecione a moeda que esta disponivel e faça a conversão que deseja!</p>
            <div className={styles.container_value}>
                <span>Valor:</span>
                <input type="number" placeholder='Digite o valor'></input>
            </div>
            <div className={styles.container_values}>
                <Select/>
                <Select/>
            </div>
            <div className={styles.calc}>
               <Calc/>
               <p></p>
            </div>
        </div>
    )
}
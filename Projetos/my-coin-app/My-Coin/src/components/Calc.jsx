import Button from 'react-bootstrap/Button'
import styles from './Calc.module.css'


export function Calc() {
    return (
        <div className={styles.buttons}>
            <Button variant="warning">Calcular</Button>
            <Button variant="danger">Limpar</Button>
        </ div>
    )
}
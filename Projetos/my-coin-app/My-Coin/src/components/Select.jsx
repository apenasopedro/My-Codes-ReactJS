import Form from 'react-bootstrap/Form'
import styles from './Select.module.css'

export function Select(){
    return(
        <Form.Select aria-label="Default select example" className={styles.form}>
        <option>Selecione a moeda</option>
        <option value="1">BRL(R$)</option>
        <option value="2">EUA($)</option>
        <option value="3">EUR(€)</option>
        </Form.Select>
    )
}
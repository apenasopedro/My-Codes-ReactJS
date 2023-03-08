import { useParams } from "react-router-dom"

export default function Produto(){

    const {id} = useParams();

    return(
        <div>
            <h2>Produto numerado {id}</h2>
        </div>
    )
}
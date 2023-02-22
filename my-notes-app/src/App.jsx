import './App.css'
import { Component} from 'react'


class Equipe extends Component{
  render(){
    return(
      <div>
        <h2>Funcionou</h2>
      </div>
    );
  }
}

function App() {
  return(
    <div>
      <h1>1. Class Component</h1>
      <h2>Conheca nossa equipe: </h2>
      <Equipe/>
    </div>
  )
  
}

export default App

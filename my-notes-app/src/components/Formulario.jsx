import { Component} from "react";

export class Formulario extends Component{

    constructor(props){
        super(props)
        this.state={
            form:{
                name: '',
                email: '',
                password: '',
                sexo: '',
                error: ''

            }
            
        
        }
        this.trocaSexo = this.trocaSexo.bind(this)
        this.dadosForm = this.dadosForm.bind(this)
        this.cadastrar = this.cadastrar.bind(this)
    }

    trocaSexo(e){
        this.setState({sexo: e.target.value})

    }

    dadosForm(e){
        let form = this.state.form;
        form[e.target.name] = e.target.value;
        this.setState({form: form})

    }

    cadastrar(e){
        const {name, email, password, sexo} = this.dadosForm;

        if(name !== '' && email !== '' && password !== '' && sexo !== ''){
            alert(`Nome: ${name} \nEmail: ${email} \nSenha: ${password} Sexo: ${sexo} `)
        }else{
            this.setState({error: 'Ops! Dados Invalidos' })
            
        }


        e.preventDefault();
    }


    render(){
        return(
            <div>
                <h2>Novo Usuario</h2>
                {this.state.error && <p>{this.state.form.error}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" name="name" value={this.state.form.name} onChange={ this.dadosForm} /> <br/>
                    <label>Email:</label>
                    <input type="email" name="email" value={this.state.form.email} onChange={ this.dadosForm} /> <br/>
                    <label>Senha:</label>
                    <input type="password" name="password" value={this.state.form.password} onChange={this.dadosForm} /> <br/>
                    <label>Sexo:</label>
                    <select name="sexo" value={this.state.form.sexo} onChange={this.dadosForm}>
                        <option>Masculino</option>
                        <option>Feminino</option>
                    </select> <br/>
                    <button type="submit" >Cadastrar</button>
                </form>

            </div>
        )
    }
}
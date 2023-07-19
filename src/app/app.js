import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {

    constructor() {
        super();
        this.state = {
            nombre: '',
            email: '',
            password: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.añadirUsuario = this.añadirUsuario.bind(this);
    }

    añadirUsuario(e) {
        fetch('/api/usuarios', {
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'

            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                M.toast({ html: 'User Saved' });
                this.setState({ nombre: '', email: '', password: '' });
            })
            .catch(err => console.error(err));
        e.preventDefault();
    }

    componentDidMount() {
        this.obtenerUsuarios();
    }

    obtenerUsuarios() {
        fetch('/api/usuarios')
            .then(res => res.json())
            .then(data => console.log(data));
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div>
                {/* NAVIGATION*/}
                <nav className="Light-blue darken-4">
                    <div className='container'>
                        <a className='brand-logo' href="/">REGISTRO DIVERTIDO</a>
                    </div>

                </nav>
                <div className="container">
                    <div className='row'>
                        <div className='col s6'>
                            <div className='card'>
                                <div className='cardcontent'>
                                    <form onSubmit={this.añadirUsuario}>
                                        <div className='row'>
                                            <div className='input-field col s6' >
                                                <input name="nombre" onChange={this.handleChange} type="text" placeholder='nombre' value={this.state.nombre} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='input-field col s6' >
                                                <input name='email' onChange={this.handleChange} type="text" placeholder='email' value={this.state.email} />
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='input-field col s6' >
                                                <input name='password' onChange={this.handleChange} type="text" placeholder='password' value={this.state.password} />
                                            </div>
                                            <button type='submit' className='btn btn-4light darken-4'>
                                                Enviar
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default App;
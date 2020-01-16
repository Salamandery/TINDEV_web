import React, {useState} from 'react';
import api from '../../api/nodejs';
import logo from './logo.svg';
import './style.css';

function Login({history}) {
    const [username, setUsername] = useState('');
    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/devs', {
            "username": username
        });
        const { _id } = response.data;
        history.push(`/dev/${_id}`);
    }
    return (
        <div className="loginContainer">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="react" />
                <input placeholder="Digite seu login"
                       value={username}
                       onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
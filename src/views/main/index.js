import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './style.css';
import api from '../../api/nodejs';
function Main({match}) {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: { user: match.params.id }
            });
            setUsers(response.data);
        };
        loadUsers();
    }, [match.params.id]);
    async function like(id) {
        await api.post(`/devs/${id}/likes`, null, {
            headers: { user: match.params.id }
        });
        setUsers(users.filter(user => user._id !== id));
    }
    async function dislike(id) {
        await api.post(`/devs/${id}/dislikes`, null, {
            headers: { user: match.params.id }
        });
        setUsers(users.filter(user => user._id !== id));
    }
    return(
        <div className="mainContainer">
            <img className="logo" src={logo} alt="React" />
                {users.length > 0 ? (
                <ul>
                    {users.map(user => (
                        <li key={user._id}>
                            <img src={user.avatar}  alt={user.name}/>
                            <footer>
                                <strong>{user.name}</strong>
                                <p>{user.bio}</p>

                            </footer>
                            <div className="buttons">
                                <button type="button" onClick={()=>like(user._id)}>Sim</button>
                                <button type="button" onClick={()=>dislike(user._id)}>Não</button>
                            </div>
                        </li>
                     ))}
                </ul>
                ) : (
                    <div className="empty">A lista de usuários chegou ao fim :(</div>
                ) }
        </div>
    );
}

export default Main;
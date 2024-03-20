import React, { useState } from 'react';
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './styles.css';
import logo from './logo.jpeg';
import { Link } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <div className="sign-in-container">
            <form onSubmit={handleLogin}>
                <img src={logo} alt="Logo" />
                <div className="input-field">
                    <input
                        type="email"
                        placeholder="E-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-field">
                    <input
                        type="password"
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="login-button">Logar</button>
            </form>
            <p>Não possui uma conta? <Link to="/teste">Saiba como criar uma conta</Link>.</p>
        </div>
    );
};

export default Login;

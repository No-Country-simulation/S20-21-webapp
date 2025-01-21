import { useState } from "react";
import "./auth.css";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
        console.log("Login with:", { email, password });
    };

    return (
        <div className="auth-container">
            <div className="auth-box">
                <h4>Iniciar Sesión</h4>
                <div className="auth-input">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Ingresa tu correo"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="auth-input">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Ingresa tu contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="auth-actions">
                    <button onClick={handleLogin}>Ingresar</button>
                </div>
                <p className="auth-footer">
                    ¿No tienes cuenta? <a href="register">Regístrate</a>
                </p>
            </div>
        </div>
    );
}

export default Login;

import React from 'react';
import { Link } from 'react-router-dom'

export default props => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-secondary">
            <Link className="navbar-brand" to="/" >e commerce</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarProduct" aria-controls="navbarProduct" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarProduct">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/novo-produto">Novo Produto</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/lista-produtos">Lista de Produtos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#lista-de-usuarios">Lista de usuários</Link>
                    </li>
                    
                </ul>
            </div>
        </nav>
    )
};
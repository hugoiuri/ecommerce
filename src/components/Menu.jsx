import React from 'react';
import ReactDOM from 'react-dom';

import { ItemListPage, MyRequestsPage, LoginPage } from '../pages'

export default props => {
    const loadPage = (component) => {
        ReactDOM.render(component, document.getElementById('root'));
    }
    return <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="#home" onClick={()=>loadPage(<ItemListPage />)}>e commerce</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="#meus-pedidos"
                        onClick={()=>loadPage(<MyRequestsPage />)}>Meus Pedidos <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#login" onClick={()=>loadPage(<LoginPage />)}>Login / Perfil</a>
                </li>
            </ul>
        </div>
    </nav>
};
import React from 'react';

export default props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Todas as Categorias
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="#">Alimentação</a>
                            <a className="dropdown-item" href="#">Automóveis</a>
                            <a className="dropdown-item" href="#">Eletrônicos</a>
                            <a className="dropdown-item" href="#">Tecnologia</a>
                            <a className="dropdown-item" href="#">Utilidades Domésticas</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Eletrônicos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tecnologia</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Utilidades Domésticas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Outlet</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
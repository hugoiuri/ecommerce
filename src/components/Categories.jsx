import React from 'react';

export default props => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Todas as Categorias
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#">Alimentação</a>
                            <a class="dropdown-item" href="#">Automóveis</a>
                            <a class="dropdown-item" href="#">Eletrônicos</a>
                            <a class="dropdown-item" href="#">Tecnologia</a>
                            <a class="dropdown-item" href="#">Utilidades Domésticas</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Eletrônicos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Tecnologia</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Utilidades Domésticas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Outlet</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
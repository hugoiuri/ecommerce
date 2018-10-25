import React, { Component } from 'react';

import { Link } from 'react-router-dom'

import '../css/item.css'

export default props => {
    return (
        <div className="card w-250 bg-light p-4">
            <Link to="/item/123" >
                <img className="card-img-top" src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=430&a=-1" alt="Card image cap" />
            </Link>
            <div className="card-body">

                <h5 className="card-title text-truncate mt-4">Notebook Samsung Expert X40</h5>
                <p className="card-text mt-3"><span className="price">R$ 2.499,00</span></p>

                <button className="btn btn-success btn-lg btn-block mt-4">Visualizar</button>
                <button className="btn btn-warning btn-lg btn-block mt-4">Modificar</button>
                <button className="btn btn-danger btn-lg btn-block mt-4">Excluir</button>
            </div>
        </div>
    );
};
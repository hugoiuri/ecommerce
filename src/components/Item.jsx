import React from 'react';

import { Link } from 'react-router-dom'

import '../css/item.css'

export default props => {
    return <div className="card card-item">
        <Link className="nav-link" to="/item/123" >
            <img className="card-img-top" src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=430&a=-1" alt="Card image cap" />
        </Link>
        <div className="card-body">
            <Link className="nav-link" to="/item/123" >
                <h5 className="card-title text-truncate">Notebook Samsung Expert X40, 8ºger.Intel®Core™I5 8250U,8Gb,Hd1tb, 2Gb Geforce®Mx110, W10,15",Preto</h5>
                <p className="card-text"><del>De: R$ 3.549,00</del><br/>
                Por: <span className="price">R$ 2.499,00</span><br/>
                em 3x no crédito</p>
            </Link>
            <a href="#" className="btn btn-primary">Comprar</a>
        </div>
    </div>
};
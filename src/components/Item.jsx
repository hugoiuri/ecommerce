import React from 'react';

import { Link } from 'react-router-dom'

import '../css/item.css'

export default props => {
    return <div className="card w-250 bg-light p-4">
        <Link to="/item/123" >
            <img className="card-img-top" src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=430&a=-1" alt="Card image cap" />
        </Link>
        <div className="card-body">
            <Link className="no-decoration" to="/item/123" >
                <h5 className="card-title text-truncate mt-4">Notebook Samsung Expert X40, 8ºger.Intel®Core™I5 8250U,8Gb,Hd1tb, 2Gb Geforce®Mx110, W10,15",Preto</h5>
                <p className="card-text mt-3"><del>De: R$ 3.549,00</del><br/>
                Por: <span className="price">R$ 2.499,00</span><br/>
                em 3x no crédito</p>
            </Link>
            <button className="btn btn-secondary btn-lg btn-block mt-4">Comprar</button>
        </div>
    </div>
};
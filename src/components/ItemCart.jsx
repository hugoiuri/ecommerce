import React from 'react';

import '../css/item-cart.css'

export default props => {
    return <div className="card w-250 bg-light p-4">
    <div>
        
    </div>
    <div className="card-body row">
        <div className="col-12 col-sm-3">
            <img className="card-img-top" src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=430&a=-1" alt="Card image cap" />
        </div>
        <div className="col-10 col-sm-7 col-xl-8" >
            <h5 className="card-title text-truncate">Notebook Samsung Expert X40, 8ºger.Intel®Core™I5 8250U,8Gb,Hd1tb, 2Gb Geforce®Mx110, W10,15",Preto</h5>
            <p className="card-text mt-3"><del>De: R$ 3.549,00</del><br/>
            Por: <span className="price">R$ 2.499,00</span><br/>
            em 3x no crédito</p>
        </div>
        <div className="col-2 col-sm-2 col-xl-1">
            + 0 -
        </div>
    </div>
</div>
};
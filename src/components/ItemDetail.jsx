import React from 'react';

import '../css/item-detail.css'

export default props => {
    return (
        <div className="card">
            <div className="container-fliud">
                <div className="wrapper row">
                    <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                            <div className="tab-pane active" id="pic-1">
                                <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=400&a=-1" />
                            </div>
                            <div className="tab-pane" id="pic-2">
                                <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=400&a=-1" />
                            </div>
                            <div className="tab-pane" id="pic-3">
                                <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=400&a=-1" />
                            </div>
                            <div className="tab-pane" id="pic-4">
                                <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=400&a=-1" />
                            </div>
                            <div className="tab-pane" id="pic-5">
                                <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=400&a=-1" />
                            </div>
                        </div>
                        <ul className="preview-thumbnail nav nav-tabs">
                            <li className="active">
                                <a data-target="#pic-1" data-toggle="tab">
                                    <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=200&a=-1" />
                                </a>
                            </li>
                            <li>
                                <a data-target="#pic-2" data-toggle="tab">
                                    <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=200&a=-1" />
                                </a>
                            </li>
                            <li>
                                <a data-target="#pic-3" data-toggle="tab">
                                    <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=200&a=-1" />
                                </a>
                            </li>
                            <li>
                                <a data-target="#pic-4" data-toggle="tab">
                                    <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=200&a=-1" />
                                </a>
                            </li>
                            <li>
                                <a data-target="#pic-5" data-toggle="tab">
                                    <img src="https://images.livrariasaraiva.com.br/imagemnet/imagem.aspx/?pro_id=10219664&qld=90&l=200&a=-1" />
                                </a>
                            </li>
                        </ul>

                    </div>
                    <div className="details col-md-6">
                        <h3 className="product-title">Notebook Samsung Expert X40, 8ºger.Intel®Core™I5 8250U,8Gb,Hd1tb, 2Gb Geforce®Mx110, W10,15",Preto</h3>
                        <p className="product-description">Notebook Samsung Expert X40, 8ºger.Intel®Core™I5 8250U,8Gb,Hd1tb, 2Gb Geforce®Mx110, W10,15",Preto</p>
                        <p className="card-text mt-3"><del>De: R$ 3.549,00</del><br />
                            Por: <span className="price">R$ 2.499,00</span><br />
                            em 3x no crédito</p>
                        <div className="action">
                            <button className="btn btn-secondary btn-lg mt-4" type="button">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
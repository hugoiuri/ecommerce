import React from 'react';
import '../css/register.css';

export default props => {
    return (
        // <div className="container">
            <div className="row centered-form registerPadding">
                <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4 mx-auto">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h5 className="panel-title">Por favor preencha os dados do produto</h5>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="row col-lg-12">
                                    <div className="form-group">
                                        <label>Nome do Produto</label>
                                        <input type="text" name="product_name" id="product_name" className="form-control input-sm" placeholder="Nome" />
                                    </div>
                                    <div className="form-group">
                                        <label>Marca do Produto</label>
                                        <input type="text" name="product_brand" id="product_brand" className="form-control input-sm" placeholder="Marca" />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Descrição do Produto</label>
                                    <textarea className="form-control" rows="3" placeholder="Descrição"></textarea>
                                </div>
                                <div id="Product_Images" className="tab-pane">Imagens do Produto:<div className="col-lg-12 form-group margin50">
                                    <div className="col-lg-12 form-group">
                                        <label className="col-sm-2">Small</label>
                                        <div className="col-sm-4">
                                            <input type="file" id="small" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label className="col-sm-2">Medium</label>
                                        <div className="col-sm-4">
                                            <input type="file" id="medium" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 form-group">
                                        <label className="col-sm-2">Large</label>
                                        <div className="col-sm-4">
                                            <input type="file" id="large" />
                                        </div>
                                    </div>
                                </div>
                                    <div className="form-group">
                                        <label>Preço do Produto</label>
                                        <input className="form-control" type="text" name="price" id="price" placeholder="R$" />
                                    </div>
                                    <div className="form-group">
                                    <label>Quantidade em estoque</label>
                                        <input className="form-control" type="text" name="price" id="price" placeholder="Qtd Estoque" />

                                    </div>
                                </div>
                                <input type="submit" value="Cadastrar" className="btn btn-info btn-block" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        // </div>
    );
};
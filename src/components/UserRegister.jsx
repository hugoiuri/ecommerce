import React from 'react';
import '../css/register.css';

export default props => {
    return (
        <div className="container">
            <div className="row centered-form registerPadding">
                <div className="col-xs-12 col-sm-8 col-md-4 col-sm-offset-2 col-md-offset-4 mx-auto">
                    <div className="panel panel-default">
                        <div className="panel-heading">
                            <h3 className="panel-title">Por favor preencha seus dados abaixo</h3>
                        </div>
                        <div className="panel-body">
                            <form role="form">
                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="first_name" id="first_name" className="form-control input-sm" placeholder="Nome" />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="text" name="last_name" id="last_name" className="form-control input-sm" placeholder="Sobrenome" />
                                        </div>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <input type="email" name="email" id="email" className="form-control input-sm" placeholder="E-mail" />
                                </div>

                                <div className="row">
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password" id="password" className="form-control input-sm" placeholder="Senha" />
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6">
                                        <div className="form-group">
                                            <input type="password" name="password_confirmation" id="password_confirmation" className="form-control input-sm" placeholder="Confirme a senha" />
                                        </div>
                                    </div>
                                </div>

                                <input type="submit" value="Cadastrar" className="btn btn-info btn-block" />

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
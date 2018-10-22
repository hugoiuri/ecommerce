import React, { Fragment } from 'react';
import '../css/login.css'

export default props => {
    return (
    <Fragment>
        <div className="row">
            <div className="main mx-auto">
                <h3 className="loginPadding">Por favor faça login, ou <a href="#">Cadastre-se</a></h3>
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <a href="#" className="btn btn-lg btn-primary btn-block">Facebook</a>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6">
                        <a href="#" className="btn btn-lg btn-info btn-block">Google</a>
                    </div>
                </div>
                <div className="login-or">
                    <hr className="hr-or" />
                    <span className="span-or">ou</span>
                </div>
                <form role="form">
                    <div className="form-group">
                        <label for="inputUsernameEmail">Usuário ou e-mail</label>
                        <input type="text" className="form-control" id="inputUsernameEmail" />
                    </div>
                    <div className="form-group">
                        <label for="inputPassword">Senha <a className="pull-right" href="#">Esqueceu a senha?</a></label>
                        <input type="password" className="form-control" id="inputPassword" />
                    </div>
                    <div className="checkbox pull-right">
                        <label>
                            <input type="checkbox" />
                            Remember me </label>
                    </div>
                    <button type="submit" clclassNameass="btn btn btn-primary">Log In</button>
                </form>
            </div>
        </div>
    </Fragment>
    );
};
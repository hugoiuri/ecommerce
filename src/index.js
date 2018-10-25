import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js';
import './css/index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemListPage, MyRequestsPage, LoginPage, ProfilePage, CartPage, UserRegisterPage, ItemDetailPage, ProductPage, ProductListPage } from './pages';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" exact={true} component={ItemListPage} />
      <Route path="/meus-pedidos" component={MyRequestsPage} />
      <Route path="/login" component={LoginPage} />
      <Route path="/perfil" component={ProfilePage} />
      <Route path="/carrinho" component={CartPage} />
      <Route path="/cadastro" component={UserRegisterPage} />
      <Route path="/item/:itemCode" component={ItemDetailPage} />
      <Route path="/novo-produto" component={ProductPage} />
      <Route path="/lista-produtos" component={ProductListPage} />      
    </Switch>
  </BrowserRouter>, document.getElementById('root'));

serviceWorker.unregister();

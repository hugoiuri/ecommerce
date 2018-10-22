import React, { Component } from 'react';

import Menu from '../components/Menu';
import Search from '../components/Search';
import Categories from '../components/Categories';
import ItemList from '../components/ItemList';
import Login from '../components/Login';

export default class ItemListPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Menu />
                <Search />
                <Categories />
                <ItemList />
            </div>
        );
    };
};
import React, { Component } from 'react';

import Menu from '../components/Menu';
import Search from '../components/Search';
import Categories from '../components/Categories';

export default class MyRequestsPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Menu />
                <Search />
                <Categories />
            </div>
        );
    };
};
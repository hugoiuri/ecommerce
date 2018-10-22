import React, { Component } from 'react';

import { Menu, Search, Categories } from '../components';

export default class ItemDetailPage extends Component {
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
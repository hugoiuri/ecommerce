import React, { Component } from 'react';

import { Menu, Search, Login } from '../components';

export default class LoginPage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Menu />
                <Search />
                <Login />
            </div>

        );
    };
};
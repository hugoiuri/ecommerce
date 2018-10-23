import React, { Component } from 'react';

import { Menu, Search, UserRegister } from '../components';

export default class ProfilePage extends Component {
    render() {
        return (
            <div className="container-fluid border">
                <Menu />
                <Search />
                <UserRegister />
            </div>
        );
    };
};
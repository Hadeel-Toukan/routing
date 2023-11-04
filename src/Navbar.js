import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { ReactDOM } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Home from './home';

function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/FAQ">FAQ</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>

    )


}

export default NavBar;
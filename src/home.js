import PropTypes from 'prop-types'
import React, { Component } from 'react'
import logo from './logo.svg';

function Home() {
    return (
        <>
            <div className='center'>
                <h1>Hello</h1>
                <img src={logo} className="App-logo" alt="logo" />
                <p>React is the library for web and native user interfaces</p>
                <p>Build user interfaces out of individual pieces called components written in JavaScript.</p>


            </div>
        </>

    )


}

export default Home;
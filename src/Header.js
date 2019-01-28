import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class Header extends Component {
  render() {
    return (
        <header style={{textAlign: "center"}}>
            <h1>
                Welcome to Treasure Hunt!
            </h1>
                    <h3>{this.props.message}</h3>
                    <h3>Counter: {this.props.turn}</h3>
            

        </header>

    );
  }
}

export default Header;

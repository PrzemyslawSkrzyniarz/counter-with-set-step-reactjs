import React, { Component } from 'react';

import './App.css';
import Header from "./Header";

class Counter extends Component {
    render() {
        return (
            <div className="counter">
                <Header />
            </div>
        );
    }
}

export default Counter;
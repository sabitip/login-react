import React, { Component } from 'react';
import './Netlog.css';
import Appheader from './components/Appheader';

class Netlog extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <Appheader />
                <h1>Net Log Application</h1>
                <h3>Created by Mr.Wootichai</h3>
            </div>
        );
    }
}
 
export default Netlog;

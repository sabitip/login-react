import React, { Component } from 'react';
import './Adminheader.css';

class Adminheader extends Component {
    state = {  }
    render() { 
        return ( 
            <nav className="navbar navbar-expand-lg navbar-light bg-pink shadow-lg">
                <a className="navbar-brand" href="#">
                    <img src="./assets/reactjs_logo.png" />
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/admin/users">Users</a>
                        </li>
                        
                        
                    </ul>
                </div>
            </nav>
         );
    }
}
 
export default Adminheader;
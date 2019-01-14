import React, { Component } from 'react';
import './Welcomeuser.css';

class Welcomeuser extends Component {
state = { 
    users_name: '',
    users_fullname: '',
    users_phone: '',
    users_email: ''
}

    componentDidCatch(){
    let userlogin = JSON.parse(sessionStorage.getItem('loginuser')) || this.setState;
    this.setState(userlogin);
    }

render() {
return (

<div className="mt-5 shadow" >
    <div className="card text-center">

        <div class="card-header">
            <h1>Welcome!!!</h1>
        </div>

    
    </div>
</div>

);
}
}

export default Welcomeuser;
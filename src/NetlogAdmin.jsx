import React, { Component } from 'react';
import Adminheader from './components/Adminheader';
import Welcomeuser from './components/Welcomeuser';
import Manageusers from './components/Manageusers';
import { Switch, Route } from 'react-router-dom';


class NetlogAdmin extends Component {
state = { }
constructor(props){
super(props);
let loginuser = JSON.parse(sessionStorage.getItem('loginuser')) || {users_status: ''};

if(loginuser.users_status !== 'admin'){
window.location.replace('/');
}
}
render() {
return (
<div>
    <Adminheader />
    <div className="container">
        <Switch>
            <Route exact path="/admin" component={Welcomeuser} />
            <Route path="/admin/users" component={Manageusers} />
        </Switch>
    </div>
</div>
);
}
}

export default NetlogAdmin;
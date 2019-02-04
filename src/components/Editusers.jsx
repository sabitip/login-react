import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Editusers extends Component {

state = {
edituser:{},
submit_form: ''
}

async componentDidMount() {
let result = await axios.post('http://localhost/netlogapi/users.php', {
Apikey: 'NetLogApi',
fn: 'SelectById',
users_name: this.props.match.params.users_name

});
result.data.users_password = '';

this.setState({edituser: result.data});

}

users_name_Change = (event) => {
    let data = this.state.edituser
    data.users_name = event.target.value;
    this.setState({edituser: data});
}

users_password_Change = (event) => {
    let data = this.state.edituser
    data.users_password = event.target.value;
    this.setState({edituser: data});
}


users_status_Change = (event) => {
    let data = this.state.edituser
    data.users_status = event.target.value;     
    this.setState({edituser: data});
}

users_fullname_Change = (event) => {
    let data = this.state.edituser
    data.users_fullname = event.target.value;
    this.setState({edituser: data});
}

users_phone_Change = (event) => {
    let data = this.state.edituser
    data.users_phone = event.target.value;
    this.setState({edituser: data});
}


users_email_Change = (event) => {
    let data = this.state.edituser
    data.users_email = event.target.value;
    this.setState({edituser: data});
}

submit_form_click = (event) => {
      this.setState({submit_form: event.target.value});
}



submitEdituser = async (event) => {
    event.preventDefault();

    if(this.state.submit_form == 'Save'){
        if(this.state.edituser.users_password == ''){
            delete this.state.edituser.users_password;
        }
        this.state.edituser.Apikey = 'NetLogApi';
        this.state.edituser.fn = 'Update';
        this.state.edituser.users_name_old = this.props.match.params.users_name;


        let result = await 
        axios.post('http://localhost/netlogapi/users.php',this.state.edituser);

        if(result.data == true){
            alert('Saved');

        }else{
            alert('Saved Mistake');
        }
        window.location.replace('#/admin/users');
    } else{
        window.location.replace('#/admin/users');
    }
}

render() {
return (
<div>
    <div id="mu-toolsbar" className="mt-3">

        <Link to="/admin/users">
        <i className="fa fa-arrow-circle-left fa-3x"></i>
        </Link>

    </div>
    <div className="card shadow mx-auto px-0 p-md-3 col-12 col-md-6">
        <div className="card-body">
            <h3 className="card-title">Edit User...</h3>
            <div className="card-text">
                <form onSubmit={ this.submitEdituser }>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user"></i>
                            </div>
                        </div>
                        <input type="text" id="users_name" name="users_name" placeholder="Username" value={
                            this.state.edituser.users_name} onChange={ this.users_name_Change } className="form-control form-control-lg" />
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-key"></i>
                            </div>
                        </div>
                        <input type="password" id="password" name="password" placeholder="password" value={
                            this.state.edituser.users_password} onChange={ this.users_password_Change } className="form-control form-control-lg" />
                    </div>

                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-user-tag"></i>
                            </div>
                        </div>
                            <select id="users_status" className="users_status" class="form-control form-control-lg" value= 
                            {this.state.edituser.users_status} onChange={ this.users_status_Change }>
                            <option value="admin">Admin</option>
                            <option value="user">User</option>
                            </select>
                    </div>


                    <hr />


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-address-card"></i>
                            </div>
                        </div>
                        <input type="text" id="users_fullname" name="users_fullname" placeholder="Fullname" value={
                            this.state.edituser.users_fullname} onChange={ this.users_fullname_Change } className="form-control form-control-lg" />
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-mobile-alt"></i>
                            </div>
                        </div>
                        <input type="text" id="users_phone" name="users_phone" placeholder="Phone" value={
                            this.state.edituser.users_phone} onChange={ this.users_phone_Change } className="form-control form-control-lg" />
                    </div>


                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <div className="input-group-text">
                                <i className="fas fa-envelope"></i>
                            </div>
                        </div>
                        <input type="text" id="users_email" name="users_email" placeholder="Email" value={
                            this.state.edituser.users_email} onChange={ this.users_email_Change } className="form-control form-control-lg" />
                    </div>

                    <div className="row">
                    <input type="submit" id="save_bt" name="save_bt" value="Save" className="btn btn-success btn-lg col-md-5 mx-auto" onClick={ this.submit_form_click } />

                    <input type="submit" id="cancle_bt" name="cancle_bt" value="Cancle" className="btn btn-secondary btn-lg col-md-5 mx-auto" onClick={ this.submit_form_click } />
                    </div>


                </form>
            </div>
        </div>
    </div>
</div>
);
}
}

export default Editusers;
import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Manageusers extends Component {
state = { 
    users: []
}

async componentDidMount(){
    let result = await axios.post('http://localhost/netlogapi/users.php',{ 
        Apikey: 'NetLogApi',
        fn: 'selectAll'

    });
        this.setState({
            users: result.data
        });
}
    userTable = () => {
        let tableRow = this.state.users.map((data)=>
        <tr key={ data.users_name}>
        <td>{ data.users_name }</td>
        <td>{ data.users_fullname }</td>
        <td className="text-center">{ data.users_status }</td>

        <td className="text-center"><Link to={"/admin/editusers/"+data.users_name}><i className="fa fa-edit text-warning"></i></Link></td>

        <td className="text-center"><Link to={"/admin/delusers/"+data.users_name}><i className="fa fa-trash text-danger"></i></Link></td>

        </tr>
        );
        return tableRow;
    }

render() {
return (

<div>
    <div id="mu-toolsbar"></div>
    <table className="table">
        <thead>
            <tr>
                <th className="text-center">Username</th>
                <th className="text-center">Name</th>
                <th className="text-center">Status</th>
                <th className="text-center">Edit</th>
                <th className="text-center">Delete</th>
            </tr>
        </thead>
        <tbody>
            { this.userTable() }
        </tbody>
    </table>
</div>
);
}
}

export default Manageusers;
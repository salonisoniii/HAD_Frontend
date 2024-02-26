import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


const Login = () => {
    const[username,usernameUpdate]=useState('');
    const[password,passwordUpdate]=useState('');
    const[role,roleUpdate]=useState('');

    const usenavigate=useNavigate();

    let a="saloni";
    let b="1234";

    const ProceedLogin=(e)=>{
        e.preventDefault();
        if(validate()){
            if(username===a && password===b){
            console.log("proceed");
            console.log(JSON.stringify({ username, password, role}));
            usernameUpdate('');
            passwordUpdate('');
            roleUpdate('');
            toast.success('Login Successful');
            usenavigate('/Receptionist')
            sessionStorage.setItem('username',username);
        }else{
            toast.error("please enter correct username and password")
        }}
    }
    const validate=()=>{
        let result=true;
        if(username==='' || username===null){
            result=false;
            toast.warning('Please Enter Username');
        }
        else if(password==='' || password===null){
            result=false;
            toast.warning('Please Enter Password');
        }
        else if(role==='' || role===null){
            result=false;
            toast.warning('Please Select Role');
        }
        return result;
    }
    return ( 
        <div className="row" style={{}}> 
            <div className="offset-lg-3 col-lg-6">
            <form onSubmit={ProceedLogin} className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>User Login</h2>
                    </div>
                    <div className="card-body" >
                        <div className="form-group">
                        {/* <label for="role">Select Role:</label> */}
                            <select style={{marginBottom:'10px'}} id="role" name="role" value={role} onChange={(e)=>roleUpdate(e.target.value)}>
                            <option value="" disabled selected>Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="nurse">Nurse</option>
                            <option value="doctor">Doctor</option>
                            <option value="pharmacist">Pharmacist</option>
                            <option value="receptionist">Receptionist</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>User Name <span className="errmsg">*</span></label>
                            <input className="form-control" value={username} onChange={e=>usernameUpdate(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label>Password <span className="errmsg">*</span></label>
                            <input type="password" className="form-control" value={password} onChange={e=>passwordUpdate(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button style={{marginRight:'10px'}} type="submit" className="btn btn-primary">Login</button>
                        <Link to='/ForgotPassword'>forgot Password?</Link>
                    </div>
                </div>

            </form>
            </div>

        </div>
     );
}
 
export default Login;
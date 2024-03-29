import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import backgroundImage from '../images/his1.jpg';
import { login } from "../services/login_service";



const Login = () => {
    const styles = {
        backgroundImage:`url(${backgroundImage})` ,
        display: 'flex', alignItems: 'center', height: '105vh', margin: '0px'
    }
    const[username,usernameUpdate]=useState('');
    const[password,passwordUpdate]=useState('');
    const[role,roleUpdate]=useState('');

    const usenavigate=useNavigate();

    let a="saloni";
    let b="1234";

    const ProceedLogin=(e)=>{
        e.preventDefault();
        login(e).then((resp)=>{
            console.log(resp)
            console.log("success log")
        }).catch((error)=>{
            console.log(error)
            
        })

        if(validate()){
            if(username===a && password===b){
            console.log("proceed");
            console.log(JSON.stringify({ username, password, role}));
            usernameUpdate('');
            passwordUpdate('');
            roleUpdate('');
            toast.success('Login Successful');
            usenavigate('/doctor')
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
        <div className="row" style={styles}> 
            <div className="offset-lg-3 col-lg-6">
            <form onSubmit={ProceedLogin} className="container" style={{height:'80vh',marginTop:'150px', backgroundColor: 'transparent'}}>
                <div className="card" style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', border: 'none' }}>
                    <div className="card-header">
                        <h2>User Login</h2>
                    </div>
                    <div className="card-body">
                        <div className="form-group" >
                        {/* <label for="role">Select Role:</label> */}
                            <select style={{marginBottom:'10px', background: 'transparent'}} id="role" name="role" value={role} onChange={(e)=>roleUpdate(e.target.value)}>
                            <option value="" disabled selected>Select Role</option>
                            <option value="admin">Admin</option>
                            <option value="nurse">Nurse</option>
                            <option value="doctor">Doctor</option>
                            <option value="pharmacist">Pharmacist</option>
                            <option value="receptionist">Receptionist</option>
                            </select>
                        </div>
                        <div className="form-group" style={{ background: 'transparent' }}>
                            <label >User Name <span className="errmsg">*</span></label>
                            <input className="form-control" style={{ background: 'transparent',borderColor: 'rgba(0, 0, 0, 0.2)'}} value={username} onChange={e=>usernameUpdate(e.target.value)}></input>
                        </div>
                        <div className="form-group">
                            <label >Password <span className="errmsg">*</span></label>
                            <input type="password" className="form-control" style={{ background: 'transparent',borderColor: 'rgba(0, 0, 0, 0.2)'}} value={password} onChange={e=>passwordUpdate(e.target.value)}></input>
                        </div>
                    </div>
                    <div className="card-footer">
                        <button style={{marginRight:'10px'}} type="submit" className="btn btn-primary">Login</button>
                        <Link style={{color:'blue', fontWeight:'bold'}} to='/ForgotPassword'>forgot Password?</Link>
                    </div>
                </div>

            </form>
            </div>

        </div>
     );
}
 
export default Login;
import { useState } from "react";
import { toast } from "react-toastify";
// import Login from "./Login";
import { Link } from "react-router-dom";
// import backgroundImage from '${}./images/his1.jpg';


const ForgotPassword = () => {
    const styles = {
        backgroundImage:`url(${process.env.PUBLIC_URL}/images/his1.jpg)` ,
        display: 'flex', alignItems: 'center', height: '100vh', margin: '0px'
    }
    
    const[email,setEmail]=useState('');
    

    const ProceedLogin=(e)=>{
        e.preventDefault();
        if(validate()){
            console.log("proceed");
            console.log(JSON.stringify({email}));
            setEmail('');
        }
    }
    const validate=()=>{
        let result=true;
        if(email==='' || email===null){
            result=false;
            toast.warning('Please Enter Email');
        }
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            result = false;
            toast.warning('please Enter a valid Email')
        }
        return result;
    }
    return ( 
        // <h1>forgotPassword</h1>

        <div className="row" style={styles}> 
            {/* <div className="offset-lg-3 col-lg-6"> */}
            <form  className="container" style={{width:'30%',backgroundColor:'transparent'}}>
                <div className="card" style={{backgroundColor:'transparent',border: '1px solid rgba(0, 0, 0, 0)'}}>
                    <div className="card-header" style={{ backgroundColor: 'rgba(255, 255, 255, 0)'}}>
                        <h2>Reset Password</h2>
                    </div>
                    <div className="card-body">
                        
                        <div className="form-group">
                            <label>Email <span className="errmsg">*</span></label>
                            <input className="form-control" style={{backgroundColor:'transparent', borderColor: 'rgba(0, 0, 0, 0.2)'}} value={email} onChange={e=>setEmail(e.target.value)}></input>
                        </div>
                       
                    </div>
                    <div className="card-footer" style={{ backgroundColor: 'rgba(255, 255, 255, 0)'}}>
                        <button type="submit" className="btn btn-primary" onClick={ProceedLogin} style={{marginRight:"10px"}}>Reset Password</button>
                        <button type="submit" className="btn btn-primary" ><Link to='/login' style={{color:"white", textDecoration:"none"}}>Login</Link></button>
                        {/* <Link to='/login'>Login</Link> */}
                    </div>
                </div>

            </form>
            {/* </div> */}

        </div>

     );
}
 
export default ForgotPassword;
import { useState } from "react";
import { toast } from "react-toastify";

const ForgotPassword = () => {
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

        <div className="row"> 
            <div className="offset-lg-3 col-lg-6">
            <form onSubmit={ProceedLogin} className="container">
                <div className="card">
                    <div className="card-header">
                        <h2>Reset Password</h2>
                    </div>
                    <div className="card-body">
                        
                        <div className="form-group">
                            <label>Email <span className="errmsg">*</span></label>
                            <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)}></input>
                        </div>
                       
                    </div>
                    <div className="card-footer">
                        <button type="submit" className="btn btn-primary">Reset Password</button>
                        {/* <Link to='/forgotPassword'>forgot Password?</Link> */}
                    </div>
                </div>

            </form>
            </div>

        </div>

     );
}
 
export default ForgotPassword;
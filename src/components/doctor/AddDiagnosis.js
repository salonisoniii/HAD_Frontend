import Reac, { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar1";

export default function AddDiagnosis() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <div className="container-fluid bg-secondary min-vh-100">
        <div className="row">
          {toggle && (
            <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
              <Sidebar Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className="col-4 col-md-2"></div>}
          <div className="col">
            <Navbar Toggle={Toggle} />
            <h2 style={{textAlign:'center',marginBottom:'80px',marginTop:'20px'}}>Add Diagnosis</h2>
            <div style={{display:'flex', flexDirection:'column',alignItems:'center'}}>
            <div style={{display:'flex',marginBottom:'10px'}}>
                <div>
                    <label htmlFor="MedicineName">Medicine Name</label>
                    <br/>
                    <input type="text" id="MedicineName" name="MedicineName" />
                </div>
                <div style={{marginLeft:'20px'}}>
                    <label htmlFor="Days">Days</label>
                    <br/>
                    <input type="text" id="Days" name="Days" />
                </div>
                <div style={{marginLeft:'20px'}}>
                    <label htmlFor="Add">Add/Remove</label>
                    <br/>
                    <input type="text" id="Add" name="Add" />
                </div>
            </div>
            <div style={{display:'flex',marginBottom:'20px'}}>
                <div>
                    <label htmlFor="Remarks">Remarks</label>
                    <br/>
                    <input type="text" id="Remarks" name="Remarks" />
                </div>
                <div style={{marginLeft:'20px'}}>
                    <label htmlFor="Add">Add/Remove</label>
                    <br/>
                    <input type="text" id="Add" name="Add" />
                </div>
            </div>
            <div style={{display:'flex'}}>
                <button style={{marginRight:'20px'}}>Submit</button>
                <button>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    
    
  );
}

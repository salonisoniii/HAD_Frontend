import React, { useState,useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./addDiagnosis.css"
import axios from "axios";
import { toast } from "react-toastify";
import Sidebar from "../Sidebar";
import Navbar1 from "../Navbar1";


function AddDiagnosis() {
  const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };
  const [diagImage,setDiagImage] = useState(null);

  const location = useLocation();
  const admitId = location.state.admitId;
    const aadhaar = location.state.aadhaar;
    console.log("aadhar received from pinfo",aadhaar)

  const [formData, setFormData] = useState({
    remarks: "",
    discharge: "",
  });

  const navigate = useNavigate();

  // for adding medicine
  const [medData, setMedData] = useState({});
  const [newKey, setNewKey] = useState('');
  const [count, setCount] = useState(1);

  // Function to handle adding a new key-value pair
  const handleAdd = () => {
    setMedData(prevData => ({
      ...prevData,
      [newKey]: count
    }));
    setNewKey('');
    setCount(1); // Reset count after adding
  };

  // Function to handle removing a key-value pair
  const handleRemove = (key) => {
    if (medData[key] > 1) {
      setMedData(prevData => ({
        ...prevData,
        [key]: prevData[key] - 1
      }));
    } else {
      const updatedData = { ...medData };
      delete updatedData[key];
      setMedData(updatedData);
    }
  };

  // Function to handle increasing count for existing key
  const handleIncreaseCount = (key) => {
    setMedData(prevData => ({
      ...prevData,
      [key]: prevData[key] + 1
    }));
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    
     // If the target field belongs to the medicine object
  // if (name.startsWith('medicine.')) {
  //   const medicineField = name.split('.')[1]; // Get the field name within medicine

  //   // Update the medicine object within formData
  //   setFormData({
  //     ...formData,
  //     medicine: {
  //       ...formData.medicine,
  //       [medicineField]: value,
  //     },
  //   });
  // }
   if (name === "profileImage") {
    setDiagImage(e.target.files[0]);
  }
  else if (name === "discharge") {
    setFormData({
      ...formData,
    [name]: parseInt(value, 10),
    })
    
  } else {
    // If it's not a nested field, update directly
    setFormData({
      ...formData,
      [name]: value,
    });
  }
    
  };
  formData["admitId"]=admitId;
  formData["patientId"]=aadhaar;
  formData["medicine"]=medData;
  
  console.log("see data",JSON.stringify(formData));

  const newObject = {
    file:diagImage,
    request : JSON.stringify(formData)
  }
  console.log("seee data:",JSON.stringify(newObject));
  // console.log(newObject);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");
      const role=localStorage.getItem("role");
      

     

      const headers = {
        Authorization: token,
        "ngrok-skip-browser-warning": "true",
        "Content-Type": "multipart/form-data",
      };
     

      const response = await axios.post(
        `https://present-neat-mako.ngrok-free.app/his/patient/addDiagnosis?role=${role}&userId=${userId}`,
        // `https://https://summary-gnu-equally.ngrok-free.app/his/patient/addDiagnosis?role=${role}&userId=${userId}`,
        newObject, {
        headers: headers
      }
      );
      console.log("API Response: " + JSON.stringify(response.data));
      console.log(formData);
      setFormData({
        remarks: "",
        discharge: "",
   
      });
      toast.success("Diagnosis added successfully");
      navigate("/doctor")
    } catch (error) {
      console.log("Error", error);
      toast.error("Error adding diagnosis. Please try again.");
    }
  };
 
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  useEffect(() => {
    if (isLoggedIn === null) {
      navigate("/login");
    }
  }, []);

  
  return (
    <div
      className="container-fluid  min-vh-100"
      style={{ backgroundColor: "#ECE3F0" }}
    >
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2 bg-white vh-100 position-fixed">
            <Sidebar Toggle={Toggle} />
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Navbar1 Toggle={Toggle} />

          <div className="card1">
            <div className="card1-body">
              <h5 className="card1-title">Add New Diagnosis</h5>
              <form onSubmit={handleSubmit}>
                <div className="row">
                
                  <div className="col mb-3">
                    <label htmlFor="remarks" className="form-label">
                      Remarks
                    </label>
                    <textarea
                      className="form-control"
                      id="remarks"
                      name="remarks"
                      value={formData.remarks}
                      onChange={handleChange}
                      required
                    ></textarea>
                  </div>

                  <div>
      <div style={{marginBottom:'10px'}}>
      <label htmlFor="medicineName" style={{marginRight:'5px'}}>
          Medicine Name
        </label>
        <input
        id="medicineName"
          type="text"
          value={newKey}
          onChange={(e) => setNewKey(e.target.value)}
          placeholder="Medicine Name"
          style={{marginRight:'5px'}}
        />
        <label htmlFor="number" style={{marginRight:'5px'}}>
          Count
        </label>
        <input
        id="number"
          type="number"
          value={count}
          onChange={(e) => setCount(parseInt(e.target.value))}
          min="1"
          style={{marginRight:'10px'}}
        />
          
        <button onClick={handleAdd}>+</button>
      </div>
      <ul>
        {Object.entries(medData).map(([key, value]) => (
          <li key={key} style={{marginBottom:'10px'}}>
            {key}: {value}
            <button onClick={() => handleRemove(key)} style={{marginLeft:'10px'}}>-</button>
            <button onClick={() => handleIncreaseCount(key)} style={{marginLeft:'10px'}}>Increase Count</button>
          </li>
        ))}
      </ul>
      <div>
        <h4>Added Medicines:</h4>
        <ul>
          {Object.entries(medData).map(([key, value]) => (
            <li key={key}>
              {key}: {value}
            </li>
          ))}
        </ul>
      </div>
    </div>

                  {/* <div className="row">
                  <label htmlFor="Medicine" className="form-label">
                      Select Medicine
                    </label>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="injection" className="form-label">
                      Injection
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="injection"
                      name="medicine.injection"
                      value={formData.medicine.injection}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="med2" className="form-label">
                      Medicines
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      id="med2"
                      name="medicine.med2"
                      value={formData.medicine.med2}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  </div> */}
                  <div className="col-md-6 mb-3">
                    <label htmlFor="discharge" className="form-label">
                      Discharge
                    </label>
                    <select
                      className="form-select"
                      id="discharge"
                      name="discharge"
                      value={formData.discharge}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="0">NO</option>
                      <option value="1">YES</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="profileImage" className="form-label">
                      Add Diagnosis
                    </label>
                    <input
                      type="file"
                      className="form-control"
                      name="profileImage"
                      id="profileImage"
                      value={formData.profileImage}
                      accept="image/*"
                      onChange={handleChange}
                      
                    />
                  </div>

                  

                  <button
                    type="submit"
                    className="btn btn-primary"
                    style={{ width: "30%", marginLeft: "30%" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddDiagnosis;

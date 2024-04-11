import React , {useState} from 'react'
import Navbar2 from '../Navbar2';
import '../AddPharmacist/AddPharmacist.css'
import Sidebar2 from '../Sidebar2';
import axios from 'axios';
import { toast } from 'react-toastify';


function AddPharmacist() {
    const [toggle, setToggle] = useState(true);

  const Toggle = () => {
    setToggle(!toggle);
  };

  const [birthDate, setBirthdate] = useState('');
  
  function handleBlur(event) {
    const dateValue = event.target.value;
    const date = new Date(dateValue);
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    const formattedDate = `${year}-${month}-${day}`;
    setBirthdate(formattedDate);
    console.log(birthDate);
  }

const [jayImage, setJayImage] = useState(null);

 
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        gender: '',
        blood: '',
        profileImage: '',
        address: '',
        role: "",
        birthDate: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'profileImage') {
            setJayImage(e.target.files[0]);
          } else {
        setFormData({
            ...formData,
            [name]: value
        });
    }
    };

    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      
      formData["role"] = "PHARMACIST";
      formData["birthDate"]=birthDate;
     
      const newuserObj = {
        'image': jayImage,
        'request':
          JSON.stringify(formData)

      };

      const headers = {
        'userId': userId,
        'Authorization': token,
        'ngrok-skip-browser-warning': "true",
        'Content-Type': 'multipart/form-data'
      }
      console.log(newuserObj);

      // const response = await axios.post(
      //   "https://present-neat-mako.ngrok-free.app/his/admin/addUser",
      //   newuserObj, {
      //   headers: headers
      // }
      // );
      // console.log("API Response: " + JSON.stringify(response.data));

            
       
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            gender: '',
            blood: '',
            profileImage: '',
            address: '',
            role:'',
            birthDate:''
        });
        toast.success('PHARMACIST added successfully');
    }catch(error){
      console.log("Error",error);
      toast.error("Error adding PHARMACIST. Please try again.");
    }
    };
  return (
    <div>
      <div className='container-fluid min-vh-100' style={{backgroundColor:'#ECE3F0' }} >
        <div className='row'>
          {toggle && (
            <div className='col-4 col-md-2 bg-white vh-100 position-fixed'>
              <Sidebar2 Toggle={Toggle} />
            </div>
          )}
          {toggle && <div className='col-4 col-md-2'></div>}
          <div className='col'>
            <Navbar2 Toggle={Toggle}  />

        
            <div className="card1">
                <div className="card1-body">
                    <h5 className="card1-title">Add New Pharmacist</h5>
                    <form onSubmit={handleSubmit}>
                        <div className='row'>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                                    <option value="">Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="">Other</option>
                                </select>
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="blood" className="form-label">Blood Group</label>
                                <select type="text" className="form-control" id="bloodGroup" name="blood" value={formData.bloodGroup} onChange={handleChange} required >
                                <option value="">Select BloodGroup</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="A-">A-</option>
                      <option value="A+">A+</option>
                      <option value="AB-">AB-</option>
                      <option value="AB+">AB+</option>
                      <option value="O-">O-</option>
                      <option value="O+">O+</option>
                      </select>
                            </div>
                            
                            <div className="col-md-6 mb-3">
                                <label htmlFor="profileImage" className="form-label">Photo</label>
                                <input type="file" className="form-control" id="photo" name="profileImage" accept="image/*" onChange={handleChange} required />
                            </div>
                            <div className="col-md-6 mb-3">
                                <label htmlFor="address" className="form-label">Address</label>
                                <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required></textarea>
                            </div>
                            <div className="col-md-6 mb-3">
                    <label htmlFor="birthdate">Birth Date:</label>
                    <input type="date" id="birthdate" name="birthDate" onBlur={handleBlur} required/>
                  </div>
                            <button type="submit" className="btn btn-primary" style={{width:'30%', marginLeft:'30%'}}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
            </div>
            </div>
            </div>
            </div>
    
  )
}

export default AddPharmacist

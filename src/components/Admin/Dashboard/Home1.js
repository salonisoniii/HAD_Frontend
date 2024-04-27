import React,{useState,useEffect} from 'react'

import './Home1.css'
import Areacharts from '../Charts/Areacharts'
import Piechart from '../Charts/Piechart'
import axios from 'axios'
import { toast } from "react-toastify";



function Home1({ Toggle }) {
  const [OpCount, setOpCount] = useState(0);
    const fetchcount = async () => {
        try {
            const userId = localStorage.getItem("userId");
            const token = localStorage.getItem("token");
      
            const headers = {
              Authorization: token,
              "ngrok-skip-browser-warning": "true",
            };
      
            const response = await axios.get(
              `${process.env.REACT_APP_SECRET_KEY}/admin/home?userId=` +
                userId,
              {
                headers: headers,
              }
            );  
    //   this api is for testing purpose, now comment it
            // Check if response status is successful before setting state
            if (response.status === 200) {
              setOpCount(response.data.OpCount);
              
            } else {
              throw new Error("Failed to fetch data");
            }
          } catch (error) {
            
            console.log("Error here", error);
            toast.error("Error from admin. Please try again.");
          }
        };
        useEffect(() => {
            fetchcount();
          }, []);
    return (
        <div className='px-2'>
            {/* <Navbar2 Toggle={Toggle} /> */}
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>10</h3>
                                <p className='fs-5'>Doctor</p>
                            </div>
                            <i className='bi bi-person-circle p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20</h3>
                                <p className='fs-5'>Nurse</p>
                            </div>
                            <i className='bi bi-person-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>3</h3>
                                <p className='fs-5'>Receptionist</p>
                            </div>
                            <i className='bi bi-person-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>4</h3>
                                <p className='fs-5'>Pharmacist</p>
                            </div>
                            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>

                        </div>

                    </div>
                </div>

            </div>
            <div className="row clearfix">
                <div className="col-12 col-md-8 p-3">
                    <div className="card">
                        <div className="header">
                            <h2><strong>Hospital Survey </strong> </h2>
                            
                        </div>
                        <div className="body">
                            <ul className="nav nav-tabs padding-0">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#chart-view">Chart View</a></li>
                            </ul>
                            <div className="tab-content m-t-10">
                                {/* <div className="tab-pane active" id="chart-view"> */}
                                    <Areacharts className="graph" />
                                    <div className="xl-slategray">
                                        <div className="body">
                                            <div className="row text-center">
                                                <div className="col-sm-3 col-6">
                                                    <h4 className="margin-0">$106</h4>
                                                    <p className="text-muted margin-0"> Today's</p>
                                                </div>
                                                <div className="col-sm-3 col-6">
                                                    <h4 className="margin-0">$907</h4>
                                                    <p className="text-muted margin-0">This Week's</p>
                                                </div>
                                                <div className="col-sm-3 col-6">
                                                    <h4 className="margin-0">$4210</h4>
                                                    <p className="text-muted margin-0">This Month's</p>
                                                </div>
                                                <div className="col-sm-3 col-6">
                                                    <h4 className="margin-0">$7,000</h4>
                                                    <p className="text-muted margin-0">This Year's</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                {/* </div> */}

                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="col-12 col-md-4 p-3">
                    <div className='card'>
                        <div className='body'>
                            <Piechart />
                        </div>
            
                    </div>
                </div>
                
            </div>

        </div>
    )
}

export default Home1

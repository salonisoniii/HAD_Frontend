import React from 'react'
import Navbar2 from '../Navbar2'
import './Home1.css'
import Areacharts from '../Charts/Areacharts'
import Piechart from '../Charts/Piechart'



function Home1({ Toggle }) {
    return (
        <div className='px-2'>
            <Navbar2 Toggle={Toggle} />
            <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>10</h3>
                                <p className='fs-5'>Doctors</p>
                            </div>
                            <i className='bi bi-person-circle p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>100</h3>
                                <p className='fs-5'>Nurses</p>
                            </div>
                            <i className='bi bi-person-nurse-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20</h3>
                                <p className='fs-5'>Patient</p>
                            </div>
                            <i className='bi bi-person-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20%</h3>
                                <p className='fs-5'>Increase</p>
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

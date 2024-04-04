import React from 'react'
// import Navbar4 from '../Navbar4'

function Rdashboard (){
    // const [toggle,setToggle] = useState(true);
    // const Toggle = () => {
    //     setToggle(!toggle);
    // }

  return (
    
    <div className='px-2'>
        
        <div className='container-fluid'>
                <div className='row g-3 my-2'>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>50</h3>
                                <p className='fs-5'>Total Counts</p>
                            </div>
                            <i className='bi bi-person-circle p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>30</h3>
                                <p className='fs-5'>Active</p>
                            </div>
                            <i className='bi bi-person-nurse-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20</h3>
                                <p className='fs-5'>Treated</p>
                            </div>
                            <i className='bi bi-person-fill p-3 fs-1'></i>

                        </div>

                    </div>
                    {/* <div className='col-md-3 p-1'>
                        <div className='p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded'>
                            <div>
                                <h3 className='fs-2'>20%</h3>
                                <p className='fs-5'>Increase</p>
                            </div>
                            <i className='bi bi-graph-up-arrow p-3 fs-1'></i>

                        </div>

                    </div> */}
                </div>

            </div>
      
    </div>
  )
}

export default Rdashboard;

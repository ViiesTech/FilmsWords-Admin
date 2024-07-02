import React from 'react'
import '../../styles/Dashboard.css';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

const index = () => {



    return (
        <div className="container-fluid">
          <div className="row roww">
            <div className="col-md-3 col-sm-4 text-center" style={{ backgroundColor: "black" }}>
              <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
    
                <a className="d-flex align-items-center justify-content-center title" >
                  <div>
                    <i className="fa fa-music"></i>
                  </div>
                  <div>FILMSWORLDPk</div>
                </a>
                <hr />
                <li className="nav-item">
                  <Link to='/add-movie' className="nav-link" href="addcat.php">
                    {/* <i className="fas fa-fw fa-bars"></i> */}
                    <i className="fas fa-file-video"></i>
                    <span>Add Movie</span></Link>
                </li>
    
                <hr />
                <li className="nav-item">
                  <Link to='/users' className="nav-link" href="allusers.php">
                    <i className="fas fa-fw fa-users"></i>
                    <span>All Users</span></Link>
                </li>
    
                <div className="text-center d-none d-md-inline">
                  <button className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>
              </ul>
            </div>
    
            <div className="col-md-9 col-sm-8 text-center" >
              <div className='col-12'>
                <div className="d-flex" style={{justifyContent:"space-between",alignItems:"center"}}>
                  <div>
                    <p>Your Dashboard</p>
                  </div>
                  <div>
                    <Link>
                      <i className="fa-solid fa-right-from-bracket"></i>
                      <span>logout</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default index

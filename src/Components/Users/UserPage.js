import React, { useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import '../../styles/User.css'
import companyLogo from '../../assets/images/filmsWorldLogo.jpeg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/authSlice';

const UserPage = () => {
    const Dispatch = useDispatch();
    const handleLogout = ()=>{
        Dispatch(logout())

    }
    return (
        <div className="container-fluid">
            <div className="row roww">
                <div className="col-md-3 col-sm-4 text-center" style={{ backgroundColor: "#0a0a0a" }}>
                    <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                        <a className="d-flex align-items-center justify-content-center title" >
                            <div>
                            <img src={companyLogo} alt="BigCo Inc. logo" width={50} height={40}/>
                            </div>
                            <div>FILMSWORLDPk</div>
                        </a>
                        <hr />
                        

                        <li className="nav-item">
                            <Link to='/users' className="nav-link" href="allusers.php">
                                <i className="fas fa-fw fa-users"></i>
                                <span>All Users</span></Link>
                        </li>
                        <hr />
                        <li className="nav-item">
                            <Link to='/add-movie' className="nav-link" >
                                {/* <i className="fas fa-fw fa-bars"></i> */}
                                <i className="fas fa-file-video"></i>
                                <span>Add Movie</span></Link>
                        </li>

                        <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle"></button>
                        </div>
                    </ul>
                </div>

                <div className="col-md-9 col-sm-8">
                    <div className='userHeading d-flex shadow-lgg mb-3' style={{justifyContent:"space-between",alignItems:"center"}}>
                        <div>
                        <h3 className='text-danger' style={{fontFamily:"fantasy",textDecoration:"underline"}}>All User Info</h3>

                        </div>
                        <div className='logoutDiv'>
                            <Link to="/" style={{textDecoration:"none",color:"black"}}>
                                <i className="fa-solid fa-right-from-bracket"></i>
                                <span onClick={handleLogout}>Log-Out</span>
                            </Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 col-sm-4">
                            <div className="mainCard">
                                <div className="cardTitle d-flex">
                                    <div className='iconDiv'>
                                        <i className="fa-sharp fa-solid fa-users"></i>
                                    </div>
                                    <div style={{ color: "black", fontSize: 20, fontWeight: 500 }}>
                                        Active Users
                                    </div>
                                </div>
                                <p className='userCountDiv'>10</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 mt-5" style={{border:'1px solid black',borderRadius:'10px'}}>
                            <h3 className='text-center' style={{fontFamily:"fantasy"}}>User List</h3>
                            <table className="table userTable table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Phone No</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>ali</td>
                                        <td>ali@email.com</td>
                                        <td>123456789</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>bilal</td>
                                        <td>bilal@email.com</td>
                                        <td>123456789</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>hamza</td>
                                        <td>hamza@email.com</td>
                                        <td>123456789</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>





        // <div className='container-fluid'>
        //     <div className="row">
        //         <div className="col-4">hello</div>
        //         <div className="col-4">hy</div>
        //         <div className="col-4">nhi</div>
        //         <div className="col-4">ok</div>
        //     </div>
        // </div>
    )
}

export default UserPage

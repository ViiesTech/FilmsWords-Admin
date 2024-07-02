import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/AddMovie.css';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import companyLogo from '../../assets/images/filmsWorldLogo.jpeg';
import { useSelector } from 'react-redux';

const customToastStyle = {
    background: 'green',
    color: 'white',
    fontSize: '16px',
    borderRadius: '8px',
};
const customProgressStyle = {
    background: 'green',
};

const Movie = () => {
    const [status, SetStatus] = useState('')
    const [videoFile, setVideoFile] = useState(null);
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [movieTitle, setMovieTitle] = useState('');
    const [movieDescription, setMovieDescription] = useState('');
    const [videoProgress, setVideoProgress] = useState(0);
    const [progressComplete, setProgressComplete] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);

    const handleChange = (event) => {
        const selectedValue = event.target.selectedOptions[0].value
        console.log('selectedValue', selectedValue,)
        setSelectedCategories(prevSelectedCategories => {
            if (!prevSelectedCategories.includes(selectedValue)) {
                return [...prevSelectedCategories, selectedValue];
            }
            else {
                console.log(1)
                setSelectedCategories([selectedCategories])
            }
        });
    };
    console.log('selectedCategories', selectedCategories)

    const handleRemoveCategory = (category) => {
        const updatedCategories = selectedCategories.filter(cat => cat !== category);
        setSelectedCategories(updatedCategories);
    };

    const notify = () => toast("Your Video Has Been Uploaded", {
        toastStyle: customToastStyle,
        progressBar: true,
        progressStyle: customProgressStyle,
        progressClassName: 'toast-progress'
    });

    // function notify() {
    //     toast("Your Video Has Been Uploaded", {
    //         toastStyle: customToastStyle,
    //         progressBar: true,
    //         progressStyle: customProgressStyle,
    //         progressClassName: 'toast-progress'
    //     })
    // }

    const handleVideoChange = (e) => {
        setVideoFile(e.target.files[0]);
    };

    const handleThumbnailChange = (e) => {
        setThumbnailFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setVideoProgress(0);


        const formData = new FormData();
        formData.append('video', videoFile);
        formData.append('thumbnail', thumbnailFile);
        formData.append('movieTitle', movieTitle);
        formData.append('movieCategory', JSON.stringify(selectedCategories));
        formData.append('movieDescription', movieDescription);

        try {
            const response = await axios.post('https://13.51.197.205:3020/api/admin/add-movie', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                // onUploadProgress: (progressEvent) => {
                //     const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                //     setVideoProgress(percentCompleted);
                // },
                onUploadProgress: (progressEvent) => {
                    const { loaded, total } = progressEvent;
                    const percentCompleted = Math.round((loaded * 100) / total);

                    // Only update progress if upload is not yet complete
                    if (percentCompleted < 100) {
                        setVideoProgress(percentCompleted);
                    } else {
                        // Optional: Clear progress when upload is complete
                        setProgressComplete(true)
                        setVideoProgress(100);
                    }
                },
            });
            //   console.log('Upload successful:', response.data.success);
            if (response.data.success === true) {
                SetStatus(response.data.message)
                notify()
                setTimeout(() => {
                    window.location.reload();
                }, 4000);
                console.log('Your status is: ', response.data.message)
            }

        } catch (error) {
            console.log('Error uploading files:', error);
        }
    };

    // console.log('thisis ', companyLogo)
    return (
        <>

            <ToastContainer />
            <div className="container-fluid">
                {/* <ToastContainer /> */}
                <div className="row roww">
                    <div className="col-md-3 col-sm-4 text-center" style={{ backgroundColor: "#0a0a0a" }}>
                        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
                            <a className="d-flex align-items-center justify-content-center title" >
                                <div>
                                    <img src={companyLogo} alt="BigCo Inc. logo" width={50} height={40} />
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
                                <Link to='/add-movie' className="nav-link" href="addcat.php">
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

                        <div className="row">
                            <div className='col-12 formdiv'>
                                <h3 className="text-center text-danger shadow-lg" style={{ fontFamily: "fantasy", textDecoration: "underline" }}>ADD MUSIC</h3>
                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3 ">
                                        <label for="region">Choose a category:</label>

                                        <select
                                            name="mregion"
                                            className="form-select"
                                            required
                                            id="categorySelect"
                                            onChange={handleChange}
                                        // value={selectedCategories}
                                        >
                                            {/* <option disabled>Select</option> */}
                                            <option value="Hip Hop" disabled={selectedCategories.includes("Hip Hop")}>Hip Hop</option>
                                            <option value="Classical" disabled={selectedCategories.includes("Classical")}>Classical</option>
                                            <option value="Country" disabled={selectedCategories.includes("Country")}>Country</option>
                                            <option value="Folk" disabled={selectedCategories.includes("Folk")}>Folk</option>
                                            <option value="English" disabled={selectedCategories.includes("English")}>English</option>
                                        </select>
                                        <div className="selected-options mt-3">
                                            {selectedCategories.length > 0 && (
                                                <div>
                                                    <p>Selected Categories:</p>
                                                    <ul className="list-unstyled">
                                                        {selectedCategories.map(category => (
                                                            <li key={category} className="mb-2" style={{ display: "inline-block", paddingLeft: "5px", paddingRight: "5px" }}>
                                                                <span className="badge bg-primary">
                                                                    {category}
                                                                    <button
                                                                        type="button"
                                                                        className="btn-close ms-2"
                                                                        aria-label="Close"
                                                                        onClick={() => handleRemoveCategory(category)}
                                                                    ></button>
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className=" mt-3 ">
                                        <label for="">Movie Title</label>
                                        <input type="text" value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} className='form-control' required />
                                    </div>

                                    <div className="form-group mt-3 ">
                                        <label for="">Movie Description</label>
                                        <textarea
                                            className='form-control'
                                            value={movieDescription}
                                            onChange={(e) => setMovieDescription(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label for="file">Movie Thubmnai</label>
                                        <input type="file" onChange={handleThumbnailChange} className='form-control' required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <label for="">Movie File</label>
                                        <input type="file" onChange={handleVideoChange} className='form-control' required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <button type="submit">Submit</button>
                                    </div>
                                </form>
                                {progressComplete === false && videoProgress > 0 &&
                                    <p style={{ backgroundColor: "red", borderRadius: "5px", textAlign: "center", color: "whitesmoke" }}>Video Upload Progress: {videoProgress}%</p>}
                                {progressComplete === true && <p style={{ backgroundColor: "green", borderRadius: "5px", textAlign: "center", color: "whitesmoke", padding: 8 }}>Video uploaded successfully but wait for upload to server.</p>}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Movie

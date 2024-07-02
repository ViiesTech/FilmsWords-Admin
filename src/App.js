// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import './index.css';

// import AddMoviePage from "./Components/AddMovie/Movie.js"
// import UserPage from "./Components/Users/UserPage.js"
// import { Provider, useSelector } from 'react-redux'
// import store from './store.js';
// import LoginPage from './Components/LoginPage/LoginPage.js';

// function App() {
//   const selectorr= useSelector(state=>state.user.token)
//   console.log(selectorr)
//   return (
//     <Provider store={store}>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<LoginPage />} />
//           <Route path="/add-movie" element={<AddMoviePage />} />
//           <Route path="/users" element={<UserPage />} />
//         </Routes>
//       </BrowserRouter>
//     </Provider>
//   )

// }

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css';

import AddMoviePage from "./Components/AddMovie/Movie.js"
import UserPage from "./Components/Users/UserPage.js"
import { Provider, useSelector } from 'react-redux';
import store from './store.js';
import LoginPage from './Components/LoginPage/LoginPage.js';

function App() {
 const token = useSelector(state=>state.user.token)
 console.log(token)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
              <Route path="/add-movie" element={token ? <AddMoviePage /> : <Navigate to="/" />} />
              {/* <Route path="/add-movie" element={token ? <AddMoviePage /> : <Navigate to="/" />} element={<AddMoviePage />} /> */}
              <Route path="/users" element={token ? <UserPage /> : <Navigate to="/" />} />
              {/* <Route path="/users" element={<UserPage />} /> */}
              <Route path="/" element={token ? <Navigate to="/users" /> : <LoginPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;


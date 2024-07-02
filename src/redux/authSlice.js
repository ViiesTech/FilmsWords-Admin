// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     msg: "",
//     user: {},
//     token: "",
//     loading: false,
//     error: "",
// }

// export const loginUser = createAsyncThunk('LoginUser', async (body) => {

//     const res = await axios.post("http://localhost:3020/api/user/login", body, {
//         headers: {
//             'Content-Type': "application/json",
//         }
//     });
//     console.log("results are", res.data); // Adjusted to log the data
//     return res.data; // Return the data field of the response
//     return await res.json();
// })

// const authSlice = createSlice({
//     name: 'user',
//     initialState,
//     reducers: {
//         addToken: (state, action) => {
//             state.token = localStorage.getItem("token")
//         },
//         addUser: (state, action) => {
//             state.user = localStorage.getItem("user")
//         },
//         logout: (state, action) => {
//             state.token = null;
//             localStorage.clear();
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(loginUser.pending, (state, action) => {
//                 state.loading = true;
//             })
//             .addCase(loginUser.fulfilled, (state, action) => {
//                 state.loading = false;
//                 console.log('action payload',action.payload)
//                 state.token = action.payload.token
//                 state.user = action.payload
//                     localStorage.setItem('user', JSON.stringify(state.user));
//                     localStorage.setItem('token', state.token);
//             })
//             .addCase(loginUser.rejected, (state, action) => {
//                 state.loading = false;
//                 state.error = action.error.message;
//             });
//     }
// });

// export const { addToken, addUser, logout } = authSlice.actions;
// export default authSlice.reducer; // Export the reducer



import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    msg: "",
    // user: JSON.parse(localStorage.getItem("user")) || {},
    // token: localStorage.getItem("token") || "",
    user: {},
    token: "",
    loading: false,
    error: "",
};

export const loginUser = createAsyncThunk('LoginUser', async (body) => {
    const res = await axios.post("https://13.51.197.205:3020/api/user/login", body, {
        headers: {
            'Content-Type': "application/json",
        }
    });
    console.log("results are", res.data);
    return res.data;
});

const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addToken: (state, action) => {
            state.token = localStorage.getItem("token") || "";
        },
        addUser: (state, action) => {
            const user = localStorage.getItem("user");
            state.user = user ? JSON.parse(user) : {};
        },
        logout: (state, action) => {
            state.token = null;
            state.user = {};
            localStorage.clear();
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                if (action.payload.success) {
                    state.token = action.payload?.data?.token;
                    state.user = action.payload?.data ;
                    localStorage.setItem('user', JSON.stringify(state.user));
                    localStorage.setItem('token', state.token);
                } else {
                    state.error = action.payload.message || "Login failed";
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
});

export const { addToken, addUser, logout } = authSlice.actions;
export default authSlice.reducer;


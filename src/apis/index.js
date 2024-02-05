import React, { useState } from 'react';
import axios from 'axios';


const API = axios.create({ baseURL: "http://127.0.0.1:8000/" });

// API.interceptors.request.use((req) => {
//     let user = false;

//     if (user) {
       

//         const data = {
//             token: user_data.user_info.in_token,
//             login_id: user_data.user_info.out_loginid
//         };

//         req.headers.Authorization = `Bearer ${data.login_id} ${data.token}`;
//     }

//     return req;
// });

export const signIn = (formData) => API.post('login/', formData);

export const courses=()=>{
    return (
        {
            "courses": [
                {
                    "id": 1,
                    "title": "History",
                    "description": "This course will teach you history"
                },
                {
                    "id": 2,
                    "title": "Physics",
                    "description": "This course will teach you Physics"
                },
                {
                    "id": 3,
                    "title": "Chemistry",
                    "description": "This course will teach you Chemistry"
                }
             
            ]
        }
    )
    
}
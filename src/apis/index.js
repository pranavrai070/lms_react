import React, { useState } from 'react';
import axios from 'axios';


const API = axios.create({ baseURL: "http://127.0.0.1:8000/" });



export const signIn = (formData) => API.post('login/', formData);



export const courses=()=>API.get('courses/');

export const lessons=()=>API.get('lessons/');
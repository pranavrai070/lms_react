import React, { useState } from 'react';
import axios from 'axios';


const API = axios.create({ baseURL: "http://127.0.0.1:8000/" });



export const signIn = (formData) => API.post('login/', formData);



export const courses=()=>API.get('courses/');

export const lessons=(course_id)=>API.get(`lessons/${course_id}`);  

export const assessments=(course_id)=>API.get(`assessments/${course_id}`);

export const questions=(assessment_id)=>API.get(`questions/${assessment_id}`);
export const activities=(course_id)=>API.get(`activities/${course_id}`);

export const users=()=>API.get(`users/`);

export const sendMessage=(formData)=>API.post(`send_message/`,formData);

export const getMessages=(formData)=>API.post(`get_messages/`,formData);




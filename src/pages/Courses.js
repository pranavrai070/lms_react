import React,{useState,useEffect} from 'react'
import * as api from '../apis/index';
import coursesImg from "../assets/images/courses/courses.jpeg"

const Courses = () => {
  const [courses,setCourses]=useState();


  useEffect(()=>{
   const response=api.courses();
   console.log('courses',response);
   setCourses(response);
  },[]);


  return (
    <>
    <div>courses:</div>
    <div class=" flex flex-col items-center bg-white max-w-sm bg-white border border-gray-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" >
<a href="#" class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg" src={coursesImg} alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
    </div>
</a>
</div>
    </>
  )
}

export default Courses;
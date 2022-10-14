import React, { useState } from 'react';
import Course from './course';

const AllCourse=()=>{
    const[course,setCourse]=useState([
        {title:'Java Course',desc:'basic level',price:'3000'},
        {title:'Java Advance',desc:'intermidate level',price:'5000'},
        {title:'Python',desc:'basic level',price:'4000'},
        {title:'Django',desc:'basic',price:'3000'}
    ])
    return (
        <div>
              <h1>All Courses</h1>
              {
                course.length > 0 
                ? course.map((item) => <Course course={item}  /> )
                : "No course"
              }
        </div>
    );
}
export default AllCourse;
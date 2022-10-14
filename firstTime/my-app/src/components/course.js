import React from 'react';
import { Button } from 'reactstrap';
const Course=({course})=>{
    return (
        <div>
            <h1>WayToBecome DEvLopEr</h1>
             <h3>{course.title}</h3>
             <h3>{course.desc}</h3>
             <h3>{course.price}</h3>
             <Button color="danger">Danger!</Button>
        </div>

    );
}
export default Course;
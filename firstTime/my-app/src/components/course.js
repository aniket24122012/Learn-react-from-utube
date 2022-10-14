import React from 'react';
import { Button } from 'reactstrap';
const Course=({name,desc,price})=>{
    return (
        <div>
            <h1>WayToBecome DEvLopEr</h1>
             <h3>{name}</h3>
             <h3>{desc}</h3>
             <h3>{price}</h3>
             <Button color="danger">Danger!</Button>
        </div>

    );
}
export default Course;
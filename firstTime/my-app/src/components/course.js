import React from 'react';

const Course=({name,desc,price})=>{
    return (
        <div>
            <h1>WayToBecome DEvLopEr</h1>
             <h3>{name}</h3>
             <h3>{desc}</h3>
             <h3>{price}</h3>
        </div>

    );
}
export default Course;
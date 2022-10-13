import React from 'react';

//Props are arguments passed into React components.

//Props are passed to components via HTML attributes.

const Title =({name})=>{
    return (
        <div>
            <h1>Hello ,</h1>
            <h3 style={{marginLeft:'50px'}}>{name}</h3>
        </div>
    );
}
export default Title;
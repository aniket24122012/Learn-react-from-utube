import React from 'react';
import { Card, CardBody, CardTitle, Container } from 'reactstrap';

//Props are arguments passed into React components.

//Props are passed to components via HTML attributes.

const Title =({name})=>{
    return (
       
          
           <Card className='mt-5 mb-5b' style={{backgroundColor:'#ffffcc'}}>
                <CardBody>
                    <CardTitle className='text-center'><h1 >Tech Institute</h1></CardTitle>
                </CardBody>
            </Card>
           
        
    );
}
export default Title;
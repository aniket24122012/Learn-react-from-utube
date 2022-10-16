import React from 'react';
import { Card, CardBody, CardTitle, Container } from 'reactstrap';

//Props are arguments passed into React components.

//Props are passed to components via HTML attributes.

const Title =({name})=>{
    return (
       
           <Container >
           <Card className='m-5'>
                <CardBody>
                    <CardTitle className='text-center m-4'><h1 >Carry Forwaed With Aniket</h1></CardTitle>
                </CardBody>
            </Card>
           </Container>
        
    );
}
export default Title;
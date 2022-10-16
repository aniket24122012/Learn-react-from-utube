import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";
const Home = () => {
  return (
    <div className>
           <Card style={{height:'500px', width:'700px' ,borderRadius:'30px', marginLeft:'100px', marginTop:'40px',
             backgroundColor:' #ccffeb'}}>
              <CardBody>
                  <CardTitle className="text-center mt-5"><h1>Welcome to Tech Institute</h1></CardTitle>
              </CardBody>
           </Card>
    </div>
  );
};
export default Home;
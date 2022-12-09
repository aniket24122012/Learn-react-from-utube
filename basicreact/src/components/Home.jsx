import React from 'react'
import Products from './Products';


const Home = () => {
  const productList=['books','car','toy']
  return (
    <div>
      {productList.map((i)=>(
       <Products value={i} key={i}/>
      ))}
    </div>
  );
};

export default Home
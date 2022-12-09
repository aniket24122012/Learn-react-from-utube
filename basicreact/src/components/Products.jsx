import React from 'react'
import {useParams} from 'react-router-dom'
const Products = ({value}) => {
    const usePara = useParams();
  return (
    <div>
        <h1>Name</h1>
        <h1>{usePara.id}</h1>
        <h1>{value}</h1>
    </div>
  )
}

export default Products
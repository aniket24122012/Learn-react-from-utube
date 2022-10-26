import React, { useState } from "react"; 

const Hooks =() =>{
    //useState use for set or update value we also create array using usestate
    const [count,setCount]=useState(0)
    function plus(){
        setCount(count+1)
    }
    function minus(){
        setCount(count-1)
    }
    return (
     <div>
        <h1>Hooks</h1>
        <button onClick={plus}> + </button>{count}<button onClick={minus}> - </button>
     </div>
    );
}
export default Hooks;
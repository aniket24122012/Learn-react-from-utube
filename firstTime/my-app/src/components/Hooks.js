import React, { useState } from "react"; 

const Hooks =() =>{
    //useState use for set or update value we also create array using usestate
    // const [count,setCount]=useState(0)
    const [state,setState]=useState({count:0,name:'increment'})
    const count=state.count
    const name=state.name
    function plus(){
        setState(prevState=>{
            return{...prevState,name:'increment',count:prevState.count+1}
        })
    }
    function minus(){
        setState(prevState=>{
            return{...prevState,name:'decrement',count:prevState.count-1}
        })
    }
    return (
     <div>
        <h1>Hooks</h1>
        <h4>{name}</h4>
        <button onClick={plus}> + </button>{count}<button onClick={minus}> - </button>
     </div>
    );
}
export default Hooks;
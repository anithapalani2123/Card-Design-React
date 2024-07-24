import React, { useState,useEffect } from 'react'

const Sample = () => {
    const [count,setCount]=useState(0);
    useEffect(()=>{
        console.log(count);
    },[count]);
    
  return (
    <div>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{count}</h1>
      
    </div>
  )
}

export default Sample

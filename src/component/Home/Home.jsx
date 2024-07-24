import React from 'react'
import { useNavigate } from 'react-router-dom'
import  './Home.css'
const Home = () => {
    const navigate=useNavigate();
    const Card1Handler=()=>{
        navigate('/design1');
    }

    const Card2Handler=()=>{
        navigate('/design2');
    }
  return (
    <div className='Home'>
        <button className='box1' onClick={Card1Handler}>
            Card-Design1
        </button>
        <button className="box2" onClick={Card2Handler}>
            Card-Design2
        </button>
      
    </div>
  )
}

export default Home

import React from 'react'
import './Survey.css'
const Survey = () => {
  return (
    <>
        <div className='Survey-container'>
            <div className='survey1'>
                <p>COURSE</p>
                <p>CHAPTER 4</p>
                <p>6/9 Challenges</p>

            </div>
            <div className='survey2'>
                <div className='survey2-part1'>
                    <h2>Javascript</h2>
                    <h2>Fundamentals</h2>
                </div>
                <h2>Callbacks & Closures</h2>
            </div>
            <div className='survey3'>
                <p>view all chapters</p>
                <button>Continue</button>

            </div>


      
        </div>
    </>
    
  )
}

export default Survey;

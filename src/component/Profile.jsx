import React from 'react'
import './profile.css'
import image from '../assets/profile.png'
const Profile = () => {
  return (
    <>
        <div className="card1-container">
            <div className="sec1">
                <img src={image} alt="image" />
            </div>
            <div className="sec2">
                <div className="part1">
                    <h3>Bradley Steve</h3>
                    <p>@bradsteve</p>
                </div>
                <p id='para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero nulla</p>

                <div className="part2">
                    <div>
                        <h4>15k</h4>
                        <h4>Views</h4>
                    </div>
                    <div>
                        <h4>82</h4>
                        <h4>projects</h4>
                    </div>
                    <div>
                        <h4>1.3M</h4>
                        <h4>Followers</h4>
                    </div>

                </div>
                <div className="part3">
                    <button className='btn'>Follow</button>
                    <button className='btn1'>View profile</button>
                </div>

            </div>
        </div>
    </>
  )
}

export default Profile;

import React from 'react'

const Personal = () => {
    return (
        <div className="row personal-row">
            <div className="col-md-12 about-heading">
                <h1 className="about-h">About me</h1>
            </div>
            <div className="col-md-6 personal-info">
                <p className="about-me">My name is Noah Winkelman. I am a self taught programmer.
                    After playing college baseball for two years at Ranger College,
                    I decided to learn how to code.
                    I live in Minnesota but I am well traveled and open to living pretty much anywhere. 
                    In my free time, I enjoy working out and hanging out with my friends.
                    I am a hard working individual with goals and plans to achieve them.
                </p>
            </div>
            <div className="col-md-6 about-picture">
                <img src="https://i.imgur.com/FFrm4wy.jpg" className="img-fluid" id="about-pic" />
            </div>
        </div>
    )
}

export default Personal 
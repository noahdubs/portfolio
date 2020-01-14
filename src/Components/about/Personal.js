import React from 'react'

const Personal = () => {
    return (
        <div className="container about-container">
            <div className=" row personal-row">
                <div className="col-md-6 personal-info">
                    <h1 className="about-h">About <span>me</span></h1>
                    <h4 className="about-h3">
                        I'm a full stack developer from Foley, Minnesota.
                    </h4>
                    <p className="about-me">My name is Noah Winkelman. I am a self taught programmer.
                        After playing college baseball for two years at Ranger College,
                        I decided to learn how to code.
                        I live in Minnesota but I am well traveled and open to living pretty much anywhere. 
                        In my free time, I enjoy working out and hanging out with my friends.
                        I am a hard working individual with goals and plans to achieve them.
                    </p>
                    <div className="about-links">
                        <a href="https://github.com/noahdubs">
                            <i className="fab fa-github bottom"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/noah-winkelman-27153a193/">
                            <i className="fab fa-linkedin bottom"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 about-picture">
                    <img src="https://i.imgur.com/wyYpOZ9.jpg"
                         className="img-fluid" 
                         id="about-pic"
                    />
                </div>
            </div>
        </div>
        
    )
}

export default Personal 
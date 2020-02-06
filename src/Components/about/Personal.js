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
                    <p className="about-me">My name is Noah Winkelman. I am a full stack developer.
                        I live in Minnesota, but I am well traveled and open to living pretty much anywhere. 
                        After playing two years of college baseball, I decided to start to learn how to code. 
                        Once I started learning about web development, I was hooked. The whole development process 
                        is very interesting to me, from the back to the front end. 
                        Every day I work hard to improve my development skills, I believe that hard work is the only sure way 
                        to become successful. In my free time, I enjoy working out and hanging out with my friends.
                    </p>
                    <div className="about-links">
                        <a href="https://github.com/noahdubs">
                            <i className="fab fa-github bottom"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/noah-winkelman-27153a193/">
                            <i className="fab fa-linkedin bottom"></i>
                        </a>
                        <a href="https://stackoverflow.com/users/12335493/noahdubs?tab=profile">
                            <i className="fab fa-stack-overflow bottom"></i>
                        </a>
                    </div>
                </div>
                <div className="col-md-6 about-picture">
                    <img src="https://i.imgur.com/wyYpOZ9.jpg"
                         className="img-fluid" 
                         id="about-pic"
                         alt="noah winkelman"
                    />
                </div>
            </div>
        </div>
        
    )
}

export default Personal 
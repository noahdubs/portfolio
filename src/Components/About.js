import React from 'react'
const About = () => {
    return (
        <div className="container-fluid about">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="hexagon">
                        <i className="fas fa-rocket icon"></i>
                    </div>
                    <h3 className="hex-heading">Fast</h3>
                    <p className="hex-text">Code goes real fast like that rocket above this Code goes real fast like that rocket above this Code goes real fast like that rocket above this</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hexagon">
                        <i className="fas fa-book-reader icon"></i>
                    </div>
                    <h3 className="hex-heading">Readable Code</h3>
                    <p className="hex-text">Code is real readable like that guy reading a book above this</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hexagon">
                        <i className="fas fa-desktop responsive"></i>
                        <i className="fas fa-mobile-alt responsive right"></i>
                    </div>
                    <h3 className="hex-heading">Responsive</h3>
                    <p className="hex-text">My pages are real responsive so they work on all different sizes of screens</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="hexagon">
                        <i className="fas fa-users icon"></i>
                    </div>
                    <h3 className="hex-heading">User Friendly</h3>
                    <p className="hex-text">My designs are easy to use and user friendly, no uneeded complication here!</p>
                </div>
            </div> 
        </div>       
    )

}

export default About
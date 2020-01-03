import React from 'react'

const Projects = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="card one-project">
                        
                        <div className="card-body">
                            <h1 className="card-title">Workout App</h1>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="https://i.imgur.com/YvOSdYO.png" className="img-fluid" />
                                </div>
                                <div className="col-md-4">
                                    <img src="https://i.imgur.com/i0prxz5.png" className="img-fluid" />
                                </div>
                                <div className="col-md-4">
                                    <img src="https://i.imgur.com/SrOVVrB.png" className="img-fluid" />
                                </div>
                            </div>
                            <p className="card-body">A workout based site where users can create their own workouts and exercises</p>
                            <div className="tech-used">
                                <p className="tech-list">Tech used:</p>
                                <li className="tech-list">React <i className="fab fa-react"></i></li>
                                <li className="tech-list">Node.js <i className="fab fa-node-js"></i></li>
                                <li className="tech-list">Express.js <i className="fab fa-js-square"></i></li>
                                <li className="tech-list">MongoDB <i className="fas fa-database"></i></li>
                            </div>
                            <a href="http://ec2-18-220-6-113.us-east-2.compute.amazonaws.com/" className="btn btn-view"><i className="fas fa-desktop"></i> View live</a>
                            <a href="https://github.com/noahdubs/workout" className="btn btn-view"><i className="fab fa-github"></i> View code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="card one-project">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <h1 className="card-title">Blacktop Blog</h1>
                            <div className="row">
                                <div className="col-md-4">
                                    <img src="https://i.imgur.com/D9ek8Gw.png" className="img-fluid" />
                                </div>
                                <div className="col-md-4">
                                    <img src="https://i.imgur.com/pvpOs4C.png" className="img-fluid" />
                                </div>
                                <div className="col-md-4">
                                    <img src="https://i.imgur.com/UdWMBWx.png" className="img-fluid" />
                                </div>
                            </div>
                            <p className="card-body">A blog site where users can make blog posts and leave comments on posts</p>
                            <div className="tech-used">
                                <p className="tech-list">Tech used:</p>
                                <li className="tech-list">Node.js <i className="fab fa-node-js"></i></li>
                                <li className="tech-list">Express.js <i className="fab fa-js-square"></i></li>
                                <li className="tech-list">MongoDB <i className="fas fa-database"></i></li>
                            </div>
                            <a href="http://ec2-3-19-30-151.us-east-2.compute.amazonaws.com/" className="btn btn-view"><i className="fas fa-desktop"></i> View live</a>
                            <a href="https://github.com/noahdubs/blacktop-blog" className="btn btn-view"><i className="fab fa-github"></i> View code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
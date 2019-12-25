import React from 'react'

const Projects = () => {
    return (
        <div className="container-fluid">
            <h1>Projects</h1>
            <div className="row">
                <div className="col-md-6">
                    <div className="card one-project">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Project title</p>
                            <p className="card-body">Body</p>
                            <a href="" className="btn btn-view"><i class="fas fa-desktop"></i> View live</a>
                            <a href="" className="btn btn-view"><i class="fab fa-github"></i> View code</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card one-project">
                        <img className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Project title</p>
                            <p className="card-body">Body</p>
                            <a href="" className="btn btn-view"><i class="fas fa-desktop"></i> View live</a>
                            <a href="" className="btn btn-view"><i class="fab fa-github"></i> View code</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
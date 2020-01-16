import React from 'react'
import Modal from './Modal'

const Content = props => {
    return (
        <div className="container project-container">
            <div className="h-div">
                <h1 className="project-h">Projects</h1>
            </div>
            <div className="row">
                <div className="col-6 img-div">
                    <p className="project-title">Project</p>
                    <button className="btn see-more-btn" 
                            data-toggle="modal" 
                            data-target="#exampleModalCenter"
                    >Learn more</button>
                    <Modal />
                </div>
                <div className="col-6 img-div">
                    <p className="project-title">Project</p>
                    <button className="btn see-more-btn" 
                            data-toggle="modal" 
                            data-target="#exampleModalCenter"
                    >Learn more</button>
                    <Modal />
                </div>
                <div className="col-6 img-div">
                    <p className="project-title">Project</p>
                    <button className="btn see-more-btn" 
                            data-toggle="modal" 
                            data-target="#exampleModalCenter"
                    >Learn more</button>
                    <Modal />
                </div>
                <div className="col-6 img-div">
                    <p className="project-title">Project</p>
                    <button className="btn see-more-btn" 
                            data-toggle="modal" 
                            data-target="#exampleModalCenter"
                    >Learn more</button>
                    <Modal />
                </div>
            </div>
        </div>
    )
}

export default Content
import React from 'react'
import WorkoutModal from './WorkoutModal'
import BurgerModal from './BurgerModal'
import BlogModal from './BlogModal'

const Content = props => {
    return (
        <div className="container project-container">
            <div className="h-div">
                <h1 className="project-h">Projects</h1>
            </div>
            <div className="row">
                <div className="col-12 img-div workout">
                    <p className="project-title">Total Fitness</p>
                    <button className="btn see-more-btn" 
                            data-toggle="modal" 
                            data-target="#workoutModal"
                    >Learn more</button>
                    <WorkoutModal />
                </div>
                <div className="col-12 img-div burger-stop">
                    <p className="project-title">Burger Stop</p>
                    <button className="btn see-more-btn" 
                            data-toggle="modal" 
                            data-target="#burgerModal"
                    >Learn more</button>
                    <BurgerModal />
                </div>
                <div className="col-12 img-div blacktop-blog">
                    <p className="project-title">Blacktop Blog</p>
                    <button className="btn see-more-btn" 
                            data-toggle="modal" 
                            data-target="#blogModal"
                    >Learn more</button>
                    <BlogModal />
                </div>
            </div>
        </div>
    )
}

export default Content
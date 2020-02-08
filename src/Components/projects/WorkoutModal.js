import React from 'react'
import Carousel from './Carousel'
import workoutProfile from "./pictures/workout-profile_40.png"
import workoutShow from './pictures/workout-show_40.png'
import workoutExercises from './pictures/workout-exercises_40.png'
import workoutNew from './pictures/workout-new_40.png'

const WorkoutModal = () => {
    const pictures = [
        workoutExercises, workoutNew, workoutShow
    ]
    const current = "WorkoutCarousel"
    return (
        <div className="modal fade" id="workoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <Carousel first={workoutProfile} pictures={pictures} current={current} />
                    <div className="modal-body">
                        <div className="modal-header-e">
                            <h2>Total Fitness</h2>
                        </div>
                        <div className="modal-about-e">
                            <p>Full stack workout wesbite where users can create workouts from a selection of exercises.
                                Users can also add new exercises if they want to. Each user has their own profile page showing their created 
                                workouts and exercises. 
                            </p>
                        </div>
                        <h5>Tech used</h5>
                        <div className="modal-tech-used">
                            <img alt="node js logo" className="tech-used-img node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
                            <img alt="react js logo" className="tech-used-img react" src="https://www.pubnub.com/wp-content/uploads/2014/10/ReactJS-409x178.png" />
                            <img alt="express logo" className="tech-used-img express" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" />
                            <img alt="mongoDB logo" className="tech-used-img mongo" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />
                        </div>
                        <div className="modal-bottom-e">
                            <a href="https://github.com/noahdubs/workout" className="btn view-code-btn">View code <i class="fab fa-github view-code-icon"></i></a>
                            <a href="https://total-fitness.herokuapp.com/" className="btn view-code-btn">View live <i class="fas fa-desktop view-code-icon"></i></a>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span className="close-modal" aria-hidden="true">&times;</span>
                            </button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkoutModal 
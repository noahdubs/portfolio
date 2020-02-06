import React from 'react'
import Carousel from './Carousel'

const WorkoutModal = () => {
    const first = "https://res.cloudinary.com/dz4rcplz8/image/upload/v1580947820/extra/Screenshot_from_2020-02-05_17-48-19_u8uvdc.png"
    const pictures = [
       "https://res.cloudinary.com/dz4rcplz8/image/upload/v1580947827/extra/Screenshot_from_2020-02-05_17-49-14_tird3o.png",
       "https://res.cloudinary.com/dz4rcplz8/image/upload/v1580947830/extra/Screenshot_from_2020-02-05_17-49-34_axfysj.png",
       "https://res.cloudinary.com/dz4rcplz8/image/upload/v1580947835/extra/Screenshot_from_2020-02-05_17-54-01_khzymi.png"
    ]
    return (
        <div className="modal fade" id="workoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <Carousel first={first} pictures={pictures} />
                </div>
            </div>
        </div>
    )
}

export default WorkoutModal 

{/* <div class="modal-dialog modal-lg" role="document">
    <div class="modal-content">
        <Carousel pictures={pictures} />
        <div class="modal-body">
            <h2>Total Fitness</h2>
        </div>
        <div className="modal-about">
            <p>about total fitness</p>
        </div>
        <div className="tech-used">
            <p>Tech used</p>
            <div className="modal-tech-used">
                <img className="tech-used-img node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
                <img className="tech-used-img react" src="https://www.pubnub.com/wp-content/uploads/2014/10/ReactJS-409x178.png" />
                <img className="tech-used-img express" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" />
                <img className="tech-used-img mongo" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />
            </div>
        </div>
        
        <div class="modal-bottom">
            <a href="https://github.com/noahdubs/workout" className="btn view-code-btn">View code <i class="fab fa-github view-code-icon"></i></a>
            <a href="github.com" className="btn view-code-btn">View live <i class="fas fa-desktop view-code-icon"></i></a>
            
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    </div>
</div> */}
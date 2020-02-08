import React from 'react'
import Carousel from './Carousel'
import BurgerPage from './pictures/burger-burgerPage_40.png' 
import BurgerProfile from './pictures/burger-profile_40.png'
import BurgerIndex from './pictures/burger-index_40.png'

const BurgerModal = () => {
    const pictures = [
        BurgerProfile, BurgerIndex
    ]
    const current = "BurgerCarousel"
    return (
        <div className="modal fade" id="burgerModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <Carousel first={BurgerPage} pictures={pictures} current={current} />
                    <div className="modal-body">
                        <div className="modal-header-e">
                            <h2>Burger Stop</h2>
                        </div>
                        <div className="modal-about-e">
                            <p>Full stack burger review site where users can leave reviews on burgers, leave comments, and find 
                                out where the best burgers are. Google maps is used to show the location of each 
                                burger's restaraunt. All users have a profile page showing their info and all of their
                                burger reviews. 
                            </p>
                        </div>
                        <h5>Tech used</h5>
                        <div className="modal-tech-used">
                            <img alt="google maps api logo" className="tech-used-img maps" src="https://skymapglobal.com/wp-content/uploads/2017/11/google-maps-api-logo-e1510144686715.png" />
                            <img alt="node js logo" className="tech-used-img node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
                            <img alt="express logo" className="tech-used-img express" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" />
                            <img alt="mongoDB logo" className="tech-used-img mongo" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />
                        </div>
                        <div className="modal-bottom-e">
                            <a href="https://github.com/noahdubs/burger-stop" className="btn view-code-btn">View code <i class="fab fa-github view-code-icon"></i></a>
                            <a href="https://burger-stop.herokuapp.com/" className="btn view-code-btn">View live <i class="fas fa-desktop view-code-icon"></i></a>
                            
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

export default BurgerModal 
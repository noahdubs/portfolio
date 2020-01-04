import React from 'react'

const Hexagons = () => {
    return (
        <div className="row hex-row">
            <div className="col-lg-4 col-md-6">
                <div className="hexagon">
                    <i className="fas fa-rocket icon"></i>
                </div>
                <h3 className="hex-heading">Fast Load Times</h3>
                <p className="hex-text">Thanks to React's virtual DOM, my sites load fast and only have to update when new content needs to be displayed</p>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="hexagon">
                    <i className="fas fa-desktop responsive"></i>
                    <i className="fas fa-mobile-alt responsive right"></i>
                </div>
                <h3 className="hex-heading">Responsive</h3>
                <p className="hex-text">My sites are responsive so they work on all different sizes of screens</p>
            </div>
            <div className="col-lg-4 col-md-6">
                <div className="hexagon">
                    <i className="fas fa-users icon"></i>
                </div>
                <h3 className="hex-heading">User Friendly</h3>
                <p className="hex-text">My designs are easy to use and user friendly, no uneeded complication here!</p>
            </div>
        </div> 
    )
}


export default Hexagons 
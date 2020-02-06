import React from 'react'
import LandingNav from './navbar/LandingNav'

const Landing = props => {
    return (
        <div className="landing-div">
            <LandingNav 
                handleClick={props.handleClick}
                currentStr={props.currentStr}
            />
            <div className="layer">
                <div className="landing-content">
                    <h1 className="landing-h">NOAH WINKELMAN</h1>
                    <p className="landing-p">I'm a full stack developer focused
                    on creating clean and user friendly web pages     
                    </p>
                    <button onClick={props.handleClick} name="Projects" className="landing-btn">
                        View my work <i className="fas fa-arrow-right landing-icon"></i></button>
                </div>
            </div>
        </div>
        
    )
}

export default Landing 
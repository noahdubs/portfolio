import React from 'react'
import Pdf from '../../Resume.pdf'

const Items = props => {
    return (
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav navbar-right">
                <li className="list-item" name="Home" style={props.landingStyles, props.activeStyles.home} onClick={props.handleClick}>Home</li>
                <li className="list-item" name="About" style={props.landingStyles, props.activeStyles.about} onClick={props.handleClick}>About</li>
                <li className="list-item" name="Projects" style={props.landingStyles, props.activeStyles.projects} onClick={props.handleClick}>Projects</li>
                <li className="list-item"><a href={Pdf} style={props.activeStyles.resume} className="resume-link">Resume</a></li>
            </ul>
        </div>
    )
}

export default Items 
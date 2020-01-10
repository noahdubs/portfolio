import React from 'react'
import Items from './Items'

const LandingNav = props => {
    let activeStyles = {home: {color:"#0078FF"}, about: {}, projects: {},
     resume: {color: "white"}}
    return (
        <nav className="navbar landing-nav navbar-expand-md navbar-dark">
            <div className="container navbar-container">
                <li className="navbar-brand" id="nav-brand-l">NW </li>
                <button className="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler"></span>
                </button> 
                <Items 
                    activeStyles={activeStyles}
                    handleClick={props.handleClick}
                />
            </div>
        </nav>
    )
}

export default LandingNav 
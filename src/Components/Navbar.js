import React from 'react'

const clickedStyle = {
    borderBottom: '2px solid #39AF1D'
}




const Navbar = props => {
    let activeStyles = {home: {}, about: {}, projects: {}, resume: {}, contact: {}}
    if(props.currentStr === "Home" ){
        activeStyles.home = {color: '#ffffff'}
    } else if(props.currentStr === "About"){
        activeStyles.about = {color: '#ffffff'}
    } else if(props.currentStr === "Projects"){
        activeStyles.projects = {color: '#ffffff'}
    } else if(props.currentStr === "Resume"){
        activeStyles.resume = {color: '#ffffff'}
    } else {
        activeStyles.contact = {color: '#ffffff'}
    }
    return (
        <nav className="navbar nav-custom navbar-expand-md">
            <div className="container navbar-container">
                <li className="navbar-brand"><i className="fas fa-code code-icon"></i> Noah Winkelman <br /><p className="under-h-p"> Full Stack Web Developer</p></li>
                <button className="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler"></span>
                </button>
                <div className="collapse navbar-collapse nav-right-side" id="navbarSupportedContent">
                    <li className="navbar-nav mr-auto"></li>
                    <li className="list-item" name="Home" style={activeStyles.home} onClick={props.handleClick}>Home</li>
                    <li className="list-item" name="About" style={activeStyles.about} onClick={props.handleClick}>About</li>
                    <li className="list-item" name="Projects" style={activeStyles.projects} onClick={props.handleClick}>Projects</li>
                    <li className="list-item" name="Resume" style={activeStyles.resume} onClick={props.handleClick}>Resume</li>
                    <li className="list-item" name="Contact" style={activeStyles.contact} onClick={props.handleClick}>Contact</li>  
                </div>
            </div>
        </nav>
        
    )
}


export default Navbar
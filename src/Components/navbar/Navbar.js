import React from 'react'
import Items from './Items'

const Navbar = props => {
    let activeStyles = {home: {}, about: {}, projects: {}, resume: {}}
    if(props.currentStr === "Home" ){
        activeStyles.home = {color: '#ffffff'}
    } else if(props.currentStr === "About"){
        activeStyles.about = {color: '#ffffff'}
    } else {
        activeStyles.projects = {color: '#ffffff'}
    } 
    return (
        <nav className="navbar nav-custom navbar-expand-md navbar-dark">
            <div className="container navbar-container">
                <i className="fas fa-code code-icon"></i>
                <li className="navbar-brand" id="nav-brand">Noah Winkelman <br /><p className="under-h-p"> Full Stack Web Developer</p></li>
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


export default Navbar
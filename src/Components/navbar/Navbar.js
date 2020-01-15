import React from 'react'
import Items from './Items'

const Navbar = props => {
    let activeStyles = {home: {}, about: {}, projects: {}, resume: {}}
    if(props.currentStr === "About"){
        activeStyles.about = {color: '#0078FF'}
    } else if(props.currentStr === "Projects"){
        activeStyles.projects = {color: '#0078FF'}
    } 
    console.log(activeStyles)
    return (
        <nav className="navbar nav-custom navbar-expand-md navbar-dark">
            <div className="container navbar-container">
                <li className="navbar-brand" id="nav-brand">NW </li>
                <button className="navbar-toggler border" id="nav-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler" id="nav-span"></span>
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
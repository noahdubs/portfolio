import React from 'react'
import Items from './Items'

const Navbar = props => {
    let activeStyles = {home: {}, about: {}, projects: {}, resume: {}}
    let landingStyles = {}
    if(props.currentStr === "Home" ){
        console.log(props.currentStr)
        activeStyles.home = {color: '#0078FF'}
        landingStyles = {color: '#ffffff'}
    } else if(props.currentStr === "About"){
        activeStyles.about = {color: '#0078FF'}
    } else {
        activeStyles.projects = {color: '#0078FF'}
    } 
    return (
        <nav className="navbar nav-custom navbar-expand-md navbar-dark">
            <div className="container navbar-container">
                <li className="navbar-brand" id="nav-brand">Noah Winkelman </li>
                <button className="navbar-toggler border" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon toggler"></span>
                </button> 
                <Items 
                    activeStyles={activeStyles}
                    landingStyles={landingStyles}
                    handleClick={props.handleClick}
                />
            </div>
        </nav>
        
    )
}


export default Navbar
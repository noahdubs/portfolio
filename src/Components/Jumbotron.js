import React from 'react'

const Jumbotron = props => {
    console.log(props)
    return (
        <div className="jumbotron jumbo">
            <h1 className="jumbo-heading">Hello, I'm Noah Winkelman.</h1>
            <h1 className="jumbo-under">I design and build full stack web applications</h1>
            <button name="Projects" onClick={props.handleClick} className="btn btn-work">View my work <i className="fas fa-sign-in-alt"></i></button>
        </div>
    )
}

export default Jumbotron
import React from 'react'

const Landing = props => {
    console.log(props)
    return (
        <div className="layer">
            <div className="landing-content">
                <h1 className="landing-h">NOAH WINKELMAN</h1>
                <p className="landing-p">I'm a full stack developer focused
                   on creating clean and user friendly web pages     
                 </p>
                <button onClick={props.handleClick} name="Projects" className="landing-btn">View my work</button>
            </div>
        </div>
    )
}

export default Landing 
import React from 'react'
import Personal from './Personal'
import Navbar from '../navbar/Navbar'

const About = props => {
    return (
        <div className="">
            <Navbar 
                handleClick={props.handleClick}
                currentStr={props.currentStr}
            />
            <Personal />
        </div>       
    )

}

export default About
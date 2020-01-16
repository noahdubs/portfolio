import React from "react"
import Navbar from '../navbar/Navbar'
import Content from './Content'

class Projects extends React.Component {
    state = {
        leftCorner: false
    }

    componentDidMount = () => {

    }

    render() {
        console.log(this.state)
        return (
            <div className="projects-div">
                <Navbar 
                    handleClick={this.props.handleClick}
                    currentStr={this.props.currentStr}
                />
                <Content />
            </div>
        )
    }
}

export default Projects
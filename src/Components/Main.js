import React from 'react'
import Navbar from './navbar/Navbar'
import Landing from './Landing'
import About from './about/About'
import Projects from './Projects'
import Footer from './Footer'

class Main extends React.Component {
    state = {
        current: <Landing />,
        currentStr: "Home"
    }

    componentDidMount = () => {
        this.setState({
            current: <Landing handleClick={this.handleClick}/>
        })
    }

    handleClick = event => {
        const clicked = event.target.attributes.name.value
        let newComponent = <Landing handleClick={this.handleClick}/>
        if(clicked === "About"){
            newComponent = <About />
        } else if(clicked === "Projects"){
            newComponent = <Projects />
        } 
        this.setState({
            current:newComponent,
            currentStr: clicked
        })
    }

    checkLanding = () => {
        const current = this.state.current
        const currentStr = this.state.currentStr
        if(currentStr === "Home"){
            return (
                <div className="landing-div">
                    <Navbar 
                        handleClick={this.handleClick}
                        currentStr={currentStr}
                    />
                    <Landing 
                        handleClick={this.handleClick}
                    />
                </div>
            )
        } else {
            return (
                <div className="main-div">
                    <Navbar 
                        handleClick={this.handleClick}
                        currentStr={currentStr}
                    />
                    {current}
                </div>
            )
        }
    }

    render() {
        return (
            this.checkLanding()
        )
    }
}

export default Main 
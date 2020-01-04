import React from 'react'
import Navbar from './navbar/Navbar'
import Jumbotron from './Jumbotron'
import About from './about/About'
import Projects from './Projects'
import Resume from './Resume'
import Footer from './Footer'

class Main extends React.Component {
    state = {
        current: <Jumbotron />,
        currentStr: "Home"
    }

    componentDidMount = () => {
        this.setState({
            current: <Jumbotron handleClick={this.handleClick}/>
        })
    }

    handleClick = event => {
        const clicked = event.target.attributes.name.value
        let newComponent = <Jumbotron handleClick={this.handleClick}/>
        if(clicked === "About"){
            newComponent = <About />
        } else if(clicked === "Projects"){
            newComponent = <Projects />
        } else if(clicked === "Resume"){
            newComponent = <Resume />
        } 
        this.setState({
            current:newComponent,
            currentStr: clicked
        })
    }

    render() {
        console.log(this.state.current)
        const current = this.state.current
        const currentStr = this.state.currentStr
        return (
            <div className="main-div">
                <Navbar 
                    handleClick={this.handleClick}
                    currentStr={currentStr}
                />
                {current}
                <Footer />
            </div>
        )
    }
}

export default Main 
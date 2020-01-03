import React from 'react'
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import About from './About'
import Projects from './Projects'
import Resume from './Resume'
import Contact from './Contact'
import Footer from './Footer'

class Main extends React.Component {
    state = {
        current: <Jumbotron />,
        currentStr: "Home"
    }

    handleClick = event => {
        const clicked = event.target.attributes.name.value
        let newComponent = <Jumbotron />
        if(clicked === "About"){
            newComponent = <About />
        } else if(clicked === "Projects"){
            newComponent = <Projects />
        } else if(clicked === "Resume"){
            newComponent = <Resume />
        } else if(clicked === "Contact"){
            newComponent = <Contact />
        }
        this.setState({
            current:newComponent,
            currentStr: clicked
        })
    }

    render() {
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
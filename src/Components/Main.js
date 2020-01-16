import React from 'react'
import Landing from './Landing'
import About from './about/About'
import Projects from './projects/Projects'
import ReactCssTransitionGroup from 'react-addons-css-transition-group'

class Main extends React.Component {
    state = {
        current: 
        <Landing 
            key={0}
            handleClick={this.handleClick}
            currentStr={this.currentStr}      
        />,
        currentStr: "Home"
    }

    componentDidMount = () => {
        this.setState({
            current: <Landing handleClick={this.handleClick} currentStr={this.currentStr} key={0}/>
        })
    }

    handleClick = event => {
        const clicked = event.target.attributes.name.value
        let newComponent = <Landing handleClick={this.handleClick}/>
        if(clicked === "About"){
            newComponent = <About key={1} handleClick={this.handleClick} currentStr={clicked}/>
        } else if(clicked === "Projects"){
            newComponent = <Projects key={2} handleClick={this.handleClick} currentStr={clicked}/>
        } 
        this.setState({
            current:newComponent,
            currentStr: clicked
        })
    }


    render() {
        let current = this.state.current
        return (
            <ReactCssTransitionGroup
                transitionName="example"
                transitionEnterTimeout={1000}
                transitionLeaveTimeout={500}>
                
                {current}

            </ReactCssTransitionGroup>
        )
    }
}

export default Main 
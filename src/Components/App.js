import React from 'react'
import About from './About' 
import Contact from './Contact'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import Navbar from './Navbar'
import Projects from './Projects'

const App = () => {
    return (
        <div>
            <Navbar />
            <Jumbotron />
            <About />
            <Projects />
            <Contact />
            <Footer />
        </div>
    )
}



export default App;
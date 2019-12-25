import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-md nav-custom">
            <a href="#" className="navbar-brand links">Noah Winkelman</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon toggler"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a href="/resume" className="nav-link links">Resume</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" className="nav-link links">About</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" className="nav-link links">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" className="nav-link links">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}


export default Navbar
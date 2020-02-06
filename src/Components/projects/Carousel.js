import React from 'react'

const Carousel = props => {
    return (
        <div className="carousel slide" id={props.current} data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.first} className=" carousel-img" alt="workout profile" />
                </div>
                {props.pictures.map(picture => (
                    <div className="carousel-item">
                        <img src={picture} className="carousel-img" alt="total fitness site page" />
                    </div>
                ))}
                <a className="carousel-control-prev" href={`#${props.current}`} role="button" data-slide="prev">
                    <i className={`fas fa-chevron-left ${props.current}`}></i>
                    <span className="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href={`#${props.current}`} role="button" data-slide="next">
                    <i className={`fas fa-chevron-right ${props.current}`}></i>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel 
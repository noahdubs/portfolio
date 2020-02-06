import React from 'react'

const Carousel = props => {
    return (
        <div className="carousel slide" id="carouselControls" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={props.first} className="img-responsive" />
                </div>
                {props.pictures.map(picture => (
                    <div className="carousel-item">
                        <img src={picture} className="img-responsive" alt={picture} />
                        <h1>Hey</h1>
                    </div>
                ))}
                <a className="carousel-control-prev" href="#carouselControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}

export default Carousel 
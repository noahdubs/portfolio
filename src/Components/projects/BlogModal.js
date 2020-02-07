import React from 'react'
import Carousel from './Carousel'
import BlogIndex from './pictures/blog-index.png'
import BlogProfile from './pictures/blog-profile.png'
import BlogShow from './pictures/blog-show.png'

const BlogModal = () => {
    const current = "BlogCarousel"
    const pictures = [
        BlogProfile, BlogShow
    ]
    return (
        <div className="modal fade" id="blogModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                    <Carousel first={BlogIndex} pictures={pictures} current={current} />
                    <div className="modal-body">
                        <div className="modal-header-e">
                            <h2>Blacktop Blog</h2>
                        </div>
                        <div className="modal-about-e">
                            <p>Full stack blog site where users can create blog posts and post them. Users can leave comments 
                                on all blog posts. There is a profile page for each user, showing their info and blog posts.
                            </p>
                        </div>
                        <h5>Tech used</h5>
                        <div className="modal-tech-used">
                            <img alt="nodejs logo" className="tech-used-img node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
                            <img alt="express logo" className="tech-used-img express" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" />
                            <img alt="mongoDB logo" className="tech-used-img mongo" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />
                        </div>
                        <div className="modal-bottom-e">
                            <a href="https://github.com/noahdubs/blacktop-blog" className="btn view-code-btn">View code <i class="fab fa-github view-code-icon"></i></a>
                            <a href="https://blacktop-blog.herokuapp.com/" className="btn view-code-btn">View live <i class="fas fa-desktop view-code-icon"></i></a>
                            
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span className="close-modal" aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogModal 
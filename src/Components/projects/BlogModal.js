import React from 'react'

const BlogModal = () => {
    return (
        <div className="modal fade" id="blogModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <img className="modal-img" src="https://i.imgur.com/YvOSdYO.png" />
                    </div>
                    <div class="modal-body">
                        <h2>Blacktop Blog</h2>
                    </div>
                    <div className="modal-about">
                        <p>about blacktop blog</p>
                    </div>
                    <div className="tech-used">
                        <p>Tech used</p>
                        <div className="modal-tech-used">
                            <img className="tech-used-img node" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
                            <img className="tech-used-img express" src="https://buttercms.com/static/images/tech_banners/ExpressJS.png" />
                            <img className="tech-used-img mongo" src="https://webassets.mongodb.com/_com_assets/cms/MongoDB_Logo_FullColorBlack_RGB-4td3yuxzjs.png" />
                        </div>
                    </div>
                    
                    <div class="modal-bottom">
                        <a href="https://github.com/noahdubs/blacktop-blog" className="btn view-code-btn">View code <i class="fab fa-github view-code-icon"></i></a>
                        <a href="github.com" className="btn view-code-btn">View live <i class="fas fa-desktop view-code-icon"></i></a>
                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogModal 
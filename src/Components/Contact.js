import React from 'react'

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <h1>Contact</h1>
                    <form action="">
                        <div className="form-group">
                            <label for="name">Your name</label>
                            <input type="text" className="form-control" name="name"/>
                        </div>
                        <div className="form-group">
                            <label for="email">Your email</label>
                            <input type="text" className="form-control" name="email"/>
                        </div>
                        <div className="form-group">
                            <label for="message">Your message</label>
                            <textarea rows="5" type="text" className="form-control" name="message"></textarea>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-contact">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    )
}
export default Contact
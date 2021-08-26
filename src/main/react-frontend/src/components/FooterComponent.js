import React, { Component } from 'react'

class FooterComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                 
        }
    }

    render() {
        return (
            <div>
                <footer className = "footer">
                <div><a href="http://www.linkedin.com/in/cameron-harte" className="navbar-brand">Click Me!</a></div>
                </footer>
            </div>
        )
    }
}

export default FooterComponent
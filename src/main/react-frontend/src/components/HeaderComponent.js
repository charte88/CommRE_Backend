import React, { Component } from 'react'

class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="https://github.com/charte88/CommRE_Backend" className="navbar-brand">Property Management App</a></div>
                        <div><a href="http://localhost:8080/swagger-ui.html#!/property-controller/newPropertyUsingPOST" className="navbar-brand">Swagger UI</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent
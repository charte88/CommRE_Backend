import React, { Component } from 'react'
import PropertyService from '../services/PropertyService'

class ViewPropertyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            property: {}
        }
    }

    componentDidMount() {
        PropertyService.getPropertyById(this.state.id).then(res => {
            this.setState({ property: res.data });
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Property Details</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Property Name: </label>
                            <div> {this.state.property.name}</div>
                        </div>
                        <div className="row">
                            <label> Property State: </label>
                            <div> {this.state.property.state}</div>
                        </div>
                        <div className="row">
                            <label> Property City: </label>
                            <div> {this.state.property.city}</div>
                        </div>
                        <div className="row">
                            <label> Property Address 1: </label>
                            <div> {this.state.property.address1}</div>
                        </div>
                        <div className="row">
                            <label> Property Address 2: </label>
                            <div> {this.state.property.address2}</div>
                        </div>
                        <div className="row">
                            <label> Property Listing Name: </label>
                            <div> {this.state.property.listingName}</div>
                        </div>
                        <div className="row">
                            <label> Property Listing Date: </label>
                            <div> {this.state.property.listingDate}</div>
                        </div>
                        <div className="row">
                            <label> Property Is Active?: </label>
                            <div> {this.state.property.isActive}</div>
                        </div>
                        <div className="row">
                            <label> Property Price: </label>
                            <div> {this.state.property.price}</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewPropertyComponent
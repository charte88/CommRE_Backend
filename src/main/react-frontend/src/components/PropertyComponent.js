import React, { Component } from 'react'
import PropertyService from '../services/PropertyService'

class PropertyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            properties: []
        }
        this.addProperty = this.addProperty.bind(this);
        this.editProperty = this.editProperty.bind(this);
        this.deleteProperty = this.deleteProperty.bind(this);
    }

    deleteProperty(id) {
        PropertyService.deleteProperty(id).then(res => {
            this.setState({ properties: this.state.properties.filter(properties => properties.id !== id) });
        });
    }
    viewProperty(id) {
        this.props.history.push(`/view-property/${id}`);
    }
    editProperty(id) {
        this.props.history.push(`/add-property/${id}`);
    }

    componentDidMount() {
        PropertyService.getProperties().then((res) => {
            this.setState({ properties: res.data });
        });
    }

    addProperty() {
        this.props.history.push('/add-property/_add');
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Property List</h2>
                <div className="row">
                    <button className="btn btn-primary" onClick={this.addProperty}> Add Property</button>
                </div>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th> Property Name</th>
                                <th> Property State</th>
                                <th> Property City</th>
                                <th> Property Address1</th>
                                <th> Property Address2</th>
                                <th> Property Listing_Name</th>
                                <th> Property Listing_Date</th>
                                <th> Property Is_Active</th>
                                <th> Property Price</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.properties.map(
                                    property =>
                                        <tr key={property.id}>
                                            <td> {property.name} </td>
                                            <td> {property.state} </td>
                                            <td> {property.city} </td>
                                            <td> {property.address1} </td>
                                            <td> {property.address2} </td>
                                            <td> {property.listingName} </td>
                                            <td> {property.listingDate} </td>
                                            <td> {property.isActive} </td>
                                            <td> {property.price} </td>
                                            <td>
                                                <button onClick={() => this.editProperty(property.id)} className="btn btn-info">Update </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deleteProperty(property.id)} className="btn btn-danger">Delete </button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.viewProperty(property.id)} className="btn btn-info">View </button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        )
    }
}

export default PropertyComponent
import React from 'react';
import PropertyService from '../services/PropertyService';

class PropertyComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            properties:[]
        }
    }

    componentDidMount() {
        PropertyService.getProperties().then((response) => {
            this.setState({ properties: response.data})
        });
    }

    render () {
        return (
            <div>
                <h1 className="text-center"> Properties List</h1>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td> Property Id</td>
                            <td> Property Name</td>
                            <td> Property State</td>
                            <td> Property City</td>
                            <td> Property Address1</td>
                            <td> Property Address2</td>
                            <td> Property Listing_Name</td>
                            <td> Property Listing_Date</td>
                            <td> Property Is_Active</td>
                            <td> Property Price</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.properties.map(
                                property =>
                                <tr key = {property.id}>
                                    <td> {property.id} </td>
                                    <td> {property.name} </td>
                                    <td> {property.state} </td>
                                    <td> {property.city} </td>
                                    <td> {property.address1} </td>
                                    <td> {property.address2} </td>
                                    <td> {property.listingName} </td>
                                    <td> {property.listingDate} </td>
                                    <td> {property.isActive} </td>
                                    <td> {property.price} </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}

export default PropertyComponent
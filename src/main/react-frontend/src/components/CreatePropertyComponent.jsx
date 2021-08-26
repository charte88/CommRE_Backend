import React, { Component } from 'react'
import PropertyService from '../services/PropertyService';

class CreatePropertyComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            // step 2
            id: this.props.match.params.id,
            name: '',
            state: '',
            city: '',
            address1: '',
            address2: '',
            listingName: '',
            listingDate: '',
            isActive: '',
            price: ''
        }
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.changeCityHandler = this.changeCityHandler.bind(this);
        this.changeAddress1Handler = this.changeAddress1Handler.bind(this);
        this.changeAddress2Handler = this.changeAddress2Handler.bind(this);
        this.changeListingNameHandler = this.changeListingNameHandler.bind(this);
        this.changeListingDateHandler = this.changeListingDateHandler.bind(this);
        this.changeIsActiveHandler = this.changeIsActiveHandler.bind(this);
        this.changePriceHandler = this.changePriceHandler.bind(this);
        this.saveOrUpdateProperty = this.saveOrUpdateProperty.bind(this);
    }

    // step 3
    componentDidMount() {

        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            PropertyService.getPropertyById(this.state.id).then((res) => {
                let property = res.data;
                this.setState({
                    name: property.name,
                    state: property.state,
                    city: property.city,
                    address1: property.address1,
                    address2: property.address2,
                    listingName: property.listingName,
                    listingDate: property.listingDate,
                    isActive: property.isActive,
                    price: property.price
                });
            });
        }
    }
    saveOrUpdateProperty = (e) => {
        e.preventDefault();
        let property = {
            name: this.state.name,
            state: this.state.state,
            city: this.state.city,
            address1: this.state.address1,
            address2: this.state.address2,
            listingName: this.state.listingName,
            listingDate: this.state.listingDate,
            isActive: this.state.isActive,
            price: this.state.price
        };
        console.log('property => ' + JSON.stringify(property));

        // step 5
        if (this.state.id === '_add') {
            PropertyService.createProperty(property).then(res => {
                this.props.history.push('/properties');
            });
        } else {
            PropertyService.updateProperty(property, this.state.id).then(res => {
                this.props.history.push('/properties');
            });
        }
    }

    changeNameHandler = (event) => {
        this.setState({ name: event.target.value });
    }

    changeStateHandler = (event) => {
        this.setState({ state: event.target.value });
    }

    changeCityHandler = (event) => {
        this.setState({ city: event.target.value });
    }

    changeAddress1Handler = (event) => {
        this.setState({ address1: event.target.value });
    }

    changeAddress2Handler = (event) => {
        this.setState({ address2: event.target.value });
    }

    changeListingNameHandler = (event) => {
        this.setState({ listingName: event.target.value });
    }

    changeListingDateHandler = (event) => {
        this.setState({ listingDate: event.target.value });
    }

    changeIsActiveHandler = (event) => {
        this.setState({ isActive: event.target.value });
    }

    changePriceHandler = (event) => {
        this.setState({ price: event.target.value });
    }

    cancel() {
        this.props.history.push('/properties');
    }

    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add Property</h3>
        } else {
            return <h3 className="text-center">Update Property</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Name: </label>
                                        <input placeholder="Name" name="Name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> State: </label>
                                        <input placeholder="State" name="State" className="form-control"
                                            value={this.state.state} onChange={this.changeStateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> City: </label>
                                        <input placeholder="City" name="City" className="form-control"
                                            value={this.state.city} onChange={this.changeCityHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address 1: </label>
                                        <input placeholder="Address1" name="Address1" className="form-control"
                                            value={this.state.address1} onChange={this.changeAddress1Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Address 2: </label>
                                        <input placeholder="Address2" name="Address2" className="form-control"
                                            value={this.state.address2} onChange={this.changeAddress2Handler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Listing Name: </label>
                                        <input placeholder="ListingName" name="ListingName" className="form-control"
                                            value={this.state.listingName} onChange={this.changeListingNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Listing Date: </label>
                                        <input placeholder="ListingDate" name="ListingDate" className="form-control"
                                            value={this.state.listingDate} onChange={this.changeListingDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Is Active?: </label>
                                        <input placeholder="IsActive" name="IsActive" className="form-control"
                                            value={this.state.isActive} onChange={this.changeIsActiveHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price: </label>
                                        <input placeholder="Price" name="Price" className="form-control"
                                            value={this.state.price} onChange={this.changePriceHandler} />
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateProperty}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreatePropertyComponent
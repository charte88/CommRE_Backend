import axios from 'axios'

const PROPERTIES_REST_API_URL = 'http://localhost:8080/api/properties';

class PropertyService {

    getProperties(){
        return axios.get(PROPERTIES_REST_API_URL);
    }

    createProperty(property) {
        return axios.post(PROPERTIES_REST_API_URL, property);
    }

    getPropertyById(propertyId) {
        return axios.get(PROPERTIES_REST_API_URL + '/' + propertyId);
    }

    updateProperty(property, propertyId) {
        return axios.put(PROPERTIES_REST_API_URL + '/' + propertyId, property);
    }

    deleteProperty(propertyId) {
        return axios.delete(PROPERTIES_REST_API_URL + '/' + propertyId);
    }
}

export default new PropertyService();
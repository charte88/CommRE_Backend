import axios from 'axios'

const PROPERTIES_REST_API_URL = 'http://localhost:8080/api/properties';

class PropertyService {

    getProperties(){
        return axios.get(PROPERTIES_REST_API_URL);
    }
}

export default new PropertyService();
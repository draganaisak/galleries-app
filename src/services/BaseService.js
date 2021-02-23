import axios from 'axios';

class BaseService {
    constructor() {
        this.http = axios.create({
            baseURL: 'http://localhost:8000/api'
        });

        this.http.interceptors.request.use(function(request) {
            const token = JSON.parse(localStorage.getItem('token'));
            if (token) {
                request.headers['Authorization'] = `Bearer ${token}`;
            }
            return request;
        });
    }
}

export default BaseService;
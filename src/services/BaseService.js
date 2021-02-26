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

        // this.http.interceptors.response.use(async (response) => {
        //     console.log('response interceptor')
        //     const token = JSON.parse(localStorage.getItem('token'));
        //     console.log('token', token)
        //     if (token && response.status === 401) {
        //         console.log('sending request')
        //         try {
        //             console.log('sending request')
        //             const response = await this.http.post('/refresh-token');
        //             console.log('got response')
        //             localStorage.setItem('token', response.data.token);
    
        //         } catch (err) {
        //             console.log('err', { err })
        //         }
        //     }
        //     return response;
        // });
    }
}

export default BaseService;
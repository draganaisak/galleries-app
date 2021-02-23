import BaseService from './BaseService'

class AuthService extends BaseService
{
    async register(userData)
    {
        const { data } = await this.http.post('/register', userData);
        return data;
    }

    async login(credentials)
    {
        const { data } = await this.http.post('/login', credentials);
        return data;
    }

    logout() {
        return this.http.post('/logout');
    }

    async getMyProfile() {
        const { data } = await this.http.get('/me');
        return data;
    }
}

export default new AuthService();
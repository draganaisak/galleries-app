import BaseService from "./BaseService";

class GalleriesService extends BaseService
{
    async createGallery(gallery) {
        const { data } = await this.http.post('/galleries', gallery);
        return data;
    }

    async getGalleries() {
        const { data } = await this.http.get('/galleries');
        return data;
    }
}

export default new GalleriesService();
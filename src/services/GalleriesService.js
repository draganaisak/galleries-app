import BaseService from "./BaseService";

class GalleriesService extends BaseService
{
    async createGallery(gallery) {
        const { data } = await this.http.post('/galleries', gallery);
        return data;
    }
}

export default new GalleriesService();
import BaseService from "./BaseService";

class GalleriesService extends BaseService
{
    async createGallery(gallery) {
        const { data } = await this.http.post('/galleries', gallery);
        return data;
    }

    async getGalleries(params) {
        const { data } = await this.http.get('/galleries', {params});
        return data;
    }

    async getGallery(id) {
        const { data } = await this.http.get(`/galleries/${id}`)
        return data;
    }

    async getMyGalleries() {
        const { data } = await this.http.get('/my-galleries');
        return data;
    }

    async editGallery(id, gallery) {
        const { data } = await this.http.put(`/galleries/${id}`, gallery);
        return data;
    }

    deleteGallery(id) {
        this.http.delete(`/galleries/${id}`);
    }
}

export default new GalleriesService();
import galleriesService from "../../services/GalleriesService";

export const actions = {
    async createGallery(store, galleryData) {
        await galleriesService.createGallery(galleryData);
    },

    async getGalleries(store) {
        const galleries = await galleriesService.getGalleries();
        store.commit('setGalleries', galleries)
    }
}
import galleriesService from "../../services/GalleriesService";

export const actions = {
    async createGallery(store, galleryData) {
        await galleriesService.createGallery(galleryData);
    },
}
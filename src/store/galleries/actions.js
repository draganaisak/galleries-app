import galleriesService from "../../services/GalleriesService";

export const actions = {
    async createGallery(store, galleryData) {
        await galleriesService.createGallery(galleryData);
    },

    async getGalleries(store) {
        const galleries = await galleriesService.getGalleries({page: 1});
        console.log('vuex', store)
        store.commit('setGalleries', galleries);
    },

    async getGalleryById(store, id) {
        const gallery = await galleriesService.getGallery(id);
        store.commit('setGallery', gallery);
    },

    async getMyGalleries(store) {
        const myGalleries = await galleriesService.getMyGalleries();
        store.commit('setMyGalleries', myGalleries);
    },

    async addMoreGalleries(store) {
        const galleries = await galleriesService.getGalleries({page: store.state.galleries.current_page + 1});
        console.log('vuex', store)
        store.commit('addMoreGalleries', galleries);
    },

    async editGallery(store, id, editedGallery) {
        const gallery = await galleriesService.editGallery(id, editedGallery);
        store.commit('setEditedGallery', gallery);
    },

    deleteGallery(store, id) {
        galleriesService.deleteGallery(id);
    }
}
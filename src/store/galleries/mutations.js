export const mutations = {
    setGalleries(state, galleries) {
        state.galleries = galleries;
    },

    setGallery(state, gallery) {
        state.gallery = gallery;
    },

    setMyGalleries(state, myGalleries) {
        state.myGalleries = myGalleries;
    },

    addMoreGalleries(state, newState) {
        state.galleries = {...state.galleries, ...newState, ...{
            data: state.galleries.data.concat(newState.data)
        }};
    },

    setEditedGallery(state, gallery) {
        state.gallery = gallery;
    }
}
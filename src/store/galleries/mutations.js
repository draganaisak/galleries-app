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

    setAuthorsGalleries(state, authorsGalleries) {
        state.authorsGalleries = authorsGalleries;
    },

    addMoreGalleries(state, newState) {
        state.galleries = {...state.galleries, ...newState, ...{
            data: state.galleries.data.concat(newState.data)
        }};
    }
}
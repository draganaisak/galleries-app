export const getters = {
    galleries: (state) => state.galleries,
    gallery: (state) => state.gallery,
    myGalleries: (state) => state.myGalleries.data,
    authorsGalleries: (state) => state.authorsGalleries.data,
    galleriesData: (state) => state.galleries.data
}
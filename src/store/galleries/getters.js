export const getters = {
    galleries: (state) => state.galleries,
    gallery: (state) => state.gallery,
    myGalleries: (state) => state.myGalleries?.data,
    galleriesData: (state) => state.galleries?.data,
}
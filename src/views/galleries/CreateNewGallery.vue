<template>
    <div class="form-container">
        <form @submit.prevent="onSubmit()">
            <div class="mb-3 form-group">
                <label for="name">Name</label>
                <input
                        type="text"
                        class="form-control"
                        id="name"
                        v-model="galleryData.name">
            </div>
            <div class="mb-3 form-group">
                <label for="description">Description</label>
                <input
                        type="text"
                        class="form-control"
                        id="description"
                        v-model="galleryData.description">
            </div>
            <div class="mb-3 form-row" v-for="(url, index) in galleryData.images" :key="index">
                <label for="imageUrl">Add image URL</label>
                <div>
                    <input
                            type="url"
                            class="form-control"
                            id="imageUrl"
                            v-model="url.url"
                            :name="`galleryData.images[${index}][url]`">
                </div>
                <div v-if="galleryData.images.length > 1">
                    <button type="button" @click="removeUrl(index)">
                        Remove
                    </button>
                    <button type="button" @click="moveUp(index)">
                        Move Up
                    </button>
                    <button type="button" @click="moveDown(index)">
                        Move Down
                    </button>
                </div>
                
            </div>
            <button type="button" @click="addUrl">Add another URL</button>
            <br>
            <button type="submit" class="btn btn-primary">Submit</button>
            <router-link to="/">Cancel</router-link>
        </form>
    </div>

</template>
<script>
    import { mapActions, mapGetters } from 'vuex';
    export default {
        name: "create-new-gallery",
        data() {
            return {
                galleryData: {
                    name: '',
                    description: '',
                    images: [
                        {
                            url: ''
                        }
                    ]
                },
                idFromUrl: this.$route.params.id,
            }
        },
        computed: {
            ...mapGetters('galleries', ['gallery'])
        },
        watch: {
            gallery() {
                if (this.gallery) {
                    this.galleryData = {...this.gallery}
                }
            }
        },
        methods: {
            addUrl() {
                this.galleryData.images.push({
                    url: ''
                })
            },
            removeUrl(index) {
                this.galleryData.images.splice(index, 1);
            },
            moveUp(index) {
                let previousIndex = this.galleryData.images[index - 1]
                this.galleryData.images.splice(index - 1, 1)
                this.galleryData.images.splice(index, 0, previousIndex)

            },
            moveDown(index) {
                let target = this.galleryData.images[index]
                this.galleryData.images.splice(index, 1)
                this.galleryData.images.splice(index + 1, 0, target)
            },
            async onSubmit() {
                if(this.idFromUrl) {
                    try {
                        await this.editGallery({id: this.$route.params.id, editedGallery: this.galleryData});
                        this.$router.push(`/galleries/${this.idFromUrl}`);
                    } catch(e) {
                        console.log(e);
                    }

                } else {
                    try {
                        await this.createGallery(this.galleryData);
                        this.$router.push('/my-galleries');
                    } catch(e) {
                        console.log(e);
                    }
                }

            },
            async populateEditForm() {
                if(this.$route.params.id) {
                    await this.getGalleryById(this.$route.params.id);
                }
            },

            ...mapActions('galleries', ['createGallery', 'getGalleryById', 'editGallery']),
        },
        mounted() {
            this.populateEditForm();
        },
    }
</script>

<style scoped>
    .form-container {
        width: 600px;
        margin: 0 auto;
    }
</style>
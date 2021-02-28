<template>
    <div class="container">
        <h1>{{ gallery.name }}</h1>
        <router-link v-if="gallery.user" :to="`/authors/${gallery.user_id}`">
            {{ gallery.user.first_name }} {{ gallery.user.last_name }}
        </router-link>
        <p>{{ gallery.created_at | formatDate }}</p>
        <p>{{ gallery.description }}</p>
        <div id="images" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item" v-for="(image, index) in gallery.images" :key="index" :class="{ 'active': index === currentItem }">
                    <a :href="image.url" target="_blank">
                        <img :src="image.url" class="d-block w-50" alt="photo">
                    </a>
                </div>
            </div>
            <div v-if="gallery.images.length > 1">
                <a class="carousel-control-prev" role="button" data-slide="prev" @click="prevItem">
                    <span class="carousel-control-prev-icon controls" aria-hidden="true"></span>
                </a>
                <a class="carousel-control-next" role="button" data-slide="next" @click="nextItem">
                    <span class="carousel-control-next-icon controls" aria-hidden="true"></span>
                </a>
            </div>

        </div>
        <div v-if="activeUser && gallery.user_id === activeUser.id">
            <button type="button" @click="deleteThisGallery(gallery.id)">Delete</button>
            <router-link :to="`/edit-gallery/${gallery.id}`">Edit</router-link>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    export default {
        name: 'view-gallery',
        data() {
            return {
                currentItem: 0,
                id: +this.$route.params.id
            }
        },
        computed: {
            ...mapGetters('galleries', ['gallery']),
            ...mapGetters('auth', ['activeUser'])
        },
        methods: {
            nextItem() {
                console.log(this.gallery.images);
                if(this.currentItem < this.gallery.images.length - 1) {
                    this.currentItem += 1;
                } else {
                    this.currentItem === 0;
                }
            },

            prevItem() {
                if(this.currentItem > 0) {
                    this.currentItem -= 1;
                } else {
                    this.currentItem === this.gallery.images.length;
                }
            },

            deleteThisGallery(id) {
                console.log(id);
                try {
                    this.deleteGallery(id);
                    this.$router.push('/my-galleries');
                } catch(e) {
                    console.log('Not deleted');
                }
            },
            ...mapActions('galleries', ['getGalleryById']),
            ...mapActions('galleries', ['deleteGallery']),
            ...mapActions('auth', ['getActiveUser']),
        },
        created() {
            this.getGalleryById(this.id);
            this.getActiveUser();
        },
    }

</script>

<style>
    .carousel-item a > img {
        margin: 0 auto;
    }

    .controls {
        background-color: darkcyan;
        font-size: 20px;
    }
</style>
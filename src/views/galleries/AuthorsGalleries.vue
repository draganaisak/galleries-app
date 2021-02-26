<template>
    <div class="container">
        <div class="card mb-5" v-for="authorsGallery in authorsGalleries" :key="authorsGallery.id">
            <router-link :to="`/galleries/${authorsGallery.id}`">{{ authorsGallery.name }}</router-link>
            <img :src="authorsGallery.images[0].url" alt="photo">
            <p>{{ authorsGallery.user.first_name }} {{ authorsGallery.user.last_name }}</p>
            <p>{{ authorsGallery.created_at | formatDate }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import store from "../../store";
export default {
    name: 'authors-galleries',
    computed: {
        ...mapGetters('galleries', ['authorsGalleries']),
    },
    async created() {
        await store.dispatch('galleries/getAuthorsGalleries');
        console.log(this.authorsGalleries);
    },
}
</script>

<style>
    .container {
        margin: 0 auto;
        flex-wrap: wrap;
    }
    .card {
        box-sizing:border-box;
        width: 50%;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
    }
</style>
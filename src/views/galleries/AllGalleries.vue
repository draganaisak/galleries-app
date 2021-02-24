<template>
    <div class="container">
        <div class="card mb-5" v-for="gallery in galleries" :key="gallery.id">
            <router-link :to="`/galleries/${gallery.id}`">{{ gallery.name }}</router-link>
            <img :src="gallery.images[0].url" alt="photo">
            <router-link :to="`/authors/${gallery.user_id}`">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>
            <p>{{ gallery.created_at | formatDate }}</p>
        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
    import store from '../../store';

    export default {
        name: "all-galleries",
        computed: {
            ...mapGetters('galleries', ['galleries'])
        },
        async created() {
            await store.dispatch('galleries/getGalleries');
            console.log(this.galleries);
        }
    }
</script>

<style scoped>
    .container {
        margin: 0 auto;
        /*display: flex;*/
        flex-wrap: wrap;
    }
    .card {
        flex: 0 40%;
        box-sizing:border-box;
        width: 18rem;
        margin: 0 auto;
    }
    a {
        text-decoration: none;
    }
</style>
<template>
    <div class="container">
        <div class="card mb-5" v-for="myGallery in myGalleries" :key="myGallery.id">
            <router-link :to="`/galleries/${myGallery.id}`">{{ myGallery.name }}</router-link>
            <img :src="myGallery.images[0].url" alt="photo">
            <router-link :to="`/authors/${myGallery.user_id}`">{{ myGallery.user.first_name }} {{ myGallery.user.last_name }}</router-link>
            <p>{{ myGallery.created_at | formatDate }}</p>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    import store from "../../store";

    export default {
        name: "my-galleries",
        computed: {
            ...mapGetters('galleries', ['myGalleries']),
        },
        async created() {
            await store.dispatch('galleries/getMyGalleries');
            console.log(this.galleries);
        },
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
<template>
    <div>
        <div v-for="gallery in galleries" :key="gallery.id">
            <router-link :to="`/galleries/${gallery.id}`">{{ gallery.name }}</router-link>
            <img v-bind:src="`${gallery.images.url}`" alt="photo">
            <router-link :to="`/authors/${gallery.user_id}`">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>
            <p>{{ gallery.created_at}}</p>
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

</style>
<template>
    <div class="card mb-5">
        <router-link :to="`/galleries/${gallery.id}`">{{ gallery.name }}</router-link>
        <img :src="gallery.images[0].url" alt="photo">
        <router-link :to="`/authors/${gallery.user_id}`">{{ gallery.user.first_name }} {{ gallery.user.last_name }}</router-link>
        <p>{{ gallery.created_at | formatDate }}</p>
    </div>
</template>

<script>
    export default {
        name: "gallery",
        props: ['gallery']
    }
</script>

<style scoped>
    .card {
        box-sizing:border-box;
        width: 50%;
        margin: 0 auto;
    }
</style>
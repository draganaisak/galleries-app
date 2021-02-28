<template>
    <div>
        <div v-for="gallery in galleries" :key="gallery.id">
            <gallery :gallery="gallery" />
        </div>
    </div>
</template>

<script>
    import Gallery from "./Gallery";
    export default {
        name: "galleries-list",
        components: {
          Gallery
        },
        props: ['galleries']
    }
</script>

<style scoped>

</style>
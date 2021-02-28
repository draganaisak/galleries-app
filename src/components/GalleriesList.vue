<template>
    <div>
<!--        <div class="mb-10">-->
<!--            <div>-->
<!--                <label for="searchedTerm"></label>-->
<!--                <input type="text" name="searchedTerm" id="searchedTerm"/>-->
<!--            </div>-->
<!--            <button type="button" @click="getGalleriesWithSearchedTerm">Filter</button>-->
<!--        </div>-->
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

<template>
    <div class="container">
        <div v-if="galleriesData">
            <galleries-list :galleries="galleriesData"
            >
            </galleries-list>
            <button v-if="galleries.next_page_url" type="button" @click="loadMore">Load more</button>
        </div>
        <div v-else>
            <p>There are no galleries.</p>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from 'vuex';
    import GalleriesList from "../../components/GalleriesList";

    export default {
        name: "all-galleries",
        components: {
            GalleriesList
        },
        computed: {
            ...mapGetters('galleries', ['galleries', 'galleriesData']),
        },
        methods: {
            async loadMore() {
                await this.addMoreGalleries();
            },
            ...mapActions('galleries', ['getGalleries', 'addMoreGalleries'])
        },
        async created() {
            await this.getGalleries();
        },
    }
</script>

<style scoped>
    .container {
        margin: 0 auto;
        flex-wrap: wrap;
    }
</style>
<template>
    <div class="container">
        <div v-if="myGalleries">
            <galleries-list :galleries="myGalleries"
            >
            </galleries-list>
        </div>
        <div v-else>
            <p>There are no galleries.</p>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapGetters } from "vuex";
    import GalleriesList from "../../components/GalleriesList";

    export default {
        name: "my-galleries",
        components: {
            GalleriesList
        },
        computed: {
            ...mapGetters('galleries', ['myGalleries']),
        },
        methods: {
            ...mapActions('galleries', ['getMyGalleries']),
        },
        async created() {
            this.getMyGalleries();
        },
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
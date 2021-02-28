<template>
    <div class="container">
        <galleries-list :galleries="authorsGalleries"
        >
        </galleries-list>
    </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import GalleriesList from "../../components/GalleriesList";
export default {
    name: 'authors-galleries',
    components: {
        GalleriesList
    },
    computed: {
        ...mapGetters('galleries', ['authorsGalleries']),
    },
    methods: {
        ...mapActions('galleries', ['getAuthorsGalleries']),
    },
    async created() {
        this.getAuthorsGalleries(this.$route.params.id);
    },
}
</script>

<style>
    .container {
        margin: 0 auto;
        flex-wrap: wrap;
    }
</style>
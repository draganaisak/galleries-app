<template>
    <div>
        <h2>Login</h2>
        <form @submit.prevent="onLogin">
            <div class="mb-3 form-field">
                <label for="email">Email</label>
                <input v-model="credentials.email" type="email" name="email" id="email">
            </div>
            <div class="mb-3 form-field">
                <label for="password">Password</label>
                <input v-model="credentials.password" type="password" name="password" id="password">
            </div>
            <button type="submit">Log In</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'login',
    data() {
        return {
            credentials: {
                'email': '',
                'password': ''
            }
        }
    },
    methods: {
        async onLogin() {
            await this.login(this.credentials);
            this.$router.push('/');
        },
        ...mapActions('auth', ['login'])
    },

}
</script>

<style>
    .form-field {
        width: 50%;
        margin: 0 auto;
    }
</style>
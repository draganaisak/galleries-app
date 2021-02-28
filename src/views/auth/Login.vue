<template>
    <div class="form-container">
        <h2>Login</h2>
        <br>
        <form @submit.prevent="onLogin">
            <div class="mb-3 form-group">
                <label for="email">Email</label>
                <input v-model="credentials.email" type="email" name="email" id="email" class="form-control" required>
            </div>
            <div class="mb-3 form-group">
                <label for="password">Password</label>
                <input v-model="credentials.password" type="password" name="password" id="password" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-primary">Log In</button>
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
            try {
                await this.login(this.credentials);
                this.$router.push('/');
            } catch (e) {
                alert("Data is not valid. Please try again.")
            }

        },
        ...mapActions('auth', ['login'])
    },

}
</script>

<style>
    .form-container {
        width: 400px;
        margin: 0 auto;
    }
</style>
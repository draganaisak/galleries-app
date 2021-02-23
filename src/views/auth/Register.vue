<template>
    <div class="form-container">
        <h2>Register</h2>
        <br>
        <form @submit.prevent="onRegister">
            <div class="mb-3 form-group">
                <label for="first_name">First name</label>
                <input v-model="userData.first_name" type="text" name="first_name" id="first_name" class="form-control">
            </div>
            <div class="mb-3 form-group">
                <label for="last_name">Last name</label>
                <input v-model="userData.last_name" type="text" name="last_name" id="last_name" class="form-control">
            </div>
            <div class="mb-3 form-group">
                <label for="email">Email</label>
                <input v-model="userData.email" type="email" name="email" id="email" class="form-control">
            </div>
            <div class="mb-3 form-group">
                <label for="password">Password</label>
                <input v-model="userData.password" type="password" name="password" id="password" class="form-control">
            </div>
            <div class="mb-3 form-group">
                <label for="password_confirmation">Confirm password</label>
                <input v-model="userData.password_confirmation" type="password" name="password_confirmation" id="password_confirmation" class="form-control">
            </div>
            <div class="form-check mb-3 form-group">
                <input class="form-check-input" type="checkbox" value=true id="is_accepted_terms" v-model="userData.is_accepted_terms">
                <label class="form-check-label" for="is_accepted_terms">I accept terms and conditions</label>
                </div>
            <button type="submit" class="btn btn-primary">Register</button>
        </form>
    </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
    name: 'register',
    data() {
        return {
            userData: {
                'first_name': '',
                'last_name': '',
                'email': '',
                'password': '',
                'password_confirmation': '',
                'is_accepted_terms': false
            }
        }
    },
    methods: {
        async onRegister() {
            await this.register(this.userData);
            this.$router.push('/');
        },
        ...mapActions('auth', ['register'])
    }
}
</script>

<style>
    .form-container {
        width: 400px;
        margin: 0 auto;
    }
</style>
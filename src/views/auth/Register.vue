<template>
    <div>
        <form @submit.prevent="onRegister">
            <div>
                <label for="first_name">First name</label>
                <input v-model="userData.first_name" type="text" name="first_name" id="first_name">
            </div>
            <div>
                <label for="last_name">Last name</label>
                <input v-model="userData.last_name" type="text" name="last_name" id="last_name">
            </div>
            <div>
                <label for="email">Email</label>
                <input v-model="userData.email" type="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="userData.password" type="password" name="password" id="password">
            </div>
            <div>
                <label for="password_confirmation">Confirm password</label>
                <input v-model="userData.password_confirmation" type="password" name="password_confirmation" id="password_confirmation">
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value=true id="is_accepted_terms">
                <label class="form-check-label" for="is_accepted_terms">I accept terms and conditions</label>
                </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
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

}
</script>

<style>

</style>
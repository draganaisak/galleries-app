<template>
    <div>
        <form @submit.prevent="onLogin">
            <div>
                <label for="email">Email</label>
                <input v-model="userData.email" type="email" name="email" id="email">
            </div>
            <div>
                <label for="password">Password</label>
                <input v-model="userData.password" type="password" name="password" id="password">
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'login',
    data() {
        return {
            userData: {
                'email': '',
                'password': ''
            }
        }
    }

}
</script>

<style>

</style>
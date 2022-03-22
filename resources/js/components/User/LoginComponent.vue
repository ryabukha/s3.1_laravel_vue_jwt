<template>
<div>
    <div>
        <input v-model="email" class="mb-3 mt-3 form-control" type="email" placeholder="email">
        <input v-model="password" class="mb-3 form-control" type="password" placeholder="password">
        <input @click.prevent="login" class="btn btn-primary" type="submit">
        <div v-if="error" class="text-danger">
            {{error}}
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "LoginComponent",
    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },
    methods: {
        login() {
            axios.post('/api/auth/login', {email: this.email, password: this.password})
            .then(res => {
                localStorage.setItem('access_token', res.data.access_token);
                this.$router.push({name: 'user.personal'})
            })
            .catch(error => {
                this.error = error.response.data.error
            })
        }
    }
}
</script>

<style scoped>

</style>

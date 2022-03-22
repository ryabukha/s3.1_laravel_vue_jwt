<template>
    <div>
        <input v-model="email" class="mb-3 mt-3 form-control" type="email" placeholder="email">
        <input v-model="name" class="mb-3 form-control" type="text" placeholder="name">
        <input v-model="password" class="mb-3 form-control" type="password" placeholder="password">
        <input v-model="password_confirmation" class="mb-3 form-control" type="password" placeholder="confirm password">
        <input class="btn btn-primary" @click.prevent="store" type="submit">
        <div v-if="error" class="text-danger">
            {{error}}
        </div>
    </div>
</template>

<script>
export default {
    name: "RegistrationComponent",

    data() {
        return {
            name: null,
            email: null,
            password: null,
            password_confirmation: null,
            error: null
        }
    },

    mounted() {

    },

    methods: {
        store() {
            axios.post('/api/users', {name: this.name, email: this.email, password: this.password, password_confirmation: this.password_confirmation})
                .then(res => {
                    localStorage.setItem('access_token', res.data.access_token)
                    console.log(res);
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

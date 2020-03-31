<template>
    <ul>
        <li v-for="user in users" :key="user.id">{{user.name}}</li>
    </ul>
</template>
<script>
import users from '../data/users'
export default {
    name: 'UserList',
    data() {
        return {
            users: users
        }
    }
}
</script>
<style>

</style>
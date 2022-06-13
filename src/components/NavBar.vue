<template>
    <div id="nav">
        <router-link to="/">
            <img :src="logo" :alt="alt" id="logo" />
        </router-link>
    </div>
</template>

<script>
export default {
    name : "NavBar",
    props : [logo, alt]
}
</script>

<style>

</style>
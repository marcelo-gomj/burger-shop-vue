<template>
    <NavBar :logo="logo_src" :alt="app_name" />
    <router-view />
    <FooterEnd />
</template>

<script> 
    import NavBar from "../src/components/NavBar.vue";
    import FooterEnd from "../src/components/FooterEnd.vue";
export default {
    components: {
        NavBar,
        FooterEnd
    },
    data(){
        return {
            logo_src: "/img/logo.png",
            app_name : "Make Your Burger" 
        }
    }
}

</script>

<style>
*{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.main-container{
    margin: 50px;
    min-height: 250px;
}

h1{
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
}
</style>

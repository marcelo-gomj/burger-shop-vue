<template>
    <NavBar :logo="logo_src" :alt="app_name" />
    <router-view />
    <Footer />
</template>

<script> 
    import NavBar from "../src/components/NavBar.vue";
    import Footer from "../src/components/Footer.vue";
export default {
    components: {
        NavBar,
        Footer
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
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

main{
    display: flex;
    background-color: rgb(221, 81, 0);
    height: 100vh;
    widows: 100%;
    padding-top: 5%;
    flex-direction: column;
    align-items: center;
}
.container-input{
    width: 60%;
}

input{
    width: 100%;
    height: 2rem;
    background: none;
    border: 2px solid white;
}

input:focus{
    border: none;
}

</style>

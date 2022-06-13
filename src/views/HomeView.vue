<template>
  <div>
    <BannerHome />
    <h1>Monte o seu burger</h1>
    <p>formulários</p>
    <BurgerForm />
  </div>
</template>

<script>
  import BannerHome from '../components/BannerHome.vue';
  import BurgerForm from '../components/BurgerForm.vue';

export default {
  components: {
    BannerHome,
    BurgerForm
  }
}
</script>

<style>

</style>
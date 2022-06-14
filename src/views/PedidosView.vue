<template>
  <div class="main-container">
    <h1>Gerencar pedidos:</h1>
    <request-dashboard />
  </div>
</template>

<script>
  import RequestDashboard from '../components/RequestDashboard.vue';
export default {
  name : "PedidosView",
  components : {
    RequestDashboard
  }
}
</script>

<style>

</style>
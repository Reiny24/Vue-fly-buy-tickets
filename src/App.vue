<template>
  <div>
    <SidebarVue />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from './components/Footer.vue';
import SidebarVue from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Footer,
    SidebarVue
  }
}
</script>

<style>
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    background-color: lightblue;
  }
  #app {
    display: grid;
    height: 100vh;
    grid-template-rows: 1fr;
  }
</style>

<template>
  <div class="home">
      <navbar class="mb-1"></navbar>
      <container-principal class="mt-5"></container-principal>
      <Footer/>

      
  </div>
</template>

<script>
// @ is an alias to /src

import ContainerPrincipal from '../components/ContainerPrincipal.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    ContainerPrincipal,
    Navbar,
    Footer,
  }
}
</script>

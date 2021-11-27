<template>
  <div>
    <b-container>
      <navbar class="mb-1"></navbar>
      <new-producto class="mt-5"></new-producto>
    </b-container>
    <Footer />
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import NewProducto from "../components/NewProductoC.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "NewProduct",

  components: {
    Navbar,
    NewProducto,
    Footer,
  },
};
</script>

<style>
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #f6f6f6;
}

::-webkit-scrollbar-thumb {
  background: #d4b499;
  border-radius: 25px;
}
</style>

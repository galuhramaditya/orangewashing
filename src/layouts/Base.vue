<template>
  <div class="container-fluid">
    <navbar/>
    <slot class="content"/>
    <footerapp/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FooterApp from "@/components/Footer.vue";

export default {
  components: {
    navbar: NavBar,
    footerapp: FooterApp
  }
};
</script>


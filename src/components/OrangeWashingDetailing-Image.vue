<template>
  <img :src="require('@/assets/images/' + image)">
</template>

<script>
export default {
  data() {
    return { image: "jaifv4nk.png" };
  }
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  border-radius: 13% 0;
  clear: both;
  box-shadow: 0 47px 99px 0 #c5c9cb;
}

@media #{$md-min} {
  img {
    width: 90%;
  }
}
</style>
